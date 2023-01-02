<script lang="ts">
    import "./styles/Footer.css";
    import type { IInfo } from "./interfaces/IInfo";

    export let info: IInfo;
</script>

<div>
    <span class="text-white">Tabela: {info.table}</span>
    <span class="text-white">Numer tabeli: {info.no}</span>
    <span class="text-white">Data publikacji: {info.effectiveDate}</span>
</div>