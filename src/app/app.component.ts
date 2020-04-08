import { Component } from '@angular/core';
import { WkipediaService } from './wkipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private wikipedia: WkipediaService) {}

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response) => {
      console.log(response);
    });
  }
}
