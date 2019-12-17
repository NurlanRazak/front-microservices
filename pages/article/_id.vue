<template>
    <!-- Blogs section start -->
    <section class="single-work-section sp-pad spad">
        <div class="container-fluid p-0">
            <div class="work-slider owl-carousel">
                <div class="ws-item set-bg" :data-setbg="article.img"></div>
            </div>
            <div class="row">
                <div class="col-xl-6 offset-xl-1">
                    <span class="sp-sub-title">Amazing studio</span>
                    <h3 class="sp-title">{{ article.title }}</h3>
                    <p>{{ article.text }}</p>
                </div>
            </div>
        </div>
    </section>
    <!-- Blogs section end -->
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            articles: 'article/getArticles',
            podcasts: 'info/getPodcasts',
        }),
        article: function() {
            return this.articles[this.$route.params.id]
        }
    },
    mounted() {
        console.log(this.article)
    }
}
</script>
