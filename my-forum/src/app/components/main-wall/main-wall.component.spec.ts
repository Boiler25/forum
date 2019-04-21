/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainWallComponent } from './main-wall.component';

describe('MainWallComponent', () => {
  let component: MainWallComponent;
  let fixture: ComponentFixture<MainWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
