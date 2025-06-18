<template>
    <div class="content">
      <h1 class="solidaritha c-s">
        Localiza<ffont style="font-size: 18px; font-weight: bold;">çã</ffont>o
        </h1>
        <br>
        <div id="content">
            <br>
            <div style="display: flex; justify-content: space-around; flex-direction: column;">
                <div class="showIn" style="width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 42px; animation-delay: 0.1s;">
                    <a href="https://maps.app.goo.gl/B6AGmfcQYbgJLiuL9" style="margin-bottom: 8px; border-radius: 50%;
    background: #fffdee;
    box-shadow:  10px 10px 19px #b3b1a7,
                -10px -10px 19px #ffffff;">
                       <div class="round showIn" style="animation-delay: 0.1s;">
                            <VectorChurch :color="'#a97f53'" />
                        </div>
                    </a>

                    <p class="showIn" style="text-align: center; font-size: 16px; animation-delay: 0.2s;"><f style="font-size: 22px;">Celebração religiosa</f> <br>
                      Horário: 13:30h <br>
                        Local: Catedral Nossa Senhora do Desterro, Centro Jundiaí - SP</p>
                </div>

                <div class="showIn" style="width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; animation-delay: 0.2s;">
                    <a href="https://maps.app.goo.gl/FjZs6ReJBHAKsaes6" style="margin-bottom: 8px;">
                        <div class="round showIn" style="padding-bottom: 10px; animation-delay: 0.3s;">
                            <VectorGlasses :color="'#a97f53'" />
                        </div>
                    </a>
                    <p class="showIn" style="text-align: center; font-size: 16px; animation-delay: 0.4s;"><f style="font-size: 22px;">Recepção</f> <br>
Horário: Após a celebração religiosa  <br>
Local: Buffet Ki Festa, Av. Comendador Ântonio Borio, 4600 - Caxambu Jundiaí</p> 
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
                -10px -10px 19px #fffdee;

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
