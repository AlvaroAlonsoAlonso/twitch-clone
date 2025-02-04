<template>
  <section class="category">
    <NuxtImg
      class="category__img"
      src="https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg"
      alt="ddd"
    />
    <footer class="category__info">
      <h3>Charlando</h3>
      <p>34K espectadores</p>
      <UiTheTab />
      <UiTheTabPhoto />
    </footer>
  </section>
</template>

<style lang="scss" scoped>
.category {
  cursor: pointer;

  &__img {
    width: 12em;
  }

  &__info {
    @include flex(column, flex-start, $gap: 0.5em);

    padding: 1em 0;
  }
}
</style>
