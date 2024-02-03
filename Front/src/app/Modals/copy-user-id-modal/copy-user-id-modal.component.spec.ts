import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyUserIdModalComponent } from './copy-user-id-modal.component';

describe('CopyUserIdModalComponent', () => {
  let component: CopyUserIdModalComponent;
  let fixture: ComponentFixture<CopyUserIdModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyUserIdModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyUserIdModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
