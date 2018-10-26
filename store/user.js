import { SET_USER, SET_USER_LIST } from './mutation-types'

export const state = () => ({
  userInfo: {},
  userList: []
})

export const mutations = {
  [SET_USER]: (state, data) => {
    state.userInfo = data
  },

  [SET_USER_LIST]: (state, data) => {
    state.userList = data
  }
}

// getters
export const getters = {
  userList: state => state.userList
}

export const actions = {
  async getUser({ commit }) {
    const { data } = await this.$axios.get('mock')
    let users = data.data.projects
    const user = users[0]
    commit(SET_USER, user)
  },

  async getUserList({ commit }) {
    const { data } = await this.$axios.get('mock')
    let users = data.data.projects
    commit(SET_USER_LIST, users)
  }
}
