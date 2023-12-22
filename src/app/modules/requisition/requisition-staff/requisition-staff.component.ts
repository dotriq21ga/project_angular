import { ChangeDetectorRef, Component } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { RequisitionService } from '../service/requisition.service';
import {
  ActionEnum, BranchResult, COMPARISION_OPERATOR, DATA_PROCESS, Filter, HEADER_TITLE_REQUISITION,
  IProcessStatus, ITeamPosition, IteamRequisition, Position, RequisitionConfigDiaLog,
  Skill, SortDirection, StatusResult, ToastMessageType
} from '../type/requisition';
import { SortType } from 'src/app/shared/type/shared';
import { checkNumber } from 'src/app/shared/helper/utils.helper';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormDialogStaffComponent } from './form-dialog-staff/form-dialog-staff.component';
import { FIRST_PAGE, OPTION_PAGE, ROWS_PAGE } from 'src/app/shared/type/shared';
import { IHeader } from 'src/app/shared/type/shared';

@Component({
  selector: 'app-requisition-staff',
  templateUrl: './requisition-staff.component.html',
  styleUrls: ['./requisition-staff.component.scss'],
  providers: [ConfirmationService, MessageService, DialogService]
})

export class RequisitionStaffComponent {
  public readonly DIALOG_ACTION = ActionEnum;
  public readonly SORT_TYPE = SortType;
  first = FIRST_PAGE;
  rows = ROWS_PAGE;
  option = OPTION_PAGE;
  menuIteam: IHeader = HEADER_TITLE_REQUISITION;
  process: IProcessStatus[] = DATA_PROCESS;
  items: MenuItem[] = [];
  status: StatusResult[] = [];
  branch: BranchResult[] = [];
  position: Position<ITeamPosition>[] = [];
  skill: Skill[] = [];
  loading: boolean = true;
  iteamStaff: IteamRequisition[] = [];
  totalQuantity: number = 0;
  totalCount: number = 0;
  isAndCondition: boolean = false;
  searchWithReqStatus: number = 0;
  searchWithBranch!: number;
  searchWithSubPosition!: number;
  skillFilter: any[] = [];
  showCountIteam: number = 2;
  showAll: boolean = false;
  idCVs!: any;
  currentReqStaff = null;
  title: string = "Staff";
  ref!: DynamicDialogRef;
  showLabelCloseAndClone = false;

  constructor(private messageService: MessageService,
    private cdref: ChangeDetectorRef, private confirmationService: ConfirmationService,
    private requisitionService: RequisitionService,
    public dialogService: DialogService) {
    this.menuIteam.subTitle = {};
    this.menuIteam.subTitle.title = this.title;
  }

  loadData(event: any) {
    this.payLoadFilterData()
    this.requisitionService.payload.sortDirection = event.sortOrder == this.SORT_TYPE.ASC ? SortDirection.ASC : SortDirection.DESC;
    this.requisitionService.payload.sort = event.sortField;
    this.requisitionService.payload.maxResultCount = event.rows;
    this.requisitionService.payload.skipCount = event.first;
    this.list();
  }

  list() {
    this.requisitionService.payload.isAndCondition = this.isAndCondition;
    this.requisitionService.getAllPagingRequisitionStaff();
    this.requisitionService.getLoading().subscribe((json) => {
      this.loading = json;
    })

    this.requisitionService.getDataStaff().subscribe((json) => {
      this.iteamStaff = json as IteamRequisition[];
    })

    this.requisitionService.getTotalQuantity().subscribe((json) => {
      this.totalQuantity = json;
    })

    this.requisitionService.getTotalCount().subscribe((json) => {
      this.totalCount = json;
    })
  }

  ngOnInit() {
    this.requisitionService.getStatus().subscribe((json) => {
      this.status = json as StatusResult[];
    });

    this.requisitionService.getBranch().subscribe((json) => {
      this.branch = json as BranchResult[];
    });

    this.requisitionService.getPosition().subscribe((json) => {
      this.position = json as Position<ITeamPosition>[];
    })

    this.requisitionService.getSkill().subscribe((json) => {
      this.skill = json as Skill[];
    })

    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Add CV',
            icon: 'pi pi-user-plus',
          },
          {
            label: 'Edit',
            icon: 'pi pi-pencil',
            command: () => {
              const data = this.iteamStaff.reduce((accumulator, currentValue) => {
                if (currentValue.id == this.idCVs) {
                  return currentValue;
                }
                return accumulator;
              }, {})

              this.showDiaLog(this.DIALOG_ACTION.UPDATE, data as IteamRequisition);
            }
          },
          {
            label: 'Clone',
            icon: 'pi pi-clone',
          },
          {
            label: 'Close',
            icon: 'pi pi-times',
          },
          {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
              this.delete(this.idCVs);
            }
          }
        ]
      },
    ];
  }

  showDiaLog(action: ActionEnum, data?: IteamRequisition) {
    const requisitionStaff = action == ActionEnum.UPDATE ? data : null;
    const dialogConfig: RequisitionConfigDiaLog<IteamRequisition>
      = { requisition: requisitionStaff as IteamRequisition, action: action };
    this.ref = this.dialogService.open(FormDialogStaffComponent, {
      header: `${action} Requisition`,
      width: '55%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: dialogConfig,
    });
  }

  payLoadFilterData() {
    this.requisitionService.payload.filterItems = [];
    this.requisitionService.payload.skillIds = this.skillFilter;
    if (checkNumber(this.searchWithReqStatus)) {
      const filterObj: Filter = { propertyName: 'status', value: this.searchWithReqStatus, comparision: COMPARISION_OPERATOR.Equal };
      this.requisitionService.payload.filterItems.push(filterObj);
    }

    if (checkNumber(this.searchWithBranch)) {
      const filterObj: Filter = {
        propertyName: 'branchId',
        value: this.searchWithBranch, comparision: COMPARISION_OPERATOR.Equal
      }
      this.requisitionService.payload.filterItems.push(filterObj);
    }

    if (checkNumber(this.searchWithSubPosition)) {
      const filterObj: Filter = {
        propertyName: 'subPositionId',
        value: this.searchWithSubPosition, comparision: COMPARISION_OPERATOR.Equal
      }
      this.requisitionService.payload.filterItems.push(filterObj);
    }
  }

  colorItem(iteam: string) {
    if (iteam == 'Critical') {
      return "bg-danger";
    }
    else if (iteam == 'Low') {
      return "bg-info";
    } else if (iteam == "Medium") {
      return "bg-success"
    }
    else {
      return "bg-warning"
    }
  }

  getDataCv(reqStaff: IteamRequisition, index: number) {
    if (!this.iteamStaff[index].reqCvs) {
      this.requisitionService.getGetCVs(reqStaff.id).subscribe((json) => {
        this.iteamStaff[index].reqCvs = json.result;
      })
    }
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  showToastMessage(type?: string, summary?: string, detail?: string) {
    this.messageService.add({ severity: type, summary: summary, detail: '#' + detail });
  }

  delete(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete ' + `#${id}` + '?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.requisitionService.delete(id)
          .subscribe((json) => {
            this.onGetDataChange();
            this.showToastMessage(json.success ? ToastMessageType.SUCCESS : ToastMessageType.ERROR,
              json.success ? json.result : "Delete was failed", this.idCVs);
          })
      },
    });
  }

  onGetDataChange() {
    this.payLoadFilterData();
    this.list()
  }

  onChangeisAndCondition() {
    this.isAndCondition = this.isAndCondition ? false : true;
    this.list();
  }
}