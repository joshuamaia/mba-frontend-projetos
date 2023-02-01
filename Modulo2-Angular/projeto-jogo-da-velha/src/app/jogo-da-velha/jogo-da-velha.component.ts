import { Component } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css'],
})
export class JogoDaVelhaComponent {
  winner: string = '';
  currentPlayer: string = 'O';
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  playerX(x: number, y: number) {
    return this.board[x][y] === 'X' ? true : false;
  }

  processPlay(x: number, y: number) {
    if (this.winner === '' && this.board[x][y] === '') {
      this.board[x][y] = this.currentPlayer;
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      }
      if (this.currentPlayer === 'O') {
        this.currentPlayer = 'X';
      } else {
        this.currentPlayer = 'O';
      }
    }
  }

  checkWinner(player: string): boolean {
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[i][0] === player &&
        this.board[i][1] === player &&
        this.board[i][2] === player
      ) {
        return true;
      }
    }
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[0][i] === player &&
        this.board[1][i] === player &&
        this.board[2][i] === player
      ) {
        return true;
      }
    }
    if (
      this.board[0][0] === player &&
      this.board[1][1] === player &&
      this.board[2][2] === player
    ) {
      return true;
    }
    if (
      this.board[0][2] === player &&
      this.board[1][1] === player &&
      this.board[2][0] === player
    ) {
      return true;
    }
    return false;
  }

  reset() {
    this.winner = '';
    this.currentPlayer = 'O';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }
}
