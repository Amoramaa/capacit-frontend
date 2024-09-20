import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/servicios/projects/projects.service';
import { Projects } from 'src/app/models/projects/projects/projects';
import { Location } from '@angular/common';  // <-- Importa el servicio Location

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Projects | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private location: Location  // <-- Inyecta el servicio Location
  ) { }

  ngOnInit(): void {
    // Obtener el ID de la ruta actual
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectsService.getProjectsById(id).subscribe(data => {
      this.project = data;
    }, error => {
      console.error('Error al obtener el proyecto:', error);
    });
  }

  // Función para regresar a la página anterior
  regresar(): void {
    this.location.back();
  }
}
