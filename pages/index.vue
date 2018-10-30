<template>
  <section class="container">
    <div class="list">
      <div 
        v-for="item of userList" 
        :key="item.name">
        {{ item.name }} {{ item.email }}
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  components: {},
  computed: {
    // userList() {
    //   return this.$store.state.user.userList
    // }
    ...mapGetters({
      userList: 'user/userList'
    })
  },
  created() {
    // this.$store.dispatch('user/getUserList')
    this.getUserList()
    // 挂载全局变量
    this.$log('test')
  },
  methods: {
    ...mapActions({
      getUserList: 'user/getUserList'
    })
  }
}
</script>

<style lang="stylus">
@import '../assets/css/variable';

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.list {
  background: $themeColor;
}
</style>
