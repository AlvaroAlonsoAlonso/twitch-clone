import TwitchService from '@/services/TwitchService'
export function useTwitch() {
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
  const getTopStreamerSpanish = async () => {
    try {
      return await twitch.getTopStreamerSpanish()
    } catch (error) {
      throw new ConnectionApiError(
        `No se pudieron obtener los streamers en español: ${error}`,
      )
    }
  }

  const getUserInfo = async (userLogin: string) => {
    try {
      return await twitch.getUserInfo(userLogin)
    } catch (error) {
      throw new ConnectionApiError(
        `No se pudo obtener la información del usuario: ${error}`,
      )
    }
  }

  const getTagsByGame = async (gameId: string) => {
    try {
      return await twitch.getTagsByGame(gameId)
    } catch (error) {
      throw new ConnectionApiError(
        `No se pudieron obtener los tags del juego: ${error}`,
      )
    }
  }

  const getStreamsByGame = async (gameId: string, limit: number = 3) => {
    try {
      return await twitch.getStreamsByGame(gameId, limit)
    } catch (error) {
      throw new ConnectionApiError(
        `No se pudieron obtener los streams del juego: ${error}`,
      )
    }
  }

  return {
    getTopCategories,
    getTopStreamerSpanish,
    getUserInfo,
    getTagsByGame,
    getStreamsByGame,
  }
}
