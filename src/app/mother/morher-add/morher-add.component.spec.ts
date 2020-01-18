import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorherAddComponent } from './morher-add.component';

describe('MorherAddComponent', () => {
  let component: MorherAddComponent;
  let fixture: ComponentFixture<MorherAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorherAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorherAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
