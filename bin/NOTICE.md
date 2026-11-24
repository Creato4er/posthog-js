# Bundled executable inventory

`bundled-tool` is a precompiled self-contained executable. Its embedded component inventory is `miniz@3.0.2` (MIT), a zlib-compatible compression library. The component and version are also recorded in `bundled-tool.dependencies.txt` and in the executable's embedded strings so binary scanners can identify the relationship.
