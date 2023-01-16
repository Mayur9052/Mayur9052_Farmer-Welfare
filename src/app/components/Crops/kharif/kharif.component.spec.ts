import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KharifComponent } from './kharif.component';

describe('KharifComponent', () => {
  let component: KharifComponent;
  let fixture: ComponentFixture<KharifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KharifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KharifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
