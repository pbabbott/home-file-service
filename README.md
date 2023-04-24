# home-file-service
A service to help with managing video game clips recorded on my gaming pc to ultimately move them onto my NAS in an organized fashion so that video editing is a breeze!

[![Build Status](https://drone.abbottland.io/api/badges/pbabbott/home-file-service/status.svg?ref=refs/heads/main)](https://drone.abbottland.io/pbabbott/home-file-service)

## What is this?

This project is an express.js API installed as a window service that runs on my gaming computer that helps keep my files organized.  It is able to monitor a capture directory and move files onto my NAS.

## Development

### 1. Authenticate to the artifact repo
Set an `NPM_TOKEN`.  This project uses an `.npmrc` file so that my NAS will serve as an upstream registry.  To authenticate, be sure to have a valid `NPM_TOKEN` set!

### 2. Restore packages
Restore Packages with yarn v1
```sh
yarn
```

### 3. Start the service
Run the project in dev mode (this won't install a windows service)
```sh
yarn start:dev
```

# Deployment

## Installation

This project is installed via `ansible`.  The playbook called `ansible/main.yml` will install this project as a windows-service on a target machine.  The ability to un-install and install a windows service is managed by the package `node-windows` (see more here: https://www.npmjs.com/package/node-windows).


### Deployment Command

Deployments are managed by Drone using CI/CD.

## Configuration

This project will look for a file called `config.yml` in the application base directory.

If none is found, the following configuration will be used.

Specifying a partial YAML file is ok, as configuration override values are deeply merged with the default settings.

Here are the default settings.

```yaml
default:
  gameClipConfig:
    captureDirectory: 'C:\\Users\\pbabb\\Videos\\Captures',
    outputDirectory: 'V:\\GameCaptures\\Raw',
    monitoringConfig:
      waitForInitialScan: true
      maxFiles: null
    gameClipMoveConfig:
      noOpe: false
      copyMode: true
  logging:
    level: debug
    colorize: true
  port: 4000
```




