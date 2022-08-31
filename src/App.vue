<template>
    <router-view class="view" v-slot=" { Component }">
      <transition name="fade" mode="out-in">
        <Suspense>
        <component :is="Component" />
        </Suspense>
      </transition>
    </router-view>
  <div id="nav">
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

      // <meta property="og:image" itemprop="image" content="url_image">
      // adding og:image
      let ogImage = document.createElement('META')
      ogImage.setAttribute('property','og:image')
      ogImage.setAttribute('itemprop','image')
      ogImage.setAttribute('content','assets/img-preview.png')

      let ogImage2 = document.createElement('META')
      ogImage2.setAttribute('property','og:image')
      ogImage2.setAttribute('itemprop','image')
      ogImage2.setAttribute('content','/src/assets/img-preview.png')

      document.querySelector(`head`).appendChild(ogImage)
      document.querySelector(`head`).appendChild(ogImage2)
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
    letter-spacing: 6px;
  }
  ffont{
    font-family: "Petit";
  }

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #194B32;
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
  height: 20vh;
  flex-direction: column;
  padding-top: 40px;
  z-index: 9999;
}

.links{
  padding: 12px;
  display: flex;
}

#nav a {
  border: solid #2c3e50 1px;
  padding: 14px 12px;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
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
  height: 80vh;
  min-height: 80vh;
  max-height: 80vh;
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
