<template>
    <div class="content">
        <h1 class="solidaritha c-s" style="font-size: 32px; margin-top: 28px;
margin-bottom: 18px;">
        Queridos Amigos e Familiares
        </h1>
        <p class="showIn" style="animation-delay: 0.1s; padding: 0px 30px;">Optamos por não fazer lista de presentes, a sua presença é nosso maior presente! 
            Mas caso queira nos presentear, aqui está a nossa chave PIX:</p>
        <div class="info">
            <p>casamento.isaac.raquel@gmail.com</p>
            <PixQrcode style="animation-delay: 0.1s; width: 80%;" />
            <label>Banco Inter - Raquel Ienne Beteli</label>
        </div>
        <button
        @click="copyPix"
        class="showIn" style="margin-top: 14px; animation-delay: 0.1s; padding: 14px 22px; background-color: #000; color: #fff; border: none; border-radius: 5px; cursor: pointer;">
            Copiar chave PIX
        </button>
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
            phoneNumber: '123-123-123'
        }
    },
    methods: {
        copyPix() {
            navigator.clipboard.writeText('casamento.isaac.raquel@gmail.com');
        }
    }
}
</script>
<style scoped="">

p{
    margin-bottom: 4px;
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
</style>
