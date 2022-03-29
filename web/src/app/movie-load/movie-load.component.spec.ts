import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLoadComponent } from './movie-load.component';

describe('MovieLoadComponent', () => {
  let component: MovieLoadComponent;
  let fixture: ComponentFixture<MovieLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
