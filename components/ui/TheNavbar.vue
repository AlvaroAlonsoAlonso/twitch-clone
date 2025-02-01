<template>
  <nav class="navbar">
    <section>Botones izquierdos</section>
    <h1>MENU TWITCH - buscador</h1>
    <section>Botones derechos</section>
  </nav>
</template>
<style lang="scss" scoped>
.navbar {
  @include flex($justify: space-between);

  color: black;
  padding: 1em 2em;
}
</style>
