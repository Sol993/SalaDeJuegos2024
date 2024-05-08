import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SaladejuegoservicioService {
 private logeado: boolean=false;
  constructor(public auth: AngularFireAuth,private snackBar: MatSnackBar) { }
  async login(email: string, password: string )
  {
    try{
    return await this.auth.signInWithEmailAndPassword(email,password);
  }catch(error)
  {
    this.snackBar.open("No se a ah podido hacer login correctamente. Error:"+ error,'Cerrar'), {
      duration: 2000, 
      horizontalPosition: 'center', 
      verticalPosition: 'top',
    };
    console.log("No se ha podido hacer login"+ error);
    return null; 
  }
  }
  
  async registro(email: string, password: string )  {
    try{
    return await this.auth.createUserWithEmailAndPassword(email,password);
  }catch(error){
    alert("No se a podido registrar. Error:"+ error),
    console.log("No se a podido registrar"+ error);
    return null; 
  }
 }
async logOut()
{
  this.auth.signOut();
}

getIfoUsuarioLoggeado(){
  return this.auth.authState;
}
usuarioLogeado(){
  if(this.auth == null)
    {
      return false;
    }
    else{
      return true;
    }
}

}
