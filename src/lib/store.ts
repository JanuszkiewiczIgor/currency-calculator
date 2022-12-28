import { writable } from "svelte/store";
import type { IRate } from "./interfaces/IRate";

const simple_currency_value: IRate = {
    currency: "",
    code: "",
    mid: 0
}

export const currency_1 = writable(simple_currency_value);
export const currency_2 = writable(simple_currency_value);