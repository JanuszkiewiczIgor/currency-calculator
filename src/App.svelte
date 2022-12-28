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


<div id="main-Div">
        <div class="div-half left">
            <CurrencyList {data} />
        </div>
        
        <div id="Div-middle-item">
            <div id="Div-middle-item-top">
                <h4>PLN -> EUR</h4>
                <input class="input-Calc" type="text"><br>
                <button class="butt-Calc"
                    on:click={() => {
                        console.log(data);
                    }}>Calculate</button
                >
            </div>
            <div id="Div-middle-item-bottom">
                <h2>2137 euro</h2>
            </div>
        </div>

        <div class="div-half">
            <CurrencyList {data} />
        </div>
</div>
