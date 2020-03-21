<template>
    <div id="app" class='flex-wrap page'>
        <div class="header">
            <Header></Header>
        </div>
        <router-view></router-view>
        <div class="bottom">
            <Footer />
        </div>
    </div>
</template>

<script>
    import Header from './components/header.vue'
    import Footer from './components/footer.vue'

    export default {
        name: 'App',
        components: {
            Header,
            Footer
        }
    }
</script>

<style lang='less'>
.page {
    // width: 1190px;
    height: 100%;
    margin: auto;
    flex-direction: column;
    box-shadow: 0 0 30px 0 rgba(0,0,0,.1);
}

.body {
    flex: 1;
    // margin-top: 10px;
    background-color: #fff;
}
</style>