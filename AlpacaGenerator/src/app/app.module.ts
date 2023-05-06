import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { matShuffleOutline } from '@ng-icons/material-icons/outline'
import { matDownloadOutline } from '@ng-icons/material-icons/outline'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector/selector.component';
import { ElementOptionsComponent } from './element-options/element-options.component';
import { VisualAlpacaComponent } from './visual-alpaca/visual-alpaca.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    ElementOptionsComponent,
    VisualAlpacaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ matShuffleOutline, matDownloadOutline })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
