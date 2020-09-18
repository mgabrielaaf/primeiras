import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentinaComponent } from './valentina.component';

describe('ValentinaComponent', () => {
  let component: ValentinaComponent;
  let fixture: ComponentFixture<ValentinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValentinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
