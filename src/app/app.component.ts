import { Component } from '@angular/core';
import { Router,RouterModule, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from "./componentes/login/login.component";
import { HomeComponent } from './componentes/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        RouterModule,
        MatSlideToggleModule,
        LoginComponent,
        HomeComponent,
        MenuComponent
        
    ]
})
export class AppComponent {
  title = 'SalaDeJuegos2024';

  constructor(private router: Router) {

  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

  
}
