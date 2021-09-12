# nhi-validator

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/elilambnz/nhi-validator/Tests?style=flat-square)
[![npm](https://img.shields.io/npm/v/nhi-validator?style=flat-square)](https://www.npmjs.com/package/nhi-validator)
[![NPM](https://img.shields.io/npm/l/nhi-validator?style=flat-square)](https://github.com/elilambnz/nhi-validator/blob/main/LICENSE.md)

Checks a string against the New Zealand Ministry of Health NHI Validation Routine.

## Getting Started

```
npm install nhi-validator
```

```js
import { validateNHI } from "nhi-validator";

validateNHI("WLD9413"); // => true
```

## License

_nhi-validator_ is available under the MIT License.

## Contact

Eli Lamb - [elilambnz](https://github.com/elilambnz)

## Acknowlegments

New Zealand Ministry of Health NHI Validation Routine retrieved on 09/12/2020 from https://www.health.govt.nz/.

Derived from a Python NHI validation function written by James Ansley https://gist.github.com/James-Ansley/c37f3473e097a2ae4a6eba16e2f8957d.

## Disclaimer

This repository contains NHI numbers provided in examples and tests, however, no identification with actual persons (living or deceased) is intended. If you believe that an NHI number that belongs to a real person has been included in this repository, please get in contact to remove it.
