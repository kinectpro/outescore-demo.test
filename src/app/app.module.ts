import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { MenuComponent } from './menu/menu.component';
import {MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
