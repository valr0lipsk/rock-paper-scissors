import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() public isVisible = false;
  @Output() public closeModal = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onClose() {
    this.closeModal.emit();
  }
}
