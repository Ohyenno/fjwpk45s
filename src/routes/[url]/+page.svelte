<script lang="ts">
    export let data:any = undefined;
</script>

<svelte:head>
    <title>{data.values?.title}</title>
</svelte:head>

<div style="margin-top:10px">
    {data.values.title}
</div>