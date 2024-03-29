home-file-service Changelog

## [1.4.1](https://github.com/pbabbott/home-file-service/compare/v1.4.0...v1.4.1) (2023-04-24)


### Bug Fixes

* Adjust readme build status ([66e0960](https://github.com/pbabbott/home-file-service/commit/66e0960fa2ba8cb748279d6e400188ec89aea3a3))
* Adjust readme to improve summary ([e25558f](https://github.com/pbabbott/home-file-service/commit/e25558f1ea9a670115ef86595b6d995ab21329e0))
* Clean up ansible playbook slightly ([dc69bb6](https://github.com/pbabbott/home-file-service/commit/dc69bb65a261fd80870cf0a51dae4a92658fdb68))
* Minor adjustment to readme ([4e443bf](https://github.com/pbabbott/home-file-service/commit/4e443bfe97044163b2bfdd28ae9138d5a9ff9226))
* Touch drone file to trigger ci ([45bec5a](https://github.com/pbabbott/home-file-service/commit/45bec5a237171b67ec799a47e677d0323de73ff3))

# [1.4.0](https://github.com/pbabbott/home-file-service/compare/v1.3.0...v1.4.0) (2023-03-29)


### Bug Fixes

* prevent ts-node from being hoisted to workspace root ([75da7eb](https://github.com/pbabbott/home-file-service/commit/75da7eb0caead2aeac4c66e5668ec66f88c4aa3b))


### Features

* Add prometheus to monitor how many files have been moved ([1d4a275](https://github.com/pbabbott/home-file-service/commit/1d4a275bee38e4dba39cdec99e9949303af3cb84))

# [1.3.0](https://github.com/pbabbott/home-file-service/compare/v1.2.2...v1.3.0) (2023-03-29)


### Features

* re-write config pattern to use types ([880561e](https://github.com/pbabbott/home-file-service/commit/880561e5f3953f4dcc8a10c4ae9ab1f3d6adbd95))

## [1.2.2](https://github.com/pbabbott/home-file-service/compare/v1.2.1...v1.2.2) (2023-03-27)


### Bug Fixes

* wait for initial scan and remove file cap ([b5ed64f](https://github.com/pbabbott/home-file-service/commit/b5ed64f0de0ae04cc802932a45e1c038f13b5e14))

## [1.2.1](https://github.com/pbabbott/home-file-service/compare/v1.2.0...v1.2.1) (2023-03-27)


### Bug Fixes

* Attempt to add user and password to service install ([dca71ac](https://github.com/pbabbott/home-file-service/commit/dca71ace0b6b26863ed76dafa55d4812d7b5daa6))

# [1.2.0](https://github.com/pbabbott/home-file-service/compare/v1.1.22...v1.2.0) (2023-03-27)


### Features

* Re-write filewatcher service to move files properly using rxjs streams ([77b2519](https://github.com/pbabbott/home-file-service/commit/77b25192f66a3931886d631facd55c5a584a6c6e))

## [1.1.22](https://github.com/pbabbott/home-file-service/compare/v1.1.21...v1.1.22) (2023-03-24)


### Bug Fixes

* syntax errors in ansible playbook ([cd4a300](https://github.com/pbabbott/home-file-service/commit/cd4a30023003f889c1d48b97d590dc7795accd10))

## [1.1.21](https://github.com/pbabbott/home-file-service/compare/v1.1.20...v1.1.21) (2023-03-24)


### Bug Fixes

* wip on drone deployment pattern ([d18b6a4](https://github.com/pbabbott/home-file-service/commit/d18b6a4d51c43f894db9f147132ddd69a06b36c9))

## [1.1.20](https://github.com/pbabbott/home-file-service/compare/v1.1.19...v1.1.20) (2023-03-24)


### Bug Fixes

* touch file to trigger release ([de47fb9](https://github.com/pbabbott/home-file-service/commit/de47fb9bdce69c79218d8866891994f8200dfe07))

## [1.1.19](https://github.com/pbabbott/home-file-service/compare/v1.1.18...v1.1.19) (2023-03-23)


### Bug Fixes

* attempt to adjust root npmrc settings ([607514f](https://github.com/pbabbott/home-file-service/commit/607514f90abd993fb225d18ef41b9d0c3539eff3))
* attempt to fix ci with .npmrc file in yarn package ([da3ef5e](https://github.com/pbabbott/home-file-service/commit/da3ef5eeff74f7d3b08c0b27d0dce3691463d617))
* disable tool upgrades in ci ([2267218](https://github.com/pbabbott/home-file-service/commit/2267218ab34867e856b56d03b5ba7740c4675115))

## [1.1.18](https://github.com/pbabbott/home-file-service/compare/v1.1.17...v1.1.18) (2023-03-23)


### Bug Fixes

* adjust lockfile ([c151b32](https://github.com/pbabbott/home-file-service/commit/c151b32e2590e89acd51a9ae7b4698ee23e34c71))

## [1.1.17](https://github.com/pbabbott/home-file-service/compare/v1.1.16...v1.1.17) (2023-03-23)


### Bug Fixes

* Add missing files from previous commit ([f802e6b](https://github.com/pbabbott/home-file-service/commit/f802e6b65d50a368737b8a5fa04b53ff29ceec85))
* Add ultra and scripts in root ([59bbf5b](https://github.com/pbabbott/home-file-service/commit/59bbf5b82303d28b321b03a24f4e8664ab99ef2b))
* Adjust changelog and package.json in attempt to fix semantic-release ([e6fb7c4](https://github.com/pbabbott/home-file-service/commit/e6fb7c4ea5dce2d079e80bc0d365c9f723342663))
* Adjust semantic release command to use yarn workspaces ([f73a646](https://github.com/pbabbott/home-file-service/commit/f73a646044e3922e4bab0dee6042d7c40a22cf23))
* Adjust semantic-release to just version home-file-service ([112a9c7](https://github.com/pbabbott/home-file-service/commit/112a9c7e6394626190e5dbcdfecfe43d682fdff9))
* Move changelog to package ([4f0ee9f](https://github.com/pbabbott/home-file-service/commit/4f0ee9f778c465351660a7ca77b9b95782715f9e))
* move cz config to root ([416dbbf](https://github.com/pbabbott/home-file-service/commit/416dbbf98dd3e29f6221ec9c8dabf9bf9c6e7a7a))
* move semantic release config to root ([0604532](https://github.com/pbabbott/home-file-service/commit/060453219afa6e37f52a03089a433577b805a24a))
* Rework project into yarn workspaces ([91ba5f2](https://github.com/pbabbott/home-file-service/commit/91ba5f236a496d88582879cc7ece91770cb29dda))
* Rework project into yarn workspaces ([6ecf22d](https://github.com/pbabbott/home-file-service/commit/6ecf22da7036541fe443b9070f6befeb98e38925))
* semantic-release command ([6e7fe8b](https://github.com/pbabbott/home-file-service/commit/6e7fe8b510b1c52bc0e0d496a71f3c513fc169cd))

## [1.1.16](https://github.com/pbabbott/home-file-service/compare/v1.1.15...v1.1.16) (2023-02-14)


### Bug Fixes

* Remove bogus chars from ansible deploy ([3a235f7](https://github.com/pbabbott/home-file-service/commit/3a235f72d24411115546f408921d6003c3c9a408))

## [1.1.15](https://github.com/pbabbott/home-file-service/compare/v1.1.14...v1.1.15) (2023-02-14)


### Bug Fixes

* Correct path in logging when copyfile fails ([62e2e07](https://github.com/pbabbott/home-file-service/commit/62e2e07b68bef109644909e7b2c0eab33c653a3c))

## [1.1.14](https://github.com/pbabbott/home-file-service/compare/v1.1.13...v1.1.14) (2023-02-14)


### Bug Fixes

* put the service stop back where it was.. ([ebc07f2](https://github.com/pbabbott/home-file-service/commit/ebc07f2c6bcf8ff8cfbd3e91020a5affc78325be))

## [1.1.13](https://github.com/pbabbott/home-file-service/compare/v1.1.12...v1.1.13) (2023-02-14)


### Bug Fixes

* Stop the windows service as the first install step ([04049e7](https://github.com/pbabbott/home-file-service/commit/04049e7995638c78f4c29f22c933099c0f822d60))

## [1.1.12](https://github.com/pbabbott/home-file-service/compare/v1.1.11...v1.1.12) (2023-02-14)


### Bug Fixes

* make error logging output more data ([a78a143](https://github.com/pbabbott/home-file-service/commit/a78a1437277990d33f766b7d471757fb57730c7b))

## [1.1.11](https://github.com/pbabbott/home-file-service/compare/v1.1.10...v1.1.11) (2023-02-14)


### Bug Fixes

* make logs respect config along with game clip service ([a3e1331](https://github.com/pbabbott/home-file-service/commit/a3e133152fe6c9a4085f3857e309ba10e6b27f61))

## [1.1.10](https://github.com/pbabbott/home-file-service/compare/v1.1.9...v1.1.10) (2023-02-13)


### Bug Fixes

* attempt to fix winston file transport ([c54c052](https://github.com/pbabbott/home-file-service/commit/c54c052f3b5f6c23e01d36df4f97e4fc5a4843b9))
* fix bug in config module where default config was not being used ([d24d289](https://github.com/pbabbott/home-file-service/commit/d24d28951a367d8b5dad991381363e2261b4e042))

## [1.1.9](https://github.com/pbabbott/home-file-service/compare/v1.1.8...v1.1.9) (2023-02-13)


### Bug Fixes

* attempt to fix file exists check for config ([a9a4b8a](https://github.com/pbabbott/home-file-service/commit/a9a4b8a8439a1427cbe5bc3cb339c836118afb15))

## [1.1.8](https://github.com/pbabbott/home-file-service/compare/v1.1.7...v1.1.8) (2023-02-13)


### Bug Fixes

* Add more logging to config module ([bda088f](https://github.com/pbabbott/home-file-service/commit/bda088f42c1db83f9d22d1f5deedf62de1a74dee))

## [1.1.7](https://github.com/pbabbott/home-file-service/compare/v1.1.6...v1.1.7) (2023-02-13)


### Bug Fixes

* Attempt to improve service installation routine ([13387d9](https://github.com/pbabbott/home-file-service/commit/13387d99c297a8eb663d2b3dfc120751f0b803cb))

## [1.1.6](https://github.com/pbabbott/home-file-service/compare/v1.1.5...v1.1.6) (2023-02-13)


### Bug Fixes

* adjust uninstall script ([dbfc26b](https://github.com/pbabbott/home-file-service/commit/dbfc26b5a038615892582c6a402c0353bd648091))

## [1.1.5](https://github.com/pbabbott/home-file-service/compare/v1.1.4...v1.1.5) (2023-02-13)


### Bug Fixes

* **package.json:** install/uninstall path ([3404765](https://github.com/pbabbott/home-file-service/commit/34047659337fcda7b704dd08e685037a8afc75aa))

## [1.1.4](https://github.com/pbabbott/home-file-service/compare/v1.1.3...v1.1.4) (2023-02-13)


### Bug Fixes

* make build directory make more sense ([e9e12da](https://github.com/pbabbott/home-file-service/commit/e9e12daffe73021c96c58560886256ebb4c92977))

## [1.1.3](https://github.com/pbabbott/home-file-service/compare/v1.1.2...v1.1.3) (2023-02-12)


### Bug Fixes

* Update node-windows path to script entrypoint ([d8ed6a0](https://github.com/pbabbott/home-file-service/commit/d8ed6a0f8a784826a6d268d2c7a0e4b6b35c23d6))

## [1.1.2](https://github.com/pbabbott/home-file-service/compare/v1.1.1...v1.1.2) (2023-02-12)


### Bug Fixes

* Ensure installation scripts path is correct ([4a5687a](https://github.com/pbabbott/home-file-service/commit/4a5687a27dcca0f4d485e983dba2882e3f0c4603))
* Ensure installation scripts path is correct ([628ca1e](https://github.com/pbabbott/home-file-service/commit/628ca1ed0bc51ebf24c68ea1cb8572c81cc888f3))

## [1.1.1](https://github.com/pbabbott/home-file-service/compare/v1.1.0...v1.1.1) (2023-02-12)


### Bug Fixes

* Ensure windows installation scripts are in lib ([88824c0](https://github.com/pbabbott/home-file-service/commit/88824c0df81c92a6503d3a28fdfe321e5224889f))

# [1.1.0](https://github.com/pbabbott/home-file-service/compare/v1.0.9...v1.1.0) (2023-02-12)


### Bug Fixes

* Ensure config file gets copied to remote as well ([0c2308f](https://github.com/pbabbott/home-file-service/commit/0c2308fecc7b400099f6bf6568b85607c160b3ac))
* update ansible deployment script to update the windows service ([e76c84c](https://github.com/pbabbott/home-file-service/commit/e76c84c52189db0dfa12c61b036280ddba6585c4))
* Update readme and fix config defaults ([780ad42](https://github.com/pbabbott/home-file-service/commit/780ad42f85df3b9d227b717c9d982d169b4ba78a))


### Features

* add in ability to specify a config file and WIP on express.js server ([dfcb712](https://github.com/pbabbott/home-file-service/commit/dfcb7124cacfe4d7ebd6f872fa00de12e866d3a4))
* improve logging, express app, and configuration ([d77d467](https://github.com/pbabbott/home-file-service/commit/d77d4678722450f0d946c1e3310ee055ac051f39))

## [1.0.9](https://github.com/pbabbott/home-file-service/compare/v1.0.8...v1.0.9) (2023-02-12)


### Bug Fixes

* Adjust ansible deployment to output debug variable into file ([407208e](https://github.com/pbabbott/home-file-service/commit/407208e9ed729a01b902e081bf142fe5064f1106))
* **ansible/main.yml:** fix regex replace so proper version tag appears ([aae5f92](https://github.com/pbabbott/home-file-service/commit/aae5f92bb46afcab7925b31c425344f6d3a4fc72))

## [1.0.8](https://github.com/pbabbott/home-file-service/compare/v1.0.7...v1.0.8) (2023-02-12)


### Bug Fixes

* attempt to make drone triggers make more sense ([7fe8728](https://github.com/pbabbott/home-file-service/commit/7fe8728a83d4b28322f18c3cd5b9339853aeee8f))

## [1.0.7](https://github.com/pbabbott/home-file-service/compare/v1.0.6...v1.0.7) (2023-02-11)


### Bug Fixes

* attempt to prevent CD from ocurring unnecessarily ([b65b1ab](https://github.com/pbabbott/home-file-service/commit/b65b1ab727fd7ac440945e86f30d3d4a0c8c6d7d))

## [1.0.6](https://github.com/pbabbott/home-file-service/compare/v1.0.5...v1.0.6) (2023-02-11)


### Bug Fixes

* attempt to make ansible depoloyment respect version tag ([53d748e](https://github.com/pbabbott/home-file-service/commit/53d748e28becad9bd0ea8bc670148cdf7d2562c0))
* empty fix to bump version and test trigger ci ([f10fb79](https://github.com/pbabbott/home-file-service/commit/f10fb7953ea023630dcceaef50695f3a64dc4108))

## [1.0.5](https://github.com/pbabbott/home-file-service/compare/v1.0.4...v1.0.5) (2023-02-11)


### Bug Fixes

* attempt adding drone commit and branch to ansible scripts ([1e3dff0](https://github.com/pbabbott/home-file-service/commit/1e3dff033478673bb46f6828999445702b976791))

## [1.0.4](https://github.com/pbabbott/home-file-service/compare/v1.0.3...v1.0.4) (2023-02-07)


### Bug Fixes

* **relase.config.js:** fix semantic release configuration structure to with with git and changelog ([15fc932](https://github.com/pbabbott/home-file-service/commit/15fc932de0c57edf6342f753e12a9aaec85c7fd0))
