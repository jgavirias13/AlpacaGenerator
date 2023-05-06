import { Component, EventEmitter, Output } from '@angular/core';
import { Headers } from 'src/app/model/Headers';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent {
  @Output() selectionChange = new EventEmitter<Headers>();

  headerOptions: Array<Headers> = [
    Headers.HAIR,
    Headers.EARS,
    Headers.EYES,
    Headers.MOUTH,
    Headers.NECK,
    Headers.LEG,
    Headers.ACCESORIES,
    Headers.BACKGROUND,
  ];
  selected: string = '';

  ngOnInit() {
    this.selected = 'Hair';
  }

  onSelectionChange(selection: Headers) {
    this.selected = selection;
    this.selectionChange.emit(selection);
  }
}
