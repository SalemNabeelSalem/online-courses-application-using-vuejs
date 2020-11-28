<template>
  <div id="home">
    <Carousel />
    <div class="container sections-container">
      <h2 class="h2-responsive py-2 bg-info text-white">
        Lastest Wiki Courses Sections
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
                class="btn btn-success"
                @click="goToClassifications(section.id, section.title)"
              >
                Show All Related Classifications
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>

    <div class="container classifications-container">
      <h2 class="h2-responsive my-4 py-2 bg-info text-white">
        Lastest Wiki Courses Classifications
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

              <a class="btn btn-success">
                Show All Related Courses
              </a>
            </div>

            <span
              class="badge badge-secondary"
              style="text-transform:capitalize"
            >
              {{ section.sectionTitle }}
            </span>
          </div>
        </div>
      </div>
      <hr />
    </div>

    <div class="container">
      <ContactUs />
    </div>
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
import Carousel from "@/components/global/Carousel.vue";
import ContactUs from "@/components/home/ContactUs.vue";

export default {
  name: "Home",

  data: function() {
    return {
      allActiveSections: [],
      allActiveClassifications: []
    };
  },

  mounted() {
    this.fetchAllActiveSections();
    this.fetchAllActiveClassifications();
  },

  methods: {
    goToClassifications(sectionId, sectionTitle) {
      this.$router.push({
        name: "Classifications",
        params: { sectionId: sectionId, sectionTitle: sectionTitle }
      });

      // console.log("Section Id: " + sectionId);
    },

    fetchAllActiveSections() {
      axios
        .get("http://localhost:8383/api/v1/active-sections")
        .then(response => {
          this.allActiveSections = response.data;
        })
        .catch(error => {
          console.error("Error when fetch all sections => ", error);
        });
    },

    fetchAllActiveClassifications() {
      axios
        .get("http://localhost:8383/api/v1/active-classifications")
        .then(response => {
          this.allActiveClassifications = response.data.slice(0, 6);
        })
        .catch(error => {
          console.error("Error when fetch all classifications => ", error);
        });
    }
  },

  computed: {},

  components: {
    Carousel,
    ContactUs
  }
};
</script>

<style lang="scss" scoped>
#home {
  .classifications-container,
  .sections-container {
    margin-bottom: 20px;
  }

  h2.h2-responsive {
    margin: 25px 0px;
  }

  .badge {
    padding: 15px 0px;
    font-size: 16px;
  }
}
</style>
