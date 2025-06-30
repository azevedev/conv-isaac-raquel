<template>
    <div class="content" style="min-height: calc(100dvh - 50px);">
        <h1 class="solidaritha c-s" style="font-size: 32px; margin-top: 16px;
margin-bottom: 8px;">
        Queridos Amigos e Familiares
        </h1>
        <p class="showIn" style="animation-delay: 0.1s; padding: 0px 30px;">Optamos por não fazer lista de presentes, a sua presença é nosso maior presente! 
            <br/><br/>Mas caso queira nos presentear, aqui está a nossa chave PIX:</p>
        <div class="info showIn">
            <p style="font-weight: 600; font-size: 18px;">casamento.isaac.raquel@gmail.com</p>
            <PixQrcode style="animation-delay: 0.2s; width: 85%;" />
            <label>Banco Inter - Raquel Ienne Beteli</label>
        </div>
        <div style="position: absolute;  z-index: 9999999999 !important; left: 0; right: 0; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <button
            @click="copyPix"
            class="showIn" style="min-width: 112px; min-height: 42px; max-width: 112px; max-height: 42px; margin-top: 14px; animation-delay: 0.3s; padding: 14px 22px; background-color: #5c452d; color: #fff; border: none; border-radius: 5px; cursor: pointer;">
                Copiar PIX
            </button>
            <div v-if="copied" class="tooltip">Chave PIX copiada!</div>
        </div>
        <footer>
    </footer></div>
</template>

<script>
import PixQrcode from '../components/PixQrcode.vue';
export default {
    name: 'Presents',
    components: {
        PixQrcode
    },
    data() {
        return {
            copied: false
        }
    },
    methods: {
        copyPix() {
            navigator.clipboard.writeText('casamento.isaac.raquel@gmail.com');
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            }, 2000);
        }
    }
}
</script>
<style scoped="">

p{
    margin-bottom: 4px;
}
.content{
    min-height: 100dvh;
}
.info{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.showIn{
    opacity: 0;
    transition: all 0.3s ease-in-out;
    animation: fadeIn forwards 1s;
}
.card {
    width: 100%;
    text-align: center;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    animation: fadeIn forwards 1s;
}

.c-s{
    font-size: 30px;
    letter-spacing: 0px;
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

.tooltip {
  margin-top: 8px;
  background-color: #dff0d8;
  color: #3c763d;
  padding: 8px 16px;
  border-radius: 5px;
  text-align: center;
  animation: fadeInTooltip 0.3s ease-in-out;
}

@keyframes fadeInTooltip {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
