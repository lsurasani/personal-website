<template>
    <div class="container">
        <vs-row vs-justify="center">
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="5">
                <vs-card class="cardx">
                    <div slot="header">
                    <h3>
                        React Router 4
                    </h3>
                    </div>
                    <div slot="media">
                        <img src="">
                    </div>
                    <div>
                        <span>Thinking about migrating to React Router 4? This article describes the process.</span>
                    </div>
                    <div slot="footer">
                        <vs-row vs-justify="flex-end">
                            <vs-button href="https://medium.com/@lesurasani/a-guide-to-upgrading-to-react-router-4-bc064f3cbdb9" target="_blank" color="rgb(44,62,80)" text-color="rgb(255,255,255)" icon="open_in_new"></vs-button>
                        </vs-row>
                    </div>
                </vs-card>
            </vs-col>
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="1" />
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="5">
                <vs-card class="cardx">
                    <div slot="header">
                    <h3>
                        Introduction to React Hooks
                    </h3>
                    </div>
                    <div slot="media">
                        <img src="">
                    </div>
                    <div>
                        <span>A Quick Introduction to React Hooks and how to use them.</span>
                    </div>
                    <div slot="footer">
                        <vs-row vs-justify="flex-end">
                            <vs-button href="https://medium.com/@lesurasani/a-guide-to-upgrading-to-react-router-4-bc064f3cbdb9" target="_blank" color="rgb(44,62,80)" text-color="rgb(255,255,255)" icon="open_in_new"></vs-button>
                        </vs-row>
                    </div>
                </vs-card>
            </vs-col>
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="5">
                <vs-card class="cardx">
                    <div slot="header">
                    <h3>
                        Why New Developers Should Work at Small Startups
                    </h3>
                    </div>
                    <div slot="media">
                        <img src="">
                    </div>
                    <div>
                        <span>I spent my first year of my career working at a small startup and gained a lot from it! Here's my case for why you should try it, too!</span>
                    </div>
                    <div slot="footer">
                        <vs-row vs-justify="flex-end">
                            <vs-button href="https://medium.com/@lesurasani/a-guide-to-upgrading-to-react-router-4-bc064f3cbdb9" target="_blank" color="rgb(44,62,80)" text-color="rgb(255,255,255)" icon="open_in_new"></vs-button>
                        </vs-row>
                    </div>
                </vs-card>
            </vs-col>
        </vs-row>
    </div>
</template>


<script>
    export default {
        name: 'Writing',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
.container {
    width: 750px;
    margin: 0 auto;
}

.cardx {
    margin: 15px;
}
</style>