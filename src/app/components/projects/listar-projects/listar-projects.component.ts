import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';import { EmpleadoService } from '../../../servicios/empleado/empleado.service';
import { Projects } from 'src/app/models/projects/projects/projects';
import { ProjectsService } from 'src/app/servicios/projects/projects.service';

@Component({
  selector: 'app-listar-projects',
  templateUrl: './listar-projects.component.html',
  styleUrls: ['./listar-projects.component.css']
})
export class ListarProjectsComponent implements OnInit {
  
  projects:Projects[];
  constructor(private projectsservice: ProjectsService, private router:Router) { }

  ngOnInit(): void {
    this.ObtenerProjects();
  }
  private ObtenerProjects(){
    this.projectsservice.listarProjects().subscribe(dato =>{
      this.projects = dato;
    })
  }
}
