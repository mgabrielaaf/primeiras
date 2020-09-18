import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElasComponent } from './elas.component';


describe('ElasComponent', () => {
  let component: ElasComponent;
  let fixture: ComponentFixture<ElasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
