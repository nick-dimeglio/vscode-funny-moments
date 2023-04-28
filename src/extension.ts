// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const videos = [
	"Zxl28UgHpn0",
	"mn-Tlb_wfjc",
	"rROQPPTdQGs",
	"i0mfOuMLykM"
];

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('family-guy-funny-moments.funnies', () => {
		const column = { viewColumn: vscode.ViewColumn.Beside, preserverFocus: true };
		const options = { enableScripts: true };

		const panel = vscode.window.createWebviewPanel('funny-moments.video', "This code boring ah hell", column, options);
        let randomNum = Math.floor(Math.random() * 4);
		const video = videos[randomNum];

		panel.reveal();
		panel.webview.html = `
            <html lang="en"> 
                <head>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        #video {
                            display: flex;
                            flex-flow: column nowrap;
                            justify-content: center;
                            align-items: center;
                            width: 100%;
                            height: 100%;
                        }
                    </style>
                </head>
                <body>
                    <div id="video">
						<video autoplay muted controls width="300">
							<source src="https://yewtu.be/latest_version?id=${video}&amp;itag=22#t=100">
						</video>
					</div>
                </body>
            </html>
        `;
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
