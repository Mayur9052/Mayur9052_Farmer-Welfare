import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaidLinksComponent } from './zaid-links.component';

describe('ZaidLinksComponent', () => {
  let component: ZaidLinksComponent;
  let fixture: ComponentFixture<ZaidLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaidLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaidLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
