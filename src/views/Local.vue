<template>
    <div class="content">
      <h1 class="solidaritha c-s">
        Queridos Amigos e Familiares
        </h1>
        <div id="content">
            <br>
            <h2 style="font-weight: normal;">Abaixo estão os locais dos eventos:</h2>
            <div style="display: flex; justify-content: space-around; flex-direction: column;">
                <div style="width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 34px;">
                    <a href="https://maps.app.goo.gl/PxxYmfgn2jSfvL6f7" style="margin-bottom: 8px;">
                       <div class="round">
                            <span class="material-symbols-outlined" style="font-size: 42px; color: #eee;">
                                church
                            </span>

                        </div>
                    </a>

                    <p style="text-align: center; font-size: 16px;">Celebração religiosa <br>
                      Horário: 18:00 <br>
                        Local: Igreja matriz nossa senhora da Conceição</p>
                </div>

                <div style="width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <a href="https://maps.app.goo.gl/AKfbRupxtfKUBRLU7" style="margin-bottom: 8px;">
                        <div class="round">
                            <span class="material-symbols-outlined" style="font-size: 42px; color: #eee;">
                                nightlife
                            </span>
                        </div>
                    </a>
                    <p style="text-align: center; font-size: 16px;">Recepção <br>
Horário: Após a celebração religiosa  <br>
Local: Clube boêmia pub</p> 
                </div>

            </div>
            
        </div>
        <footer>
    </footer></div>
</template>

<script>
export default {
    name: 'Local',
    data() {
        return {
            phoneNumber: '123-123-123'
        }
    }
}
</script>
<style scoped="">
.round{
    width: 85px;
    height: 85px;
    background: #3baa73e7;
    padding: 20px;
    border-radius: 50%;
    border: 2px solid #194B32;
    cursor: pointer;
    transition: all .2s ease-in-out;

}

.round:hover{
    background: #194B32;
}
.content {
    padding: 18px;
    padding-top: 30px;
}
h2 {
    margin: 0 0 1.5rem 0;
}

.c-s{
    font-size: 30px;
    letter-spacing: 3px;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
</style>
