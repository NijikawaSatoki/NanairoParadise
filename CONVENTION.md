# This Project's Naming Conventions

## About

This document is in regards to the convention used with naming various things within this project's JavaScript (`.js`) files.

Any contributors are encouraged to follow the laid out conventions, even if only whilst contributing to this project.

This is a variation of the C convention.

## The Convention

Variables (declared with `var` and `let`) shall be in camelCase.
For example: `user`, `lastName`

Constants (declared with `const`) shall be in ALL\_CAPS\_SNAKE_CASE.
For example: `PI`, `MINUTES_PER_HOUR`

Private fields and methods shall have their names prefixed with an underscore (_).
For example: `_name`, `_setAge`

The dollar sign ($) may be prefixed onto variables and constants that store the result of `querySelector()`.
This is optional, however.
For example: `$imgArtwork`, `$SPOILER`

Functions and methods shall be in PascalCase.
For example: `DoSomething()`

Any framework or library specific stuff can have their names suffixed with a dollar sign ($), when able.
