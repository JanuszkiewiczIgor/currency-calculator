<script lang="ts">
    import { result } from "./store";

    let res: number;

    result.subscribe((value) => {
        res = value;
    });
</script>

<div class="result">
    <h2>{res}</h2>
</div>
