export const camelToSnake = (str: string) =>
  str.replaceAll(/[A-Z]/g, (letter: string) => `_${letter.toLowerCase()}`);

export const camelToNormal = (str: string) =>
  str.replaceAll(/[A-Z0-9]/g, (letter: string) => ` ${letter}`);

export const snakeToNormal = (str: string) => str.replaceAll("_", " ");

export const snakeToKebab = (str: string) => str.replaceAll("_", "-");
