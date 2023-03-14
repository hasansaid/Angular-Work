import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JiraBoardsService {
  public boards: Array<any> = [];
  constructor() {
    let getLocal = localStorage.getItem('boards');
    if (getLocal != null) {
      this.boards = JSON.parse(getLocal);
    }
  }

  public createBoard(title: any) {
    let newBoardObj = {
      title: title,
      cards: [],
    };
    this.boards.push(newBoardObj);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }

  public updateToLocalstorage() {
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }

  public deleteBoard(boardIndex) {
    this.boards.splice(boardIndex, 1);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }
}
