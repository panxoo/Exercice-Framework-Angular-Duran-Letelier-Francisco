import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp4CardComponent } from './tp4-card.component';

describe('Tp4CardComponent', () => {
  let component: Tp4CardComponent;
  let fixture: ComponentFixture<Tp4CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tp4CardComponent]
    });
    fixture = TestBed.createComponent(Tp4CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
