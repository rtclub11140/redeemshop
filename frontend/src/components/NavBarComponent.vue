<template>
  <v-container
    fluid
    class="ma-0 pa-0 height-10 bg-container-header d-flex jutify-center align-center"
  >
    <v-row no-gutters style="flex-wrap: nowrap">
      <v-col cols="3" class="flex-grow-0 flex-shrink-1">
        <v-container class="mt-1 d-flex align-center">
          <v-img
            src="../assets/images/general/logo.png"
            height="40"
            width="40"
          ></v-img>
          <v-container>
            <span class="text-dark-blue">Redeem Shop</span>
          </v-container>
        </v-container>
      </v-col>
      <v-col
        cols="9"
        class="d-flex jutify-end align-center flex-grow-1 flex-shrink-0"
      >
        <v-container class="d-flex justify-end align-end">
          <span class="text-black postion-label-menu">หน้าหลัก</span>
          <span class="text-black postion-label-menu">วิธีแลกรางวัล</span>
          <span class="text-black postion-label-menu">ประวัติแลกรางวัล</span>

          <div class="postion-label-menu">
            <v-chip close color="cyan lighten-5" text-color="white">
              <v-icon left>mdi-star</v-icon>
              <span class="text-black">10400</span>
            </v-chip>
          </div>
          <v-btn @click="$router.push('/login')" color="primary"> Log out </v-btn>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NavBarComponent",
};
</script>

<style scoped>
.text-dark-blue {
  color: #1976d2;
  font-weight: bold;
}

.text-black {
  color: #000000;
  font-weight: bold;
}

.height-10 {
  height: 10vh;
}

.bg-container-header {
  background: #8c7e7f3d;
}

.postion-label-menu {
  padding-bottom: 0.2em;
  padding-right: 2em;
}
</style>
