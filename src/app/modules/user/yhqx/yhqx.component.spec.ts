import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YhqxComponent } from './yhqx.component';

describe('YhqxComponent', () => {
  let component: YhqxComponent;
  let fixture: ComponentFixture<YhqxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YhqxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YhqxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
