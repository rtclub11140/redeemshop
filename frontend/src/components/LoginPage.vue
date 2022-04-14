<template>
  <v-container class="ma-20" :elevation="10">
    <v-card :elevation="10">
      <v-row no-gutters>
        <v-col cols="6">
          <!-- header left -->
          <v-container class="bg-container-header-left height-2">
            <v-row>
              <v-col cols="1">
                <v-img
                  src="../assets/images/general/logo.png"
                  aspect-ratio="1.1"
                  height="20px"
                ></v-img>
              </v-col>
              <v-col cols="11">
                <span class="text-dark-blue">Redeem Shop</span>
              </v-col>
            </v-row>
          </v-container>

          <!-- form left -->
          <v-container
            class="bg-form-left d-flex flex-column jutify-center align-center height-89"
          >
            <v-container class="height-10"></v-container>
            <v-container class="text-align-left">
              <p class="text-h5 font-weight-bold mb-10">Login</p>
              <p class="mb-10">
                Welcome Reedeem Shop, please put your login credentials below to
                start using the app
              </p>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="email"
                  label="Email"
                  :rules="emailRules"
                  outlined
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  outlined
                  required
                  type="password"
                ></v-text-field>
                <hr class="position-line" />
                <v-container class="d-flex justify-end align-end">
                  <v-btn @click="submit" color="primary"> Log in </v-btn>
                </v-container>
              </v-form>
            </v-container>
          </v-container>
        </v-col>
        <v-col cols="6">
          <v-container
            class="bg-container-right d-flex jutify-center align-center"
          >
            <v-row>
              <v-col cols="12">
                <v-img src="../assets/images/login/Gift-rafiki.svg"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "LoginPage",
  data: () => ({
    email: "",
    password: "",
    valid: false,
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length >= 6 || "Password must be at least 6 characters",
    ],
  }),
  methods: {
    submit() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style scoped>
.text-dark-blue {
  color: #1976d2;
  font-weight: bold;
}

.text-align-left {
  text-align: left;
}
.height-2 {
  height: 6vh;
}

.height-10 {
  height: 10vh;
}

.height-89 {
  height: 89vh;
}

.bg-container-header-left {
  background: #8c7e7f3d;
  max-height: 10vh;
}

.bg-form-left {
  background-color: #f9f9fb;
  max-height: 100vh;
}

.position-line {
  margin-bottom: 20px;
  border: 1px solid #e7e2e2;
}
.bg-container-right {
  background: rgba(25, 118, 210, 0.29);
  min-height: 95vh;
}
</style>
