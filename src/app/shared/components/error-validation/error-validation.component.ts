import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-validation',
  templateUrl: './error-validation.component.html',
  styleUrls: ['./error-validation.component.scss']
})
export class ErrorValidationComponent {
  @Input() showError?: boolean;
  @Input() field?: string;

  constructor(){}
}
