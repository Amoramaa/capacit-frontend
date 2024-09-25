import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from 'src/app/models/projects/projects/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private baseURL="http://localhost:8080/api/v1/projects";
  constructor(private httpClient: HttpClient) { }
  listarProjects():Observable<Projects[]>{
    return this.httpClient.get<Projects[]>(`${this.baseURL}`);
  }
  //Vista detalles.
  getProjectsById(id:number):Observable<Projects>{
    return this.httpClient.get<Projects>(`${this.baseURL}/buscarporid/${id}`)
  }
  //Vista Registrar
  registrarProjects(project: Projects): Observable<Projects> {
    return this.httpClient.post<Projects>(`${this.baseURL}/crear`, project);
  }
  
  //Vista Actualizar
  actualizarProject(id: number, project: Projects): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, project);
  }
  //Vista Eliminar
  eliminarProject(id: number): Observable<Object> {
  return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  //Páginación
  listarProjectsPaginados(page: number, size: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/page?page=${page}&size=${size}`);
}


}
