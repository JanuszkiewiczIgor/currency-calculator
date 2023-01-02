import { writable } from "svelte/store";
import type { IRate } from "./interfaces/IRate";

const simple_currency_value: IRate = {
    currency: "Złoty",
    code: "PLN",
    mid: 1,
}

export const currency_1 = writable(simple_currency_value);
export const currency_2 = writable(simple_currency_value);

export const result = writable(0);