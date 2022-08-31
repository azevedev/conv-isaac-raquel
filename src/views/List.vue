<template>
    <div class="content">
        <h1 style="font-size: 32px; margin-top: 28px;
margin-bottom: 18px;">
        Presenças Já Confirmadas
        </h1>
        <p>Total: {{ total_amount }}</p>
        <div class="cnv">
            <ul class="ul-prin">
                <li v-for="(cnvPr, indexPr) in convidadosPr" :key="indexPr" class="li-prin">
                    <label type="text" ><b>{{cnvPr.nome}}</b></label> <br>
                    <p v-if="cnvPr.convidados.length">Membros:</p>
                    <ul class="ul-sec">
                        <li v-for="(cnv, index) in cnvPr.convidados" :key="index" class="li-sec">
                            <label type="text" >- {{cnv.nome}}</label> <br>
                        </li>
                    </ul>
                    <span @click="deleteCnv(cnvPr.id, indexPr)" class="material-symbols-sharp rmv">
                        delete_forever
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import {getAllPr, getAllCnv, deleteAllCnv} from '../main';

export default {
    name: 'List',
    data() {
        return {
        }
    },
    async setup() {
        const convidadosPr = await getAllPr()
        let total_amount = 0;
        for await (const cnv of convidadosPr){
            total_amount++;
            cnv.convidados = await getAllCnv(cnv.id)
            total_amount += cnv.convidados.length
        }

        

        
        return {
            convidadosPr,
            total_amount,
        }
    },
    mounted() {
    },
    methods: {
        async deleteCnv(id, index) {
            await deleteAllCnv(id);
            console.log(this.convidadosPr);
            this.convidadosPr.splice(index,1)
            console.log(this.convidadosPr);
            this.$forceUpdate();
        }
    }
}
</script>
<style scoped="">
.rmv{
    cursor: pointer;
    position: absolute;
    bottom: 32px;
    right: 8px;
    color: brown;
}
.cnv{
    overflow-y: scroll;
    height: 65vh;
}

.ul-prin{
    display: flex;
    list-style: none;
    align-content: left;
    justify-content: left;
    text-align: left;
    flex-direction: column;
    font-size: 14px;
    padding: 8px;
}

.li-prin{
    background: rgba(238, 238, 238, 0.4);
    border-radius: 22px;
    padding: 14px;
    margin-bottom: 14px;
    position: relative;
    min-height: 75px
}

.ul-sec{
    display: flex;
    list-style: none;
    align-content: left;
    justify-content: left;
    text-align: left;
    flex-direction: column;
    padding: 8px;
    padding-top: 2px;
}


p{
    margin-bottom: 4px;
}
.info{
    display: flex;
    flex-direction: column;
    
}
.card {
    width: 50%;
    text-align: start;
    padding: 16px;
    height: 165px;
    margin: 12px;
    border: 1px solid #ddd;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    animation: fadeIn forwards 1s;
}

.c-s{
    font-size: 30px;
    letter-spacing: 3px;
}

@keyframes fadeIn {
    0%{
        transform: translateY(-20px);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
}
h2 {
    margin: 0 0 1.5rem 0;
}
</style>
