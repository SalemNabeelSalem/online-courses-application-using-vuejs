<template>
  <div id="classifications">
    <div class="container classifications-container">
      <h2 class="h2-responsive my-4 py-2 bg-info text-white">
        <span>All Classifications</span>
      </h2>
      <div class="row">
        <div
          class="col-md-4 mt-2 mb-3"
          v-for="(classification, index) in allActiveClassifications"
          :key="index"
        >
          <div class="card">
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
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Classifications",

  data: function() {
    return {
      allActiveClassifications: []
    };
  },

  mounted() {
    this.fetchAllActiveClassifications();
  },

  methods: {
    fetchAllActiveClassifications() {
      axios
        .get("http://localhost:8383/api/v1/active-classifications")
        .then(response => {
          this.allActiveClassifications = response.data;

          // console.log(this.allActiveClassifications);
        })
        .catch(error => {
          console.error("Error when fetch all classifications => ", error);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
