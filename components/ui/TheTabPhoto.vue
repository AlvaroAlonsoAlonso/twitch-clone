<template>
  <section class="tab-photo">
    <h4>Games</h4>
    <NuxtImg class="tab-photo__img" src="/gaming.png" alt="ddd" />
  </section>
</template>

<style lang="scss" scoped>
.tab-photo {
  @include flex($justify: flex-start);

  margin: 1em 0;
  padding: 0.5em 1em;
  background-color: var(--c-primary);
  width: 100%;
  border-radius: 0.5em;
  font-size: 1.5em;
  position: relative;

  &__img {
    position: absolute;
    right: 0;
    width: 3em;
  }
}
</style>
