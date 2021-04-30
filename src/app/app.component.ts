import { Component } from '@angular/core';
import {ConfigureItem, StatusEnum} from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Palfinger';

  configureItem: ConfigureItem[];

  constructor() {
    this.configureItem = [
      {
        code: 'SAM',
        name: 'Schwenkwinkelerfassung',
        status: StatusEnum.NOT_AVAILABLE,
        info: 'Die Schrägachsenmaschine hat eine berührungslose Schwenkwinkelerfassung für die Zylindertrommel mit einem am Gehäuse befestigten Sensor, an dem die Zylindertrommel vorbei oder entlang schwenkbar ist. Vorzugsweise ist die Schwenkwinkelerfassung magnetisch.',
        options: null,
        reason: 'Kein Schwenkwinkelerfassung auf Lager.',
      },
      {
        code: 'WOPT',
        name: 'Optische Überlastwarnung',
        status: StatusEnum.SELECTED,
        info: 'Bei der Zugmesslasche der KAK-F Serie handelt es sich um Messgeräte zum Messen von Zugkräften wie Sie zum Beispiel bei einer Kranwaage eingesetzt werden.',
        options: null,
        reason: null,
      },
      {
        code: 'STU01',
        name: 'Stundenzähler',
        status: StatusEnum.REQUIRED,
        info: 'Ein Betriebsstundenzähler misst die sich aufsummierenden Stunden, die eine Maschine oder ein Gerät seit Inbetriebnahme gelaufen ist.',
        options: null,
        reason: null,
      },
      {
        code: 'HUPE',
        name: 'Hupe',
        status: StatusEnum.NOT_SELECTED,
        info: 'Eine Hupe ist ein Gerät zur Erzeugung von Schallzeichen. Sie wird je nach Bauweise entweder mit elektrischer Energie oder Druckluft betrieben.',
        options: null,
        reason: null,
      },
      {
        code: 'RAL',
        name: 'Sonderfarbe RAL',
        status: StatusEnum.NOT_SELECTED,
        info: 'Für eine bessere Harmonie, haben Sie bei uns die Möglichkeit Ihre Terrassenüberdachung in allen RAL Farben zu bekommen. Die Konstruktion wird dann in dem gewünschten Farbton pulverbeschichtet.',
        options: ['Red', 'Green', 'Yellow'],
        reason: null,
      },
    ];
  }
}
