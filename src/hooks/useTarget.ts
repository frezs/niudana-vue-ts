
export function useTarget(url: string, opt: '_blank' | '_self' = '_blank') {
  window.open(url, opt)
}