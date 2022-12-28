<script lang="ts">
    import "./app.css";
    import type { IData } from "./lib/interfaces/IData";
    import axios from "axios";
    import CurrencyList from "./lib/CurrencyList.svelte";

    let data: IData;

    const setData = (): void => {
        axios
            .get("http://api.nbp.pl/api/exchangerates/tables/A/?format=JSON")
            .then((response) => {
                data = response.data[0];

                console.log(response.data[0]);
            });
    };

    setData();
</script>

<button
    on:click={() => {
        console.log(data);
    }}>Click me!</button
>
<div>
    <CurrencyList {data} />
</div>
