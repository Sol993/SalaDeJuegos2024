import { Component } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';



@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule, 
    MatGridListModule
  ],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent {
  palabras: string[] = ['PLATO', 'ELEFANTE', 'COMPUTADORA', 'RANA', 'QUESO', 'PARAGUAS', 'TELEVISION', 'CELULAR', 'MONTAÑA', 'JUNGLA','PERRO','TIERRA'];
  palabraSecreta: string = ''; 
  palabraOculta: string[] = []; 
  letrasPalabraSecreta: string[] = [];
  letrasDisponibles: { letra: string, activo: boolean }[] = [];
  intentosRestantes: number = 0; 
  juegoTerminado: boolean = false; 

  constructor() {
    this.nuevaPartida();
  }

  nuevaPartida(): void {
    this.nuevaPalabra();
    this.inicializarLetras();
    this.intentosRestantes = 0;
    this.juegoTerminado = false;
  }

  nuevaPalabra(): void {
    const indiceAleatorio = Math.floor(Math.random() * this.palabras.length);
    this.palabraSecreta = this.palabras[indiceAleatorio];
    this.letrasPalabraSecreta = this.palabraSecreta.split(''); 
    this.palabraOculta = this.letrasPalabraSecreta.map(letra => '_'); 
  }

  inicializarLetras(): void {
    this.letrasDisponibles = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('').map(letra => ({ letra, activo: true }));
  }

  seleccionarLetra(letra: string): void {
    if (!this.juegoTerminado) {
      if (this.intentosRestantes < 6) { 
        const letraSeleccionada = this.letrasDisponibles.find(l => l.letra === letra);
        if (letraSeleccionada && letraSeleccionada.activo) {
          letraSeleccionada.activo = false; 
          if (this.palabraOculta.includes('_')) {
            if (this.letrasPalabraSecreta.includes(letra)) {
              for (let i = 0; i < this.letrasPalabraSecreta.length; i++) {
                if (this.letrasPalabraSecreta[i] === letra) {
                  this.palabraOculta[i] = letra;
                }
              }
              if (!this.palabraOculta.includes('_')) {
                this.juegoGanado();
              }
            } else {
              this.intentosRestantes++;
              if (this.intentosRestantes === 6) {
                this.juegoPerdido();
              }
            }
          }
        }
      }
    }
  }

  juegoGanado(): void {
    this.juegoTerminado = true;
  }

  juegoPerdido(): void {
    this.juegoTerminado = true;
  }

}
