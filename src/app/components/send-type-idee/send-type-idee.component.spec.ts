import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendTypeIdeeComponent } from './send-type-idee.component';

describe('SendTypeIdeeComponent', () => {
  let component: SendTypeIdeeComponent;
  let fixture: ComponentFixture<SendTypeIdeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendTypeIdeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendTypeIdeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
