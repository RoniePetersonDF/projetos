<template>
    
    <section>
        <div class="container">

            <div class="row">
                
                <div class="col-5 text-center principal-news">

                    <h2>Veja os últimos resultados do campeonato</h2>

                </div>

                <div class="col-5 text-center principal-news offset-2">

                    <h2>Venha conhecer o Centro de Treinamento da Hcode</h2>

                </div>

            </div>
        </div>
    </section>


</template>

<script>

export default {
    
}
</script>

<style scoped>
    section {
        margin-top: 25px;
    }

    .container .row {
        height: 300px;
    }

    .container .row .col-5:first-child {
        background-color: rgba(0,0,0, 0.5);
        background-image: url('../assets/futebol.jpg');
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .container .row .col-5:nth-child(2) {
        background: url('../assets/futebol2.jpg') no-repeat;
        background-size: 100%;
    }

    h2 {
        margin: 25% 0;
        color: #f6b64e;
        background-color: rgba(0,0,0, 0.4);
        padding: 10px;
    }

    .principal-news {
        cursor: pointer;
    }
</style>