<script lang="ts" setup>
import type { Categories } from '@/interfaces/twitch'
defineProps<{ categories: Categories[] }>()
</script>

<template>
  <section class="billboard">
    <h3>Categories</h3>
    <article class="billboard__categories">
      <UiCardsCategory
        v-for="category in categories"
        :key="category.id"
        v-bind="category"
      />
    </article>
  </section>
</template>

<style lang="scss" scoped>
.billboard {
  border-bottom: 0.2em solid var(--c-white);
  margin: 2em 4em;
  width: 100%;

  &__categories {
    @include flex($justify: flex-start, $gap: 1em);

    padding: 1em 0;
    width: 100%;
  }
}
</style>
