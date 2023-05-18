import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { LoginComponent } from './pages/login/login.component';
import { AltaProductoComponent } from './pages/alta-producto/alta-producto.component';
import { CanActivateLoginGuard } from './guards/can-activate-login.guard';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { ListadoPublicoComponent } from './components/listado-publico/listado-publico.component';
import { ABMContainerComponent } from './pages/abmcontainer/abmcontainer.component';
import { CanActivateAdministradorGuard } from './guards/can-activate-administrador.guard';

const routes: Routes = [
  { path: 'abmcontainer', component: ABMContainerComponent, canActivate: [CanActivateAdministradorGuard] },
  { path: 'listado-publico', component: ListadoPublicoComponent },
  { path: 'producto-detalle', component: ProductoDetalleComponent, canActivate: [CanActivateLoginGuard] },
  { path: 'alta-producto', component: AltaProductoComponent, canActivate: [CanActivateLoginGuard] },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
