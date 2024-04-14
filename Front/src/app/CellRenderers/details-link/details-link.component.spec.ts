import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLinkComponent } from './details-link.component';

describe('DetailsLinkComponent', () => {
  let component: DetailsLinkComponent;
  let fixture: ComponentFixture<DetailsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
