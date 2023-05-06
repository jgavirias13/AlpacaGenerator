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
  currentHeader: Headers = Headers.HAIR;
  selectedOptions: Map<Headers, ElementOption> = new Map();

  ngOnInit() {
    this.currentHeader = Headers.HAIR;
    this.options = alpacaOptions.get(this.currentHeader)!;
    this.selectedOptions.set(Headers.BACKGROUND, alpacaOptions.get(Headers.BACKGROUND)!.find(b => b.id === 1)!);
    this.selectedOptions.set(Headers.EARS, alpacaOptions.get(Headers.EARS)!.find(b => b.id === 1)!);
    this.selectedOptions.set(Headers.EYES, alpacaOptions.get(Headers.EYES)!.find(b => b.id === 1)!);
    this.selectedOptions.set(Headers.HAIR, alpacaOptions.get(Headers.HAIR)!.find(b => b.id === 1)!);
    this.selectedOptions.set(Headers.LEG, alpacaOptions.get(Headers.LEG)!.find(b => b.id === 1)!);
    this.selectedOptions.set(Headers.MOUTH, alpacaOptions.get(Headers.MOUTH)!.find(b => b.id === 1)!);
    this.selectedOptions.set(Headers.NECK, alpacaOptions.get(Headers.NECK)!.find(b => b.id === 1)!);
  }

  onSelectionChange(selection: Headers) {
    this.currentHeader = selection;
    this.options = alpacaOptions.get(selection)!;
  }

  getSelectedForCurrentHeader(): number {
    return this.selectedOptions.has(this.currentHeader)? this.selectedOptions.get(this.currentHeader)!.id : 0;
  }

  onElementSelected(element: ElementOption) {
    this.selectedOptions.set(this.currentHeader, element);
  }
}
