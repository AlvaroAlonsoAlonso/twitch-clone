<template>
  <section class="button">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.button {
  color: var(--c-white);

  @include flex($gap: 1em);

  padding: 0.4em 1em;
  border-radius: 0.5em;
  cursor: pointer;
}
</style>
