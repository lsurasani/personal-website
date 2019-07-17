<template>
    <div class="container">
        <h1>Blog Post Sample</h1>
        <h2>Another Title</h2>
    </div>
</template>


<script>
    export default {
        name: 'Post',
        props: {
            blog: Object
        }
    }
</script>

<style scoped>
.container {
    width: 750px;
    margin: 0 auto;
}
</style>