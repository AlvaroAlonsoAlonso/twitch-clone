<script lang="ts" setup>
import type { Categories } from '@/interfaces/twitch'
const twitchUtils = new TwitchUtils()
defineProps<Categories>()
</script>

<template>
  <section class="category">
    <header class="category__header">
      <NuxtImg
        class="category__img"
        :src="twitchUtils.formatThumbnail(box_art_url, 188, 250)"
        :alt="name"
      />
    </header>
    <footer class="category__info">
      <h3 class="category__name">{{ name }}</h3>
      <p>34K espectadores</p>
      <UiTheTab>Gaming</UiTheTab>
    </footer>
  </section>
</template>

<style lang="scss" scoped>
.category {
  @include flex($direction: column, $justify: flex-start, $gap: 0.5em);

  cursor: pointer;

  &__header {
    width: 100%;
  }

  &__img {
    width: 100%;
  }

  &__info {
    @include flex(column, flex-start, $gap: 0.5em);

    width: 100%;
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
