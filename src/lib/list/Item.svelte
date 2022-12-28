<script lang="ts">
    import "./item.css";
    import type { IRate } from "../interfaces/IRate";

    export let rate: IRate;
</script>

<div class="item">
    <span class="currency">
        {rate["currency"]}
    </span>
    <span class="code">
        {rate["code"]}
    </span>
</div>
