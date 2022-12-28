<script lang="ts">
    import "./item.css";
    import type { IRate } from "../interfaces/IRate";

    export let rate: IRate;
</script>

<div class="item">
    <span class="currency">{JSON.stringify(rate["currency"])}</span>
    <span class="code">{JSON.stringify(rate["code"])}</span>
    <span class="mid">{JSON.stringify(rate["mid"])}</span>
</div>
