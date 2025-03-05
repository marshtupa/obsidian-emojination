# Emojination for Obsidian

A simple plugin that adds random emojis to your note titles in Obsidian, making your vault more colorful and expressive.

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

# Obsidian Emojination Plugin

Based on the files examined, this is an Obsidian plugin called "obsidian-emojination" that adds random emojis to note titles in Obsidian. Here's a summary of what the plugin does:

## Functionality
- The plugin provides a command "Generate emoji in note title" that users can run
- When triggered, it:
  - Checks if the note title already has an emoji at the beginning
  - Removes any existing emoji if present
  - Generates a random emoji and adds it to the beginning of the note title
  - Renames the file with the new emoji-prefixed title

## Implementation Details
- The plugin is written in TypeScript
- It uses two npm packages for emoji handling:
  - `node-emoji`: For getting random emojis
  - `emoji-regex`: For detecting and working with emojis in strings
- It contains utility functions in `utils.ts`:
  - `startsWithEmojiAndSpace()`: Checks if a string starts with an emoji followed by a space
  - `removeEmojiAndSpace()`: Removes the emoji and space from the beginning of a string
  - `getRandomEmoji()`: Gets a random emoji using the node-emoji library

## Project Structure
- Standard Obsidian plugin structure with TypeScript
- Main functionality is in `main.ts` which defines the plugin class
- Utility functions in `utils.ts`
- Built version in `main.js`
