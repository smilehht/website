<template>
    <div class="add">
        <div class="flex-wrap input-wrap">
            <div class="input-item">
                <label for="title">标题：</label>
                <input v-model="params.title" class="input" type="text">
            </div>
            <div class="input-item">
                <label for="title">标签：</label>
                <input v-model="params.tag" class="input" type="text">
            </div>
            <div class="input-item">
                <label for="title">提交码：</label>
                <input v-model="params.code" class="input" type="text">
            </div>
            <div
                class="input-item btn"
                @click="submit"
            >提交</div>
        </div>
        <div class="markdown">
            <Markdown
                :autoSave='true'
                :interval='5000'
                @on-save="onSave"
            ></Markdown>
        </div>
    </div>
</template>

<script>
import {
    addBlog
} from '@/api/blog.js'
import Markdown from "vue-meditor";
export default {
    name: "add",
    data() {
        return {
            params: {
                title: '',
                tag: '',
                code: '',
                content: ''
            }
        }
    },
    props: {
        msg: String
    },
    components: {
        Markdown: Markdown
    },
    methods: {
        async submit() {
            let {code, msg} = await addBlog(this.params);
            if (code) {
                alert(msg);
                return;
            }
            this.$router.push(`/blog`)
        },
        onSave(value) {
            this.params.content = value;
        }
    }
};
</script>

<style lang='less' scoped>
.add {
    padding-top: 20px;
    padding-bottom: 20px;
    
    .input-wrap {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
    }

    .input-item {
        margin-right: 20px;
        margin-bottom: 20px;
    }

    .input {
        width: 200px;
        height: 24px;
        font-size: 14px;
        border-radius: 4px;
        border: 1px solid #ddd;
    }

    .btn {
        // width: 50px;
        height: 20px;
        line-height: 20px;
        padding: 3px 10px;
        border-radius: 4px;;
        color: #fff;
        cursor: pointer;
        background-color: #3894FF;
    }

}
</style>