import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'rock-paper-scissors';

  public isModalVisible = false;

  constructor(private cdr: ChangeDetectorRef) {}

  public onClick(): void {
    this.isModalVisible = true;
    this.cdr.detectChanges();
  }

  public onModalClose(): void {
    this.isModalVisible = false;
  }
}
