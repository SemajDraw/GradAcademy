import {Component, OnInit} from '@angular/core';
import {getCount, getPage} from './data.services';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {
  readonly PAGE_SIZE = 10;
  count = 0;
  movies: string[] = [];
  pageNumber = 0;
  error: string = null;
  isBusy = false;

  // 3. Update to async / await
  ngOnInit() {
    this.isBusy = true;
    getCount()
      .then(count => this.count = count)
      .then(() => this.setPage(0))
      .catch(error => this.error = 'Page not found')
      .finally(() => this.isBusy = false);
  }

  // 4. Update to async / await
  setPage(index: number): Promise<void | string> {
    this.isBusy = true;
    return getPage(index, this.PAGE_SIZE)
      .then(movies => {
        this.movies = movies;
        this.error = null;
        this.pageNumber = index;
      })
      .catch(error => this.error = 'Page not found')
      .finally(() => this.isBusy = false);
  }

  nextPage() {
    this.setPage(this.pageNumber + 1);
  }

  prevPage() {
    this.setPage(this.pageNumber - 1);
  }
}
