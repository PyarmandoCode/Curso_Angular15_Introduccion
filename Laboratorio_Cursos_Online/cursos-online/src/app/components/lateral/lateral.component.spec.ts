import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralComponent } from './lateral.component';

describe('LateralComponent', () => {
  let component: LateralComponent;
  let fixture: ComponentFixture<LateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
