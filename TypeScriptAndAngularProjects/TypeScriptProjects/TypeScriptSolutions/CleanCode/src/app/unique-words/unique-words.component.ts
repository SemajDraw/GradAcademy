import {Component} from '@angular/core';
import {orderBy} from 'lodash';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-unique-words',
  templateUrl: './unique-words.component.html',
  styleUrls: ['./unique-words.component.css']
})
export class UniqueWordsComponent {
  input = '';
  output = '';

  constructor(private http: HttpClient) {
    this.initialiseSampleText();
  }

  private initialiseSampleText() {
    this.http.get('assets/dickens.txt', {responseType: 'text'})
      .subscribe(x => this.input = x);
  }

  // Output the unique words found in input with the number of times they occur.
  // Simply append to the string this.output to show the result
  // Lodash may be useful here - note it doesn't work with iterables
  execute() {
    const words = this.extractWords(this.input);
    const wordCounts = this.countWords(words);
    this.outputWordCounts(wordCounts);
  }

  private outputWordCounts(wordCounts: Map<string, number>) {
    const sortedWordCounts = orderBy([...wordCounts.entries()], ['1'], ['desc']);

    this.output += `Found ${sortedWordCounts.length} unique words\n`;
    for (const [word, count] of sortedWordCounts) {
      this.output += `${word} = ${count}\n`;
    }
  }

  private extractWords(input: string): string[] {
    return input.split(/[^a-zA-Z']+/)
      .map(x => x.toLowerCase().trim())
      .filter(x => x);
  }

  private countWords(words): Map<string, number> {
    const map = new Map<string, number>();
    words.forEach(word => this.addToWordCount(map, word));
    return map;
  }

  private addToWordCount(map: Map<string, number>, word: string) {
    const currentcount = map.get(word) || 0;
    map.set(word, currentcount + 1);
  }
}
