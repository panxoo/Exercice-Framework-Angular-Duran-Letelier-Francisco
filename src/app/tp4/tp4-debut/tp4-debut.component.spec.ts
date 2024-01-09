import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp4DebutComponent } from './tp4-debut.component';

describe('Tp4DebutComponent', () => {
  let component: Tp4DebutComponent;
  let fixture: ComponentFixture<Tp4DebutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tp4DebutComponent]
    });
    fixture = TestBed.createComponent(Tp4DebutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
