import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdeaComponent } from './get-idea.component';

describe('GetIdeeComponent', () => {
  let component: GetIdeaComponent;
  let fixture: ComponentFixture<GetIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
