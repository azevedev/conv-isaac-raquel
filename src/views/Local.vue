<template>
    <div class="content">
      <h1 class="solidaritha c-s">
        Queridos Amigos e Familiares
        </h1>
        <div id="content">
            <h2>Contact us</h2>
            <p>Contact us by phone on {{ phoneNumber }}, or via our address at 123 Fake Street, New York City.</p>
        
        

        <iframe
            width="80%"
            frameborder="0" style="border:0"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBqt5PhIc_mRH0oCeZiG1yAxYz3Yy24X2I&q=Eiffel+Tower,Paris+France"
            allowfullscreen>
        </iframe>
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
</style>
