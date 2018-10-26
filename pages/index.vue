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
  },
  methods: {
    ...mapActions({
      getUserList: 'user/getUserList'
    })
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
