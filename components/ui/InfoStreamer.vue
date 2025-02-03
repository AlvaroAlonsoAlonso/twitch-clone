<template>
  <section class="info-streamer">
    <article>
      <NuxtImg
        class="info-streamer__photo-stream"
        src="https://static-cdn.jtvnw.net/jtv_user_pictures/863b2191-20a3-44c4-bd60-7fe8b59d2dab-profile_image-70x70.png"
        alt=""
      />
    </article>

    <aside class="info-streamer__aside">
      <header class="info-streamer__header">
        <article>
          <h3>Miduuxeneize</h3>
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
        <h3>
          Presentación LÓGICA APLICADA [Proyectos reales] 🧠 !retos !discord
        </h3>
        <div class="info-streamer__icon-directs">
          <div class="info-streamer__follow">
            <Icon name="ix:user" class="info-streamer__icon--follow" />
            <span>14,346</span>
          </div>
          <time datetime="">3:23:05</time>
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
        <h3 class="info-streamer__categorie">Talk show & Podcasts</h3>
        <article class="info-streamer__tabs">
          <UiTheTab>programacion</UiTheTab>
          <UiTheTab>tecnologia</UiTheTab>
          <UiTheTab>typeScript</UiTheTab>
          <UiTheTab>Github</UiTheTab>
          <UiTheTab>Español</UiTheTab>
          <UiTheTab>informatica</UiTheTab>
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
