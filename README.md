# nhi-validator

[![Build Status](https://img.shields.io/github/workflow/status/elilambnz/nhi-validator/CI?style=flat-square&label=CI)](https://github.com/elilambnz/nhi-validator/actions?query=workflow%3ACI+branch%3Amain)
[![CodeQL](https://img.shields.io/github/workflow/status/elilambnz/nhi-validator/CodeQL?style=flat-square&label=CodeQL)](https://github.com/elilambnz/nhi-validator/actions?query=workflow%3ACodeQL+branch%3Amain)
[![MIT License](https://img.shields.io/npm/l/nhi-validator?style=flat-square)](https://github.com/elilambnz/nhi-validator/blob/main/LICENSE.md)
[![NPM Version](https://img.shields.io/npm/v/nhi-validator?style=flat-square)](https://www.npmjs.com/package/nhi-validator)
[![NPM Bundle Size](https://img.shields.io/bundlephobia/min/nhi-validator?style=flat-square)](https://bundlephobia.com/package/nhi-validator)

Checks a string against the New Zealand Ministry of Health NHI Validation Routine.

## Getting Started

```sh
npm install nhi-validator
```

```js
import { validateNHI } from 'nhi-validator'

validateNHI('WLD9413') // => true
```

## License

_nhi-validator_ is available under the MIT License.

## Contact

Eli Lamb - [elilambnz](https://github.com/elilambnz)  
James Ansley - [James-Ansley](https://github.com/James-Ansley)

## Acknowledgments

New Zealand Ministry of Health NHI Validation Routine retrieved on 09/12/2020 from https://www.health.govt.nz.

Accepts old and new format introduced in July 2020 https://www.health.govt.nz/our-work/health-identity/national-health-index/upcoming-changes-nhi-numbers.

Derived from a Python NHI validation function written by James Ansley https://gist.github.com/James-Ansley/c37f3473e097a2ae4a6eba16e2f8957d.

## Disclaimer

This repository contains NHI numbers provided in examples and tests, however, no identification with actual persons (living or deceased) is intended. If you believe that an NHI number that belongs to a real person has been included in this repository, please get in contact to remove it.

## Contributing

If you're interested in contributing, please read our [contributing docs](https://github.com/elilambnz/nhi-validator/blob/master/CONTRIBUTING.md) **before submitting a pull request**.
