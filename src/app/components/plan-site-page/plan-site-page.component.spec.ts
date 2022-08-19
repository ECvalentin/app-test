import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSitePageComponent } from './plan-site-page.component';

describe('PlanSitePageComponent', () => {
  let component: PlanSitePageComponent;
  let fixture: ComponentFixture<PlanSitePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanSitePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
