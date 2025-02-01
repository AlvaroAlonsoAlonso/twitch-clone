<template>
  <section class="layout">
    <header class="layout__header">
      <UiTheNavbar />
    </header>
    <main class="layout__main">
      <UiTheAside />
      <slot />
    </main>
  </section>
</template>
<style lang="scss" scoped>
.layout {
  @include flex(column);

  &__header {
    background-color: aquamarine;
    width: 100%;
  }

  &__main {
    @include flex($align: flex-start, $justify: flex-start);

    width: 100%;
  }
}
</style>
