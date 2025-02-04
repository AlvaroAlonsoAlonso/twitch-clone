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
    @include flex($justify: flex-start, $gap: 1em);

    padding: 1em 0;
    width: 100%;
  }

  &__show {
    color: var(--c-white);

    @include flex($gap: 0.5em);

    width: 100%;
    text-align: center;
    padding: 1em 0;
  }
}
</style>
