<template>
  <div
    class="tiktok-stream"
  >
    <tiktok-post
      v-for="(item) in data"
      :post="item"
      :key="item.id"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  onBeforeUpdate,
  onUpdated,
  Ref,
  PropType,
  nextTick
} from 'vue'
import TiktokPost from './TiktokPost.vue'
import { FeedItem } from '@/types/FeedItem.interface'

export default defineComponent({
  name: 'TiktokStream',
  props: {
    data: {
      type: Array as PropType<FeedItem[]>,
      required: true
    }
  },
  components: {
    TiktokPost
  }
})
</script>

<style lang="scss" scoped>
.tiktok-stream {
  display: grid;
  row-gap: 64px;
  max-width: 600px;
  margin: auto;
}
</style>
