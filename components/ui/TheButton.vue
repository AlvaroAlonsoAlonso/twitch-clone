<template>
  <section class="button">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.button {
  @include flex($gap: 1em);

  background-color: var(--c-primary);
  padding: 0.4em 1em;
  border-radius: 0.5em;
  cursor: pointer;
}
</style>
