import { Component, Input } from '@angular/core';
import { ElementOption } from '../model/ElementOption';
import { Headers } from '../model/Headers';

@Component({
  selector: 'app-visual-alpaca',
  templateUrl: './visual-alpaca.component.html',
  styleUrls: ['./visual-alpaca.component.scss']
})
export class VisualAlpacaComponent {
  @Input() selectedOptions!: Map<Headers, ElementOption>;
  headers = Headers;
}
