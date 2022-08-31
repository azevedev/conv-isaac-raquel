<template>
    <div class="content">
        <h1 class="solidaritha c-s">
        Confirmar Presen<ffont style="font-size: 22px;">ç</ffont>a
        </h1>
        <div id="content">
                <label for="convidado_principal">Convidado Principal</label>
                <input name="convidado_principal" id="convidado_principal" placeholder="Nome Completo" class="input"/>
                
                
              

                <ul>
                <li v-for="(input, index) in inputs" :key="index" style="position: relative;">
                    <label type="text" >Convidado {{ index + 1 }}</label> <br>
                    <input type="text" class="input" name="convidados" placeholder="Nome completo">
                    
                    <span @click="deleteRow(index)" class="material-symbols-sharp rmv">
                        delete_forever
                    </span>
                </li>
                </ul>


        </div>
        <div>
            <div style="width: 100%; display: flex; flex-direction: column;">
                    <button type="submit" @click="handleSubmit">
                        <span class="material-symbols-sharp" style="font-size: 80px;">
                            add_circle
                        </span>
                    </button>
                    <p>Adicionar membro</p>
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
import {sendList} from '../main';
import getAllLists from '../main';
// Import the method.
import { useLoading } from 'vue3-loading-overlay';
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
export default {
    name: 'Confirm',
    data() {
        return {
            total: 0,
            inputs: [],
        }
    },
    setup() {
        let loader = useLoading();
        const showLoader = () => {
          loader.show({
            container: null,
            fullPage: true,
            canCancel: false,
            color: "#FFF",
            loader: 'dots',
            opacity: 1,
            backgroundColor: "#2c3e50",
            zIndex: 99999999,
            lockScroll: true,
          });
        };

        const hideLoader = () => {
            loader.hide()
        }
          
        return {
          showLoader,
          hideLoader
        }
    },
    methods: {
    handleSubmit(e) {
      e.preventDefault();
      
      if(this.total > 5) return;
      
      this.total++;

      this.inputs.push({name: 'Convidado '+this.total})

    },
    
    deleteRow(i) {
      
      this.total--;

       this.inputs.splice(i,1)

    },
    receiveData(){
        getAllLists()

    },
    async sendData(){
        this.showLoader();
        const principal = document.getElementById('convidado_principal');
        const convidados = document.getElementsByName('convidados');
        console.log("sending...");
        console.log(principal);
        console.log(convidados);
        if(principal.value.trim() == ""){ this.hideLoader(); return;}
        const principalJson = {
            'nome': principal.value,
            'principal': true,
        };
        console.log(principalJson)

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
        console.log('done!');
        this.total = 0,
        this.inputs = [],
        this.hideLoader();
        
        this.$router.push({
            name: 'Confirmed',
            params: { principal: principal.value, convidados: convidadosJson }
        });
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
    padding: 8px;
    border-radius: 50%; 
    background: white;
    width: 90px;
    height: 90px;
    display: flex;
    align-self: center;
    justify-content: center;
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
font-size: 27px;
padding: 2px 10px;
color: white;
font-weight: bold;
background: #BF9742;
height: 60px;
margin-top: 50px;
}

i {
    cursor: pointer;
}
.rmv{
cursor: pointer;
position: absolute;
bottom: 32px;
right: 8px;
color: brown;
}


.c-s{
    font-size: 40px
}
.content {
    padding: 2rem;
    overflow: scroll;
}
#content{
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: start;
}
.input {
    padding: 12px;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 24px;
    border: 1px solid #ddd;
}
.input:focus-visible, .input:focus{
    outline: #aaa solid 2px;
}
h2 {
    margin: 0 0 1.5rem 0;
}
</style>
