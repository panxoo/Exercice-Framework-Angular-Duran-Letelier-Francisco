import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp2RowComponent } from './tp2-row.component';

describe('Tp2RowComponent', () => {
  let component: Tp2RowComponent;
  let fixture: ComponentFixture<Tp2RowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tp2RowComponent]
    });
    fixture = TestBed.createComponent(Tp2RowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
