<template>
    <div v-if="isRequested" >
        <template v-if="list.length">
            <div class="flex-wrap blog">
                <div class="blog-left">
                    <button class="blog-add" @click="toAdd('/add')">写博客</button>
                    <div class="blog-list">
                        <div
                            v-for='(item, index) in list'
                            :key='index'
                            :class='["list-item", current == item.id && "item-active"]'
                            @click="jumpTo(`${item.id}`)"
                        >
                            {{item.title}}
                        </div>
                    </div>
                </div>
                <div class="flex blog-right" v-html="content"></div>
            </div>
        </template>
        <template v-else>
            <div class="no-content">
                <div class="no-title">暂无内容</div>
                <button class="blog-add" @click="toAdd('/add')">写博客</button>
            </div>
        </template>
    </div>
    <div v-else class='loadding'>加载中...</div>
</template>

<script>
import {
    getBlogList,
    getBLogDetail
} from '@/api/blog.js'
export default {
    data() {
        return {
            list: [],
            content: '',
            current: '',
            isRequested: false
        }
    },
    mounted() {
        let {id = ''} = this.$route.query;
        this.getBlogList();
        if (id) {
            this.current = id;
            this.getBLogDetail();
        }
    },
    methods: {
        toAdd(val) {
            if (!val) {
                return;
            }
            this.$router.push(`${val}`)
        },
        jumpTo(id) {
            if (!id) {
                return;
            }
            this.current = id;
            this.$router.push({
                path: '/blog',
                query: { id }
            });
            this.getBLogDetail();
        },
        async getBlogList() {
            let {
                code,
                data
            } = await getBlogList();
            this.isRequested = true;
            if (code) {
                return;
            }
            this.list = data;

            if (!this.current && data.length) {
                let id = this.current = data[0].id;
                this.$router.push({
                    path: '/blog',
                    query: { id }
                });

                this.getBLogDetail();
            }
        },
        async getBLogDetail() {

            if (!this.current) {
                return;
            }

            let {
                data = {}
            } = await getBLogDetail({
                id: this.current
            });
            this.content = data.content.html;
        }
    }
}

</script>

<style lang="less">
.blog {
    flex: 1;
    padding: 20px 40px 10px;
    
    .blog-left {
        min-width: 300px;
        overflow-y: scroll;
    }

    .list-item {
        height: 40px;
        line-height: 40px;
        cursor: pointer;
    }

    .list-item:hover {
        color: #3894FF;
    }

    .item-active {
        color: #3894FF;
    }
}

.no-content {
    padding: 20px;
    text-align: center;

    .no-title {
        padding-bottom: 20px;
    }
}

.blog-add {
    // width: 0px;
    height: 30px;
    color: #fff;
    padding: 0 8px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #3894FF;
}

.loadding {
    text-align: center;
    padding: 30px;
}
</style>