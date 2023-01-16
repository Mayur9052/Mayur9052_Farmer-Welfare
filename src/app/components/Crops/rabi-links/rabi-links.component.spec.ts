import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabiLinksComponent } from './rabi-links.component';

describe('RabiLinksComponent', () => {
  let component: RabiLinksComponent;
  let fixture: ComponentFixture<RabiLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RabiLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RabiLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
