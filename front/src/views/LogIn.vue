<script>
import axios from 'axios'

export default {
  components: {},
  data() {
    return {
      username: '',
      password: '',
      errors: []
    }
  },
  mounted() {
    document.title = 'Log In'
  },
  methods: {
    async submitForm() {
      axios.defaults.headers.common["Authorization"] = ''
      localStorage.removeItem("access")

      const formData = {
        username: this.username,
        password: this.password
      }
      await axios
          .post("/api/token/", formData)
          .then(response => {
            // console.log(response)

            const access = response.data.access
            const refresh = response.data.refresh

            this.$store.commit('setAccess', access)
            this.$store.commit('setRefresh', refresh)

            axios.defaults.headers.common['Authorization'] = "Bearer " + access

            localStorage.setItem("access", access)
            localStorage.setItem("refresh", refresh)

            this.$router.push("/")
          })
          .catch(error => {
            this.errors = [error,]
            console.log(error)
          })
    }
  }
}
</script>

<template>
  <main class="form-signin w-100 m-auto py-5">
    <form @submit.prevent="submitForm">
      <h1 class="h3 mb-3 fw-normal text-center">Welcome to Service</h1>

      <div class="form-floating">
        <input type="text" class="form-control rounded-bottom-0" id="floatingInput" placeholder="user_name"
               v-model="username">
        <label for="floatingInput">Username</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="errors" v-if="errors.length">
        <p v-for="error in errors" v-bind:key="error">{{ error.error }} Incorrect username or password</p>
      </div>

      <!--      <div class="form-check text-start my-3">-->
      <!--        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">-->
      <!--        <label class="form-check-label" for="flexCheckDefault">-->
      <!--          Remember me-->
      <!--        </label>-->
      <!--      </div>-->
      <button class="btn btn-primary w-100 py-2 btn-hl-default" type="submit">Log In</button>
      <p class="mt-5 mb-3 text-body-secondary">&copy; by Brave Bunny</p>
    </form>
  </main>
</template>

<style scoped>
.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
