import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, ValidatorFn, AbstractControl, MaxLengthValidator } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Validation from '../../funciones/validadores';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { SaladejuegoservicioService } from '../../servicios/saladejuegoservicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule, 
    ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  miFormulario = this.formBuilder.group({
    nombre: ['', Validators.required],
    email: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmarPassword: ['',[Validators.required,this.confirmPasswordValidator]],
  
  });

    constructor(private formBuilder: FormBuilder,private _auth : SaladejuegoservicioService,private _router: Router) { }

    onSubmit() {
      let email:string = this.miFormulario.value.email ? this.miFormulario.value.email : "";
      let password :string = this.miFormulario.value.password ? this.miFormulario.value.password : "";
      this._auth.registro(email,password).then(res=>{
        console.log(res);
        this._router.navigate(['home']);
      });
      ///  console.warn(this.miFormulario.value);
    }
    
    private confirmPasswordValidator(control: FormControl): ValidatorFn {
        return (control: AbstractControl) => {
          const password = this.miFormulario.get('password')?.value;
          console.log(password);
          if (password !== control.value) {
            return { confirmPasswordError: true };
          }
          return null;
        };
      }

}
