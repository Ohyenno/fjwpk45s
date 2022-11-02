<script>
    import { page } from '$app/stores';
    console.log('this page got error status - '+$page.status);
</script>

<svelte:head>
    {#if $page.status === 500}
        <title>500 page title</title>
    {/if}
</svelte:head>

{#if $page.status === 500}
    <div>
        <h1>ERROR 500</h1>
    </div>
{/if}