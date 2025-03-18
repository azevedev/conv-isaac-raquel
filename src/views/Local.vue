<template>
    <div class="content">
      <h1 class="solidaritha c-s">
        Localiza<ffont style="font-size: 18px; font-weight: bold;">çã</ffont>o
        </h1>
        <br>
        <div id="content">
            <br>
            <div style="display: flex; justify-content: space-around; flex-direction: column;">
                <div style="width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 42px;">
                    <a href="https://maps.app.goo.gl/PxxYmfgn2jSfvL6f7" style="margin-bottom: 8px; border-radius: 50%;
    background: #fffdee;
    box-shadow:  10px 10px 19px #b3b1a7,
                -10px -10px 19px #ffffff;">
                       <div class="round" >
                            <VectorChurch :color="'#a97f53'" />
                        </div>
                    </a>

                    <p style="text-align: center; font-size: 16px;"><f style="font-size: 22px;">Celebração religiosa</f> <br>
                      Horário: 18:00 <br>
                        Local: Igreja matriz nossa Senhora da Conceição, Corrente - PI</p>
                </div>

                <div style="width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <a href="https://maps.app.goo.gl/AKfbRupxtfKUBRLU7" style="margin-bottom: 8px;">
                        <div class="round" style="padding-bottom: 10px;">
                            <VectorGlasses :color="'#a97f53'" />
                        </div>
                    </a>
                    <p style="text-align: center; font-size: 16px;"><f style="font-size: 22px;">Recepção</f> <br>
Horário: Após a celebração religiosa  <br>
Local: Clube boêmia pub, Corrente - PI</p> 
                </div>

            </div>
            
        </div>
    </div>
</template>

<script>

import VectorChurch from '../components/VectorChurch.vue';
import VectorGlasses from '../components/VectorGlasses.vue';


export default {
    name: 'Local',
    components: {
        VectorChurch,
        VectorGlasses
    },
    data() {
        return {
            phoneNumber: '123-123-123',
        }
    }
}
</script>
<style scoped="">
.round{    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    height: 85px;
    padding: 20px;
    border-radius: 50%;
    cursor: pointer;
    transition: all .2s ease-in-out;
    background: #fffdee;
    box-shadow:  10px 10px 19px #b3b1a7,
                -10px -10px 19px #ffffff;

}

.round:hover{
    scale: 1.2;
}
.content {
    padding: 18px;
    padding-top: 30px;
}
h2 {
    margin: 0 0 1.5rem 0;
}

.c-s{
    font-size: 36px;
    letter-spacing: 0px;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
</style>
