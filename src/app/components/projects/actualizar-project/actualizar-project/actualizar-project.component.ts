import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/servicios/projects/projects.service';
import { Projects } from 'src/app/models/projects/projects/projects';

@Component({
  selector: 'app-actualizar-project',
  templateUrl: './actualizar-project.component.html',
  styleUrls: ['./actualizar-project.component.css']
})
export class ActualizarProjectComponent implements OnInit {
  id: number;
  project: Projects = new Projects();

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.projectsService.getProjectsById(this.id).subscribe(
      (data) => {
        this.project = data;
      },
      (error) => console.error('Error al obtener proyecto', error)
    );
  }

  onSubmit() {
    this.projectsService.actualizarProject(this.id, this.project).subscribe(
      (data) => {
        // Redirigir a la lista de proyectos después de la actualización
        this.router.navigate(['/projects']);
      },
      (error) => console.error('Error al actualizar proyecto', error)
    );
  }

  cancelar() {
    this.router.navigate(['/projects']);
  }
}