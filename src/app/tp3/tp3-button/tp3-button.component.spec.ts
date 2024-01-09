import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp3ButtonComponent } from './tp3-button.component';

describe('Tp3ButtonComponent', () => {
  let component: Tp3ButtonComponent;
  let fixture: ComponentFixture<Tp3ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tp3ButtonComponent]
    });
    fixture = TestBed.createComponent(Tp3ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
