import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from 'src/app/models/projects/projects/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private baseURL="http://localhost:8080/api/v1/projects"
  constructor(private httpClient: HttpClient) { }
  listarProjects():Observable<Projects[]>{
    return this.httpClient.get<Projects[]>(`${this.baseURL}`);
  }
  getProjectsById(id:number):Observable<Projects>{
    return this.httpClient.get<Projects>(`${this.baseURL}/buscarporid/${id}`)
  }
  registrarProjects(projects:Projects) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,projects)
  }
  
  actualizarProject(id: number, project: Projects): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, project);
  }
  eliminarProject(id: number): Observable<Object> {
  return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
