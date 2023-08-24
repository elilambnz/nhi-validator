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
      'ZBN77VL',
      'ZZZ00AC',
      'ZDR69YX',
      'ZSC21TN',
      'ZZB30NH',
      'ZYZ81ZV',
      'ZVB97XQ',
      'ZRA29VA',
      'ZYX61YS',
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
