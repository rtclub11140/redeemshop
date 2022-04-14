<template>
  <v-container fluid class="ma-0 pa-0">
    <NavBarComponent />
    <v-container fluid class="bg-form-main ma-0 pa-0">
      <v-container class="d-flex jutify-center align-center">
        <v-text-field
          solo
          label="search"
          prepend-inner-icon="mdi-search-web"
        ></v-text-field>
      </v-container>

      <v-container>
        <v-row>
          <v-col v-for="product in productList" :key="product.id" cols="4">
            <v-card max-width="500" :elevation="6" outlined>
              <v-container>
                <v-row no-gutters style="flex-wrap: nowrap">
                  <v-col cols="3" class="d-flex jutify-center align-center">
                    <v-img :src="product.url" height="100" width="100"></v-img>
                  </v-col>
                  <v-col cols="9" class="ml-5">
                    <v-container class="pl-4 pr-4 ma-0 pa-0"
                      ><p class="text-body-1">
                        {{ product.productName }}
                      </p></v-container
                    >
                    <v-container
                      class="d-flex flex-row justify-start align-start"
                    >
                      <v-img
                        src="../assets/images/main/icons-gift.png"
                        height="20"
                        width="20"
                      ></v-img>
                      <v-container class="ml-3 ma-0 pa-0">
                        <span
                          class="text-subtitle-1 text-orange font-weight-bold"
                        >
                          {{ product.point }}
                        </span>
                      </v-container>
                    </v-container>
                    <v-container class="ml-3 ma-0 pa-0"
                      ><v-btn
                        outlined
                        @click="$router.push('/login')"
                        color="info"
                        >เเลกรางวัล</v-btn
                      >
                    </v-container>     

                                   
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import NavBarComponent from "../components/NavBarComponent.vue";

export default {
  name: "MainPage",

  components: {
    NavBarComponent,
  },
  data() {
    return {
      productList: [
        {
          idProduct: "1",
          productName: "MacBook Pro ชิพ Apple M1 ความจุ 256GB",
          url: "https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_UY218_.jpg",
          point: "17500",
          status: "1",
        },
        {
          idProduct: "2",
          productName: "Apple iPhone 12 Pro 128GB",
          url: "https://m.media-amazon.com/images/I/712yl2wTDbL._AC_UY218_.jpg",
          point: "15000",
          status: "1",
        },

        {
          idProduct: "3",
          productName: 'Samsung SMART Flat TV 65" Crystal UHD 4K',
          url: "https://m.media-amazon.com/images/I/71qqCWuXuYL._AC_UY218_.jpg",
          point: "14360",
          status: "1",
        },
        {
          idProduct: "4",
          productName: "Galaxy Note 10+ (256GB)",
          url: "https://m.media-amazon.com/images/I/519l80S-uLL._AC_UY218_.jpg",
          point: "13610",
          status: "1",
        },
        {
          idProduct: "5",
          productName: "Galaxy S20+ (128GB)",
          url: "https://m.media-amazon.com/images/I/71z2dc+XnrL._AC_UY218_.jpg",
          point: "13400",
          status: "1",
        },
        {
          idProduct: "6",
          productName: "iPad Pro 11นิ้ว Wifi 128 GB",
          url: "https://m.media-amazon.com/images/I/81MF389-9gS._AC_UY218_.jpg",
          point: "11500",
          status: "1",
        },
        {
          idProduct: "7",
          productName: "iPhone 12 mini",
          url: "https://m.media-amazon.com/images/I/61P7LSssJUL._AC_UY218_.jpg",
          point: "10500",
          status: "1",
        },
        {
          idProduct: "8",
          productName: "Sony PlayStation Pro 2TB",
          url: "https://m.media-amazon.com/images/I/61HvOYl7YuL._AC_UY218_.jpg",
          point: "7995",
          status: "1",
        },
        {
          idProduct: "9",
          productName:
            "Haier ตู้เย็นมัลติดอร์ ความจุ 15.5 คิว รุ่น HRF-MD430STL",
          url: "https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/0/0/000273564_hrf-md430_stl.jpg",
          point: "7600",
          status: "1",
        },
        {
          idProduct: "10",
          productName: "GoPro Hero 9",
          url: "https://m.media-amazon.com/images/I/71jVq6t7DmL._AC_UY218_.jpg",
          point: "6400",
          status: "1",
        },
        {
          idProduct: "11",
          productName: "Marshall ACTON II BLUETOOTH BROWN",
          url: "https://m.media-amazon.com/images/I/91IJi2KsPaL._AC_UY218_.jpg",
          point: "6000",
          status: "1",
        },
        {
          idProduct: "12",
          productName: "Dyson Supersonic™ Hair Dryer HD03 Iron/Fuchsia",
          url: "https://m.media-amazon.com/images/I/61IkC9ohZ0L._AC_UL320_.jpg",
          point: "5700",
          status: "1",
        },
        {
          idProduct: "13",
          productName: "breo รุ่น iSee16 เครื่องนวดตาเพื่อสุขภาพ",
          url: "https://m.media-amazon.com/images/I/91rmWa2rs0L._AC_UL320_.jpg",
          point: "1800",
          status: "1",
        },
        {
          idProduct: "14",
          productName: "instax Mini Link Smartphone Printer",
          url: "https://m.media-amazon.com/images/I/71XAe9ycfCL._AC_UY218_.jpg",
          point: "1600",
          status: "1",
        },
        {
          idProduct: "15",
          productName: "MacBook Pro ชิพ Apple M1 ความจุ 256GB",
          url: "https://image.similarpng.com/very-thumbnail/2020/11/Money-bag-on-transparent-background-PNG.png",
          point: "1000",
          status: "1",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-form-main {
  background-color: #f9f9fb;
  min-height: 100vh;
}
</style>
