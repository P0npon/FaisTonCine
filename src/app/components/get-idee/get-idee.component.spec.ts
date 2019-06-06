import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdeeComponent } from './get-idee.component';

describe('GetIdeeComponent', () => {
  let component: GetIdeeComponent;
  let fixture: ComponentFixture<GetIdeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIdeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
