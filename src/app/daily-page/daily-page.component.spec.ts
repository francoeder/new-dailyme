import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPageComponent } from './daily-page.component';

describe('DailyPageComponent', () => {
  let component: DailyPageComponent;
  let fixture: ComponentFixture<DailyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
