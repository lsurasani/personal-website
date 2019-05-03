<template>
    <div class="container">
        <vs-row vs-justify="center">
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-card class="cardx">
                    <div slot="header">
                    <h3>
                        React Hooks
                    </h3>
                    </div>
                    <div slot="media">
                        <img src="">
                    </div>
                    <div>
                        <span>Let's get hooked!<br>In this talk, I introduce the group to React Hooks with some examples.</span>
                    </div>
                    <div slot="footer">
                        <vs-row vs-justify="flex-end">
                            <vs-button href="https://github.com/lsurasani/react-hooks-examples" target="_blank" color="rgb(44,62,80)" icon="code"></vs-button>
                            <vs-button href="https://www.meetup.com/React-ATL/events/259705192/" target="_blank" color="rgb(44,62,80)" text-color="rgb(255,255,255)" icon="open_in_new"></vs-button>
                        </vs-row>
                    </div>
                </vs-card>
            </vs-col>
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-card class="cardx">
                    <div slot="header">
                    <h3>
                        All About PWAs
                    </h3>
                    </div>
                    <div slot="media">
                    <img src="">
                    </div>
                    <div>
                    <span>Learn more about what a PWA is and how to make one.
                        We’ll talk about some of the disadvantages of using a PWA, and whether using a PWA is right for you.</span>
                    </div>
                    <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button href="https://github.com/lsurasani/pwa-example" target="_blank" color="rgb(44,62,80)" icon="code"></vs-button>
                        <vs-button href="https://www.meetup.com/gdg-atlanta/events/cbwcpqyzfbkc/" target="_blank" color="rgb(44,62,80)" text-color="rgb(255,255,255)" icon="open_in_new"></vs-button>
                    </vs-row>
                    </div>
                </vs-card>
            </vs-col>
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-card class="cardx">
                    <div slot="header">
                    <h3>
                        Create a PWA - WeRockITConf, May 2019
                    </h3>
                    </div>
                    <div slot="media">
                    <img src="">
                    </div>
                    <div>
                    <span>Learn more about what a PWA is and how to make one.
                        We’ll talk about some of the disadvantages of using a PWA, and whether using a PWA is right for you.</span>
                    </div>
                    <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button href="https://stackblitz.com/@lsurasani" target="_blank" color="rgb(44,62,80)" icon="code"></vs-button>
                        <vs-button href="https://docs.google.com/presentation/d/1B4oHPEU9Wm3S9DPCgnPjAuMbDSl0bPGPyahwaBbNuyM/edit?usp=sharing" target="_blank" color="rgb(44,62,80)" text-color="rgb(255,255,255)" icon="open_in_new"></vs-button>
                    </vs-row>
                    </div>
                </vs-card>
            </vs-col>
        </vs-row>
    </div>
</template>


<script>
    export default {
        name: 'Speaking',
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