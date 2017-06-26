/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThanksComponent } from './thanks.component';

describe('ThanksComponent', () => {
  let component: ThanksComponent;
  let fixture: ComponentFixture<ThanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
