import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherEditComponent } from './mother-edit.component';

describe('MotherEditComponent', () => {
  let component: MotherEditComponent;
  let fixture: ComponentFixture<MotherEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotherEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
