import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/servicios/projects/projects.service';
import { Projects } from 'src/app/models/projects/projects/projects';

@Component({
  selector: 'app-registrar-projects',
  templateUrl: './registrar-projects.component.html',
  styleUrls: ['./registrar-projects.component.css']
})
export class RegistrarProjectsComponent implements OnInit {

  project: Projects = new Projects(); // Crear un nuevo proyecto vacío

  constructor(private projectsService: ProjectsService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.projectsService.registrarProjects(this.project).subscribe(
      () => {
        this.router.navigate(['/projects']); // Redirigir a la lista de proyectos tras registrar
      },
      error => {
        console.error('Error al registrar el proyecto:', error);
        alert('Ocurrió un error al intentar registrar el proyecto.');
      }
    );
  }

  cancelar(): void {
    this.router.navigate(['/projects']); // Volver a la lista de proyectos si se cancela
  }
}
