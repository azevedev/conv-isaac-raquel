<template>
    <div class="content" style="width: 100%;">
        <h1 style="font-size: 32px; margin-top: 28px;
margin-bottom: 18px;" class="solidaritha">
        Presenças Já Confirmadas
        </h1>
        <p>Total: {{ total_amount }}</p>
        <button style="margin-top: 4px; margin-bottom: 4px; padding: 12px 16px; border-radius: 12px; border: 1px solid #ddd; background: #a97f53; color: white; cursor: pointer;" @click="exportToExcel">Exportar para Excel</button>
        <div class="cnv">
            <ul class="ul-prin">
                <li v-for="(cnvPr, indexPr) in convidadosPr" :key="indexPr" class="li-prin">
                    <label type="text" ><b>{{cnvPr.nome}}</b></label> <br>
                    <ul class="ul-sec">
                        <li v-for="(cnv, index) in cnvPr.convidados" :key="index" class="li-sec">
                            <label type="text" >- {{cnv.nome}}</label> <br>
                        </li>
                    </ul>
                    <VectorDelete @click="deleteCnv(cnvPr.id, indexPr)" width="24px" height="24px" class="rmv" />
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import {getAllPr, getAllCnv, deleteAllCnv} from '../main';
import VectorDelete from '../components/VectorDelete.vue';
import ExcelJS from 'exceljs';
export default {
    name: 'List',
    components: {
        VectorDelete
    },
    data() {
        return {
        }
    },
    async setup() {
        const convidadosPr = await getAllPr()
        let total_amount = 0;
        for await (const cnv of convidadosPr){
            total_amount++;
            cnv.convidados = await getAllCnv(cnv.id)
            total_amount += cnv.convidados.length
        }

        

        
        return {
            convidadosPr,
            total_amount,
        }
    },
    mounted() {
    },
    methods: {
        async deleteCnv(id, index) {
            await deleteAllCnv(id);
            this.convidadosPr.splice(index,1)
            this.$forceUpdate();
            this.total_amount--;
        },
        async exportToExcel() {
            const excel = new ExcelJS.Workbook();
            const worksheet = excel.addWorksheet('Presenças');

            worksheet.columns = [
                { header: 'Nome', key: 'nome', width: 35 },
                // { header: 'Convidados', key: 'convidados', width: 50 },
            ];

            // Flatten the data
            const rows = this.convidadosPr.map((pr) => {
                return {
                nome: pr.nome,
                // convidados: pr.convidados.map(cnv => cnv.nome).join(', ')
                };
            });

            worksheet.addRows(rows);

            // In browser environment, use a Blob to trigger download
            const buffer = await excel.xlsx.writeBuffer();

            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'presencas.xlsx';
            link.click();
            URL.revokeObjectURL(link.href);
            }
    }
}
</script>
<style scoped="">
.rmv{
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 16px;
    color: brown;
}
.cnv{
    overflow-y: scroll;
    height: 65vh;
    padding: 12px 80px;
    width: 100%;
}

.ul-prin{
    display: flex;
    list-style: none;
    align-content: left;
    justify-content: left;
    text-align: left;
    flex-direction: column;
    font-size: 14px;
    padding: 8px;

}

.li-prin{
    background: rgb(255, 255, 255);
    box-shadow:  10px 10px 19px #b3b1a7,
                -10px -10px 19px #ffffff;
    border-radius: 22px;
    padding: 14px 14px 14px 24px;
    margin-bottom: 14px;
    position: relative;
    min-height: 75px
}

.ul-sec{
    display: flex;
    list-style: none;
    align-content: left;
    justify-content: left;
    text-align: left;
    flex-direction: column;
    padding: 12px;
    padding-top: 2px;
}


p{
    margin-bottom: 4px;
}
.info{
    display: flex;
    flex-direction: column;
    
}
.card {
    width: 50%;
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
