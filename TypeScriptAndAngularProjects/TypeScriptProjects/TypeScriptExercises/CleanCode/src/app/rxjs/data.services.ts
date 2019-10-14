import {movieData} from './data';

// TODO: 1. Convert to Observable
export function delay(timeMs: number): Promise<void> {
  return new Promise(
    (resolve) => setTimeout(() => resolve(), timeMs)
  );
}


function filteredMovies(search) {
  return movieData
    .filter(x => x.toLowerCase().includes(search.toLowerCase()));
}

// TODO: 2. Convert to Observable
export function getCount(search = ''): Promise<number> {
  return delay(2000)
    .then(() => filteredMovies(search).length);
}


// TODO: 3. Convert to Observable
export function getPage(index: number, pageSize: number, search = ''): Promise<string[]> {
  const start = index * pageSize;
  const end = start + pageSize;
  return delay(1000)
    .then(() => {
      const movies = filteredMovies(search);
      if (start < 0 || start > movies.length - 1) {
        return Promise.reject([]);
      }
      return Promise.resolve(movies.slice(start, Math.min(end, movies.length)));
    });
}

