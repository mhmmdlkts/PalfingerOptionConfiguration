import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigureListItemComponent } from './configure-list-item/configure-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigureListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

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
