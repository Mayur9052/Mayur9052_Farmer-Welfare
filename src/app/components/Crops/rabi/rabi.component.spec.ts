import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabiComponent } from './rabi.component';

describe('RabiComponent', () => {
  let component: RabiComponent;
  let fixture: ComponentFixture<RabiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RabiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
