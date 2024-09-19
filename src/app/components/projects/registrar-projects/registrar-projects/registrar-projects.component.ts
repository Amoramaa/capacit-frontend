import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/models/projects/projects/projects';
import { ProjectsService } from 'src/app/servicios/projects/projects.service';
import {Router } from '@angular/router'

@Component({
  selector: 'app-registrar-projects',
  templateUrl: './registrar-projects.component.html',
  styleUrls: ['./registrar-projects.component.css']
})
export class RegistrarProjectsComponent implements OnInit {
  projects : Projects = new Projects();
  constructor(private projecsService:ProjectsService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.projects);
  }
  guardarProjects(){
    this.projecsService.registrarProjects(this.projects).subscribe(dato => { 
      console.log(dato);
      this.irAlaListaDeProjects();
    },error => console.log(error));
  }
  irAlaListaDeProjects(){
    this.router.navigate(['/projects']);
  }
  onSudmit(){
    this.guardarProjects();
  }
}
