import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCapComponent } from './score-cap.component';

describe('ScoreCapComponent', () => {
  let component: ScoreCapComponent;
  let fixture: ComponentFixture<ScoreCapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreCapComponent]
    });
    fixture = TestBed.createComponent(ScoreCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
