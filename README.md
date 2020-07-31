# Treasure JavaScript 2020

## Requirements

| tool | version |
|:----:|:-------:|
| node | 12.* |

## Setup

```sh
$ make
/Applications/Xcode.app/Contents/Developer/usr/bin/make -C slide install
yarn
yarn install v1.22.4
warning package.json: No license field
warning No license field
[1/4] 🔍  Resolving packages...
success Already up-to-date.
✨  Done in 0.20s.
```

### Local Server

```sh
$ make -C slide local-server
yarn run start
yarn run v1.22.4
warning package.json: No license field
$ marp -ws .
[  INFO ] [Server mode] Start server listened at http://localhost:8080/ ...
```
