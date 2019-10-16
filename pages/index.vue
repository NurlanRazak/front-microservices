<template>
    <section class="portfolio-section">
        <div class="portfolio-warp">
            <!-- single item -->
            <div v-for="(article, index) in podcasts" :key="index" class="single-portfolio set-bg" :data-setbg="article.image">
                <a href="single-work.html" class="portfolio-info">
                    <div class="pfbg set-bg" :data-setbg="article.image"></div>
                    <h5>{{ article.name }}</h5>
                    <p>{{ article.author }}</p>
                </a>
            </div>
        </div>
        <div class="clearfix"></div>
    </section>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {

    computed: {
        ...mapGetters({
            articles: 'article/getArticles',
            podcasts: 'info/getPodcasts',
        }),
    },
    mounted() {
        console.log(this.articles)
        console.log(this.podcasts)
    }

}

</script>
