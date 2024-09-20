import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/servicios/projects/projects.service';
import { Projects } from 'src/app/models/projects/projects/projects';
import swal from 'sweetalert2';
@Component({
  selector: 'app-listar-projects',
  templateUrl: './listar-projects.component.html',
  styleUrls: ['./listar-projects.component.css']
})
export class ListarProjectsComponent implements OnInit {
  projects: Projects[] = [];
  totalPages: number = 0;
  currentPage: number = 0;
  pageSize: number = 5; // Puedes cambiarlo según lo que necesites
  constructor(private projectsService: ProjectsService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerProjects(this.currentPage);
  }

  obtenerProjects(page: number): void {
    this.projectsService.listarProjectsPaginados(page, this.pageSize).subscribe(data => {
      this.projects = data.projects;  // Acceder correctamente a 'projects'
      this.totalPages = data.totalPages;
      this.currentPage = data.currentPage;
    }, error => {
      console.error('Error al obtener la lista de proyectos paginados:', error);
    });
  }
  
  cambiarPagina(page: number): void {
    this.currentPage = page;
    this.obtenerProjects(this.currentPage);
  }
  verDetallesProyecto(id: number): void {
    // Redirige a la página de detalles del proyecto
    this.router.navigate([`/projects/${id}`]);
  }
  // listar-projects.component.ts
  actualizarProyecto(id: number): void {
    this.router.navigate([`/projects/actualizar/${id}`]);
  }
  eliminarProject(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este proyecto?')) {
      this.projectsService.eliminarProject(id).subscribe(
        () => {
          console.log('Proyecto eliminado con éxito');
          this.obtenerProjects(this.currentPage);  // Vuelve a cargar la lista de proyectos después de eliminar uno
        },
        error => console.error('Error al eliminar el proyecto:', error)
      );
    }
  }
  
}
