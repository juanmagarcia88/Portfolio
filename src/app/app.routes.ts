import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';

export const routes: Routes = [
    {'path': '', 'component': InicioComponent},
    {'path': 'redes', 'component': RedesSocialesComponent},
    {'path': 'proyectos', 'component': ProyectosComponent},
    {'path': 'contacto', 'component': ContactoComponent},
    {'path': 'sobre-mi', 'component': SobreMiComponent},
    {'path': 'habilidades', 'component': HabilidadesComponent}
];
