<script lang="ts" setup>
import type { Stream } from '@/interfaces/twitch'

const { getTopStreamerSpanish } = useTwitch()
const dataStreamer = ref<Stream[]>([])

onMounted(async () => {
  try {
    dataStreamer.value = await getTopStreamerSpanish()
  } catch (error) {
    console.error('Error al obtener los streamers:', error)
  }
})
</script>

<template>
  <aside class="aside">
    <header class="aside__header">
      <h3>Canales en directo</h3>
      <Icon class="aside__icon" name="ix:arrow-left" />
    </header>
    <UiTheDirectChannel
      v-for="stream in dataStreamer"
      :key="stream.id"
      v-bind="stream"
    />
  </aside>
</template>
<style lang="scss" scoped>
.aside {
  background-color: var(--c-black);
  color: var(--c-white);
  padding: 1em;
  height: 100vh;
  width: 20%;

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
