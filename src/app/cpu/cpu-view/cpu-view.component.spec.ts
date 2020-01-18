import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuViewComponent } from './cpu-view.component';

describe('CpuViewComponent', () => {
  let component: CpuViewComponent;
  let fixture: ComponentFixture<CpuViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
