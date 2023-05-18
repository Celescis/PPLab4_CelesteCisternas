import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ListadoPaisesComponent } from './components/listado-paises/listado-paises.component';
import { AltaProductoComponent } from './pages/alta-producto/alta-producto.component';
import { FormAltaProductoComponent } from './components/form-alta-producto/form-alta-producto.component';
import { AngularFireModule } from '@angular/fire/compat';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';
import { ListadoPublicoComponent } from './components/listado-publico/listado-publico.component';
import { InformacionProductoComponent } from './components/informacion-producto/informacion-producto.component';
import { InformacionPaisComponent } from './components/informacion-pais/informacion-pais.component';
import { ABMContainerComponent } from './pages/abmcontainer/abmcontainer.component';
import { ListaContainerComponent } from './components/lista-container/lista-container.component';
import { CrearContainerComponent } from './components/crear-container/crear-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    NavbarComponent,
    AltaProductoComponent,
    ListadoPaisesComponent,
    FormAltaProductoComponent,
    ProductoDetalleComponent,
    ListadoProductoComponent,
    ListadoPublicoComponent,
    InformacionProductoComponent,
    InformacionPaisComponent,
    ListadoProductoComponent,
    ABMContainerComponent,
    ListaContainerComponent,
    CrearContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

