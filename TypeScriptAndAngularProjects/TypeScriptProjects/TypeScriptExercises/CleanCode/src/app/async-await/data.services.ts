import {movieData} from './data';

// Do not convert this function
export function delay(timeMs: number): Promise<void> {
  return new Promise(
    (resolve) => setTimeout(() => resolve(), timeMs)
  );
}


// 1. Update to async / await
export function getCount(): Promise<number> {
  return delay(2000)
    .then(() => movieData.length);
}


// 2. Update to async / await
export function getPage(index: number, pageSize: number): Promise<string[]> {
  const start = index * pageSize;
  const end = start + pageSize;
  return delay(1000)
    .then(() => {
      if (start < 0 || start > movieData.length - 1) {
        return Promise.reject([]);
      }
      return Promise.resolve(movieData.slice(start, Math.min(end, movieData.length)));
    });
}

