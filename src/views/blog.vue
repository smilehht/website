<template>
    <div class="flex-wrap blog">
        <div class="blog-left">
            <button class="blog-add" @click="jumpTo('add')">写博客</button>
            <div class="blog-list">
                <div
                    v-for='(item, index) in list'
                    :key='index'
                    class="list-item"
                >
                    {{item.title}}
                </div>
            </div>
        </div>
        <div class="flex blog-right">{{content}}</div>
    </div>
</template>

<script>
import {
    getBlog
} from '@/api/blog.js'
export default {
    data() {
        return {
            list: [],
            content: ''
        }
    },
    mounted() {
        this.getBlog();
    },
    methods: {
        jumpTo(val) {
            if (!val) {
                return;
            }
            this.$router.push(`/${val}`)
        },
        async getBlog() {
            let {
                code,
                data
            } = await getBlog();
            if (code) {
                return;
            }

            this.list = data;
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

    .blog-add {
        // width: 0px;
        height: 30px;
        color: #fff;
        padding: 0 8px;
        border-radius: 4px;
        cursor: pointer;
        background-color: #3894FF;
    }

    .list-item {
        height: 40px;
        line-height: 40px;
        cursor: pointer;
    }

    .list-item:hover {
        color: #3894FF;
    }
}
</style>