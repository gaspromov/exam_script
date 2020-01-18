import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherViewComponent } from './mother-view.component';

describe('MotherViewComponent', () => {
  let component: MotherViewComponent;
  let fixture: ComponentFixture<MotherViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotherViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
