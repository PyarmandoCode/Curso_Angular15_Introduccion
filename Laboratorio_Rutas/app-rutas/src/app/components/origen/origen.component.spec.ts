import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigenComponent } from './origen.component';

describe('OrigenComponent', () => {
  let component: OrigenComponent;
  let fixture: ComponentFixture<OrigenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrigenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
