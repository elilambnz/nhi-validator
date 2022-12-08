/**
 * Checks a string against the New Zealand Ministry of Health NHI Validation Routine
 *
 * @param nhi - A potential NHI number
 * @returns `true` if the given string satisfies the New Zealand NHI Validation Routine and `false` otherwise
 *
 */
export const validateNHI = (nhi: string) => {
  // Steps 1 - 2
  if (/^[A-HJ-NP-Z]{3}\d{4}$/.test(nhi)) {
    // Character conversion numbers as defined by the NHI Validation Routine
    const nhiConversionNums = [...nhi].map((c) =>
      !isNaN(Number(c))
        ? Number(c)
        : c.charCodeAt(0) -
          '@'.charCodeAt(0) -
          (c > 'I' ? 1 : 0) -
          (c > 'O' ? 1 : 0)
    )

    // Steps 3 - 10
    const weightedVals = nhiConversionNums
      .slice(0, -1)
      .map((v, i) => v * (7 - i))
    const checksum = weightedVals.reduce((acc, cur) => acc + cur, 0) % 11
    // Steps 12 - 13
    const checkDigit = (11 - checksum) % 10
    // Steps 11, 14
    return checksum !== 0 && checkDigit === nhiConversionNums[6]
  }
  return false
}
