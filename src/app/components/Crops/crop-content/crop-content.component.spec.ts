import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropContentComponent } from './crop-content.component';

describe('CropContentComponent', () => {
  let component: CropContentComponent;
  let fixture: ComponentFixture<CropContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
