<template>
    <link itemprop="thumbnailUrl" href="https://i.imgur.com/ic60fTr.jpg"> 
    <span itemprop="thumbnail" itemscope itemtype="http://schema.org/ImageObject"> 
      <link itemprop="url" href="https://i.imgur.com/ic60fTr.jpg"> 
    </span>
    <router-view class="view" v-slot=" { Component }">
      <transition name="fade" mode="out-in">
        <Suspense>
        <component :is="Component" />
        </Suspense>
      </transition>
    </router-view>
  <div id="nav">
    <div style="text-align:center; z-index: 9999; font-size: 10px; width: 100%;">
      <p style="z-index: 9999;">Por favor confirmar presença até dia 26 de outubro de 2022.</p>
      <p style="z-index: 9999;">As senhas só serão entregues após a confirmação da presença.</p>
    </div>
    <div class="links">
      <router-link to="/" v-if="currentRouteName !== 'Home'">Página Inicial</router-link>
      <router-link to="/confirm" v-if="(currentRouteName !== 'Confirm') && (currentRouteName !== 'Confirmed')">Confirmar Presença</router-link>
      <router-link to="/local" v-if="currentRouteName !== 'Local'">Local do Evento</router-link>
      <router-link to="/presents" v-if="currentRouteName !== 'Presents'">Lista de Presentes</router-link>
    </div>
  </div>
  
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
        }
    },
    computed: {
    currentRouteName() {
        return this.$route.name;
    },
    },
    beforeCreate(){
      // adding title for current view/page using vue-i18n

      // <meta property="og:image" itemprop="image" content="https://i.imgur.com/ic60fTr.jpg">
      // adding og:image
      // let ogImage = document.createElement('META')
      // ogImage.setAttribute('property','og:image')
      // ogImage.setAttribute('itemprop','image')
      // ogImage.setAttribute('content','https://i.imgur.com/ic60fTr.jpg')


      // document.querySelector(`head`).appendChild(ogImage)
    }
}
</script>


<style>

@font-face {
    font-family: "Solidaritha";
    src: local("Solidaritha"),   url("./assets/fonts/SolidarithaScript.ttf") format("truetype");
  }

  @font-face {
    font-family: "Petit";
    src: local("Petit"),   url("./assets/fonts/PetitScript.ttf") format("truetype");
  }

  .solidaritha{
    font-family: "Solidaritha";
    font-size: 40px; 
    line-height: 60px;
    letter-spacing: 0px;
  }
  ffont{
    font-family: "Petit";
  }

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #194B32;
  font-weight: bold;
}

body {
  display: flex;
}


#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding-top: 25px;
  z-index: 9999;
}

.links{
  padding: 12px;
  display: flex;
}

#nav a {
  border: solid #194B32 1px;
  padding: 14px 12px;
  text-decoration: none;
  font-weight: bold;
  color: #194B32;
  font-weight: bold;
  background: white;
  font-size: 10px;
  margin: 0px 8px;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  border-radius: 50%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.view{
  max-width: 500px;
  height: 75vh;
  min-height: 75vh;
  max-height: 75vh;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s ease-out;
}



  
</style>
