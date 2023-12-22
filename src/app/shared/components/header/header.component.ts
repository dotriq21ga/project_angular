import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IHeader } from '../../type/shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogService]
})

export class HeaderComponent {
  @Input() header?: IHeader;
  @Input() clone?: boolean;
  @Output() onBtnClick = new EventEmitter<any>();

  constructor(public dialogService: DialogService) { }
  ref!: DynamicDialogRef;
  show() {
    this.onBtnClick.emit();
  }
}
