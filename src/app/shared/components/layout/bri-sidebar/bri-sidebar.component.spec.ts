import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriSidebarComponent } from './bri-sidebar.component';

describe('BriSidebarComponent', () => {
  let component: BriSidebarComponent;
  let fixture: ComponentFixture<BriSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
