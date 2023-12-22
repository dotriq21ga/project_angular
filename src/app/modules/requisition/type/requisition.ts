import { IHeader } from "src/app/shared/type/shared";

export class PagedRequestDto {
    skipCount!: number;
    maxResultCount!: number;
    searchText: string = "";
    filterItems: Filter[] = [];
    sort!: string;
    sortDirection!: number;
    isAndCondition!: boolean;
    skillIds?: any[]
}

export class Filter {
    propertyName!: string;
    value: any;
    comparision!: number;
    filterType?: number;
    dropdownData?: any[];
}

export enum ToastMessageType {
    WARN = 'warn',
    ERROR = 'error',
    SUCCESS = 'success',
    INFO = 'info'
}

export enum API_RESPONSE_STATUS {
    SUCCESS = 'Success',
    FAILD = 'Faild'
}

export interface IProcessStatus {
    name: string;
}

export const DATA_PROCESS = [
    { name: 'Unprocessed Send Mail' },
    { name: 'Overdue Send Mail' }
]

export enum SortDirection {
    ASC = 0,
    DESC = 1
}



export enum COMPARISION_OPERATOR {
    Equal = 0,
    LessThan = 1,
    LessThanOrEqual = 2,
    GreaterThan = 3,
    GreaterThanOrEqual = 4,
    NotEqual = 5,
    Contains = 6, //For string
    StartsWith = 7, //For string
    EndsWith = 8, //For string
    In = 9 // For ListItem
}

export enum USER_TYPE {
    STAFF = 1,
    INTERN = 0
}

export enum ActionEnum {
    CREATE = "Create",
    UPDATE = "Update",
    CLONE = "Clone",
    CLOSE_AND_CLONE = "Close & Clone",
    PREVIEW = "Preview",
    SELECT = "Select",
}

export class RequisitionConfigDiaLog<T>{
    requisition!: T;
    action!: ActionEnum;
}

export class StatusResult {
    id?: number;
    name?: string;
}

export class BranchResult {
    address?: string;
    colorCode?: string;
    displayName?: string;
    id?: number;
    name?: string;
}

export class Position<T> {
    id?: number;
    position?: string;
    iteam?: T[];
}

export interface ITeamPosition {
    id: number;
    subPosition: string;
}

export class Skill {
    id?: number;
    name?: string;
}

export class IteamRequisition {
    branchId?: number;
    branchName?: string;
    creationTime?: string;
    creatorName?: string;
    creatorUserId?: number;
    id!: number;
    isProjectTool?: boolean;
    lastModifiedName?: string;
    lastModifiedTime?: string;
    level?: number;
    levelInfo?: LevelInfo;
    note?: string;
    priority?: number;
    priorityName?: string;
    projectToolRequestId: any;
    quantity?: number;
    quantityFail?: number;
    quantityOnboard?: number;
    skills!: Skill[];
    status?: number;
    statusName?: string;
    subPositionId?: number;
    subPositionName?: string;
    timeClose?: any;
    timeNeed!: string;
    totalCandidateApply?: number;
    updatedName?: string;
    updatedTime?: string;
    userType?: number;
    userTypeName?: string;
    reqCvs?: any;
}

export interface ReqCvs {
    applyLevel: any;
    applyLevelInfo: any;
    applyTime: string;
    avatar: string;
    branchId: number;
    branchName: string;
    creationTime: string;
    creatorName: string;
    creatorUserId: any;
    cvId: number;
    cvStatus: number;
    cvStatusName: string;
    displayBranchName: any;
    email: string;
    finalLevel: any;
    finalLevelInfo: any;
    fullName: string;
    hrNote: any;
    id: number;
    interviewLevel: any;
    interviewLevelInfo: any;
    interviewTime: any;
    interviews: [];
    isClone: any;
    isFemale: boolean;
    isProjectTool: boolean;
    lastModifiedName: string;
    lastModifiedTime: string;
    linkCV: string;
    note: any;
    onboardDate: any;
    pathAvatar: string;
    pathLinkCV: string;
    phone: string;
    processCVStatus: number;
    projectToolRequestId: any;
    requestBracnhId: number;
    requestBranchName: any;
    requestCVStatus: number;
    requestCVStatusName: string;
    requestId: number;
    requestStatus: number;
    requestStatusName: string;
    requestSubPositionId: number;
    requestSubPositionName: any;
    skills: [];
    subPositionId: number;
    subPositionName: string;
    updatedName: string;
    updatedTime: string;
    userType: number;
    userTypeName: string;
}

export interface LevelInfo {
    defaultName: string;
    id: number;
    shortName: string;
    standardName: string;
}

export interface FormCreaterequisition {
    branchId: number;
    level: number;
    note?: string;
    priority: number;
    quantity: number;
    skillIds: number[];
    subPositionId: number;
    timeNeed: string;
    userType: number;
}

export class UserType {
    id!: number;
    name!: string;
}

export class Level {
    id!: number;
    name!: string;
}

export class Priority {
    id!: number;
    name!: string;
}

export const HEADER_TITLE_REQUISITION: IHeader = {
    title: 'Requisition',
    link: '/app/requisition/staff',
    subTitle: {}
}