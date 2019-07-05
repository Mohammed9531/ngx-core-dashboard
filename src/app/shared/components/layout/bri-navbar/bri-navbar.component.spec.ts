import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriNavbarComponent } from './bri-navbar.component';

describe('BriNavbarComponent', () => {
  let component: BriNavbarComponent;
  let fixture: ComponentFixture<BriNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
