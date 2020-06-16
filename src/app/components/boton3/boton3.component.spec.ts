import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boton3Component } from './boton3.component';

describe('Boton3Component', () => {
  let component: Boton3Component;
  let fixture: ComponentFixture<Boton3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boton3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boton3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
