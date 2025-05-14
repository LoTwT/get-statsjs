import Stats from "stats.js"

interface GetStatsjsReturnType {
  stats: Stats
  mount: () => void
  dispose: () => void
}

export function getStatsjs(el?: HTMLElement): GetStatsjsReturnType {
  const stats = new Stats()

  const mount = (): void => {
    if (!el) el = document.body
    el.appendChild(stats.dom)
  }

  const dispose = (): void => {
    if (!el) el = document.body
    el.removeChild(stats.dom)
  }

  return { stats, mount, dispose }
}
