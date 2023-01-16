import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KharifLinksComponent } from './kharif-links.component';

describe('KharifLinksComponent', () => {
  let component: KharifLinksComponent;
  let fixture: ComponentFixture<KharifLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KharifLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KharifLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
