<script>
import {ref} from 'vue'

export default {
  data() {
    return {
      HaemImageUrl: ref('/assets/haemalogic.svg?url/'),
      media: ''
    }
  },
  methods: {
    getLogOut() {
      localStorage.setItem("access", '')
      this.$store.commit("setAccess", '')
      localStorage.setItem("refresh", '')
      this.$store.commit("setRefresh", '')
      this.$router.push("/log-in")
    },
    getMedia() {
      this.media = window.matchMedia("(min-width: 600px)")
    }

  },
  mounted() {
    this.getMedia()
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    }
  }
}

</script>
<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top border-bottom border-opacity-50"
         aria-label="Offcanvas navbar large">
      <div class="container-fluid ">
        <router-link v-if="media.matches" class="navbar-brand" to="/"><img :src="HaemImageUrl" class="logo" alt="logo"/>
        </router-link>
        <ol class="breadcrumb m-0" id="nav" v-if="isLoggedIn">
          <router-link class="breadcrumb-item router-link-style" to='/'>Home</router-link>
          <router-link class="breadcrumb-item router-link-style" to='/info'>Info-reports</router-link>
          <router-link class="breadcrumb-item router-link-style" to='/about'>About US</router-link>
        </ol>

        <a class="navbar-toggler border-0" type="button"
           data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
           aria-controls="offcanvasNavbar2">
          <i class="bi bi-three-dots-vertical h2"></i>
        </a>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar2"
             aria-labelledby="offcanvasNavbar2Label">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Menu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link"
                   href="/admin"><i class="bi bi-sliders h2"></i></a>
              </li>
              <li class="nav-item" v-if="isLoggedIn">
                <a class="nav-link" @click="getLogOut"><i class="bi bi-box-arrow-in-left h2"></i></a>
              </li>
              <li class="nav-item" v-if="!isLoggedIn">
                <router-link class="nav-link"
                             to="/log-in"><i class="bi bi-box-arrow-in-right h2"></i></router-link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>


</template>


<style scoped>

nav {
  background: var(--bs-body-bg);
}

.bi {
  fill: currentColor;
}

.bi:hover {
  color: #32801E;
}

.router-link-style {
  text-decoration: unset;
  color: currentColor;
}


.router-link-style:hover {
  color: #32801E;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #276317);
}

</style>