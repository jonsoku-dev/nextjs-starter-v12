## Install

https://github.com/release-it/release-it
https://github.com/release-it/conventional-changelog

```bash
$ yarn add --dev release-it @release-it/conventional-changelog
```

## Configuration

Out of the box, release-it has sane defaults, and plenty of options to configure it. Most projects use a
.release-it.json in the project root, or a release-it property in package.json.

→ See Configuration for more details.

Here's a quick example .release-it.json:

```json
{
  "git": {
    "commitMessage": "chore: release v${version}"
  },
  "github": {
    "release": true
  }
}
```
