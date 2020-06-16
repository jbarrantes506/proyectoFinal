import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boton1Component } from './boton1.component';

describe('Boton1Component', () => {
  let component: Boton1Component;
  let fixture: ComponentFixture<Boton1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boton1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boton1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
