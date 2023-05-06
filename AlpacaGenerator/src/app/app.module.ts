import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector/selector.component';
import { ElementOptionsComponent } from './options/element-options/element-options.component';
import { VisualAlpacaComponent } from './alpaca/visual-alpaca/visual-alpaca.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    ElementOptionsComponent,
    VisualAlpacaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
