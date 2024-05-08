import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SaladejuegoservicioService } from '../servicios/saladejuegoservicio.service';

@Injectable({ providedIn: 'root' })

export default class AuthGuard {

  constructor(private router: Router, private authService: SaladejuegoservicioService) {} // Inject AuthService

  canActivateFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    if (this.authService.getIfoUsuarioLoggeado()) {
      return true; // Permitir acceso y mostrar botón "Cerrar Sesión"
    } else {
      return true; // Permitir acceso y mostrar botón "Login"
    }
  };
}