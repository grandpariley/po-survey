import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksContainerComponent } from './thanks-container.component';

describe('ThanksContainerComponent', () => {
  let component: ThanksContainerComponent;
  let fixture: ComponentFixture<ThanksContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanksContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
