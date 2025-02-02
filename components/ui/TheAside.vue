<template>
  <aside class="aside">
    <header class="aside__header">
      <h3>Canales en directo</h3>
      <Icon class="aside__icon" name="ix:arrow-left" />
    </header>

    <UiTheDirectChannel />
    <UiTheDirectChannel />
    <UiTheDirectChannel />
    <UiTheDirectChannel />
  </aside>
</template>
<style lang="scss" scoped>
.aside {
  background-color: var(--c-black);
  color: var(--c-white);
  padding: 1em;
  height: 100vh;

  &__header {
    @include flex($gap: 1em);
  }

  h3 {
    font-size: 1.5em;
  }

  &__icon {
    font-size: 1em;
    padding: 1em;
    cursor: pointer;
  }
}
</style>
