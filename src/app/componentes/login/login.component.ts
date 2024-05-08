import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule,RouterOutlet } from '@angular/router';
import { SaladejuegoservicioService } from '../../servicios/saladejuegoservicio.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    RouterModule, 
    RouterOutlet,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email:string = "";
  password : string = "";
  logueado : boolean;
  
  constructor(private router: Router, private _auth : SaladejuegoservicioService) {
this.logueado = false;
   }

  login(){
    this._auth.login(this.email,this.password).then(res=>{
      if(res != null){
        console.log(res);
        this.router.navigate(['home']);
      }
      
    })
    //console.log(this.email,this.password);
  }

  usuarioRegistrado(){
    this.email="sol993@utn.com";
    this.password="123456";
  }
  registro(){
    this.router.navigate(['registro']);
  }

}
