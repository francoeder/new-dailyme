import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySetupDialogComponent } from './daily-setup-dialog.component';

describe('DailySetupDialogComponent', () => {
  let component: DailySetupDialogComponent;
  let fixture: ComponentFixture<DailySetupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailySetupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySetupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
