## v1.0.1 - Clearer Slug Guidance
Docs and packaging now spotlight how slug turns text into ASCII-safe IDs inside the Instago runtime, and examples reference the latest usage patterns.

### Added
- Added a technical reference that spells out the Instago V8 runtime, exports, configuration notes, and quick-start examples.

### Changed
- Pointed the README examples and dependency descriptions at `slug@latest` so consumers follow the same release stream as the module entry point.
- Updated the ASCII helper requirement to `ascii@latest` to keep fallback characters consistent with the current runtime.

### Fixed
- Ensured `selfTest` and the module entry point both load `slug@latest`, preventing stale imports during sanity checks.
