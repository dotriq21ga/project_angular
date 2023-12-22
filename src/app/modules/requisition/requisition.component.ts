import { Component } from '@angular/core';
import { RequisitionService } from './service/requisition.service';

@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.scss']
})

export class RequisitionComponent {
  constructor(private requisitionService: RequisitionService) {
    requisitionService.getUserTypeApi();
    requisitionService.getRequestStatus();
    requisitionService.getAllBranch();
    requisitionService.getDropdownPositions();
    requisitionService.getAllSkill();
    requisitionService.getRequestLevel();
    requisitionService.getPriorityApi();
  }
}