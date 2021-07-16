import { defHttp } from '@/utils/http'

enum Api {
  Feeds = '/feeds',
  Links = '/links',
  Icp = '/icp',
  Tags = '/tags',
  Logs = '/logs',
}


export function searchFeeds(keyword?: string) {
  if (keyword) { return defHttp.get({ url: `${Api.Feeds}?search=${keyword}` }) }
  return defHttp.get({ url: Api.Feeds })
}

export function getFeeds(page?: number) {
  if (page) { return defHttp.get({ url: `${Api.Feeds}?page=${page}` }) }
  return defHttp.get({ url: Api.Feeds })
}

export function getLinks() {
  return defHttp.get({ url: Api.Links })
}

export function getIcp() {
  return defHttp.get({ url: Api.Icp })
}

export function getTags() {
  return defHttp.get({ url: Api.Tags })
}

export function getLogs() {
  return defHttp.get({ url: Api.Logs })
}
