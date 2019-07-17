<template>
    <div id="app">
        <vs-tabs vs-alignment="center" color="#3A7595">
            <vs-tab vs-label="Home" vs-icon="home">
                <Profile />
            </vs-tab>
            <vs-tab vs-label="Speaking">
                <Speaking />
            </vs-tab>
            <vs-tab vs-label="Writing">
                <Writing />
            </vs-tab>
            <vs-tab vs-label="Resume">
                <Resume />
            </vs-tab>
            <vs-tab vs-label="Blog">
                <Blog />
            </vs-tab>
        </vs-tabs>
        <div class="footer">
            <a href="https://github.com/lsurasani" target="_blank"><img src="./assets/github_blue_logo.png" alt="Github" height="30"></a>
            <a href="https://www.linkedin.com/in/lekha-surasani/" target="_blank"><img src="./assets/linkedin_blue_logo.png" alt="Linkedin" height="30"></a>
            <a href="https://twitter.com/Surasanosaur" target="_blank"><img src="./assets/twitter_blue_logo.png" alt="Twitter" height="30"></a>
            <a href="mailto:lesurasani@gmail.com" target="_blank"><img src="./assets/mail_blue_logo.png" alt="Email" height="30"></a>
        </div>
    </div>
    
</template>

<script>
import Profile from './components/Profile.vue'
import Speaking from './components/Speaking.vue'
import Writing from './components/Writing.vue'
import Resume from './components/Resume.vue'
import Blog from './components/Blog.vue'

export default {
  name: 'app',
  components: {
    Profile,
    Speaking,
    Writing,
    Resume,
    Blog,
  },
  props: {

  },
  data:()=>({
    active:false,
  }),
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
    }

    button {
        font-size: 24px;
    }

    span {
        font-family: 'Avenir', Helvetica, Arial, sans-serif
    }
    
    .con-slot-tabs {
        margin-top: 50px;
        height: calc(100% - 100px);
    }

    .vs-tabs {
        height: calc(100% - 75px);
    }

    .vs-tabs--li {
        padding: 0 15px;
    }

    .vs-tabs--content {
        height: 100%;
    }

    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50px;
    }

    .footer > a {
        padding: 0 10px;
    }

    @media(max-width: 600px) {
        .vs-tabs--li {
            padding: 0;
        }

        button {
            font-size: 21px;
        }
    }
      
</style>
