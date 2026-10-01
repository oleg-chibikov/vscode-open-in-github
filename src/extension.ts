import * as vscode from "vscode";
import { openQuickPickItem, copyQuickPickItem } from "./common";
import fileCommand from "./file";
import blameCommand from "./blame";
import historyCommand from "./history";

export function activate(context: vscode.ExtensionContext) {
  const openFile = fileCommand(openQuickPickItem);
  const copyFile = fileCommand(copyQuickPickItem);

  context.subscriptions.push(
    // The editor context menu passes the file uri too, drop it to keep the selected lines.
    vscode.commands.registerCommand("openInGithub.openInGitHubFile", () =>
      openFile()
    ),
    vscode.commands.registerCommand(
      "openInGithub.openInGitHubBlame",
      blameCommand(openQuickPickItem)
    ),
    vscode.commands.registerCommand(
      "openInGithub.openInGitHubHistory",
      historyCommand(openQuickPickItem)
    ),
    vscode.commands.registerCommand("openInGithub.copyInGitHubFile", () =>
      copyFile()
    ),
    vscode.commands.registerCommand(
      "openInGithub.openInGitHubExplorer",
      openFile
    ),
    vscode.commands.registerCommand(
      "openInGithub.copyInGitHubExplorer",
      copyFile
    ),
    vscode.commands.registerCommand(
      "openInGithub.copyInGitHubBlame",
      blameCommand(copyQuickPickItem)
    ),
    vscode.commands.registerCommand(
      "openInGithub.copyInGitHubHistory",
      historyCommand(copyQuickPickItem)
    )
  );
}
