export const formatStatCount = (val: number): string => {
  if (val >= 1000 && val < 1000000) {
    return `${Math.round(val / 10) / 100}K`
  }

  if (val >= 1000000) {
    return `${Math.round(val / 10000) / 100}M`
  }

  return String(val)
}
