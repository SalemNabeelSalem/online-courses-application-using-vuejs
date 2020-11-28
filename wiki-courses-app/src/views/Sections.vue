<template>
  <div id="sections">
    <div class="container sections-container">
      <h2 class="h2-responsive py-2 bg-info text-white">
        All Sections
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
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Sections",

  data() {
    return {
      allActiveSections: []
    };
  },

  mounted() {
    this.fetchAllActiveSections();
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
    }
  }
};
</script>

<style lang="scss" scoped>
#sections {
  .sections-container {
    margin-bottom: 20px;
  }

  h2.h2-responsive {
    margin: 25px 0px;
  }
}
</style>
