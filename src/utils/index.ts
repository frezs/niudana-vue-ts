import { isObject } from '@/utils/is'

/**
 * 对象合并
 * @param source 
 * @param target 
 * @returns 
 */
export function objectDeepMerge<T>(
  source: any = {},
  target: any = {}
): T {
  let key: string
  for (key in target) {
    source[key] = isObject(source[key])
      ? objectDeepMerge(source[key], target[key]) // 递归合并key值相同
      : (source[key] = target[key]) // 覆盖key值相同
  }

  return source
}


/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = '';
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  parameters = parameters.replace(/&$/, '');
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters;
}