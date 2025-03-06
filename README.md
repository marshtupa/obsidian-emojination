# Emojination for Obsidian

A simple plugin that adds random emojis to your note titles in Obsidian, making your vault more colorful and expressive.

![output](https://github.com/user-attachments/assets/be7c0c22-3345-4e42-9774-9c7bfcb61bb0)


## What it Does

Emojination allows you to add random emojis to the beginning of your note titles with a single command. If a note already has an emoji at the start, the plugin will replace it with a new random one.

## How to Use

1. Open a note in your Obsidian vault
2. Open the command palette (Ctrl/Cmd + P)
3. Search for and select "Generate emoji in note title"
4. A random emoji will be added to the beginning of your note title

You can also set up a keyboard shortcut for quick access:
1. Go to Settings > Hotkeys
2. Search for "Emojination: Generate emoji in note title"
3. Click the "+" icon to add your preferred key combination

The plugin intelligently handles existing emojis:
- If your title already has an emoji at the beginning, it will be replaced
- If not, a new emoji will be added to the start of the title

## Installation

### From Obsidian Community Plugins (Recommended)
1. Open Obsidian Settings
2. Go to "Community plugins" and disable "Safe mode"
3. Click "Browse" and search for "Emojination"
4. Install the plugin and enable it

### Manual Installation
1. Download `manifest.json` and `main.js` from the latest release
2. Create a folder called `obsidian-emojination` in your vault's `.obsidian/plugins/` directory
3. Copy the downloaded files into this folder
4. Restart Obsidian and enable the plugin in Settings > Community plugins

## For Developers

### Setup Development Environment
1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start compilation in watch mode

### Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue if you have suggestions for improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
