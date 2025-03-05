import { Plugin, TFile, Notice } from 'obsidian';
import { startsWithEmojiAndSpace, removeEmojiAndSpace, getRandomEmoji } from './utils';

export default class RandomEmojiTitlePlugin extends Plugin {

	async onload() {
		console.log('Random Emoji Title Plugin is loading');

		this.registerCommands();
	}

	private registerCommands(): void {
		this.addCommand({
			id: 'generate-random-emoji-in-note-title',
			name: 'Generate emoji in note title',
			callback: async () => this.addOrUpdateRandomEmojiToActiveFile()
		});
	}

	private async addOrUpdateRandomEmojiToActiveFile(): Promise<void> {

		const activeFile = this.app.workspace.getActiveFile();
		
		if (!activeFile) {
			new Notice('No active file');
			return;
		}
		
		try {
			let basename = activeFile.basename;


			if (startsWithEmojiAndSpace(basename)) {
				basename = removeEmojiAndSpace(basename);
			}

			const emoji = getRandomEmoji();
			const newBaseName = `${emoji} ${basename}`;
			const newFileName = `${newBaseName}.${activeFile.extension}`;			

			const dir = activeFile.parent?.path || '';
			const newPath = dir ? `${dir}/${newFileName}` : newFileName;

			await this.app.fileManager.renameFile(activeFile, newPath);
		} catch (error) {
			console.error('Error renaming file:', error);
			new Notice(`Error renaming file: ${error.message || 'Unknown error'}`);
		}
	}

	onunload() {
		console.log('Random Emoji Title Plugin unloaded');
	}
}
