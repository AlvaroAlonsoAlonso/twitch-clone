<template>
  <nav class="navbar">
    <section class="navbar__logo">
      <NuxtLink to="/">
        <NuxtImg
          src="/logo_twitch.png"
          alt="Imagen corporativa de la web de midutch"
          class="navbar__logo-corporative"
        />
      </NuxtLink>
      <h1>MIDUTCH</h1>
      <Icon
        name="heroicons-solid:dots-vertical"
        class="navbar__icon navbar__icon--point"
      />
    </section>
    <section class="navbar__search">
      <input type="text" placeholder="Buscar..." class="navbar__input-text" />
      <Icon name="heroicons-solid:magnifying-glass" class="navbar__icon" />
    </section>
    <section class="navbar__login">
      <div class="navbar__container-news">
        <Icon name="tabler:crown" class="navbar__icon" />
        <div class="navbar__news">63</div>
      </div>
      <div class="navbar__login-button">Log in</div>
      <div class="navbar__login-button navbar__login-button--active">
        Sign Up
      </div>
      <Icon name="ix:user-filled" class="navbar__icon" />
    </section>
  </nav>
</template>
<style lang="scss" scoped>
.navbar {
  @include flex($justify: space-between);

  background-color: var(--c-grey);
  color: var(--c-white);
  padding: 1em 2em;

  @include responsive() {
    padding: 1em;
  }

  &__logo {
    @include flex($justify: flex-start, $gap: 0.6em);
  }

  &__icon {
    color: var(--c-white);
    font-size: 1.5em;
    padding: 0 0.7em;
    cursor: pointer;

    &--point {
      @include responsive() {
        display: none;
      }
    }
  }

  &__logo-corporative {
    width: 2em;
  }

  &__search {
    @include flex();

    border-radius: 0.5em;
    background-color: var(--c-grey-dark);
    width: 30%;

    @include responsive() {
      width: 40%;
    }
  }

  &__input-text {
    width: 100%;
    padding: 0.5em 1em;
    color: var(--c-grey-soft);
    background-color: var(--c-grey);
    border: 0.1em solid var(--c-grey-dark);
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;

    &::placeholder {
      color: var(--c-grey-soft);
    }
  }

  &__container-news {
    @include flex($gap: 0.5em);

    position: relative;
  }

  &__news {
    background-color: var(--c-red);
    color: var(--c-white);
    padding: 0 0.5em;
    border-radius: 1em;
    position: absolute;
    bottom: 0.8em;
    left: 0.6em;
  }

  &__login {
    @include flex($justify: flex-end, $gap: 1em);

    @include responsive() {
      @include flex($justify: flex-end);
    }
  }

  &__login-button {
    color: var(--c-white);
    background-color: var(--c-grey-dark);
    padding: 0.5em 1em;
    border-radius: 0.3em;
    cursor: pointer;

    @include responsive() {
      display: none;
    }

    &--active {
      background-color: var(--c-primary);
    }
  }
}
</style>
