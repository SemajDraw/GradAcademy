import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {UniqueWordsComponent} from './unique-words/unique-words.component';
import {FormsModule} from '@angular/forms';
import { DiamondsComponent } from './diamonds/diamonds.component';
import {HttpClientModule} from '@angular/common/http';
import { NumberConverterComponent } from './number-converter/number-converter.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RefactoringComponent } from './refactoring/refactoring.component';

const routes: Routes = [
  {path: 'unique_words', component: UniqueWordsComponent},
  {path: 'diamonds', component: DiamondsComponent},
  {path: 'number_converter', component: NumberConverterComponent},
  {path: 'async_await', component: AsyncAwaitComponent},
  {path: 'rxjs', component: RxjsComponent},
  {path: 'refactoring', component: RefactoringComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UniqueWordsComponent,
    DiamondsComponent,
    NumberConverterComponent,
    AsyncAwaitComponent,
    RxjsComponent,
    RefactoringComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
