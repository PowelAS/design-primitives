# design-primitives

[![Build Status](https://dev.azure.com/powelcomponentregistry/powelcomponentregistry/_apis/build/status/PowelAS.design-primitives?branchName=master)](https://dev.azure.com/powelcomponentregistry/powelcomponentregistry/_build/latest?definitionId=3&branchName=master)

Global design primitives/tokens to be used across Powel's products

## Packages

- [design-colors](https://github.com/PowelAS/design-primitives/tree/master/packages/%40powel/design-colors)
- [design-spacing](https://github.com/PowelAS/design-primitives/tree/master/packages/%40powel/design-spacing)
- [design-media-queries](https://github.com/PowelAS/design-primitives/tree/master/packages/%40powel/design-media-queries)

## Release process

When you push commits to the `next` branch repo-cooker will create a beta release which you can install with `npm install yourpackage@next`.

When pushing to the `master` branch repo-cooker creates a stable release with release notes retrieved from the commit messages.

Commits with the `fix` type trigger a patch version release, commits with `feat` type a minor version release and commits with breaking changes a major version release. Commits containing other types will not trigger any release.
