export const state = () => ({
    'token': null
})

export const mutations = {
    SET_TOKEN(state, payload) {
        state.token = payload
    }
}

export const getters = {
    GET_TOKEN(state) {
        return state.token
    }
}

export const actions = {
    async signin(store, payload) {
        const resp = await this.$axios.post('http://localhost:9100/login', payload)
        store.commit('SET_TOKEN', resp.headers.authorization)
    }
}
