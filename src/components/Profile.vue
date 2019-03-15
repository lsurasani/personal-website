<template>
    <div class="container">
        <vs-row>
            <vs-col vs-type="block" vs-justify="center" vs-align="center" vs-w="6">
                <img alt="picture" src="./../assets/github_profile.png" width="90%">
                <h1>Lekha Surasani</h1>
            </vs-col>
            <vs-col class="description-block" vs-type="block" vs-justify="center" vs-align="center" vs-w="6">
                <div class="description">
                    <p>
                        Hi! I'm a software engineer at DocuTAP. I'm interested in web technologies, startups, and promoting diversity and inclusion in tech.
                    </p>
                    <br>
                    <p>
                        In my spare time, I like <a href="https://medium.com/@lesurasani" target="_blank">writing</a>,
                        <a href="https://www.goodreads.com/user/show/64315226-lekha-surasani" target="_blank">reading</a>,
                        speaking, and watching TV. I have a two year old cat named Violet, and I love exploring Atlanta.
                    </p>
                    <br>
                    <p>
                        I recently graduated from Georgia Tech, where I majored in Computer Science with a minor in Economics.
                        I was previously Director of Operations and Director of Finance of <a href="https://hack.gt" target="_blank">HackGT</a>.
                    </p>
                </div>
            </vs-col>
        </vs-row>
    </div>
</template>


<script>
    export default {
        name: 'Profile',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
img {
    border-radius: 100%;
    max-width: 275px;
}

.container {
    width: 750px;
    margin: 0 auto;
}

.description-block {
    margin: auto 0;
}

.description {
    width: 90%;
    margin: 0 auto;
}

.description > p {
    text-align: left;
}
</style>