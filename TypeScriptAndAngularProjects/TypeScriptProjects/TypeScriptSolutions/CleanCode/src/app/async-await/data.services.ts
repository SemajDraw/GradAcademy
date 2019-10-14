import {movieData} from './data';

// Do not convert this function
export function delay(timeMs: number): Promise<void> {
  return new Promise(
    (resolve) => setTimeout(() => resolve(), timeMs)
  );
}


// 1. Update to async / await
export async function getCount(): Promise<number> {
  await delay(2000);
  return movieData.length;
}


// 2. Update to async / await
export async function getPage(index: number, pageSize: number): Promise<string[]> {
  const start = index * pageSize;
  const end = start + pageSize;
  await delay(1000);
  if (start < 0 || start > movieData.length - 1) {
    throw [];
  }
  return movieData.slice(start, Math.min(end, movieData.length));
}

