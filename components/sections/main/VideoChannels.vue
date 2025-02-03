<template>
  <section class="video-channels">
    <h3>Canales de <strong>League of Legends</strong> recomendados</h3>
    <article class="video-channels__link">
      <UiCardsStreamer />
      <UiCardsStreamer />
      <UiCardsStreamer />
    </article>
    <div class="video-channels__show">
      <span>Mostrar más</span>
      <Icon class="video-channels__icon" name="ix:chevron-down" />
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
