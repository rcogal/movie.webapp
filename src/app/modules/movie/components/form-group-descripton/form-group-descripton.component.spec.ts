import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupDescriptonComponent } from './form-group-descripton.component';

describe('FormGroupDescriptonComponent', () => {
  let component: FormGroupDescriptonComponent;
  let fixture: ComponentFixture<FormGroupDescriptonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroupDescriptonComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupDescriptonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
