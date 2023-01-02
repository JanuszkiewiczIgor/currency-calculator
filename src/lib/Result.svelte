<script lang="ts">
    import type { IRate } from "./interfaces/IRate";
    import { result, currency_2 } from "./store";

    let res: number;
    let curr2: IRate;

    result.subscribe((value) => {
        res = parseFloat(value.toFixed(2));
    });

    currency_2.subscribe((value) => {
        curr2 = value;
    });
</script>

<div class="result">
    <h2>{res} {curr2.code}</h2>
</div>
