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
  filteredProjects: Projects[] = []; // Lista filtrada que se mostrará en la tabla
  searchTerm: string = ''; // Término de búsqueda
  totalPages: number = 0;
  currentPage: number = 0;
  pageSize: number = 5; // Puedes cambiarlo según lo que necesites
  pageSizes: number[] = [5, 10, 20, 50]; // Opciones para el combo de tamaño de página

  constructor(private projectsService: ProjectsService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerProjects(this.currentPage);
  }

  obtenerProjects(page: number): void {
    this.projectsService.listarProjectsPaginados(page, this.pageSize).subscribe(data => {
      this.projects = data.projects;  // Todos los proyectos
      this.filteredProjects = this.projects; // Inicialmente mostrar todos los proyectos
      this.totalPages = data.totalPages;
      this.currentPage = data.currentPage;
    }, error => {
      console.error('Error al obtener la lista de proyectos paginados:', error);
    });
  }

  // Método para filtrar proyectos según el término de búsqueda
  buscarProyectos(): void {
    const term = this.searchTerm.toLowerCase();

    this.filteredProjects = this.projects.filter(project =>
      project.nombre.toLowerCase().includes(term) ||
      project.fecha_inicio.toLowerCase().includes(term) ||
      project.fecha_fin.toLowerCase().includes(term)
    );
  }

  cambiarPagina(page: number): void {
    this.currentPage = page;
    this.obtenerProjects(this.currentPage);
  }

  onChangePageSize(event: any): void {
    this.pageSize = event.target.value;
    this.obtenerProjects(this.currentPage);
  }

  verDetallesProyecto(id: number): void {
    this.router.navigate([`/projects/${id}`]);
  }

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
