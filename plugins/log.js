import Vue from 'vue'

Vue.prototype.$log = str => {
  console.log('log: ', str)
}
