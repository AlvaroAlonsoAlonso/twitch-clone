export default class TwitchService {
  clientId: string
  clientSecret: string
  apiUrl: string
  bearer: string | null = null

  constructor() {
    const config = useRuntimeConfig()
    this.apiUrl = config.public.twitchApiUrl
    this.clientId = config.public.twitchClientId
    this.clientSecret = config.public.twitchClientSecret
  }

  async getBearer() {
    if (this.bearer) return this.bearer

    const url = `https://id.twitch.tv/oauth2/token?client_id=${this.clientId}&client_secret=${this.clientSecret}&grant_type=client_credentials`

    const response = await fetch(url, { method: 'POST' })
    if (!response.ok) {
      throw new GetBearerError(
        `Error al obtener Bearer: ${response.statusText}`,
      )
    }
    const data = await response.json()
    this.bearer = data.access_token
    return this.bearer
  }

  async fetchAPI(endpoint: string, params = '') {
    const token = await this.getBearer()
    const response = await fetch(`${this.apiUrl}/${endpoint}${params}`, {
      headers: {
        'Client-ID': this.clientId,
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) {
      throw new ConnectionApiError(
        `Error en API (${response.status}): ${response.statusText}`,
      )
    }
    return await response.json()
  }

  async getTopGames() {
    const data = await this.fetchAPI('games/top', '?first=6')
    return data.data
  }

  async getTopStreamerSpanish() {
    const { data } = await this.fetchAPI('streams', '?language=es&first=20')
    return data
  }

  async getStreamById(streamerId: string) {
    const data = await this.fetchAPI('streams', `?user_id=${streamerId}`)
    return data
  }

  async getUserInfo(userLogin: string) {
    const { data } = await this.fetchAPI('users', `?login=${userLogin}`)
    return data.length ? data[0] : null
  }

  async getTagsByGame(gameId: string) {
    const { data } = await this.fetchAPI('streams/tags', `?game_id=${gameId}`)
    return data
  }

  async getStreamsByGame(gameId: string, limit: number = 3) {
    const { data } = await this.fetchAPI(
      'streams',
      `?game_id=${gameId}&first=${limit}`,
    )
    return data
  }
}
