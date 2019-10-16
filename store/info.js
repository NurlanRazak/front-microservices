export const state = () => ({
    podcasts: []
})

export const getters = {
    getPodcasts(state) {
        return state.podcasts
    }
}

export const mutations = {
    setPodcasts(state, payload) {
        state.podcasts = payload
    }

}
