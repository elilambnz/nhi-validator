/**
 * Checks a string against the New Zealand Ministry of Health NHI Validation Routine
 * Updated to accept old and new format introduced in July 2020
 * https://www.health.govt.nz/our-work/health-identity/national-health-index/upcoming-changes-nhi-numbers
 *
 * @param nhi - A potential NHI number
 * @returns `true` if the given string satisfies the New Zealand NHI Validation Routine and `false` otherwise
 *
 */
export const validateNHI = (nhi: string) => {
  const oldNhiRegex = new RegExp(/^[A-HJ-NP-Z]{3}[0-9]{4}$/); // e.g. ABC1234
  const newNhiRegex = new RegExp(/^[A-HJ-NP-Z]{3}\d{2}[A-HJ-NP-Z]{2}$/); // e.g. ABC12AB
  const matchesOldNHIRegex = oldNhiRegex.test(nhi);
  const matchesNewNHIRegex = newNhiRegex.test(nhi);
  
  // Steps 1 - 2
  if (matchesOldNHIRegex || matchesNewNHIRegex) {
    // Character conversion numbers as defined by the NHI Validation Routine
    const nhiConversionNums = [...nhi].map((c) =>
      !isNaN(Number(c))
        ? Number(c)
        : c.charCodeAt(0) -
          "@".charCodeAt(0) -
          ("I" < c ? 1 : 0) -
          ("O" < c ? 1 : 0)
    );
    // Steps 3 - 9
    const weightedVals = nhiConversionNums
      .slice(0, -1)
      .map((v, i) => v * (7 - i));
    // Steps 10 - 14
    const checkSum = weightedVals.reduce((acc, cur) => acc + cur, 0) % (matchesOldNHIRegex ? 11 : 24);
    if (matchesOldNHIRegex && checkSum === 0) return false; 
    let checkDigit = ((matchesOldNHIRegex ? 11 : 24) - checkSum);
    // if old NHI then Mod 10 to convert 10 to 0.
    checkDigit = matchesOldNHIRegex ? calculatedDigit % 10 : calculatedDigit;
    // Steps 15
    return checkDigit === nhiConversionNums[6];
  }
  return false;
};
