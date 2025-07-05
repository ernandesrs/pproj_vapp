export const getRandomIntBetween = (x: number, y: number): number => {
    return Math.floor(Math.random() * (y - x + 1)) + x;
};

export const getRandomFloatBetween = (x: number, y: number): number => {
    return Math.random() * (y - x) + x;
}