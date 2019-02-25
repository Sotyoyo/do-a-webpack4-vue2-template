export default {
  state: {
    doing: [],
    did: []
  },
  mutations: {
    updateChecking (state, doing, idx, checkif) {
      state[doing][idx].state = checkif
    },
    ADD_DOING: (state, item) => {
      console.info(`ADD_DOING`)
      console.table(item)
      state.doing.push (item)
    },
    REMOVE_DOING: (state, idx) => {
      console.info(`REMOVE_DOING: ${idx}`)
      state.doing.splice(idx, 1);
    },
    REMOVE_DID: (state, idx) => {
      console.info(`REMOVE_DID: ${idx}`)
      state.did.splice(idx, 1);
    },
    ADD_DID: (state, item) => {
      console.info(`ADD_DID: ${item}`)
    }
  },
  actions: {
    select_doing: ({ commit }, item) => {
      commit('REMOVE_DOING', item);
      commit('ADD_DID', item);
    },
    select_did: ({ commit }, item) => {
      commit('REMOVE_DID', item);
      commit('ADD_DOING', item);
    },
    add_doing: ({ commit }, item) => {
      commit('ADD_DOING', item);
    }
  }
}
