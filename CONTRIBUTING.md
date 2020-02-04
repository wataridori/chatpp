# Contribution Guidelines
If you can understand Vietnamese, please refer [this post in Viblo](https://viblo.asia/thangtd90/posts/157G5noZvAje),
which describes in detail about how to contribute to Chat++.

## Setup
### Requirement
- Nodejs: Version 10 or 11 recommended

### Instalation
- Install `nodejs` first, if you do not have.
- You can use `npm` or `yarn` to install dependencies. Here, `yarn install` is being used to install the required node modules.
- Chat++ uses [ESLint](http://eslint.org/) for checking code styles. It uses `eslint-babel` parser instead of the default ESLint parser.
You have to install them first.
```
npm install -g eslint babel-eslint
```
- You can refer the [.eslintrc.json](./.eslintrc.json) file for the rules that Chat++ is following. Check [ESLint Rules Document](http://eslint.org/docs/rules/)
for the rules in detail.
- [Laravel Mix](https://laravel-mix.com/), a Webpack wrapper, is being used to compile assets. You can check out the usage at their [documentation page](https://laravel-mix.com/docs/2.1/mixjs). 
- Run `npm run dev` to build codes from `src` folder.
- Run `npm test` or `eslint src` to check whether your codes satisfy the coding conventions or not.

## Report an Issue

Please follow the guidelines below when creating an issue so that your issue can be more promptly resolved:

* Provide us as much information as you can. If possible, please describe the steps for reproducing the issue. A screenshot or a gif image to explain the issue is very appreciated. :+1:

* Please search through [existing issues](../../issues/) to see if your issue is already reported or fixed to make sure you are not reporting a duplicated issue.

## Contribute to the project
- With Pull Requests about the new features, bug fixes, code refactoring ... please send to **develop** branch.
- With Pull Requests for the **Firefox version** ... please send to **firefox** branch.

They are always welcome. :+1:


