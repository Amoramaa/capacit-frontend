import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './components/empleado/lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './components/empleado/registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './components/empleado/actualizar-empleado/actualizar-empleado.component';
import { DetalleEmpleadoComponent } from './components/empleado/detalle-empleado/detalle-empleado.component';
import { ListarClientesComponent } from './components/cliente/listar-clientes/listar-clientes.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { ListarPedidosComponent } from './components/pedido/listar-pedidos/listar-pedidos.component';
import { ListarProjectsComponent } from './components/projects/listar-projects/listar-projects.component';
import { RegistrarProjectsComponent } from './components/projects/registrar-projects/registrar-projects/registrar-projects.component';
import { ProjectDetailComponent } from './components/projects/project-detail/project-detail.component';
import { ActualizarProjectComponent } from './components/projects/actualizar-project/actualizar-project/actualizar-project.component';

//aqui se configuran las rutas URL a donde tienen que redireccionar (componentes)
const routes: Routes = [
  {path : 'empleados',component:ListaEmpleadosComponent},
  {path : '',redirectTo:'empleados',pathMatch:'full'},
  {path : 'registrar-empleado',component : RegistrarEmpleadoComponent},
  {path : 'actualizar-empleado/:id',component : ActualizarEmpleadoComponent},
  {path : 'detalle-empleado/:id',component : DetalleEmpleadoComponent},
  {path : 'clientes', component:ListarClientesComponent},
  {path : 'actualizar-cliente/:id', component : ActualizarClienteComponent},
  {path : 'pedidos', component : ListarPedidosComponent},
  {path : 'projects', component : ListarProjectsComponent},
  {path : 'registrar-projects', component : RegistrarProjectsComponent},
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'projects/actualizar/:id', component: ActualizarProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
