import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsTypeComponent } from './crops-type.component';

describe('CropsTypeComponent', () => {
  let component: CropsTypeComponent;
  let fixture: ComponentFixture<CropsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropsTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
