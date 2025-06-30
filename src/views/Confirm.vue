<template>
    <div class="content" style="min-height: calc(100dvh - 50px);">
        <h1 class="solidaritha c-s showIn" style="animation-delay: 0.1s;">
        Confirmar Presen<ffont style="font-size: 22px;">ç</ffont>a
        </h1>
        <div id="content">
                <label for="convidado_principal" class="showIn" style="animation-delay: 0.2s;">Seu nome completo</label>
                <input name="convidado_principal" id="convidado_principal" placeholder="Nome Completo" class="input showIn" style="animation-delay: 0.3s;"/>

                <ul>
                <li v-for="(input, index) in inputs" :key="index" >
                    <div class="showIn" style="animation-delay: 0.1s; position: relative;">
                        <label type="text" >Convidado {{ index + 1 }}</label> <br>
                        <input type="text" v-model="input.value" class="input" name="convidados" placeholder="Nome completo">
                        
                        <VectorDelete @click="deleteRow(index)" width="24px" height="24px" class="rmv" />
                    </div>
                </li>
                </ul>

        </div>
        <div v-if="false">
            <div style="width: 100%; display: flex; flex-direction: column;">
                    <button type="submit" @click="handleSubmit">
                        <p style="font-size: 16px;">Adicionar convidado</p>
                        <VectorPlus width="28px" height="28px" color="#a97f53" />
                    </button>
            </div>
        </div>

        <div style="
    transition: all 2s;">
            <div style="width: 100%; display: flex; flex-direction: column;">
                    <button type="submit" @click="sendData" class="send">
                        Confirmar Presença
                    </button>
            </div>
        </div>
    </div>
</template>

<script>
import VectorDelete from '../components/VectorDelete.vue';
import VectorPlus from '../components/VectorPlus.vue';
import getAllLists, { sendList } from '../main';
export default {
    name: 'Confirm',
    components: {
        VectorPlus,
        VectorDelete
    },
    data() {
        return {
            total: 0,
            inputs: [],
        }
    },
    methods: {
    handleSubmit(e) {
      e.preventDefault();
      
      if(this.total > 5) return;
      
      this.total++;

      this.inputs.push({name: 'Convidado '+this.total, value: ""})

    },
    
    deleteRow(i) {
      
      this.total--;

       this.inputs.splice(i,1)

    },
    receiveData(){
        getAllLists()
    },
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },
    async sendData(){
        const principal = document.getElementById('convidado_principal');
        const convidados = document.getElementsByName('convidados');
        if(principal.value.trim() == ""){ return;}
        const principalJson = {
            'nome': this.capitalize(principal.value),
            'principal': true,
        };

        const ID = await sendList(principalJson);
        const convidadosJson = []
        for await (const document of convidados){
            if(document.value.trim() == "") continue;
            const json = {
                "nome": document.value,
                "convidado_por": ID,
                "principal": false,
            }
            convidadosJson.push(document.value);
            await sendList(json);
        }
        this.total = 0,
        principal.value = "";
        this.inputs = [],
        this.$router.push({ name: 'Confirmed', query: { id: ID } })
    }
  }
}
</script>
<style scoped="">

ul{ 
    list-style: none;
width: 100%;
text-align: left;
}

button {
    border: 1px solid #bbb;
    transition: all 0.3s ease-in-out;
    padding: 4px;
    border-radius: 18px;
    background: white;
    width: 100%;
    display: flex;
    align-self: center;
    justify-content: center;
    gap: 10px;
    align-items: center;
    margin-bottom: 8px;
    cursor: pointer;
}

button > span{
    transition: all 0.3s ease-in-out;
}

button:active {
    background-color: #eee;
    border: 2px solid rgb(140, 140, 140);
}
button:active > span {
    color: #81662c;
}

.send{
margin: 0px;
border: 1px solid;
border-radius: 8px;
text-align: center;
width: 100%;
font-size: 22px;
padding: 2px 10px;
color: white;
font-weight: bold;
background: #a97f53;
height: 60px;
margin-top: 14px;
}

i {
    cursor: pointer;
}
.rmv{
cursor: pointer;
position: absolute;
bottom: 50%;
translate: 0 50%;
right: 8px;
}


.c-s{
    font-size: 36px
}
.content {
    padding: 14px;
    overflow: scroll;
}
#content{
    display: flex;
    flex-direction: column;
    align-items: start;
}
.input {
    padding: 12px;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 14px;
    border: 1px solid #ddd;
}
.input:focus-visible, .input:focus{
    outline: #aaa solid 2px;
}
h2 {
    margin: 0 0 1.5rem 0;
}

.showIn{
    opacity: 0;
    transition: all 0.3s ease-in-out;
    animation: fadeIn forwards 1s;
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
</style>
