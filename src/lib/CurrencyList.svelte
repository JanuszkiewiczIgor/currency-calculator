<script lang="ts">
    import "./styles/country-list.css";
    import type { IData } from "./interfaces/IData";
    import Item from "./list/Item.svelte";

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
</script>

<div>
    {#each data.rates as rate}
        <Item {rate} />
    {/each}
</div>
