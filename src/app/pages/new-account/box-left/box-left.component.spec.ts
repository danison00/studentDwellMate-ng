import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxLeftComponent } from './box-left.component';

describe('BoxLeftComponent', () => {
  let component: BoxLeftComponent;
  let fixture: ComponentFixture<BoxLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxLeftComponent]
    });
    fixture = TestBed.createComponent(BoxLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
