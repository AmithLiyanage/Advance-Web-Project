import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Maps1Component } from './maps1.component';

describe('Maps1Component', () => {
  let component: Maps1Component;
  let fixture: ComponentFixture<Maps1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Maps1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Maps1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
