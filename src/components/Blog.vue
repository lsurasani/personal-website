<template>
    <div class="container" v-if='loaded'>
        <BlogPost
            v-for="blog in blogPosts"
            v-bind:key="blog.index"
            post='post'
        />
    </div>
</template>


<script>
    import BlogPost from './BlogPost';

    export default {
        name: 'Blog',
        components: {
            BlogPost,
        },
        data:()=>({
            blogPosts: null,
            loaded: false,
        }),
        methods: {
            fetchData() {
                this.blogPosts = null;
            }
        }
    }
</script>

<style scoped>
.container {
    width: 750px;
    margin: 0 auto;
}
</style>