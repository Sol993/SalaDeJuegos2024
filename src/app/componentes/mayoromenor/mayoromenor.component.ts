import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms'; // Importa FormsModule


@Component({
  selector: 'app-mayoromenor',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
  ],
  templateUrl: './mayoromenor.component.html',
  styleUrl: './mayoromenor.component.css'
})
export class MayoromenorComponent {

  cards: number[] = [];
  currentCard!: number;
  nextCard!: number;
  score: number = 0;
  gameOver: boolean = false;
  intentos: number = 5;

  constructor() { }

  ngOnInit(): void {
    this.startGame();
   
  }

  startGame() {
    this.generateCards();
    this.getNextCard();
  }
  generateCards() {
    for (let i = 1; i <= 12; i++) {
      this.cards.push(i);
    }
  }

  getNextCard() {
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    this.currentCard = this.cards[randomIndex];
  }

  checkGuess(guess: 'mayor' | 'menor') {
    if (this.intentos === 0) {
      this.gameOver = true;
      return;
    }

    const nextCardIndex = Math.floor(Math.random() * this.cards.length);
    this.nextCard = this.cards[nextCardIndex];

    if ((guess === 'mayor' && this.nextCard > this.currentCard) ||
        (guess === 'menor' && this.nextCard < this.currentCard)) {
      this.score++;
      this.currentCard = this.nextCard;
    } else {
      this.intentos--;
    }

    if (this.intentos === 0) {
      this.gameOver = true;
    }
  }
  reiniciarjuego(){
    this.score = 0;
    this.gameOver = false;
    this.startGame();
  }
}
