import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { FormCreaterequisition, PagedRequestDto, ReqCvs } from '../type/requisition';
import { ApiResponse } from 'src/app/shared/type/shared';

@Injectable({
  providedIn: 'root'
})
export class RequisitionService {
  status = new BehaviorSubject({});
  branch = new BehaviorSubject({});
  position = new BehaviorSubject({});
  skill = new BehaviorSubject({});
  userType = new BehaviorSubject({});
  level = new BehaviorSubject({});
  priority = new BehaviorSubject({});
  iteamStaff = new BehaviorSubject([]);
  totalQuantity = new BehaviorSubject(0);
  totalCount = new BehaviorSubject(0);
  loading = new BehaviorSubject(true);
  payload = new PagedRequestDto();

  constructor(public api: ApiService) { }

  getStatus() {
    return this.status.asObservable();
  }

  getBranch() {
    return this.branch.asObservable();
  }

  getPosition() {
    return this.position.asObservable();
  }

  getSkill() {
    return this.skill.asObservable();
  }

  getUser() {
    return this.userType.asObservable();
  }

  getLevel() {
    return this.level.asObservable();
  }

  getPriority() {
    return this.priority.asObservable();
  }

  getLoading() {
    return this.loading.asObservable();
  }

  getDataStaff() {
    return this.iteamStaff.asObservable();
  }

  getTotalQuantity() {
    return this.totalQuantity.asObservable();
  }

  getTotalCount() {
    return this.totalCount.asObservable();
  }

  getRequestStatus() {
    const url = 'services/app/Common/GetRequestStatus';
    return this.api.get(url).subscribe((json) => {
      this.status.next(json.result);
    })
  }

  getAllBranch() {
    const url = 'services/app/Branch/GetAll';
    return this.api.get(url).subscribe((json) => {
      this.branch.next(json.result);
    })
  }

  getDropdownPositions() {
    const url = 'services/app/Common/GetDropdownPositions';
    return this.api.get(url).subscribe((json) => {
      this.position.next(json.result);
    })
  }

  getAllSkill() {
    const url = 'services/app/Skill/GetAll';
    return this.api.get(url).subscribe((json) => {
      this.skill.next(json.result);
    })
  }

  getAllPagingRequisitionStaff() {
    const url = 'services/app/RequisitionStaff/GetAllPaging';
    this.loading.next(true);
    return this.api.post(url, this.payload)
      .subscribe((json) => {
        this.iteamStaff.next(json.result.items);
        this.totalQuantity.next(json.result.totalQuantity);
        this.totalCount.next(json.result.totalCount);
        this.loading.next(false);
      });
  }

  getAllPagingRequisitionIntern() {
    const url = 'services/app/RequisitionIntern/GetAllPaging';
    this.loading.next(true);
    return this.api.post(url, this.payload)
      .subscribe((json) => {
        this.iteamStaff.next(json.result.items);
        this.totalQuantity.next(json.result.totalQuantity);
        this.totalCount.next(json.result.totalCount);
        this.loading.next(false);
      });
  }

  getGetCVs(id: number): Observable<ApiResponse<ReqCvs>> {
    const url = 'services/app/RequisitionStaff/GetCVsByRequestId?requestId=' + id;
    return this.api.get(url);
  }

  delete(id: number): Observable<ApiResponse<string>> {
    const url = 'services/app/RequisitionStaff/Delete?Id=' + id;
    return this.api.delete(url);
  }

  getUserTypeApi() {
    const url = 'services/app/CapabilitySetting/GetUserType';
    return this.api.get(url).subscribe((json) => {
      this.userType.next(json.result);
    });
  }

  getRequestLevel() {
    const url = 'services/app/Common/GetRequestLevel';
    return this.api.get(url).subscribe((json) => {
      this.level.next(json.result);
    })
  }

  getPriorityApi() {
    const url = 'services/app/Common/GetPriority';
    return this.api.get(url).subscribe((json) => {
      this.priority.next(json.result);
    })
  }

  requisitionStaffCreate(payload: FormCreaterequisition) {
    const url = 'services/app/RequisitionStaff/Create';
    return this.api.post(url, payload);
  }

  requisitionStaffUpdate(payload: FormCreaterequisition) {
    const url = 'services/app/RequisitionStaff/Update';
    return this.api.put(url, payload);
  }

  requisitionInternCreate(payload: FormCreaterequisition) {
    const url = 'services/app/RequisitionIntern/Create';
    return this.api.post(url, payload);
  }

  requisitionInternUpdate(payload: FormCreaterequisition) {
    const url = 'services/app/RequisitionIntern/Update';
    return this.api.put(url, payload);
  }
}