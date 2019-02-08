import { Group } from './group';

export interface Person {
    pid: number;
    name: string;
    middleName?: string;
    surname: string;
    phone?: string;
    email?: string;
    groups?: string[]; // Group[]; - maybe not even needed, maybe needed just later on
}

