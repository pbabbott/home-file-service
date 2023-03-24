# home-file-service
A service to help with renaming files on my home computers.

[![Build Status](https://drone.abbottland.duckdns.org/api/badges/pbabbott/home-file-service/status.svg?ref=refs/heads/main)](https://drone.abbottland.duckdns.org/pbabbott/home-file-service)

## What is this?

This project is a window service that runs on my gaming computer that helps keep my files organized.  It is able to monitor a capture directory and move files onto my NAS.

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


### Requirements

```sh
pip install --user pywinrm
```

### Deployment Command

Adjust the tag to whichever version you'd like to deploy.
```sh
ansible-playbook --extra-vars DRONE_COMMIT_REF=refs/tags/v1.1.20 main.yml
```


## Configuration

This project will look for a file called `config.yml` in the application base directory.

If none is found, the following configuration will be used.

Specifying a partial YAML file is ok, as configuration override values are deeply merged with the default settings.

```yaml
default:
  captureDirectory: "C:\\Users\\pbabb\\Videos\\Captures"
  outputDirectory: "V:\\GameCaptures\\Raw"
  logging:
    level: debug
    colorize: true
  port: 4000
```




