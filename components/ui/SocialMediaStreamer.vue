<script lang="ts" setup>
import type { UserInfo } from '@/interfaces/twitch'
defineProps<UserInfo & { viewerCount: number }>()
</script>
<template>
  <section class="social">
    <h2 class="social__streamer">Acerca de {{ display_name }}</h2>
    <article class="social__panel">
      <section class="social__follow">
        <p>{{ viewerCount }}</p>
        <p>seguidores</p>
      </section>
      <p>
        {{ description }}
      </p>
      <div class="social__line"></div>
      <article class="social__icons">
        <UiTheButtonSocial>
          <Icon name="ix:youtube-filled" class="social__icon" />
          <span>Youtube</span>
        </UiTheButtonSocial>
        <UiTheButtonSocial>
          <Icon name="streamline:instagram" class="social__icon" />
          <span>Intagram</span>
        </UiTheButtonSocial>
        <UiTheButtonSocial
          ><Icon name="ix:youtube-filled" class="social__icon" />
          <span>Twitter</span>
        </UiTheButtonSocial>
        <UiTheButtonSocial
          ><Icon name="ix:youtube-filled" class="social__icon" />
          <span>Tiktok</span>
        </UiTheButtonSocial>
      </article>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.social {
  padding: 1em 2em;

  &__streamer {
    padding: 1em 0;
  }

  &__panel {
    @include flex(column, flex-start, $gap: 1em);

    background-color: var(--c-grey);
    padding: 2em 1em;
  }

  &__follow {
    @include flex($justify: flex-start, $gap: 1em);
  }

  &__line {
    width: 100%;
    border: 0.1em solid var(--c-grey-light);
  }

  &__icons {
    @include flex($gap: 1em);
  }

  &__icon {
    font-size: 1.5em;
  }
}
</style>
