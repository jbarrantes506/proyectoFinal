import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boton2Component } from './boton2.component';

describe('Boton2Component', () => {
  let component: Boton2Component;
  let fixture: ComponentFixture<Boton2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boton2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boton2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
