<script lang="ts" setup>
import TwitchService from '@/services/TwitchService'
import type { Stream, UserInfo } from '@/interfaces/twitch'
const twitchUtils = new TwitchUtils()

const route = useRoute()
const streamerId = route.query.id as string
const twitchService = new TwitchService()
const streamerData = ref<Stream | null>(null)
const userInfo = ref<UserInfo | null>(null)

onMounted(async () => {
  try {
    if (!streamerId) {
      return
    }

    const response = await twitchService.getStreamById(streamerId)
    streamerData.value = response.data.length ? response.data[0] : null
    if (!streamerData.value?.user_login) {
      return
    }
    userInfo.value = await twitchService.getUserInfo(
      streamerData?.value.user_login,
    )
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <section class="direct">
    <UiTheVideo
      v-if="streamerData?.thumbnail_url"
      :poster="twitchUtils.formatthumbnailUrl(streamerData?.thumbnail_url)"
    />
    <UiInfoStreamer
      v-if="streamerData && userInfo"
      v-bind="{
        ...streamerData,
        profileImage: userInfo.profile_image_url,
      }"
    />

    <UiSocialMediaStreamer
      v-if="userInfo && streamerData"
      v-bind="{
        ...userInfo,
        viewerCount: streamerData.viewer_count,
      }"
    />
    <UiTheChat />
  </section>
</template>

<style lang="scss" scoped>
.direct {
  width: 60%;
}
</style>
