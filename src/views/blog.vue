<template>
    <div class="flex-wrap blog">
        <div class="left">
            <div class="list">
                <div
                    v-for='(item, index) in list'
                    :key='index'
                    class="list-item"
                >
                    {{item.title}}
                </div>
            </div>
        </div>
        <div class="flex right">{{content}}</div>
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
    padding: 20px 40px;
    .left {
        min-width: 300px;
    }

    .list-item {
        height: 40px;
        cursor: pointer;
    }

    .list-item:hover {
        color: #3894FF;
    }
}
</style>