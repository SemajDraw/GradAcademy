import {Component, OnInit} from '@angular/core';
import {getCount, getPage} from './data.services';
import {finalize, debounceTime} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

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
  isBusy = 0;

  private searchRequests = new BehaviorSubject('');

  get search() {
    return this.searchRequests.getValue();
  }

  set search(value: string) {
    this.searchRequests.next(value);
  }

  // 3. Update to async / await
  ngOnInit() {
    this.refresh();
    this.searchRequests
      .pipe(debounceTime(1000))
      .subscribe(() => this.refresh());
  }

  private refresh() {
    this.isBusy++;
    getCount(this.search)
      .pipe(
        finalize(() => this.isBusy--)
      )
      .subscribe(
        count => {
          this.count = count;
          this.setPage(0);
        },
        error => this.error = 'Page not found'
      );
  }

  // 4. Update to async / await
  setPage(index: number): void {
    this.isBusy++;
    getPage(index, this.PAGE_SIZE, this.search)
      .pipe(
        finalize(() => this.isBusy--)
      )
      .subscribe(
        movies => {
          this.movies = movies;
          this.error = null;
          this.pageNumber = index;
        },
        error => this.error = 'Page not found');
  }

  nextPage() {
    this.setPage(this.pageNumber + 1);
  }

  prevPage() {
    this.setPage(this.pageNumber - 1);
  }
}
