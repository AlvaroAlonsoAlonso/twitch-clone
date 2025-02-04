<script lang="ts" setup>
import type { Stream } from '@/interfaces/twitch'

defineProps<Stream & { profileImage: string }>()
const twitchUtils = new TwitchUtils()
</script>

<template>
  <section class="info-streamer">
    <article>
      <NuxtImg
        class="info-streamer__photo-stream"
        :src="twitchUtils.formatThumbnail(profileImage)"
        alt=""
      />
    </article>

    <aside class="info-streamer__aside">
      <header class="info-streamer__header">
        <article>
          <h3>{{ user_name }}</h3>
        </article>
        <article>
          <div class="info-streamer__button">
            <UiTheButton>
              <Icon name="ix:heart" class="info-streamer__icon" />
              <h3>Seguir</h3>
            </UiTheButton>
            <UiTheButton>
              <Icon name="ix:star" class="info-streamer__icon" />
              <h3>Subscribirse</h3>
              <Icon name="ix:chevron-down" class="info-streamer__icon" />
            </UiTheButton>
          </div>
        </article>
      </header>

      <section class="info-streamer__main">
        <h3>{{ title }}</h3>
        <div class="info-streamer__icon-directs">
          <div class="info-streamer__follow">
            <Icon name="ix:user" class="info-streamer__icon--follow" />
            <span>{{ viewer_count }}</span>
          </div>
          <time :datetime="started_at">{{
            twitchUtils.formatTime(started_at)
          }}</time>
          <Icon
            name="heroicons-solid:arrow-up-tray"
            class="info-streamer__icon"
          />
          <Icon
            name="heroicons-solid:dots-vertical"
            class="info-streamer__icon"
          />
        </div>
      </section>

      <footer class="info-streamer__footer">
        <h3 class="info-streamer__categorie">{{ game_name }}</h3>
        <article class="info-streamer__tabs">
          <UiTheTab v-for="tag in tags" :key="tag">{{ tag }}</UiTheTab>
        </article>
      </footer>
    </aside>
  </section>
</template>

<style lang="scss" scoped>
.info-streamer {
  @include flex($align: flex-start, $gap: 1em);

  width: 100%;
  padding: 0 1em;

  &__button {
    @include flex($gap: 1em);
  }

  &__icon {
    color: var(--c-white);
    font-size: 1.5em;

    &--follow {
      color: var(--c-red-light);
      font-size: 1.5em;
    }
  }

  &__photo-stream {
    border-radius: 2em;
    width: 4em;
  }

  &__aside {
    width: 100%;
  }

  &__header {
    @include flex($justify: space-between);

    width: 100%;
    color: var(--c-white);
  }

  &__main {
    @include flex($justify: space-between, $gap: 1em);

    width: 100%;
    color: var(--c-white);
    margin: 1em 0;
  }

  &__follow {
    color: var(--c-red-light);

    @include flex();
  }

  &__icon-directs {
    @include flex($gap: 1em);
  }

  &__categorie {
    color: var(--c-primary);
  }

  &__tabs {
    padding: 1em 0;

    @include flex($justify: flex-start, $gap: 1em);
  }
}
</style>
