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
  isBusy = 0;

  // 3. Update to async / await
  async ngOnInit() {
    try {
      this.isBusy++;
      this.count = await getCount();
      await this.setPage(0);
    } catch {
      this.error = 'Page not found';
    } finally {
      this.isBusy--;
    }
  }

  // 4. Update to async / await
  async setPage(index: number): Promise<void> {
    try {
      this.isBusy++;
      this.movies = await getPage(index, this.PAGE_SIZE);
      this.error = null;
      this.pageNumber = index;
    } catch {
      this.error = 'Page not found';
    } finally {
      this.isBusy--;
    }
  }

  async nextPage(): Promise<void> {
    await this.setPage(this.pageNumber + 1);
  }

  async prevPage(): Promise<void> {
    await this.setPage(this.pageNumber - 1);
  }
}
