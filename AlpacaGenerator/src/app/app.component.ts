import { Component } from '@angular/core';
import { alpacaOptions } from './model/AlpacaOptions';
import { ElementOption } from './model/ElementOption';
import { Headers } from './model/Headers';
import { toPng } from 'html-to-image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AlpacaGenerator';
  options: Array<ElementOption> = [];
  currentHeader: Headers = Headers.HAIR;
  selectedOptions: Map<Headers, ElementOption> = new Map();

  ngOnInit() {
    this.currentHeader = Headers.HAIR;
    this.options = alpacaOptions.get(this.currentHeader)!;
    this.selectedOptions.set(
      Headers.BACKGROUND,
      alpacaOptions.get(Headers.BACKGROUND)!.find((b) => b.id === 1)!
    );
    this.selectedOptions.set(
      Headers.EARS,
      alpacaOptions.get(Headers.EARS)!.find((b) => b.id === 1)!
    );
    this.selectedOptions.set(
      Headers.EYES,
      alpacaOptions.get(Headers.EYES)!.find((b) => b.id === 1)!
    );
    this.selectedOptions.set(
      Headers.HAIR,
      alpacaOptions.get(Headers.HAIR)!.find((b) => b.id === 1)!
    );
    this.selectedOptions.set(
      Headers.LEG,
      alpacaOptions.get(Headers.LEG)!.find((b) => b.id === 1)!
    );
    this.selectedOptions.set(
      Headers.MOUTH,
      alpacaOptions.get(Headers.MOUTH)!.find((b) => b.id === 1)!
    );
    this.selectedOptions.set(
      Headers.NECK,
      alpacaOptions.get(Headers.NECK)!.find((b) => b.id === 1)!
    );
  }

  onSelectionChange(selection: Headers) {
    this.currentHeader = selection;
    this.options = alpacaOptions.get(selection)!;
  }

  getSelectedForCurrentHeader(): number {
    return this.selectedOptions.has(this.currentHeader) &&
      this.selectedOptions.get(this.currentHeader)
      ? this.selectedOptions.get(this.currentHeader)!.id
      : 0;
  }

  onElementSelected(element: ElementOption) {
    this.selectedOptions.set(this.currentHeader, element);
  }

  generateRandomAlpaca() {
    const accessoriesId = this.getRandomInRange(0, 4);
    const backgroundId = this.getRandomInRange(1, 18);
    const earsId = this.getRandomInRange(1, 3);
    const eyesId = this.getRandomInRange(1, 6);
    const hairId = this.getRandomInRange(1, 7);
    const legId = this.getRandomInRange(1, 6);
    const mouthId = this.getRandomInRange(1, 5);
    const neckId = this.getRandomInRange(1, 4);

    if (accessoriesId !== 0) {
      this.selectedOptions.set(
        Headers.ACCESORIES,
        alpacaOptions
          .get(Headers.ACCESORIES)!
          .find((e) => e.id === accessoriesId)!
      );
    } else {
      this.selectedOptions.delete(Headers.ACCESORIES);
    }
    this.selectedOptions.set(
      Headers.BACKGROUND,
      alpacaOptions.get(Headers.BACKGROUND)!.find((e) => e.id === backgroundId)!
    );
    this.selectedOptions.set(
      Headers.EARS,
      alpacaOptions.get(Headers.EARS)!.find((e) => e.id === earsId)!
    );
    this.selectedOptions.set(
      Headers.EYES,
      alpacaOptions.get(Headers.EYES)!.find((e) => e.id === eyesId)!
    );
    this.selectedOptions.set(
      Headers.HAIR,
      alpacaOptions.get(Headers.HAIR)!.find((e) => e.id === hairId)!
    );
    this.selectedOptions.set(
      Headers.LEG,
      alpacaOptions.get(Headers.LEG)!.find((e) => e.id === legId)!
    );
    this.selectedOptions.set(
      Headers.MOUTH,
      alpacaOptions.get(Headers.MOUTH)!.find((e) => e.id === mouthId)!
    );
    this.selectedOptions.set(
      Headers.NECK,
      alpacaOptions.get(Headers.NECK)!.find((e) => e.id === neckId)!
    );
  }

  getRandomInRange(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  downloadAlpaca() {
    const currentAlpaca = document.getElementById('alpaca')!;
    toPng(currentAlpaca).then(dataUrl => {
      const link = document.createElement('a');
      link.setAttribute('target', '_blank');
      link.setAttribute('href', dataUrl);
      link.setAttribute('download', `alpaca.png`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    })
  }
}
