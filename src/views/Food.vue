<template>
  <div class="food-container">
    <h1>food</h1>
  </div>
</template>

<script>
import { config } from "../config/";
import { mapState } from "vuex";

export default {
  name: "food",

  mounted() {
    this.getLocation();
    if (Object.values(this.location) !== null) {
      this.fetchLocationZomato();
    }
  },

  computed: {
    ...mapState(["location", "zomatoLocation"])
  },

  watch: {
    location(newVal) {
      if (newVal) {
        console.log("location update", newVal);
      }
    },
    zomatoLocation(newVal) {
      console.log("zomato location", newVal);
    }
  },

  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.successGetLocation,
          () => {
            console.log("error");
          }
        );
      } else {
        console.log("smoething wrong");
      }
    },

    fetchLocationZomato() {
      let url = `https://developers.zomato.com/api/v2.1/locations?query=indonesia&lat=${
        this.location.latitude
      }&lon=${this.location.longtitude}&count=20`;

      fetch(url, {
        headers: {
          "user-key": config().zomatoApiKey
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data) this.setZomatoLocation(data);
        })
        .catch(err => console.log(err));
    },

    successGetLocation(position) {
      let pos = {
        latitude: position.coords.latitude,
        longtitude: position.coords.longitude
      };
      this.$store.commit("setLocation", pos);
      Promise.resolve(position);
    },

    setZomatoLocation(location) {
      let dataLocation = {
        cityName: location.location_suggestions[0].city_name,
        cityID: location.location_suggestions[0].city_id,
        countryID: location.location_suggestions[0].country_id,
        countryName: location.location_suggestions[0].country_name
      };
      this.$store.commit("setZomatoLocation", dataLocation);
    }
  }
};
</script>

<style lang="postcss" scoped>
.food-container {
  @apply mt-20;
}
</style>

