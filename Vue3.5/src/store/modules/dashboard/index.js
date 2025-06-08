/**
 * Dashboard Stats Module
 */

import { endpoints, JufrahAdminAPI } from '@/WebServices'
import Nprogress from 'nprogress'
import { notify as VueNotify } from '@kyvg/vue3-notification'

const mostViewedBoilerplate = [
  {
    id: 1,
    images: [{ src: 'https://placehold.co/150' }],
  },
  {
    id: 2,
    images: [{ src: 'https://placehold.co/150' }],
  },
]

const mostActiveUsersBoilerplate = [
  {
    id: 1,
    photo: 'https://placehold.co/150',
  },
  {
    id: 2,
    photo: 'https://placehold.co/150',
  },
]

const state = {
  stats: {
    ads: {
      count: {
        total: 0,
        free: 0,
        last_month: 0,
        featured: 0,
      },

      views: {
        most_viewed: mostViewedBoilerplate,
        total_views: 0,
      },
    },

    users: {
      total: 0,
      last_month: 0,
      most_active: [{}, {}],
    },

    devices: {
      total: 0,
      web: 0,
      android: 0,
      ios: 0,
    },

    categories: {
      top_ads: [],
    },

    location: {
      top_ads_per_city: 0,
    },
  },
}

const getters = {
  stats: (state) => {
    return state.stats
  },
}

const actions = {
  fetchStats(context) {
    Nprogress.start()

    let url = endpoints.dashboard

    return new Promise((resolve, reject) => {
      JufrahAdminAPI.get(url)
        .then((response) => {
          context.commit('setStats', response.data)
          resolve(response)
        })
        .catch((error) => {
          VueNotify({
            group: 'loggedIn',
            type: 'error',
            text: error.response.data.message,
          })
          reject(error)
        })
        .finally(() => {
          Nprogress.done()
        })
    })
  },
}

const mutations = {
  setStats(state, response) {
    state.stats = response.data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
