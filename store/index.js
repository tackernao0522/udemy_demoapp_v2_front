const homePath = 'projects'

// 変数
export const state = () => ({
  styles: {
    homeAppBarHeight: 56
  },
  loggedIn: {
    homePath: {
      name: homePath
    }
  },
  project: {
    current: null,
    list: [
      { id: 1, name: 'MyProject01', updatedAt: '2020-04-01T12:00:00+09:00' },
      { id: 2, name: 'MyProject02MyProject02MyProject02MyProject02', updatedAt: '2020-04-05T12:00:00+09:00' },
      { id: 3, name: 'MyProject03', updatedAt: '2020-04-03T12:00:00+09:00' },
      { id: 4, name: 'MyProject04', updatedAt: '2020-04-04T12:00:00+09:00' },
      { id: 5, name: 'MyProject05', updatedAt: '2020-04-01T12:00:00+09:00' }
    ]
  }
})

// 算出プロパティ
export const getters = {}

// stateの値を変更する場所
export const mutations = {
  setCurrentProject (state, payload) {
    state.project.current = payload
  }
}

// メソッド
export const actions = {
  // { state, getters, commit, dispatch, rootState, rootGetters } この6つの値が取得できる
  // rootState => ルート(store/index.js)のstateを取得(rootState = state)
  getCurrentProject({ state, commit }, params) {
    const id = Number(params.id)
    const currentProject = state.project.list.find(project => project.id === id) || null
    commit('setCurrentProject', currentProject)
  }
}
