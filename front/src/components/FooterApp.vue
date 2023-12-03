<script>
export default {
  data() {
    return {
      data: [],
    }
  },
  methods: {},
  mounted() {
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    }
  }
}

</script>
<template>
  <div class="container">
    <footer class="py-5">
      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2023 ООО «Gear Auto»</p>
        <p>Пользовательское соглашение</p>
        <p>Правила рекомендаций</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="link-body-emphasis" href="#">
            <i class="bi bi-instagram h2"></i>
          </a>
          </li>
          <li class="ms-3"><a class="link-body-emphasis" href="#">
            <i class="bi bi-whatsapp h2"></i>
          </a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis" href="#">
            <i class="bi bi-telegram h2"></i>
          </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"/></svg>
              Customers
            </a>
          </li>
<!--          <li class="ms-3"><a class="link-body-emphasis" href="tel:+998 71 203-87-87">-->
<!--            <i class="bi bi-telephone-fill h2"></i>-->
<!--          </a></li>-->
<!--          <li class="ms-3"><a class="link-body-emphasis" href="mailto:info@haemalogic.uz">-->
<!--            <i class="bi bi-envelope-open-fill h2"></i>-->
<!--          </a></li>-->
<!--          <li class="ms-3"><a class="link-body-emphasis"-->
<!--                              href="https://yandex.uz/maps/10335/tashkent/?from=mapframe&ll=69.259112%2C41.314321&source=mapframe&utm_source=mapframe&z=14.03">-->
<!--            <i class="bi bi-geo-alt-fill h2"></i>-->
<!--          </a></li>-->
        </ul>
      </div>
    </footer>
  </div>
</template>


<style scoped>
.bi {

}

.bi:hover {
  color: #36b555ff;
}
</style>
