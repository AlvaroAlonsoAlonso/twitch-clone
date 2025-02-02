<template>
  <section class="streamer">
    <NuxtImg
      class="streamer__poster"
      src="https://static-cdn.jtvnw.net/previews-ttv/live_user_knekro-440x248.jpg"
      alt=""
    />
    <footer class="streamer__info">
      <NuxtImg
        class="streamer__photo-stream"
        src="https://static-cdn.jtvnw.net/jtv_user_pictures/863b2191-20a3-44c4-bd60-7fe8b59d2dab-profile_image-70x70.png"
        alt=""
      />
      <section>
        <h3>CO STREAM LEC | MKOI VS G2...</h3>
        <div class="streamer__name">
          <p>Knekro</p>
          <Icon
            name="ix:trophy-filled"
            style="color: white"
            class="streamer__icon"
          />
        </div>

        <p>League of Legends</p>
        <article class="streamer__tab">
          <UiTheTab />
          <UiTheTab />
          <UiTheTab />
        </article>
      </section>
    </footer>
  </section>
</template>

<style lang="scss" scoped>
.streamer {
  &__poster {
    width: 100%;
  }

  &__info {
    @include flex($align: flex-start, $gap: 1em);

    padding: 1em 0;
  }

  &__photo-stream {
    border-radius: 2em;
    width: 3em;
  }

  &__name {
    @include flex($justify: flex-start, $gap: 1em);

    padding: 0.5em 0;
  }

  &__icon {
    background-color: var(--c-primary);
  }

  &__tab {
    @include flex($justify: flex-start, $gap: 1em);

    padding: 1em 0;
  }
}
</style>
