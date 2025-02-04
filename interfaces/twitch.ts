export interface Stream {
  id: string
  user_id: string
  user_login: string
  user_name: string
  game_id: string
  game_name: string
  type: 'live' | 'vod' | ''
  tags: string[]
  title: string
  viewer_count: number
  started_at: string //
  language: string
  thumbnail_url: string
  tag_ids: string[] //
  is_mature: boolean
}

export interface UserInfo {
  id: string
  login: string
  display_name: string
  type: string
  broadcaster_type: string
  description: string
  profile_image_url: string
  offline_image_url: string
  view_count: number
  created_at: string
}

export interface Categories {
  id: string
  name: string
  box_art_url: string
  igdb_id: string
}
