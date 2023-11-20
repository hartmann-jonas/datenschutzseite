<script>
	import logo from '$lib/assets/logo.png';
	import logoLarge from '$lib/assets/logo-large.png';
    import headerImg from '$lib/assets/header-img.jpeg'
    import nutzungsvereinbarung from '$lib/assets/Nutzungsvereinbarung-fuer-Schuelerinnen-und-Schueler-WLAN.pdf'
    import einhaltung from '$lib/assets/Verpflichtung zur Einhaltung des Datenschutzes.pdf'
</script>

<svelte:head>
    <title>FEG Einverständniserklärungen</title>
</svelte:head>

<header>
    <h1 class="large-title">Einverständniserklärungen des FEG</h1>
    <h1 class="small-title">Einverständniserklärungen</h1>
    <a href="https://fe-gymnasium.de">
        <img class="large-logo" src={logoLarge} alt="FEG Logo">
        <img class="small-logo" src={logo} alt="FEG Logo">
    </a>
</header>
<div class="content">
    <section>
        <img class="title-image" src={headerImg} alt="Gruppenfoto">
    </section>
    <section class="downloads">
        <div class="download-link">
            <div class="download-title">
                <h3>Nutzervereinbarung IT</h3>
                <a class="button" href={nutzungsvereinbarung} target="_blank"><h3>Download</h3></a>
            </div>
            <p>Nutzungsvereinbarung für Schülerinnen und Schüler über die Nutzung des hausinternen Internetzugangs über WLAN und die damit verbundene Verarbeitung personenbezogener Daten.</p>
        </div>
        <div class="download-link">
            <div class="download-title">
                <h3>Verpflichtung zur Einhaltung</h3>
                <a class="button" href={einhaltung} target="_blank"><h3>Download</h3></a>
            </div>
            <p>Vereinbarung zum Umgang mit Bildrechten und namentlichen Veröffentlichungen im Internetauftritt des Friedrich-Ebert-Gymnasiums.</p>
        </div>
    </section>
</div>
    
<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    :root {
        font-family: 'Open-Sans', sans-serif;
    }

    .content {
        width: 80vw;
        margin-left: auto;
        margin-right: auto;
    }
    
    header {
        display: flex;
        justify-content: space-between;
        width: 80vw;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1rem;
    }
    
        
    .downloads {
        margin-top: 3rem;
        display: grid;
        gap: 2rem;
    }

    @media (max-width: 860px) {
        .downloads {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media (min-width: 860px) {
        .downloads {
            grid-template-columns: repeat(2, 1fr);
        }
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

    .title-image {
        display: flex;
        justify-content: center;
        width: 80vw;
        border-radius: .5rem;
    }

    .download-link {
        border: 1px solid black;
        border-radius: 1rem;
        padding: 1rem;
        background-color: #3c88a8c0;
    }

    .download-title {
        display: flex;
        justify-content: space-between;
    }

    .button {
        border-radius: 1rem;
        margin-left: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        height: 100%;
        background-color: #3c88a8;
        color: white;
        text-decoration: none;
    }
</style>