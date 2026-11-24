#!/bin/sh
set -eu
mkdir -p .external
curl --fail --location --silent --show-error \
  https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz \
  --output .external/is-number-7.0.0.tgz
tar -xzf .external/is-number-7.0.0.tgz -C .external
printf 'Downloaded is-number@7.0.0 into .external/package\n'
