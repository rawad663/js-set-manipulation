# Welcome to js-set-manipulation
Functions giving you easier control over set 
manipulations (Intersection, Union, Difference, etc...)

## Getting Started
First, we need to install the package with npm:

`npm install --save js-set-manipulation`

We can now start using the package! 

``` javascript
const { set } = require('js-set-manipulation');
const sets = [
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
    [ 2, 4, 6, 8, 10, 12 ],
    [ 1, 2, 4, 8, 16, 32, 64 ]
];

/**
* This is equivalent to:
*
* console.log(set.union(set1, set2, set3));
*/
console.log(set.union(...sets)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16, 32, 64 ]
console.log(set.intersection(...sets)); // [ 2, 4, 8 ]
console.log(set.difference(set1, [ set2, set3 ])); // [ 3, 5, 7, 9 ]
```

The following functions are provided so far:


| Module        | Function           | Input                           | Output |
| ------------- |:------------------:|:-------------------------------:| ------:|
| set           | union              | (Array, (Array, (Array, ...)))  | Array  |
|               | intersection       | (Array, (Array, (Array, ...)))  | Array  |
|               | difference         | (Array, [ Array, Array, ... ])  | Array  |


## Contributing to the project
Please check out [the contribution page](.github/CONTRIBUTING.md) to learn how to contribute to the project.
