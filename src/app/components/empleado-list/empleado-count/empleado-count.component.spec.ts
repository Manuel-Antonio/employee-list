import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoCountComponent } from './empleado-count.component';

describe('EmpleadoCountComponent', () => {
  let component: EmpleadoCountComponent;
  let fixture: ComponentFixture<EmpleadoCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoCountComponent]
    });
    fixture = TestBed.createComponent(EmpleadoCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
