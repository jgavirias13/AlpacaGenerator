import { Component, Input } from '@angular/core';
import { ElementOption } from '../model/ElementOption';

@Component({
  selector: 'app-element-options',
  templateUrl: './element-options.component.html',
  styleUrls: ['./element-options.component.scss']
})
export class ElementOptionsComponent {
  @Input() options!: Array<ElementOption>;
}
