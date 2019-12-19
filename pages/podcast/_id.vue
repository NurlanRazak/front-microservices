<template>
    <!-- Blogs section start -->
    <section class="single-work-section sp-pad spad">
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-xl-6 offset-xl-1">
                    <span class="sp-sub-title">Amazing studio</span>
                    <h3 class="sp-title">{{ article.name }}</h3>
                    <p>{{ article.description }}</p>
                </div>
            </div>
            <div class="row">
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                  :src="`http://www.youtube.com/embed/${article.link}?autoplay=1&origin=http://example.com`"
                  frameborder="0"/>
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
            articles: 'info/getPodcasts',
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
