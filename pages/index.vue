<script lang="ts" setup>
import type { Categories, Stream } from '@/interfaces/twitch'
const { getTopCategories, getStreamsByGame } = useTwitch()
const topCategories = ref<Categories[]>([])
const categoryStreams = ref<{ [key: string]: Stream[] }>({})

onMounted(async () => {
  topCategories.value = await getTopCategories()
  for (const category of topCategories.value) {
    categoryStreams.value[category.name] = await getStreamsByGame(
      category.id,
      3,
    )
  }
})
</script>

<template>
  <section class="home">
    <SectionsMainVideoChannels
      v-if="categoryStreams"
      :category-streams="categoryStreams"
    />
    <SectionsMainBillboardCategories
      v-if="topCategories"
      :categories="topCategories"
    />
  </section>
</template>
<style lang="scss" scoped>
.home {
  width: 70%;
}
</style>
