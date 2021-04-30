import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
}

export enum StatusEnum {
  SELECTED = 'SELECTED',
  NOT_SELECTED = 'NOT_SELECTED',
  REQUIRED = 'REQUIRED',
  NOT_AVAILABLE = 'NOT_AVAILABLE'
}

export interface ConfigureItem {
  code: string;
  name: string;
  status: StatusEnum;
  options: string[];
  reason: string;
  info: string;
}

