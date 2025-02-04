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
        style="color: white"
        class="navbar__icon"
      />
    </section>
    <section class="navbar__search">
      <input type="text" placeholder="Buscar" class="navbar__input-text" />
      <div class="navbar__icon-search">
        <Icon name="simple-line-icons:magnifier" class="navbar__icon" />
      </div>
    </section>
    <section class="navbar__login">
      <Icon name="ix:notifications" class="navbar__icon" />
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
  color: white;
  padding: 1em 2em;

  &__logo {
    @include flex($justify: flex-start);

    width: 20%;
  }

  &__icon {
    color: var(--c-white);
    font-size: 2em;
    padding: 0 1em;
  }

  &__logo-corporative {
    padding: 0 1em;
  }

  &__search {
    @include flex();

    width: 60%;
  }

  &__icon-search {
    cursor: pointer;
  }

  &__input-text {
    padding: 1em;
    border-radius: 0.5em;
    width: 40%;
  }

  &__login {
    @include flex($justify: flex-end, $gap: 1em);

    width: 20%;
  }

  &__login-button {
    color: var(--c-white);
    background-color: var(--c-grey-light);
    padding: 1em;
    border-radius: 0.7em;
    cursor: pointer;

    &--active {
      background-color: var(--c-primary);
    }
  }
}
</style>
