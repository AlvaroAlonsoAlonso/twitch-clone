<script lang="ts" setup>
const { getTopCategories, getStreamsByGame } = useTwitch()
import type { Categories, Stream } from '@/interfaces/twitch'
const topCategories = ref<Categories[]>([])
const categoryStreams = ref<{ [key: string]: Stream[] }>({})

onMounted(async () => {
  try {
    topCategories.value = await getTopCategories()

    for (const category of topCategories.value) {
      categoryStreams.value[category.name] = await getStreamsByGame(
        category.id,
        3,
      )
    }
  } catch (error) {
    console.error('Error obteniendo datos:', error)
  }
})
</script>

<template>
  <section class="home">
    <SectionsMainVideoChannels :category-streams="categoryStreams" />
    <SectionsMainBillboardCategories
      v-if="topCategories"
      :categories="topCategories"
    />
  </section>
</template>
<style lang="scss" scoped>
.home {
  width: 75%;
}
</style>
