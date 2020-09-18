import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmeliaComponent } from './amelia.component';

describe('AmeliaComponent', () => {
  let component: AmeliaComponent;
  let fixture: ComponentFixture<AmeliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmeliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmeliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
