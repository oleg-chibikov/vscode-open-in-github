# Open in Remote Repo

Opens or copies a link to the current file or folder on GitHub, GitLab or Bitbucket.

A fork of [Open in GitHub](https://github.com/d4rkr00t/vscode-open-in-github) by Stanislav Sysoev.

## Installation

Launch VS Code Quick Open (⌘+P), paste the following command, and press Enter.

```
ext install oleg-chibikov.open-in-remote-repo
```

Uninstall the original Open in GitHub first. Both use the same command ids.

## Usage

When editing a file, run these from the command palette (cmd + shift + p / ctrl + shift + p):

- **Remote Repo: Open File URL** opens the file, with the selected lines.
- **Remote Repo: Open Blame URL** opens the blame.
- **Remote Repo: Open History URL** opens the history.
- **Remote Repo: Copy File URL**, **Copy Blame URL**, **Copy History URL** copy the same links.

Right click a file or folder in the Explorer to open or copy its URL.

## Features

- Links to main or master. Uses the current branch only when the file isn't on main yet.
- Supports in-house GitHub installations.
- Works with Bitbucket and Gitlab.
- Configurable default branch.
- Open/Copy multiline selection.

## Configuration

Add these lines to the workspace settings:

```js
{
  ...
  // Branch to link to first, empty means the remote default, then main, then master
  "openInGitHub.defaultBranch": "",
  "openInGitHub.defaultRemote": "origin",

  // Allows mapping from one remote to another when generating a URL
  "openInGitHub.remoteURLMapping": {
    "https://mirror.github.com": "https://github.com",
  }
  ...
}
```

## Links

Logo taken from here: [https://octodex.github.com/](https://octodex.github.com/)
