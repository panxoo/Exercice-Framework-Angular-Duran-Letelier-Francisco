import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp1ExerciceComponent } from './tp1-exercice.component';

describe('Tp1ExerciceComponent', () => {
  let component: Tp1ExerciceComponent;
  let fixture: ComponentFixture<Tp1ExerciceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tp1ExerciceComponent]
    });
    fixture = TestBed.createComponent(Tp1ExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
