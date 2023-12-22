import { Component } from '@angular/core';
import { FIRST_PAGE, OPTION_PAGE, ROWS_PAGE } from 'src/app/shared/type/shared';
import { SortType } from 'src/app/shared/type/shared';
import { IHeader } from 'src/app/shared/type/shared';
import { HEADER_TITLE_CANDIDATE } from '../type/candidate';

@Component({
  selector: 'app-candidate-staff',
  templateUrl: './candidate-staff.component.html',
  styleUrls: ['./candidate-staff.component.scss']
})
export class CandidateStaffComponent {
  public readonly SORT_TYPE = SortType;
  first = FIRST_PAGE;
  rows = ROWS_PAGE;
  option = OPTION_PAGE;
  menuIteam: IHeader = HEADER_TITLE_CANDIDATE;
  title: string = "Intern";

  constructor() {
    this.menuIteam.subTitle = {};
    this.menuIteam.subTitle.title = this.title;
  }
}
