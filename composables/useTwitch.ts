import TwitchService from '@/services/TwitchService'

export default function useTwitch() {
  const twitch = new TwitchService()

  const getTopCategories = async () => {
    try {
      return await twitch.getTopGames()
    } catch (error) {
      throw new ConnectionApiError(
        `No se pudieron obtener las categorías de Twitch ${error}`,
      )
    }
  }

  return {
    getTopCategories,
  }
}
