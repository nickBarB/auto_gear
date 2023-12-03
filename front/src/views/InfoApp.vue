<script>
import DonorsReports from "../components/breadcrumb/DonorsReports.vue";
import PlasmasReports from "../components/breadcrumb/PlasmasReports.vue";
import CentersReports from "../components/breadcrumb/CentersReports.vue";

export default {
  data() {
    return {
      aria_link: 'donors',
    }
  },
  methods: {},
  mounted() {
  },
  components: {
    DonorsReports,
    PlasmasReports,
    CentersReports,
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    }
  }
}

</script>
<template>
  <h1 class="px-3">Center reports</h1>
  <div class="container">
    <div class="container-fluid btn-group py-5" role="group" aria-label="Vertical radio toggle button group">
      <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked
             value="donors" v-model="aria_link">
      <label class="btn btn-outline rounded" for="vbtn-radio1">Donors</label>
      <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off"
             value="plasmas" v-model="aria_link">
      <label class="btn btn-outline rounded" for="vbtn-radio2">Plasmas</label>
      <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off"
             value="centers" v-model="aria_link">
      <label class="btn btn-outline rounded" for="vbtn-radio3">Centers</label>
      <!--    <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio4" autocomplete="off"-->
      <!--           value="ReportsOne" v-model="aria_link">-->
      <!--    <label class="btn btn-outline rounded" for="vbtn-radio4">Other Reports One</label>-->
      <!--    <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio5" autocomplete="off"-->
      <!--           value="ReportsTwo" v-model="aria_link">-->
      <!--    <label class="btn btn-outline rounded" for="vbtn-radio5">Other Reports Two</label>-->
    </div>
  </div>
  <div class="container">
    <DonorsReports v-if="aria_link==='donors'"/>
    <PlasmasReports v-if="aria_link==='plasmas'"/>
    <CentersReports v-if="aria_link==='centers'"/>
    <ReportsOne v-if="aria_link==='ReportsOne'"/>
    <ReportsTwo v-if="aria_link==='ReportsTwo'"/>
  </div>
</template>

<style scoped>

.btn-check:checked {
  .btn-hl-outline-default {
    border-color: #276317 !important;
    background: #276317 !important;
    color: #ffffff !important;
  }
}
</style>