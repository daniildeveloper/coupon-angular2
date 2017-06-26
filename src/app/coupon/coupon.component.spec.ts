/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CouponComponent } from './coupon.component';

describe('CouponComponent', () => {
  let component: CouponComponent;
  let fixture: ComponentFixture<CouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
