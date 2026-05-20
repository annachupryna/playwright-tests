export function randomLetters(length: number): string {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () =>
        letters[Math.floor(Math.random() * letters.length)]
    ).join('');
};