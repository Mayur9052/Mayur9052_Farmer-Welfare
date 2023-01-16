import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaidComponent } from './zaid.component';

describe('ZaidComponent', () => {
  let component: ZaidComponent;
  let fixture: ComponentFixture<ZaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
