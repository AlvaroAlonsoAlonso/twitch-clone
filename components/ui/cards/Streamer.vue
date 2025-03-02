<script lang="ts" setup>
import type { Stream } from '@/interfaces/twitch'
const twitchUtils = new TwitchUtils()
defineProps<{ stream: Stream }>()
</script>

<template>
  <NuxtLink
    :to="{
      name: 'streamer',
      params: { streamer: stream.user_login },
      query: { id: stream.user_id },
    }"
    class="streamer"
  >
    <NuxtImg
      class="streamer__poster"
      :src="twitchUtils.formatThumbnail(stream.thumbnail_url, 440, 248)"
      alt="Stream Thumbnail"
    />

    <footer class="streamer__info">
      <NuxtImg
        class="streamer__photo-stream"
        :src="twitchUtils.formatThumbnail(stream.thumbnail_url, 70, 70)"
        alt="Streamer Avatar"
      />

      <section class="streamer__content">
        <h3 class="streamer__title">
          {{ twitchUtils.formatTitleMaxCharacter(stream.title) }}
        </h3>
        <div class="streamer__name">
          <p>{{ stream.user_name }}</p>
          <Icon name="bx:bxs-badge-check" class="streamer__icon" />
        </div>

        <p>{{ stream.game_name }}</p>
        <article class="streamer__tab">
          <UiTheTab v-for="tag in stream.tags.slice(0, 3)" :key="tag">{{
            tag
          }}</UiTheTab>
        </article>
      </section>
    </footer>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.streamer {
  @include flex($direction: column, $justify: flex-start, $gap: 0.5em);

  &__poster {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  &__info {
    @include flex($justify: flex-start, $align: flex-start, $gap: 1em);

    padding: 1em 0;
    width: 100%;
  }

  &__photo-stream {
    border-radius: 2em;
    width: 3em;
  }

  &__content {
    max-width: 85%;
  }

  &__title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 85%;
  }

  &__name {
    @include flex($justify: flex-start, $gap: 0.2em);

    padding: 0.5em 0;
  }

  &__icon {
    background-color: var(--c-primary);
  }

  &__tab {
    @include flex($justify: flex-start, $gap: 0.5em);

    padding: 1em 0;
  }
}
</style>
