export const state = () => ({

})

export const getters = {

}

export const mutations = {

}

export const actions = {

    async nuxtServerInit ({ commit, dispatch }, { req }) {
        let resp = await this.$axios.$get('http://localhost:8085/api/catalog/post/all')
        // let infresp = await this.$axios.$get('http://localhost:8085/api/catalog/user/all')
        let podresp = await this.$axios.$get('http://localhost:8085/api/catalog/podcast/all')
        commit('article/setArticles', resp)
        // commit('info/setPodcasts', infresp)
        commit('info/setPodcasts', podresp)
    }

}
