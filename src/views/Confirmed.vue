<template>
    <div class="content">
        <h1 class="solidaritha c-s" style="font-size: 32px; margin-top: 28px;
margin-bottom: 18px;">
        Presen<ffont style="font-size: 22px;">ç</ffont>a Confirmada!
        </h1>
        <p style="padding: 20px 30px; text-align: left;">Será um imenso prazer receber o senhor(a) <b>{{ this.$route.params.principal }}</b>{{ showNames() }} em nosso casamento. 
        </p>
        <p style="padding: 0px 30px; text-align: left;">Gratos, Renata e Gustavo.</p>
       
    </div>
</template>

<script>
export default {
    name: 'Confirmed',
    data() {
        return {
            phoneNumber: '123-123-123'
        }
    },
    methods: {
        showNames(){
            console.log(this.$route.params);
            if(this.$route.params.convidados.length == 0)
            return "";

            let msg = " e sua família ";
            let index = this.$route.params.convidados.length - 1;
            for(let i = 0; i < index; i++){
                if(i == 0)
                msg +=  this.$route.params.convidados[i];
                else 
                msg +=  ', '+this.$route.params.convidados[i];
            }
            msg +=  ' e ' + this.$route.params.convidados[index];
            return msg;
        }
    },
    beforeMount(){
    if(!this.$route.params.principal)
        window.location.href = '/';
    },
    created() {
        
        console.log('Params: ', this.$route.params);
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
