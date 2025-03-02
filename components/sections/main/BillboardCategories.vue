<script lang="ts" setup>
import type { Categories } from '@/interfaces/twitch'
defineProps<{ categories: Categories[] }>()
</script>

<template>
  <section v-if="categories" class="billboard">
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(11.625rem, 1fr));
    gap: 1em;
    padding: 1em 0;
    width: 100%;

    @include responsive(48rem) {
      grid-auto-flow: column;
      overflow-x: auto;
      white-space: nowrap;

      & > * {
        width: 12.5rem;
      }
    }
  }
}
</style>
