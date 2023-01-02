<script lang="ts">
    import "./app.css";
    import type { IData } from "./lib/interfaces/IData";
    import axios from "axios";
    import Result from "./lib/Result.svelte";
    import Form from "./lib/Form.svelte";
    import CurrencyList1 from "./lib/CurrencyList1.svelte";
    import CurrencyList2 from "./lib/CurrencyList2.svelte";
    import Footer from "./lib/Footer.svelte";
    import type { IInfo } from "./lib/interfaces/IInfo";

    let data: IData;
    let info: IInfo;

    const setData = (): void => {
        axios
            .get("https://api.nbp.pl/api/exchangerates/tables/A/?format=JSON")
            .then((response) => {
                data = response.data[0];
                data.rates.push({
                    currency: "Złoty",
                    code: "PLN",
                    mid: 1,
                });
                info = {
                    table: data.table,
                    effectiveDate: data.effectiveDate,
                    no: data.no,
                };
            });
    };

    setData();
</script>

<div id="main-Div">
    <div class="div-half left">
        <CurrencyList1 {data} />
    </div>

    <div id="Div-middle-item">
        <div id="Div-middle-item-top">
            <Form />
        </div>
        <div id="Div-middle-item-bottom">
            <Result />
        </div>
    </div>

    <div class="div-half">
        <CurrencyList2 {data} />
    </div>

    <div class="footer">
        <Footer {info} />
    </div>
</div>
