<template>
  <div id="home">
    <Carousel />

    <div class="container sections-container">
      <h2 class="h2-responsive py-2 bg-info text-white">
        Wiki Courses Sections
      </h2>

      <div class="row">
        <div
          class="col-md-4 mb-3"
          v-for="(section, index) in allActiveSections"
          :key="index"
        >
          <div class="card">
            <img
              class="card-img-top"
              :src="section.coverImageLink"
              alt="Card image cap"
            />

            <div class="card-body">
              <h5 class="card-title text-capitalize font-weight-bold">
                {{ section.title }}
              </h5>

              <p class="card-text">
                {{ section.brief }}
              </p>

              <a
                class="btn btn-primary"
                @click="goToClassifications(section.id)"
              >
                Show All Related Classifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container classifications-container">
      <h2 class="h2-responsive my-4 py-2 bg-info text-white">
        Wiki Courses Classifications
      </h2>

      <div class="row">
        <div
          class="col-md-4 mb-3"
          v-for="(section, index) in allActiveClassifications"
          :key="index"
        >
          <div class="card">
            <img
              class="card-img-top"
              :src="section.coverImageLink"
              alt="Card image cap"
            />

            <div class="card-body">
              <h5 class="card-title text-capitalize font-weight-bold">
                {{ section.title }}
              </h5>

              <p class="card-text">
                {{ section.brief }}
              </p>

              <a class="btn btn-primary">
                Show All Related Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
import Carousel from "@/components/global/Carousel.vue";

export default {
  name: "Home",

  data: function() {
    return {
      allActiveSections: [],
      allActiveClassifications: []
    };
  },

  mounted() {
    this.fetchAllActiceSections();
    this.fetchAllActiceClassifications();
  },

  methods: {
    goToClassifications(sectionId) {
      this.$router.push({
        name: "Classifications",
        params: { sectionId: sectionId }
      });

      console.log("Section Id: " + sectionId);
    },

    fetchAllActiceSections() {
      axios
        .get("http://localhost:8383/api/v1/active-sections")
        .then(response => {
          this.allActiveSections = response.data;
        })
        .catch(error => {
          console.error("Error when fetch all sections => ", error);
        });
    },

    fetchAllActiceClassifications() {
      axios
        .get("http://localhost:8383/api/v1/active-classifications")
        .then(response => {
          this.allActiveClassifications = response.data;
        })
        .catch(error => {
          console.error("Error when fetch all sections => ", error);
        });
    }
  },

  computed: {},

  components: {
    Carousel
  }
};
</script>

<style lang="scss" scoped>
#home {
  height: 5000px;

  .sections-container {
    border: 1px solid transparent;

    h2.h2-responsive {
      margin: 25px 0px;
    }
  }
}
</style>
