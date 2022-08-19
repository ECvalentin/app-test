import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LassociationPageComponent } from './lassociation-page.component';

describe('LassociationPageComponent', () => {
  let component: LassociationPageComponent;
  let fixture: ComponentFixture<LassociationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LassociationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LassociationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
