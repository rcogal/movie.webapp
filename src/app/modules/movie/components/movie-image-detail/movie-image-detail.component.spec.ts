import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieImageDetailComponent } from './movie-image-detail.component';

describe('MovieImageDetailComponent', () => {
  let component: MovieImageDetailComponent;
  let fixture: ComponentFixture<MovieImageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieImageDetailComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
