import {Component, Input, OnInit} from '@angular/core';
import {ConfigureItem, StatusEnum} from '../app.module';

@Component({
  selector: 'app-configure-list-item',
  templateUrl: './configure-list-item.component.html',
  styleUrls: ['./configure-list-item.component.scss']
})
export class ConfigureListItemComponent implements OnInit {

  @Input() configureItem: ConfigureItem;

  constructor() {}


  ngOnInit(): void {
  }

  getStatusInfo(): string {
    switch (this.configureItem.status) {
      case StatusEnum.NOT_AVAILABLE: return 'Nicht auswählbar';
      case StatusEnum.NOT_SELECTED: return 'Nicht ausgewählt';
      case StatusEnum.REQUIRED: return 'Erforderlich';
      case StatusEnum.SELECTED: return 'ausgewählt';
      default: return '';
    }
  }
}
