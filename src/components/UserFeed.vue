<template>
    <div class="user-feed">
        <div
            v-for="(item, i) in userFeed"
            :key="i"
            class="user-feed__item"
        >
            <div class="user-feed__view-counter">
                123
            </div>
            <div class="user-feed__preview">
                <div class="placeholder-shimmer"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserFeed',
  setup () {
    return {
      userFeed: [{}, {}, {}, {}, {}, {}]
    }
  }
})
</script>

<style lang="scss" scoped>
.user-feed {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  margin-top: 32px;

  &__item {
    position: relative;
    aspect-ratio: 4 / 5;
  }

  &__view-counter {
    position: absolute;
    z-index: 100;
    top: 12px;
    left: 12px;
    color: #000;
    font-size: 16px;
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}
</style>
