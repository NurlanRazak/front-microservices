export const state = () => ({
    articles: []
})

export const getters = {
    getArticles(state) {
        return state.articles
    }
}

export const mutations = {
    setArticles(state, payload) {
        state.articles = payload
    }

}
