<template>
    <section class="sec">
        <form class="post-form" action="test" @submit.prevent="createPost">
            <div>
                <label for="title">Name: </label>
                <input type="text" id="title" v-model="post.name" name="title" required/>
            </div>
            <div>
                <label for="img">Video: </label>
                <input type="text" id="img" v-model="post.link" name="img" required/>
            </div>
            <div>
                <label for="text">Description: </label>
                <input type="text" id="text" v-model="post.description" name="text" required/>
            </div>
            <div class="button-wrp">
                <button type="submit">Submit</button>
            </div>
        </form>
        <auth></auth>
    </section>
</template>

<script>

import auth from '~/components/auth.vue'

export default {
    components: {auth},
    data() {
        return {
            post: {}
        }
    },
    methods: {
    async createPost() {
            let resp = await this.$axios.post('http://172.16.3.205:8085/api/catalog/podcast/add', this.post)
            window.location.href='/podcast'
        }
    }
}
</script>

<style>
    .sec {
        /* background-image: url('/imgs/bg.png'); */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
