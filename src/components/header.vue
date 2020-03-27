<template>
    <div class="flex-wrap header">
        <div class="flex logo" @click='jumpTo("")'>滔滔江水</div>
        <div class="flex-wrap menu">
            <div
                v-for='(item, index) in menu'
                :key='index'
                @click="changeTab(item)"
                :class='["menu-item", current == item.key && "menu-active"]'
            >
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current: 'index',
            menu: [
                {
                    key: 'index',
                    name: '首页',
                    path: '/'
                },
                {
                    key: 'blog',
                    name: '博客',
                    path: '/blog'
                },
                {
                    key: 'demo',
                    name: 'Demo',
                    path: '/demo'
                },
                {
                    key: 'about',
                    name: '关于',
                    path: '/about'
                }
            ]
        }
    },
    methods: {
        changeTab(item) {
            this.current = item.key;
            this.$router.push(`${item.path}`)
        },
        jumpTo(val) {
            this.$router.push(`/${val}`)
        }
    }
}
</script>

<style lang="less">
.header {
    height: 60px;
    align-items: center;
    background-color: #fff;
    white-space: nowrap;
    border-bottom: 2px solid #f8f8f8;
}

.logo {
    font-size: 26px;
    margin-left: 60px;
    color: #3894FF;
    font-weight: 500;
    cursor: pointer;
}

.menu {
    height: 100%;
}

.menu-item {
    height: 100%;
    line-height: 60px;
    margin-right: 60px;
    font-size: 16px;
    align-items: center;
    color: #333;
    cursor: pointer;
    box-sizing: border-box;
}

.menu-active {
    color: #3894FF;
    font-weight: 700;
    border-bottom: 4px solid #3894FF;
}
</style>