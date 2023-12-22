import { HttpErrorResponse } from "@angular/common/http";

export interface FoodNode {
    name: string;
    icon: string;
    link?: string;
    children?: FoodNode[];
}

export interface ExampleFlatNode {
    expandable: boolean;
    icon: string;
    name: string;
    level: number;
    link: string | undefined;
}

export const TREE_DATA: FoodNode[] = [
    {
        name: 'Home',
        icon: 'fa-solid fa-home'
    },
    {
        name: 'Requisitions',
        icon: 'fa-solid fa-file-audio',
        children: [
            { name: 'Staff', icon: 'fa-solid fa-bullhorn', link: '/app/requisition/staff' },
            { name: 'Intern', icon: 'fa-solid fa-satellite-dish', link: '/app/requisition/intern' }
        ],
    },
    {
        name: 'Candidates',
        icon: 'fa-solid fa-id-card',
        children: [
            { name: 'Staff Candidate', icon: 'fa-sharp fa-solid fa-user-secret', link: '/app/candidate/staff' },
            { name: 'Intern Candidate', icon: 'fa-solid fa-user-graduate', link: '/app/candidate/intern' }
        ],
    },
];

export class ApiResponse<T>{
    result?: T;
    targetUrl?: string;
    success?: boolean;
    error?: HttpErrorResponse;
    unAuthorizedRequest?: boolean;
    loading?: boolean;
}

export interface CurrentLoginResult<A, U> {
    application: A;
    tenant: any;
    user: U;
}

export interface IApplication {
    features: object;
    releaseDate: string;
    version: string;
}

export interface IUser {
    emailAddress: string;
    id: number;
    name: string;
    surname: string;
    userName: string;
}

export const FIRST_PAGE: number = 0;
export const ROWS_PAGE: number = 10;
export const OPTION_PAGE: number[] = [5, 10, 20, 50, 100];

export class SubTitle {
    title?: string;
    name?: string;
    branch?: string;
    status?: string;
}

export interface IHeader {
    title: string;
    link: string;
    subTitle: SubTitle;
}

export enum SortType {
    DESC = -1,
    ASC = 1
}