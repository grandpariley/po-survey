import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumSurveyComponent } from './medium-survey.component';

describe('MediumSurveyComponent', () => {
  let component: MediumSurveyComponent;
  let fixture: ComponentFixture<MediumSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumSurveyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
