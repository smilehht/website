<template>
    <div class="flex-wrap home">
        <div class="flex-wrap flex left">
            <div class="content">
                <h2>滔滔江水的博客</h2>
                <div class="intro">
                    <div>欢迎来访 ~ ~ ~</div>
                    <div>该站点用于日常的博客整理和demo展示，欢迎交流学习</div>
                </div>
                <div class="flex-wrap btns">
                    <div class="home-btn blogs">博客</div>
                    <div class="home-btn demo">Demo</div>
                </div>
            </div>
        </div>
        <div class="flex-wrap flex right">
            <div class="content">
                <img class='home-img' src="../assets/home.png" alt="">
            </div>
        </div>
    </div>
</template>



<style lang="less">
.home {
    flex: 1;
}

.left, .right {
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

// .right {
//     justify-content: center;
// }

.content {
    min-width: 400px;
}

.intro {
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

.blogs {
    color: #fff;
    background-color: #3894FF;
}

.demo {
    margin-left: 30px;
    color: #3894FF;
    border: 2px solid #3894FF;
}
</style>