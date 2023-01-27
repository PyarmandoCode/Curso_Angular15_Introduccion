import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmovieComponent } from './cardmovie.component';

describe('CardmovieComponent', () => {
  let component: CardmovieComponent;
  let fixture: ComponentFixture<CardmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardmovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
