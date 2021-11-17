<template>
  <div class="home">
    <tiktok-stream
      v-if="feedLoaded"
      :data="data"
    />
    <loader v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import TiktokStream from '@/components/TiktokStream.vue'
import Loader from '@/components/Loader.vue'

export default defineComponent({
  name: 'Home',
  components: {
    TiktokStream,
    Loader
  },
  setup () {
    const store = useStore()
    const feed = ref([])
    const feedLoaded = ref(false)

    onMounted(() => {
      store.dispatch('fetchTrandingFeed').then(() => {
        feed.value = store.state.trandingFeed
        feedLoaded.value = true
      }).catch((e) => {
        console.error(e)
      })
    })

    return {
      data: feed,
      feedLoaded
    }
  }
})
</script>
