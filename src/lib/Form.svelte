<script lang="ts">
    import type { IRate } from "./interfaces/IRate";
    import { currency_1, currency_2, result } from "./store";

    let curr1: IRate,
        curr2: IRate,
        amount: number = 0;

    currency_1.subscribe((value) => {
        curr1 = value;
    });

    currency_2.subscribe((value) => {
        curr2 = value;
    });

    const calculate = (): void => {
        result.set((curr1.mid * amount) / curr2.mid);
    };
</script>

<div class="form">
    <h4>{curr1.code} -> {curr2.code}</h4>
    <input class="input-Calc" type="number" min="0" bind:value={amount} />
    <br />
    <button class="butt-Calc" on:click={calculate}>Calculate</button>
</div>
