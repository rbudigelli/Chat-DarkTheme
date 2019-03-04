**This is basically a [Electron Quick Start App](https://electronjs.org/docs/tutorial/quick-start) that loads [Google Chat](https://chat.google.com) using a [Dark Theme](https://userstyles.org/styles/156817/google-chat-solarized-dark).**


## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/mark-mccullough/Chat-DarkTheme
# Go into the repository
cd Chat-DarkTheme
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## To Build .app file From Project Root
```electron-packager . --overwrite --platform=darwin --arch=x64 --prune=true --out=release-builds```

## To build DMG File
1. Copy the .app file to a new folder named `GoogleChatDark` on your desktop
2. Use Disk Utility > File > New Image... > New Image From Folder
3. Choose the folder where .app was copied to
4. When the dialog appears, choose Image Format > read/write and 'save'
5. Once DMG is generated, double-click to mount it
6. From command line, navigate into the DMG `cd /Volumes/GoogleChatDark`
7. Create a link to Applications folder `ln -s /Applications Applications`

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
