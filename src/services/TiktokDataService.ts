import http from '@/api-client'

class TiktokDataService {
  getTrandingFeed (): Promise<any> {
    return http.get('/trending/feed')
  }

  getUserInfo (name: string): Promise<any> {
    return http.get(`user/info/${name}`)
  }

  getUserFeed (name: string): Promise<any> {
    return http.get(`user/feed/${name}`)
  }
}

export default new TiktokDataService()
