import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirAutourPageComponent } from './voir-autour-page.component';

describe('VoirAutourPageComponent', () => {
  let component: VoirAutourPageComponent;
  let fixture: ComponentFixture<VoirAutourPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirAutourPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirAutourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
