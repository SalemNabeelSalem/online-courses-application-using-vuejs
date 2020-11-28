<template>
  <div id="classifications">
    <div class="container classifications-container">
      <h2
        class="h2-responsive my-4 py-2 bg-info text-white"
        v-if="allActiveClassifications.length > 0"
      >
        <span style="text-transform:Capitalize">{{ this.sectionTitle }}</span>
        Section.
      </h2>
      <div class="row" v-if="allActiveClassifications.length > 0">
        <div
          class="col-md-4 mt-2 mb-3"
          v-for="(classification, index) in allActiveClassifications"
          :key="index"
        >
          <div class="card" style="width: 18rem;">
            <img
              class="card-img-top"
              :src="classification.coverImageLink"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title" style="text-transform:capitalize">
                {{ classification.title }}
              </h5>
              <p class="card-text">
                {{ classification.brief }}
              </p>
              <a class="btn btn-info">Show All Related Courses</a>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h2 class="h2-responsive my-4 py-2 bg-secondary text-white">
          There Are No Classifications On
          <span class="text-danger" style="text-transform:Capitalize">
            {{ this.sectionTitle }}
          </span>
          Section.
        </h2>

        <NotFound />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
import NotFound from "@/components/global/NotFound.vue";

export default {
  name: "Classifications",

  data: function() {
    return {
      sectionId: null,
      sectionTitle: null,
      allActiveClassifications: []
    };
  },

  mounted() {
    this.getSectionInfoFromUrlParameters();
    this.fetchAllActiveClassificationsBySectionId();
  },

  methods: {
    getSectionInfoFromUrlParameters() {
      this.sectionId = this.$route.params.sectionId;

      this.sectionTitle = this.$route.params.sectionTitle;
    },

    fetchAllActiveClassificationsBySectionId() {
      axios
        .get(
          "http://localhost:8383/api/v1/active-classifications/" +
            this.sectionId
        )
        .then(response => {
          this.allActiveClassifications = response.data;
          console.log(this.allActiveClassifications);
        })
        .catch(error => {
          console.error("Error when fetch all classifications => ", error);
        });
    }
  },

  computed: {},

  components: {
    NotFound
  }
};
</script>

<style lang="scss" scoped></style>
