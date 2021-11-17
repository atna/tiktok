<template>
  <section class="tiktok-post">
    <div class="tiktok-post__header">
      <div class="tiktok-post__avatar">
        <router-link
          :to="`/profile/${post.authorMeta.name}`"
          class="link"
        >
          <img
            :src="post.authorMeta.avatar"
            :alt="post.authorMeta.nickName"
            class="tiktok-post__avatar-img"
          >
        </router-link>
      </div>
      <div class="tiktok-post__info">
        <div class="tiktok-post__name">
          <div class="tiktok-post__nick-name">
            <router-link
              :to="`/profile/${post.authorMeta.name}`"
              class="link"
            >
              {{ post.authorMeta.name }}
            </router-link>
          </div>
          <div class="tiktok-post__user-name">
            {{ post.authorMeta.nickName }}
          </div>
        </div>
        <p class="tiktok-post__text">
          {{ post.text }}
        </p>
        <p class="tiktok-post__tags">
          {{ tags }}
        </p>
      </div>
    </div>
    <div class="tiktok-post__body">
      <div class="tiktok-post__video">
        <tiktok-video
          :url="post.videoUrl"
          :poster="post.covers.default"
        />
      </div>
      <div class="tiktok-post__stats">
        <div class="tiktok-post__stat-item">
          <div class="tiktok-post__stat-icon">
            <img src="../assets/visibility_black_24dp.svg" alt="">
          </div>
          <div class="tiktok-post__stat-value">
            {{ playsCount }}
          </div>
        </div>
        <div class="tiktok-post__stat-item">
          <div class="tiktok-post__stat-icon">
            <img src="../assets/mode_comment_black_24dp.svg" alt="">
          </div>
          <div class="tiktok-post__stat-value">
            {{ commetsCount }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { FeedItem } from '@/types/FeedItem.interface'
import TiktokVideo from './TiktokVideo.vue'
import { formatStatCount } from '@/helpers/format'

export default defineComponent({
  name: 'TiktokPost',
  props: {
    post: {
      type: Object as PropType<FeedItem>,
      required: true
    }
  },
  components: {
    TiktokVideo
  },
  setup (props) {
    const commetsCount = computed(() => {
      return formatStatCount(props.post.commentCount)
    })
    const playsCount = computed(() => {
      return formatStatCount(props.post.playCount)
    })
    const tags = computed(() => {
      return props.post.hashtags
        .map((item) => `#${item.name}`)
        .join(' ')
    })

    return {
      commetsCount,
      playsCount,
      tags
    }
  }
})
</script>

<style lang="scss" scoped>
.tiktok-post {
  &__header {
    display: flex;
  }

  &__avatar {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    overflow: hidden;
  }

  &__avatar-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &__info {
    margin-left: 12px;
  }

  &__name {
    display: flex;
    align-items: baseline;
  }

  &__nick-name {
    font-weight: 700;
    font-size: 18px;
  }

  &__user-name {
    margin-left: 8px;
    font-size: 14px;
  }

  &__text {
    margin: 4px 0 0;
    line-height: 1.4;
  }

  &__tags {
    margin: 6px 0 0;
    font-weight: 700;
  }

  &__body {
    display: flex;
    align-items: flex-end;
    padding-left: 70px;
  }

  &__video {
    margin-top: 16px;
  }

  &__stats {
    display: grid;
    row-gap: 16px;
    padding-left: 24px;
  }

  &__stat-value {
    font-size: 12px;
    font-weight: 700;
    line-height: 17px;
    text-align: center;
  }
}
</style>
