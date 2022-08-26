import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

enum Item {
  rock = 'rock',
  paper = 'paper',
  scissors = 'scissors',
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {
  public items: Item[] = [Item.rock, Item.paper, Item.scissors];
  public isSelected = false;
  public selectedItem1: Item | undefined;
  public selectedItem2: Item | undefined;
  public winner: Item | undefined;
  public score = 0;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  public onSelectItem(item: Item): void {
    this.isSelected = true;
    this.selectedItem1 = item;
    this.selectedItem2 = this.items[Math.floor(Math.random() * 3)];

    if (this.selectedItem1 === Item.paper) {
      if (this.selectedItem2 === Item.rock) this.winner = this.selectedItem1;
      else if (this.selectedItem2 === Item.scissors)
        this.winner = this.selectedItem2;
      else this.winner = undefined;
    } else if (this.selectedItem1 === Item.rock) {
      if (this.selectedItem2 === Item.scissors)
        this.winner = this.selectedItem1;
      else if (this.selectedItem2 === Item.paper)
        this.winner = this.selectedItem2;
      else this.winner = undefined;
    } else {
      if (this.selectedItem2 === Item.paper) this.winner = this.selectedItem1;
      else if (this.selectedItem2 === Item.rock)
        this.winner = this.selectedItem2;
      else this.winner = undefined;
    }

    if (this.winner === this.selectedItem2 && this.score > 0) this.score--;
    else if (this.winner === this.selectedItem1) this.score++;
  }

  public onClick(): void {
    this.isSelected = false;
  }
}
