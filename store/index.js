export const state = () => ({

})

export const getters = {

}

export const mutations = {

}

export const actions = {

    async nuxtServerInit ({ commit, dispatch }, { req }) {
        let resp = await this.$axios.$get('http://172.20.10.3:8081/article/foo')
        let infresp = await this.$axios.$get('http://172.20.10.3:8081/info/caas')
        commit('article/setArticles', resp)
        commit('info/setPodcasts', infresp)
    }

}
