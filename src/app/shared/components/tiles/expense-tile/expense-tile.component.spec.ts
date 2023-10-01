import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTileComponent } from './expense-tile.component';

describe('ExpenseTileComponent', () => {
  let component: ExpenseTileComponent;
  let fixture: ComponentFixture<ExpenseTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseTileComponent]
    });
    fixture = TestBed.createComponent(ExpenseTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
