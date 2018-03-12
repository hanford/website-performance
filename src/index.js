import window from 'global/window'

export default function websitePerformance () {
  if (!window.performance) return

  const {
    domLoading,
    domComplete,
    domInteractive,
    domContentLoadedEventStart
  } = window.performance.timing

  const tti = domInteractive - domLoading
  const dcl = domContentLoadedEventStart - domLoading
  const complete = domComplete - domLoading

  return {
    tti,
    dcl,
    complete
  }
}
