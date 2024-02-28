import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridIndexComponent } from './ag-grid-index.component';

describe('AgGridIndexComponent', () => {
  let component: AgGridIndexComponent;
  let fixture: ComponentFixture<AgGridIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
