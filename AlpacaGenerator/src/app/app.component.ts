import { Component } from '@angular/core';
import { alpacaOptions } from './model/AlpacaOptions';
import { ElementOption } from './model/ElementOption';
import { Headers } from './model/Headers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AlpacaGenerator';
  options: Array<ElementOption> = [];

  ngOnInit() {
    this.options = alpacaOptions.get(Headers.HAIR)!;
  }

  onSelectionChange(selection: Headers) {
    this.options = alpacaOptions.get(selection)!;
  }
}
