<script lang="ts" setup>
import type { Stream } from '@/interfaces/twitch'
defineProps<{
  categoryStreams: { [key: string]: Stream[] }
}>()
</script>

<template>
  <section class="video-channels">
    <h3>Canales recomendados</h3>
    <div v-for="(streams, categoryId) in categoryStreams" :key="categoryId">
      <h4>{{ categoryId }} Streams</h4>
      <article class="video-channels__link">
        <UiCardsStreamer
          v-for="stream in streams"
          :key="stream.id"
          :stream="stream"
        />
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.video-channels {
  border-bottom: 0.2em solid var(--c-white);
  margin: 2em 4em;
  width: 100%;

  &__link {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
    gap: 1em;
    padding: 1em 0;
    width: 100%;

    @include responsive(48rem) {
      grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
      grid-auto-flow: column;
      overflow-x: auto;
      white-space: nowrap;

      & > * {
        width: 12.5rem;
      }
    }

    @include responsive(30rem) {
      grid-template-columns: repeat(auto-fit, minmax(9.375rem, 1fr));
      gap: 0.25em;
    }
  }
}
</style>
