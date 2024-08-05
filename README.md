# nhi-validator

[![Build Status](https://img.shields.io/github/actions/workflow/status/elilambnz/nhi-validator/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/elilambnz/nhi-validator/actions?query=workflow%3ACI+branch%3Amain)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/elilambnz/nhi-validator/codeql-analysis.yml?branch=main&style=flat-square&label=CodeQL)](https://github.com/elilambnz/nhi-validator/actions?query=workflow%3ACodeQL+branch%3Amain)
[![MIT License](https://img.shields.io/npm/l/nhi-validator?style=flat-square)](https://github.com/elilambnz/nhi-validator/blob/main/LICENSE.md)
[![NPM Version](https://img.shields.io/npm/v/nhi-validator?style=flat-square)](https://www.npmjs.com/package/nhi-validator)
[![NPM Bundle Size](https://img.shields.io/bundlephobia/min/nhi-validator?style=flat-square)](https://bundlephobia.com/package/nhi-validator)

Checks a string against the New Zealand Ministry of Health NHI Validation
Routine.
Supports the old and new NHI number formats specified in
[HISO 10046:2023](https://www.tewhatuora.govt.nz/publications/hiso-100462023-consumer-health-identity-standard/).

## Getting Started

```sh
npm install nhi-validator
```

```js
import {validateNHI} from 'nhi-validator'

validateNHI('WLD9413') // => true
validateNHI('zsc21tn') // => true
validateNHI('zzZ0044') // => false
validateNHI('ZZZ00AA') // => false
```

Checks are case-insensitive.

### Excluding Testcases

NHI numbers that begin with `Z` are reserved for testing.
If you wish to exclude these values, you will need to manually check for a `Z`
prefix:

```js
import {validateNHI} from 'nhi-validator'

let value = 'zvb97xq'

validateNHI(value) // => true
!value.toUpperCase().startsWith('Z') && validateNHI(value) // => false
```

## License

_nhi-validator_ is available under the MIT License.

## Maintainers

Eli Lamb - [elilambnz](https://github.com/elilambnz)  
James Ansley - [James-Ansley](https://github.com/James-Ansley)

## See Also

- https://www.tewhatuora.govt.nz/publications/hiso-100462023-consumer-health-identity-standard/
- https://www.tewhatuora.govt.nz/our-health-system/digital-health/health-identity/national-health-index/information-for-health-it-vendors-and-developers

## Acknowledgments

Derived from [python-nhi](https://github.com/James-Ansley/python-nhi) written by
[James Ansley](https://github.com/James-Ansley).

## Disclaimer

This repository contains NHI numbers provided in examples and tests, however, no
identification with actual persons (living or deceased) is intended. If you
believe that an NHI number that belongs to a real person has been included in
this repository, please get in contact to remove it.

## Contributing

If you're interested in contributing, please read
our [contributing docs](https://github.com/elilambnz/nhi-validator/blob/master/CONTRIBUTING.md)
**before submitting a pull request**.
