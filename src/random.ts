export default function random(min: number = 1, max: number = 150): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
