import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementOptionsComponent } from './element-options.component';

describe('ElementOptionsComponent', () => {
  let component: ElementOptionsComponent;
  let fixture: ComponentFixture<ElementOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementOptionsComponent]
    });
    fixture = TestBed.createComponent(ElementOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
