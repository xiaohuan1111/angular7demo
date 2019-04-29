import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscateComponent } from './newscate.component';

describe('NewscateComponent', () => {
  let component: NewscateComponent;
  let fixture: ComponentFixture<NewscateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewscateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewscateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
