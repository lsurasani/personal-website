<template>
    <div class="container">
        <vs-row vs-justify="center">
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="5">
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
                            <vs-button href="https://docs.google.com/presentation/d/1sae6auAGUVhg64KLwyl9J1cUoiqhbO0MP6UXED49flk/edit?usp=sharing" target="_blank" color="rgb(44,62,80)" text-color="rgb(255,255,255)" icon="open_in_new"></vs-button>
                        </vs-row>
                    </div>
                </vs-card>
            </vs-col>
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="1" />
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="5">
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
                        <vs-button href="https://docs.google.com/presentation/d/171XaOrC2a2HkBcbMtNgMgV6CKrsxjLSKDRJRh24QxEQ/edit?usp=sharing" target="_blank" color="rgb(44,62,80)" text-color="rgb(255,255,255)" icon="open_in_new"></vs-button>
                    </vs-row>
                    </div>
                </vs-card>
            </vs-col>
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="5">
                <vs-card class="cardx">
                    <div slot="header">
                    <h3>
                        Advanced Topics in React - WeRockITConf, May 2019
                    </h3>
                    </div>
                    <div slot="media">
                    <img src="">
                    </div>
                    <div>
                    <span>Learn more about Hooks, Suspense, Context, and HOC's!</span>
                    </div>
                    <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button href="https://stackblitz.com/@lsurasani" target="_blank" color="rgb(44,62,80)" icon="code"></vs-button>
                        <vs-button href="https://docs.google.com/presentation/d/1B4oHPEU9Wm3S9DPCgnPjAuMbDSl0bPGPyahwaBbNuyM/edit?usp=sharing" target="_blank" color="rgb(44,62,80)" text-color="rgb(255,255,255)" icon="open_in_new"></vs-button>
                    </vs-row>
                    </div>
                </vs-card>
            </vs-col>
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="1" />
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="5">
                <vs-card class="cardx">
                    <div slot="header">
                    <h3>
                        Creating a PWA Workshop - WeRockITConf, May 2019
                    </h3>
                    </div>
                    <div slot="media">
                    <img src="">
                    </div>
                    <div>
                    <span>What's a PWA, how do you make one, should you make one?</span>
                    </div>
                    <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button href="" target="_blank" color="rgb(44,62,80)" icon="code"></vs-button>
                        <vs-button href="https://docs.google.com/presentation/d/1qjkEgEp9Upbdw-Q5tTLCmum4rmruoAW7Q5f63kSA__o/edit?usp=sharing" target="_blank" color="rgb(44,62,80)" text-color="rgb(255,255,255)" icon="open_in_new"></vs-button>
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