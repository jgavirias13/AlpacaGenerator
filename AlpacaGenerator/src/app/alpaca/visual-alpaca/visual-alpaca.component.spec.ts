import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualAlpacaComponent } from './visual-alpaca.component';

describe('VisualAlpacaComponent', () => {
  let component: VisualAlpacaComponent;
  let fixture: ComponentFixture<VisualAlpacaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualAlpacaComponent]
    });
    fixture = TestBed.createComponent(VisualAlpacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
