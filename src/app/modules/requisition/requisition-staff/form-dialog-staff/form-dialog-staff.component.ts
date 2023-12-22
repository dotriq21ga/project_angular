import { Component } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RequisitionService } from '../../service/requisition.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActionEnum, BranchResult, ITeamPosition, Level, Position, Priority, RequisitionConfigDiaLog, Skill, USER_TYPE, UserType } from '../../type/requisition';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form-dialog-staff',
  templateUrl: './form-dialog-staff.component.html',
  styleUrls: ['./form-dialog-staff.component.scss'],
  providers: [DatePipe, DialogService]
})

export class FormDialogStaffComponent {
  userType: UserType[] = [];
  level: Level[] = [];
  branch: BranchResult[] = [];
  position: Position<ITeamPosition>[] = [];
  skill: Skill[] = [];
  priority: Priority[] = [];
  form!: FormGroup;
  dataDialogConfig!: RequisitionConfigDiaLog<any>;

  constructor(private _fb: FormBuilder, public ref: DynamicDialogRef, private requisitionService: RequisitionService,
    private datePipe: DatePipe, public dialogService: DialogService, public config: DynamicDialogConfig) { }

  ngOnInit() {
    this.dataDialogConfig = this.config.data;
    this.initForm(this.dataDialogConfig.action);

    this.requisitionService.getUser().subscribe((json) => {
      this.userType = json as UserType[];
    });

    this.requisitionService.getLevel().subscribe((json) => {
      this.level = json as Level[];
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

    this.requisitionService.getPriority().subscribe((json) => {
      this.priority = json as Priority[];
    })
  }

  isControlInvalid(field: string) {
    const control = this.form.get(field);
    return control?.touched && control?.invalid;
  }

  initForm(action: ActionEnum) {
    console.log(this.dataDialogConfig.requisition)
    const isFillData = action === ActionEnum.UPDATE;
    const reqStaff = this.dataDialogConfig.requisition;
    const branchId: number = this.getPropertyVal(isFillData, reqStaff, 'branchId');
    const subPositionId: number = this.getPropertyVal(isFillData, reqStaff, 'subPositionId');
    const levelId: number = this.getPropertyVal(isFillData, reqStaff, 'level');
    const skillIds: number[] = isFillData ? reqStaff.skills.map((obj: any) => obj.id) : [];
    const quantity: number = this.getPropertyVal(isFillData, reqStaff, 'quantity') || 1;
    const note: string = this.getPropertyVal(isFillData, reqStaff, 'note');
    const priorityId: number = this.getPropertyVal(isFillData, reqStaff, 'priority');
    const timeNeed: Date = isFillData ? new Date(reqStaff.timeNeed) : new Date();

    this.form = this._fb.group({
      userType: new FormControl({ value: USER_TYPE.STAFF, disabled: true }, [Validators.required]),
      branchId: new FormControl(branchId, [Validators.required]),
      subPositionId: new FormControl(subPositionId, [Validators.required]),
      level: new FormControl(levelId, [Validators.required]),
      skillIds: new FormControl(skillIds, [Validators.required]),
      quantity: new FormControl(quantity, [Validators.required, Validators.min(0)]),
      priority: new FormControl(priorityId, [Validators.required]),
      timeNeed: new FormControl(timeNeed, [Validators.required]),
      note: new FormControl(note),
    });
  }

  private getPropertyVal(isFillData: boolean, obj: any, propName: string) {
    return isFillData ? obj[propName] : null;
  }

  Save() {
    if (this.form.valid) {
      this.payloadForm();
    } else {
      this.markFormGroupTouched(this.form);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  payloadForm() {
    this.form.get('timeNeed')?.setValue(this.datePipe.transform(this.form.get('timeNeed')?.value, 'yyyy/MM/dd'));
    switch (this.config.data.action) {
      case ActionEnum.CREATE:
        this.create()
        break;
      case ActionEnum.UPDATE:
        this.update()
        break;
    }
  }

  create() {
    this.requisitionService.requisitionStaffCreate(this.form.getRawValue())
      .subscribe(() => {
        this.ref.close();
        this.requisitionService.getAllPagingRequisitionStaff();
      });
  }

  update() {
    this.form.addControl('id', this._fb.control(this.dataDialogConfig.requisition.id));
    this.requisitionService.requisitionStaffUpdate(this.form.getRawValue())
      .subscribe(() => {
        this.ref.close();
        this.requisitionService.getAllPagingRequisitionStaff();
      });
  }
}