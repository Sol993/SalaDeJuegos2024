import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AboutComponent } from './componentes/about/about.component';
import { ErrorComponent } from './componentes/error/error.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { MayoromenorComponent } from './componentes/mayoromenor/mayoromenor.component';
import { PreguntadosComponent } from './componentes/preguntados/preguntados.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import AuthGuard from './guards/validaruserguard.guard';

export const routes: Routes = [ 
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path:'home', component: HomeComponent },
    { path:'login', component: LoginComponent },
    { path:'about', component: AboutComponent },
    { path:'home/ahorcado', component: AhorcadoComponent},
    { path:'registro', component:RegistroComponent },
    { path:'home/mayoromenor', component: MayoromenorComponent},
    { path:'home/preguntados', component: PreguntadosComponent},
    { path: '**', component: ErrorComponent }
];
