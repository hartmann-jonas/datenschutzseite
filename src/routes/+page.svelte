<script>
    /** @type {import('./$types').PageData} */
    export let data;
    const files = data.files
    import headerImg from '$lib/assets/header-img.jpeg';
</script>

<div class="content">
    <section>
        <img class="title-image" src={headerImg} alt="Gruppenfoto">
    </section>
    <section class="downloads">
        {#if files.length > 0}
            {#each files as file}
            <div class="download-link">
                <div class="download-title">
                    <h3>{file}</h3>
                    <a class="button" href={"/files/"+file+".pdf"} target="_blank"><h3>Download</h3></a>
                </div>
                <!--
                    <p>Nutzungsvereinbarung für Schülerinnen und Schüler über die Nutzung des hausinternen Internetzugangs über WLAN und die damit verbundene Verarbeitung personenbezogener Daten.</p>
                -->
            </div>
            {/each}
        {:else}
            <h3>Keine Dateien gefunden.</h3>
        {/if}
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
        
    .downloads {
        margin-top: 3rem;
        display: grid;
        gap: 2rem;
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
</style>