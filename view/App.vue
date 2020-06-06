<template>
    <div id="app" class='flex-wrap page'>
        <div class="header">
            <Header></Header>
        </div>
        <div class="body">
            <router-view></router-view>
        </div>
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
    min-width: 1190px;
    min-height: 100%;
    margin: auto;
    flex-direction: column;
    box-shadow: 0 0 30px 0 rgba(0,0,0,.1);
}

.body {
    position: relative;
    flex: 1;
    // margin-top: 10px;
    background-color: #fff;
}
</style>