import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarretaLibModule } from 'marreta-lib';
import { LayoutBrancoComponent } from './layout-branco/layout-branco.component'

@NgModule({
  declarations: [
    AppComponent,
    LayoutBrancoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarretaLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
