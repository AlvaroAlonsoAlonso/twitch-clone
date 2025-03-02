export default class TwitchUtils {
  formatThumbnail(
    thumbnailUrl: string,
    width: number = 70,
    height: number = 70,
  ): string {
    if (!thumbnailUrl) return ''
    return thumbnailUrl
      .replace('{width}', width.toString())
      .replace('{height}', height.toString())
  }

  formatthumbnailUrl(thumbnailUrl: string): string {
    return this.formatThumbnail(thumbnailUrl, 802, 452)
  }

  formatTitleMaxCharacter(title: string, maxCharacters: number = 40): string {
    if (title.length <= maxCharacters) {
      return title
    } else {
      return title.substring(0, maxCharacters - 3) + '...'
    }
  }

  formatTime(isoDate: string): string {
    const diffMs = Date.now() - new Date(isoDate).getTime()
    const hours = Math.floor(diffMs / 3600000)
      .toString()
      .padStart(2, '0')
    const minutes = Math.floor((diffMs % 3600000) / 60000)
      .toString()
      .padStart(2, '0')
    const seconds = Math.floor((diffMs % 60000) / 1000)
      .toString()
      .padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
  }
}
