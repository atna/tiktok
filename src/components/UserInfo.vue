<template>
  <div class="user">
    <div class="user__avatar">
      <img
        :src="user.avatarMedium"
        :alt="user.nickname"
        class="user__avatar-img"
      >
    </div>
    <div class="user__info">
        <div class="user__name">
            {{ user.uniqueId }}
        </div>
        <div class="user__nickname">
            {{ user.nickname }}
        </div>
        <div class="user__stats">
          <div class="user__stat-item">
            <span class="user__stat-count">{{ followerCount }}</span> Followers
          </div>
          <div class="user__stat-item">
            <span class="user__stat-count">{{ followingCount }}</span> Following
          </div>
          <div class="user__stat-item">
            <span class="user__stat-count">{{ heartCount }}</span> Likes
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { UserData, UserStats } from '@/types/UserInfo.interface'
import { formatStatCount } from '@/helpers/format'

export default defineComponent({
  name: 'UserInfo',
  props: {
    user: {
      type: Object as PropType<UserData>,
      required: true
    },
    stats: {
      type: Object as PropType<UserStats>,
      required: true
    }
  },
  setup (props) {
    const followerCount = computed(() => {
      return formatStatCount(props.stats.followerCount)
    })
    const followingCount = computed(() => {
      return formatStatCount(props.stats.followingCount)
    })
    const heartCount = computed(() => {
      return formatStatCount(props.stats.heartCount)
    })

    return {
      followerCount,
      followingCount,
      heartCount
    }
  }
})
</script>

<style lang="scss" scoped>
.user {
  display: flex;

  &__avatar {
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
  }

  &__avatar-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &__info {
    margin-left: 24px;
    padding-top: 8px;
  }

  &__name {
    margin-bottom: 4px;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
  }

  &__nickname {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
  }

  &__stats {
    display: grid;
    grid-auto-flow: column;
    column-gap: 20px;
    margin-top: 8px;
    font-size: 18px;
    color: rgba(18, 18, 18, 0.75);
  }

  &__stat-count {
    font-weight: 700;
  }
}
</style>
