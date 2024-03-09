import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInfosComponent } from './stock-infos.component';

describe('StockInfosComponent', () => {
  let component: StockInfosComponent;
  let fixture: ComponentFixture<StockInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
