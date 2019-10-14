import { Component, OnInit } from '@angular/core';
import {getCount, getPage} from './data.services';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  readonly PAGE_SIZE = 10;
  count = 0;
  movies: string[] = [];
  pageNumber = 0;
  error: string = null;
  isBusy = false;
  search = '';

  // 3. Update to async / await
  ngOnInit() {
    this.refresh();
  }

  // TODO: 5. Convert to Observable
  // TODO: 6. Enusre refresh is only done after user stops typing
  private refresh(): Promise<void | string> {
    this.isBusy = true;
    return getCount(this.search)
      .then(count => this.count = count)
      .then(() => this.setPage(0))
      .catch(error => this.error = 'Page not found')
      .finally(() => this.isBusy = false);
  }

  // TODO: 4. Convert to Observable
  setPage(index: number): Promise<void | string> {
    this.isBusy = true;
    return getPage(index, this.PAGE_SIZE, this.search)
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
