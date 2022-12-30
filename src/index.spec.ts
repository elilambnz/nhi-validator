import { expect } from 'chai'

import { validateNHI } from './index'

describe('validateNHI()', function () {
  describe('Valid', function () {
    const validExs = [
      // Old format
      'ZZZ0016',
      'ZZZ0024',
      'MCJ1984',
      'EPT6335',
      'CGC2720',
      'ZAC5361',
      // New format
      'ZBC42DQ',
      'ZZZ00AX',
      'ZGT56KB',
      'ZHS91BR',
      'ZHW58CN',
      'ZLV86AX',
      'ZZZ00ZZ',
      'ZVU27KZ',
      'ZZZ99ZJ',
      'AAA00AD',
    ]

    validExs.forEach((ex) => {
      it('should return true for valid NHI numbers', function () {
        expect(validateNHI(ex)).to.be.true
      })
    })
  })

  describe('Invalid', function () {
    const invalidExs = [
      'not an NHI',
      '1234567890',
      // Old format
      'ZZZ0044',
      'DAB8233',
      // New format
      'ZZZ00AA',
      'ZHW58CZ',
      'ZZZ99ZS',
      'AAA00AB',
    ]

    invalidExs.forEach((ex) => {
      it('should return false for invalid NHI numbers', function () {
        expect(validateNHI(ex)).to.be.false
      })
    })
  })
})
