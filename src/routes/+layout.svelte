<script>
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    
    inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
    <title>FEG Downloads</title>
	<meta name="og:title" content="Einverständniserklärungen des FEGs"/>
	<meta name="description" content="Auf dieser Seite findest du alle Einverständniserklärungen zum Datenschutz des Friedrich-Ebert-Gymnasiums">
</svelte:head>