import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIndicesComponent } from './home-indices.component';

describe('HomeIndicesComponent', () => {
  let component: HomeIndicesComponent;
  let fixture: ComponentFixture<HomeIndicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeIndicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeIndicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
