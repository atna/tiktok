<template>
  <div class="profile">
    <user-info
      v-if="userLoaded"
      :user="userData"
      :stats="userStats"
    />
    <loader v-else />
    <user-feed v-if="userLoaded" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import UserInfo from '@/components/UserInfo.vue'
import UserFeed from '@/components/UserFeed.vue'
import Loader from '@/components/Loader.vue'
import { UserData, UserStats } from '@/types/UserInfo.interface'

export default defineComponent({
  name: 'Profile',
  components: {
    UserInfo,
    UserFeed,
    Loader
  },
  setup () {
    const store = useStore()
    const router = useRoute()
    const userData = reactive({}) as UserData
    const userStats = reactive({}) as UserStats
    const userLoaded = ref(false)

    onMounted(() => {
      store.dispatch('fetchUserInfo', router.params.name).then(() => {
        Object.assign(userData, store.state.user.user)
        Object.assign(userStats, store.state.user.stats)
        userLoaded.value = true
      }).catch((e) => {
        console.error(e)
      })
      store.dispatch('fetchUserFeed', router.params.name).then(() => {
        // TODO: assign data
      }).catch((e) => {
        console.error(e)
      })
    })

    return {
      userData,
      userStats,
      userLoaded
    }
  }
})
</script>

<style lang="scss" scoped>
.profile {
  max-width: 640px;
  margin: auto;
}
</style>
