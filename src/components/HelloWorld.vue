<template>
    <div class="hello">
        <Markdown
            :autoSave='true'
            :interval='5000'
            @on-save="handleOnSave"
        ></Markdown>
    </div>
</template>

<script>
    import Markdown from "vue-meditor";
    export default {
        name: "HelloWorld",
        props: {
            msg: String
        },
        components: {
            Markdown: Markdown
        },
        methods: {
            handleOnSave(value) {
                console.log('===');
                console.log(value)
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>