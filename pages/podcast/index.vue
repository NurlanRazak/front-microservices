<template>
    <section class="portfolio-section">
        <a class="linkk" href="/">Posts</a>
        <div class="portfolio-warp">
            <!-- single item -->
            <div v-for="(article, index) in articles" :key="index" class="single-portfolio set-bg" :data-setbg="`https://img.youtube.com/vi/${article.link}/default.jpg`">
                <nuxt-link :to="'/podcast/' + index" class="portfolio-info">
                    <div class="pfbg set-bg" :data-setbg="`https://img.youtube.com/vi/${article.link}/default.jpg`"></div>
                    <h5>{{ article.name }}</h5>
                    <p>{{ article.description }}</p>
                </nuxt-link>
            </div>
        </div>
        <div class="clearfix"></div>
        <nuxt-link to="/podcast/create" class="add-post">
            <div>
                +
            </div>
        </nuxt-link>
    </section>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {

    computed: {
        ...mapGetters({
            articles: 'info/getPodcasts',
        }),
    },
    mounted() {
        console.log(this.articles)
        console.log(this.podcasts)
    }

}

</script>

<style>

    .add-post {
        width: 80px;
        height: 80px;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        border: 5px solid white;
        position: fixed;
        bottom: 25px;
        right: 25px;
        font-size: 50px;
        font-weight: bolder;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
        color: white;
        transition: 0.5s;
    }
    .add-post:hover {
        color: #0056b3;
        border-color: #0056b3;
        cursor: pointer;
    }
    .add-post div {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

</style>
