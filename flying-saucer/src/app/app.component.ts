import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import {CowsService} from './cows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native,
})
export class AppComponent {
  @Input() private ignoreColor: string;
  public cows$: Observable<string[]>;

  constructor(private cowsService: CowsService) {
    this.cows$ = this.cowsService.findAll().pipe(map((cows: string[]) => cows.filter((cow) => cow !== this.ignoreColor)));
  }
}
