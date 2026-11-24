# Dependency Fixture

A minimal Node.js app for scanning four dependency acquisition patterns.

## Run

Requires Node.js 22+ and npm.

```sh
npm install
npm start
```

## Dependency examples

1. **Runtime download:** `runtime-fetch.mjs` fetches pinned `left-pad@1.3.0` directly from esm.sh and imports it without adding it to `package.json`.
   ```sh
   node runtime-fetch.mjs
   ```
2. **External library from an install script:** `scripts/install-external.sh` downloads the pinned `is-number@7.0.0` npm tarball with curl and extracts it outside `node_modules`.
   ```sh
   npm run install:external
   ```
3. **System-level dependencies:** `Dockerfile` installs Debian packages `ca-certificates` and `curl`; `os-packages.txt` lists them separately from npm packages.
4. **Dependencies embedded in a precompiled binary:** `bin/bundled-tool` is a checked-in precompiled executable with embedded `miniz@3.0.2`; its binary inventory is in `bin/bundled-tool.dependencies.txt` and `bin/NOTICE.md`.

The normal app uses one direct npm dependency, `kleur@4.1.5`. Its transitive dependency graph is recorded by `package-lock.json`. The extra acquisition examples are opt-in, so `npm install` and `npm start` stay simple.

This is a dependency-scanning fixture, not a production app. Runtime downloads and installer downloads require network access when explicitly run.
