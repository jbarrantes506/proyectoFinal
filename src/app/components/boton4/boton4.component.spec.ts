import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boton4Component } from './boton4.component';

describe('Boton4Component', () => {
  let component: Boton4Component;
  let fixture: ComponentFixture<Boton4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boton4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boton4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
