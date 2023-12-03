<script>
import {ref} from 'vue'

export default {
  data() {
    return {
      LogoImageUrl: ref('/assets/GEAR.svg?url/'),
      IconImageUrl: ref('/assets/Link.svg?url/'),
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
    <header class="mb-3 border-bottom">
      <div class="p-3">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <router-link v-if="media.matches" class="navbar-brand ml-2" to="/"><img :src="LogoImageUrl" class="logo"
                                                                                    alt="logo"/>
            </router-link>
            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 mx-2" role="search">
              <input type="search" class="form-control" placeholder="🔍 Поиск..." aria-label="Search">
            </form>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" class="nav-link px-2 link-body-emphasis">Избранное</a></li>
              <li><a href="#" class="nav-link px-2 link-body-emphasis">Сообщения</a></li>
              <li><a href="#" class="nav-link px-2 link-body-emphasis">Я продаю</a></li>
            </ul>

            <div class="dropdown text-end px-3">
              <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                 data-bs-toggle="dropdown" aria-expanded="false">
                <img :src="IconImageUrl" alt="mdo" width="52" height="52" class="rounded-circle">
              </a>
              <ul class="dropdown-menu text-small">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
            <div class="text-end">
              <button class="btn btn-danger p-3">
                Разместить объявление
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="p-2" style="background-color: #36b555ff">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" class="nav-link px-2 link-light">Объявления</a></li>
              <li><a href="#" class="nav-link px-2 link-light">Безопасная сделка</a></li>
              <li><a href="#" class="nav-link px-2 link-light">Отзывы</a></li>
              <li><a href="#" class="nav-link px-2 link-light">Отчёты</a></li>
              <li><a href="#" class="nav-link px-2 link-light">Кошелёк</a></li>
              <li><a href="#" class="nav-link px-2 link-light">Заявки на кредит</a></li>
              <li><a href="#" class="nav-link px-2 link-light">Настройки</a></li>
            </ul>
            <div class="text-end">
            </div>
          </div>
        </div>
      </div>
      <div class="p-2">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" class="nav-link px-2 link-body-emphasis">Легковые</a></li>
              <li><a href="#" class="nav-link px-2 link-body-emphasis">Коммерческие</a></li>
              <li><a href="#" class="nav-link px-2 link-body-emphasis">Электро</a></li>
              <li><a href="#" class="nav-link px-2 link-body-emphasis">Китайские</a></li>
              <li><a href="#" class="nav-link px-2 link-body-emphasis">Мото</a></li>
            </ul>
            <div class="text-end">
              <a class="link-danger" href="#">
                <i class="bi bi-wallet2 h2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!--    <nav class="navbar navbar-expand-lg fixed-top border-bottom border-opacity-50"-->
    <!--         aria-label="Offcanvas navbar large">-->
    <!--      <div class="container-fluid ">-->
    <!--        <router-link v-if="media.matches" class="navbar-brand" to="/"><img :src="HaemImageUrl" class="logo" alt="logo"/>-->
    <!--        </router-link>-->
    <!--        <ol class="breadcrumb m-0" id="nav" v-if="isLoggedIn">-->
    <!--          <router-link class="breadcrumb-item router-link-style" to='/'>Home</router-link>-->
    <!--          <router-link class="breadcrumb-item router-link-style" to='/info'>Info-reports</router-link>-->
    <!--          <router-link class="breadcrumb-item router-link-style" to='/about'>About US</router-link>-->
    <!--        </ol>-->

    <!--        <a class="navbar-toggler border-0" type="button"-->
    <!--           data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"-->
    <!--           aria-controls="offcanvasNavbar2">-->
    <!--          <i class="bi bi-three-dots-vertical h2"></i>-->
    <!--        </a>-->
    <!--        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar2"-->
    <!--             aria-labelledby="offcanvasNavbar2Label">-->
    <!--          <div class="offcanvas-header">-->
    <!--            <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Menu</h5>-->
    <!--            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"-->
    <!--                    aria-label="Close"></button>-->
    <!--          </div>-->
    <!--          <div class="offcanvas-body">-->
    <!--            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">-->
    <!--              <li class="nav-item">-->
    <!--                <a class="nav-link"-->
    <!--                   href="/admin"><i class="bi bi-sliders h2"></i></a>-->
    <!--              </li>-->
    <!--              <li class="nav-item" v-if="isLoggedIn">-->
    <!--                <a class="nav-link" @click="getLogOut"><i class="bi bi-box-arrow-in-left h2"></i></a>-->
    <!--              </li>-->
    <!--              <li class="nav-item" v-if="!isLoggedIn">-->
    <!--                <router-link class="nav-link"-->
    <!--                             to="/log-in"><i class="bi bi-box-arrow-in-right h2"></i></router-link>-->
    <!--              </li>-->

    <!--            </ul>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </nav>-->
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


</style>