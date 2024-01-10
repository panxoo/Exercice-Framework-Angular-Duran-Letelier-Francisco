import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp5DebutComponent } from './tp5-debut.component';

describe('Tp5DebutComponent', () => {
  let component: Tp5DebutComponent;
  let fixture: ComponentFixture<Tp5DebutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tp5DebutComponent]
    });
    fixture = TestBed.createComponent(Tp5DebutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
