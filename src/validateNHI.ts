/**
 * Checks a string against the New Zealand Ministry of Health NHI Validation Routine
 *
 * @param nhi - A potential NHI number
 * @returns `true` if the given string satisfies the New Zealand NHI Validation Routine and `false` otherwise
 *
 */

const OLD_NHI_FORMAT_REGEX = new RegExp(/^[A-HJ-NP-Z]{3}\d{4}$/)
const NEW_NHI_FORMAT_REGEX = new RegExp(/^[A-HJ-NP-Z]{3}\d{2}[A-HJ-NP-Z]{2}$/)

export const validateNHI = (nhi: string) => {
  nhi = nhi.toUpperCase()
  const matchesOld = OLD_NHI_FORMAT_REGEX.test(nhi)
  const matchesNew = NEW_NHI_FORMAT_REGEX.test(nhi)

  // Character conversion numbers as defined by the NHI Validation Routine
  const nhiConversionNums = [...nhi].map((c) =>
    !isNaN(Number(c))
      ? Number(c)
      : c.charCodeAt(0) -
        '@'.charCodeAt(0) -
        (c > 'I' ? 1 : 0) -
        (c > 'O' ? 1 : 0)
  )

  const weightedVals = nhiConversionNums.slice(0, -1).map((v, i) => v * (7 - i))

  if (matchesNew) {
    const checksum = weightedVals.reduce((acc, cur) => acc + cur, 0) % 23
    const checkDigit = 23 - checksum
    return checkDigit === nhiConversionNums[6]
  }
  if (matchesOld) {
    const checksum = weightedVals.reduce((acc, cur) => acc + cur, 0) % 11
    const checkDigit = (11 - checksum) % 10
    return checksum !== 0 && checkDigit === nhiConversionNums[6]
  }
  return false
}
