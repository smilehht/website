<template>
    <div class="flex-wrap home">
        <div class="flex-wrap flex home-left">
            <div class="home-content">
                <h2>滔滔江水的博客</h2>
                <div class="home-intro">
                    <div>欢迎来访 ~ ~ ~</div>
                    <div>该站点用于日常的博客整理和demo展示，欢迎交流学习</div>
                </div>
                <div class="flex-wrap home-btns">
                    <div class="home-btn home-blogs" @click='jumpTo("blog")' >博客</div>
                    <div class="home-btn home-demo" @click='jumpTo("demo")' >Demo</div>
                </div>
            </div>
        </div>
        <div class="flex-wrap flex home-right">
            <div class="home-content">
                <img class='home-img' src="../assets/home.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        jumpTo(val) {
            this.$router.push(`/${val}`)
        }
    }
}
</script>


<style lang="less">
.home {
    flex: 1;
}

.home-left, .home-right {
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

// .right {
//     justify-content: center;
// }

.home-content {
    min-width: 400px;
}

.home-intro {
    padding: 40px 0;
    color: #999;
    line-height: 30px;
}

.home-img {
    width: 500px;
    height: 80%;
}

.home-btn {
    width: 122px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    border-radius: 24px;
    cursor: pointer;
}

.home-blogs {
    color: #fff;
    background-color: #3894FF;
}

.home-demo {
    margin-left: 30px;
    color: #3894FF;
    border: 2px solid #3894FF;
}
</style>