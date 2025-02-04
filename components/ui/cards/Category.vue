<script lang="ts" setup>
import type { Categories } from '@/interfaces/twitch'
const twitchUtils = new TwitchUtils()
defineProps<Categories>()
</script>

<template>
  <section class="category">
    <NuxtImg
      class="category__img"
      :src="twitchUtils.formatThumbnail(box_art_url, 188, 250)"
      :alt="name"
    />
    <footer class="category__info">
      <h3 class="category__name">{{ name }}</h3>
      <p>34K espectadores</p>
      <UiTheTab>Gaming</UiTheTab>
      <UiTheTabPhoto />
    </footer>
  </section>
</template>

<style lang="scss" scoped>
.category {
  cursor: pointer;

  &__img {
    width: 12em;
  }

  &__info {
    @include flex(column, flex-start, $gap: 0.5em);

    padding: 1em 0;
  }

  &__name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 9.375rem;
  }
}
</style>
