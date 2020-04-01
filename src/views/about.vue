<template>
    <div class="about">
        <div class="avatar">
            <img class='user-img' src="../assets/hht.jpeg" alt="">
        </div>
        <h3 class="user-name">胡宏涛</h3>

        <div class="flex-wrap links">
            <div class="link-item">
                <a href="https://github.com/smilehht">
                    <svg height="32" class="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                </a>
            </div>
            <div class="link-item">
                <a href="mailto:956184070@qq.com">
                    <svg t="1585704071797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12309" width="36" height="36"><path d="M512.268258 64.430032c-247.183323 0-447.569968 200.384597-447.569968 447.57304 0 247.1823 200.385621 447.56792 447.569968 447.56792s447.569968-200.385621 447.569968-447.56792c0-247.189467-200.386645-447.57304-447.569968-447.57304z m250.63996 279.572912L513.037196 588.684915l-252.244389-244.681971h502.115411z m-519.180508 35.60766l139.605741 133.484953-139.605741 130.956981V379.610604z m17.561682 300.386452L409.779385 534.941175l102.685459 98.191626 101.170109-98.191626 150.007391 145.055881H261.289392z m519.519413-35.944518L637.395236 512.731054l143.413569-135.081191v266.402675z" fill="#708A97" p-id="12310"></path></svg>
                </a>
            </div>

            <div class="link-item">
                <a href="https://smilehht.github.io/">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32" height="32" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path fill="#0E83CD" d="M256.4,25.8l-200,115.5L56,371.5l199.6,114.7l200-115.5l0.4-230.2L256.4,25.8z M349,354.6l-18.4,10.7 l-18.6-11V275H200v79.6l-18.4,10.7l-18.6-11v-197l18.5-10.6l18.5,10.8V237h112v-79.6l18.5-10.6l18.5,10.8V354.6z"/></svg>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="less">
.about {
    padding: 20px;
    text-align: center;

    .avatar {
        width: 100px;
        height: 100px;
        margin: auto;
        border-radius: 50%;
        overflow: hidden;
    }

    .user-img {
        width: 100%;
        height: 100%;
    }

    .user-name {
        margin-top: 20px;
    }

    .links {
        margin-top: 20px;
        justify-content: center;
    }

    .link-item {
        width: 30px;
        height: 30px;
        margin-right: 20px;
        cursor: pointer;
    }
}
</style>