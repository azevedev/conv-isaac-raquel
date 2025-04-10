<template>
    <div class="content">
        <h1 class="solidaritha c-s" style="font-size: 32px; margin-top: 28px;
margin-bottom: 18px;">
        Presen<ffont style="font-size: 22px;">ç</ffont>a Confirmada!
        </h1>
        <p style="padding: 20px 30px; text-align: left;">Será um imenso prazer receber o senhor(a) <b>{{ this.convidadoPr.nome }}</b>{{ this.msg }} em nosso casamento. 
        </p>
        <p style="padding: 0px 30px; text-align: left;">Gratos, Jean e Raquel.</p>
       
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { getAllCnv, getPr } from '../main';
export default {
    name: 'Confirmed',
    async setup() {
        const route = useRoute();
        console.log('Params: ', route.query.id);
        const convidadoPr = await getPr(route.query.id);
        
        convidadoPr.convidados = await getAllCnv(convidadoPr.id)

        console.log("show names");
        console.log(convidadoPr);
        let msg = "";
        if(convidadoPr.convidados.length != 0){
            msg = " e sua família ";
            let index = convidadoPr.convidados.length - 1;
            for(let i = 0; i < index; i++){
                if(i == 0)
                msg +=  convidadoPr.convidados[i].nome;
                else 
                msg +=  ', '+convidadoPr.convidados[i].nome;
            }
            if(convidadoPr.convidados.length == 1)
                msg +=  convidadoPr.convidados[index].nome;
            else
                msg +=  ' e ' + convidadoPr.convidados[index].nome; 
        }
        console.log('msg')
        console.log(msg)
        return {
            convidadoPr,
            msg
        }
    },
    data() {
        return {
            phoneNumber: '123-123-123'
        }
    },
    methods: {
        showNames(){
            
        }
    },
    created() {
    
}
}
</script>
<style scoped="">

p{
    margin-bottom: 4px;
}
.content{
    padding-top: 40px;
}

</style>
