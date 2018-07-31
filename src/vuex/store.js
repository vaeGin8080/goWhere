import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

var store = new Vuex.Store({
    state:{
      leftCity:"北京",
      rightCity:"上海",
      startMonthL:new Date().getMonth()+1,
      startDateL:new Date().getDate(),
      startMonthR:new Date().getMonth()+1,
      startDateR:new Date().getDate()+2,
      totalPrice:0
    },
    mutations:{

    },
    actions:{

    },
    getters:{
      getCityL(state){
        return state.leftCity
      },
      getCityR(state){
        return state.rightCity
      }
    }

  })
export default store



