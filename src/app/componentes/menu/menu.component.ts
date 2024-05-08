import { Component } from '@angular/core';
import { Router,RouterModule, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { SaladejuegoservicioService } from '../../servicios/saladejuegoservicio.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  public logueado :boolean =false;
  

  constructor(private _auth : SaladejuegoservicioService, private  _router: Router){
    
  }
  ngOnInint(){
    this.logueado = this._auth.usuarioLogeado();
  }

  usuarioLogeado(){
    this._auth.getIfoUsuarioLoggeado().subscribe(res=>{
      if(res != null ){
        this.logueado=true;
      }else{
        this.logueado =false;
      }

    }
    )
  }

  menuItemClicked(option: string): void {
    console.log(option + ' clicked');
  }
  logout()
  {
    this._auth.logOut().then(res=>{
    this.logueado = false;
    this._router.navigate(['home']);
    })
  }
 
}
