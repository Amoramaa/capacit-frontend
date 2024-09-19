import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProjectsComponent } from './registrar-projects.component';

describe('RegistrarProjectsComponent', () => {
  let component: RegistrarProjectsComponent;
  let fixture: ComponentFixture<RegistrarProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
