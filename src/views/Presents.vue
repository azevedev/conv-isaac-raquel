<template>
    <div class="content">
        <h1 class="solidaritha c-s" style="font-size: 32px; margin-top: 28px;
margin-bottom: 18px;">
        Queridos Amigos e Familiares
        </h1>
        <p style="padding: 20px 30px;">Optamos por não fazer lista de presentes, a sua presença é nosso maior presente! 
            Mas caso queira nos presentear, sugerimos uma quantia através de depósito:</p>
        <div class="info">
            <div style="width: 100%; display: flex; justify-content: center;">
                <div class="card" style="animation-delay: 0.1s;">
                    <p><b>PIX:</b> (89) 9 9994-2260 </p><br>
                    <p>Renata Ellen Carvalho dos Santos</p>
                </div>
            </div>
        </div>
        <footer>
    </footer></div>
</template>

<script>
export default {
    name: 'Presents',
    data() {
        return {
            phoneNumber: '123-123-123'
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
    flex-direction: column;
    
}
.card {
    width: 80%;
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
