<script>
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    
    inject({ mode: dev ? 'development' : 'production' });


	import logo from '$lib/assets/logo.png';
	import logoLarge from '$lib/assets/logo-large.png';
</script>

<svelte:head>
    <title>FEG Downloads</title>
	<meta name="og:title" content="Einverständniserklärungen des FEGs"/>
	<meta name="description" content="Auf dieser Seite findest du alle Einverständniserklärungen zum Datenschutz des Friedrich-Ebert-Gymnasiums">
</svelte:head>

<header>
    <h1 class="large-title">Einverständniserklärungen des FEG</h1>
    <h1 class="small-title">Einverständniserklärungen</h1>
    <a href="https://fe-gymnasium.de">
        <img class="large-logo" src={logoLarge} alt="FEG Logo">
        <img class="small-logo" src={logo} alt="FEG Logo">
    </a>
</header>

<slot />

<style>
    header {
        display: flex;
        justify-content: space-between;
        width: 80vw;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1rem;
    }


    @media (min-width: 750px) {
        .small-logo {
            display: none;
        }
        .small-title {
            display: none;
        }
    }

    @media (max-width: 750px) {
        .large-title {
            display: none;
        }
        .small-title {
            display: block;
        }
        .large-logo {
            display: none;
        }
        .small-logo {
            display: block;
        }
    }

</style>