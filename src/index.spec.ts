import { expect } from "chai"

import { validateNHI } from './index'

describe("validateNHI()", function () {
  describe("Valid", function () {
    const validExs = [
      "ZZZ0016",
      "ZZZ0024",
      "MCJ1984",
      "EPT6335",
      "CGC2720",
      "ZAC5361",
    ];

    validExs.forEach((ex) => {
      it("should return true for valid NHI numbers", function () {
        expect(validateNHI(ex)).to.be.true;
      });
    });
  });

  describe("Invalid", function () {
    const invalidExs = [
      "ZZZ0044",
      "DAB8233",
      "ZZZ0044",
      "not an NHI",
      "1234567890",
    ];

    invalidExs.forEach((ex) => {
      it("should return false for invalid NHI numbers", function () {
        expect(validateNHI(ex)).to.be.false;
      });
    });
  });
});
