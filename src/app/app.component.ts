import { Component } from '@angular/core';
import {ConfigureItem, StatusEnum} from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BewerbungsAufgabe';

  configureItem: ConfigureItem[];

  constructor() {
    this.configureItem = [
      {
        code: 'SAM',
        name: 'Schwenkwinkelerfassung',
        status: StatusEnum.NOT_AVAILABLE,
        info: 'sam?',
        options: null,
        reason: 'who knows',
      },
      {
        code: 'WOPT',
        name: 'Optische Überlastwarnung',
        status: StatusEnum.SELECTED,
        info: 'wopt?',
        options: null,
        reason: null,
      },
      {
        code: 'STU01',
        name: 'Stundenzähler',
        status: StatusEnum.REQUIRED,
        info: 'STU01?',
        options: null,
        reason: null,
      },
      {
        code: 'HUPE',
        name: 'Hupe',
        status: StatusEnum.NOT_SELECTED,
        info: 'hupe?',
        options: null,
        reason: null,
      },
      {
        code: 'RAL',
        name: 'Sonderfarbe RAL',
        status: StatusEnum.NOT_SELECTED,
        info: 'ral?',
        options: ['Red', 'Green', 'Yellow'],
        reason: null,
      },
    ];
  }
}
