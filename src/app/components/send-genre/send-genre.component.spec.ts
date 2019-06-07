import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendGenreComponent } from './send-genre.component';

describe('SendGenreComponent', () => {
  let component: SendGenreComponent;
  let fixture: ComponentFixture<SendGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
