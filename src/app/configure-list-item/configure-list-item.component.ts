import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ConfigureItem, StatusEnum} from '../main.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-configure-list-item',
  templateUrl: './configure-list-item.component.html',
  styleUrls: ['./configure-list-item.component.scss']
})
export class ConfigureListItemComponent implements OnInit {

  @ViewChild('reasonModal') reasonModal: ElementRef;
  @ViewChild('infoModal') infoModal: ElementRef;
  @Input() configureItem: ConfigureItem;
  selectedOption: string;

  constructor(private modalService: NgbModal) {}


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

  onMoreClicked(): void {
    console.log('ok');
  }

  isSelected(): boolean {
    return this.configureItem.status === StatusEnum.SELECTED;
  }

  isNotSelected(): boolean {
    return this.configureItem.status === StatusEnum.NOT_SELECTED;
  }

  isNotAvailable(): boolean {
    return this.configureItem.status === StatusEnum.NOT_AVAILABLE;
  }

  isRequired(): boolean {
    return this.configureItem.status === StatusEnum.REQUIRED;
  }

  hasOptions(): boolean {
    return this.configureItem.options != null;
  }

  clickSelect(): void {
    if (this.isRequired()) {
      return;
    } else if (this.isSelected()) {
      this.configureItem.status = StatusEnum.NOT_SELECTED;
    } else if (this.isNotSelected()) {
      this.configureItem.status = StatusEnum.SELECTED;
    }
  }

  showButton(): boolean {
    return (this.isSelected() || this.isNotSelected() || this.isRequired()) && !this.hasOptions();
  }

  openReasonModal(): void {
    this.modalService.open(this.reasonModal, {centered: true});
  }

  openInfoModal(): void {
    this.modalService.open(this.infoModal, {centered: true});
  }

  setOption(item: string): void {
    this.selectedOption = item;
    if (item == null) {
      this.configureItem.status = StatusEnum.NOT_SELECTED;
    } else if (this.isNotSelected()) {
      this.configureItem.status = StatusEnum.SELECTED;
    }
  }
}
