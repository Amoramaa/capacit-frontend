import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProjectsComponent } from './listar-projects.component';

describe('ListarProjectsComponent', () => {
  let component: ListarProjectsComponent;
  let fixture: ComponentFixture<ListarProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
