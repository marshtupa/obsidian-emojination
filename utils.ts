import * as emojiLib from 'node-emoji';
import emojiRegex from 'emoji-regex';

export function startsWithEmojiAndSpace(str: string): boolean {
	const regex = emojiRegex();
	const match = regex.exec(str);
	return match !== null && match.index === 0 && str[match[0].length] === ' ';
}

export function removeEmojiAndSpace(str: string): string {
	const regex = emojiRegex();
	const match = regex.exec(str);
	if (match && match.index === 0 && str[match[0].length] === ' ') {
		return str.slice(match[0].length + 1);
	}
	return str;
}

export function getRandomEmoji(): string {
	return emojiLib.random().emoji;
}

