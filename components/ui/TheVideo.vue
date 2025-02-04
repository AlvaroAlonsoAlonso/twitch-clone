<script lang="ts" setup>
defineProps<{
  poster?: string
}>()
</script>

<template>
  <video class="video" width="400" controls :poster="poster" src="" />
</template>
<style lang="scss" scoped>
.video {
  width: 100%;
  cursor: pointer;
}
</style>
