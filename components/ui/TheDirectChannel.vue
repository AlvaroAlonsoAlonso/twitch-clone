<script lang="ts" setup>
import type { Stream } from '@/interfaces/twitch'
const twitchUtils = new TwitchUtils()
defineProps<Stream>()
</script>

<template>
  <NuxtLink
    :to="{
      name: 'streamer',
      params: { streamer: user_login },
      query: { id: user_id },
    }"
    class="channel"
  >
    <article class="channel__info">
      <NuxtImg
        class="channel__photo-stream"
        :src="twitchUtils.formatThumbnail(thumbnail_url)"
        alt=""
      />
      <section>
        <p class="channel__name">{{ user_name }}</p>
        <p class="channel__category">{{ game_name }}</p>
      </section>
    </article>

    <div class="channel__followers">
      <Icon class="channel__icon-point" name="ix:circle-filled" />
      <p class="channel__number">{{ viewer_count }}</p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.channel {
  @include flex($align: flex-start, $justify: space-between, $gap: 1em);

  padding: 0.5em 1.5em;
  cursor: pointer;

  &__info {
    @include flex($gap: 1em);
  }

  &__photo-stream {
    border-radius: 2em;
    width: 3em;
  }

  &__name {
    font-size: var(--font-s-large);
    font-weight: var(--font-w-bold);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 9.375rem;
  }

  &__category {
    font-weight: var(--font-w-ligh);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 9.375rem;
  }

  &__icon-point {
    color: var(--c-red);
  }

  &__followers {
    @include flex($gap: 0.5em);
  }

  &__number {
    font-size: var(--font-s-large);
    font-weight: var(--font-w-light);
  }
}
</style>
