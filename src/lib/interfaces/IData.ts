import type { IRate } from "./IRate";

export interface IData {
    table: string;
    no: string;
    effectiveDate: string;
    rates: IRate[];
}