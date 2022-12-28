<script lang="ts">
    import "./styles/CurrencyList.css";
    import type { IData } from "./interfaces/IData";
    import Item from "./list/Item.svelte";
    import type { IRate } from "./interfaces/IRate";
    import { currency_1 } from "./store";

    export let data: IData = {
        table: "",
        no: "",
        effectiveDate: "",
        rates: [
            {
                currency: "",
                code: "",
                mid: 0,
            },
        ],
    };

    const setCurrency = (rate: IRate): void => {
        currency_1.set(rate);
    };

    currency_1.subscribe((value) => console.log(value));
</script>

<div>
    {#each data.rates as rate}
        <div
            on:click={() => {
                setCurrency(rate);
            }}
        >
            <Item {rate} />
        </div>
    {/each}
</div>
