<template>
  <section class="channel">
    <article class="channel__info">
      <NuxtImg
        class="channel__photo-stream"
        src="https://static-cdn.jtvnw.net/jtv_user_pictures/863b2191-20a3-44c4-bd60-7fe8b59d2dab-profile_image-70x70.png"
        alt=""
      />
      <section>
        <p class="channel__name">Miduncy</p>
        <p class="channel__category">Coding</p>
      </section>
    </article>

    <div class="channel__followers">
      <Icon class="channel__icon-point" name="ix:circle-filled" />
      <p class="channel__number">2.3K</p>
    </div>
  </section>
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
  }

  &__category {
    font-weight: var(--font-w-ligh);
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
