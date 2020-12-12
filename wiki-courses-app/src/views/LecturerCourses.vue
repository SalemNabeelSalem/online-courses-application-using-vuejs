<template>
  <div id="courses">
    <div class="container courses-container">
      <h2
        class="h2-responsive my-4 p-2 bg-info text-white"
        v-if="allActiveCourses.length > 0"
      >
        <span style="text-transform:Capitalize">
          {{ this.lecturerFullName }}
        </span>
      </h2>

      <div class="row" v-if="allActiveCourses.length > 0">
        <div
          class="col-md-4 mt-2 mb-3"
          v-for="(course, index) in allActiveCourses"
          :key="index"
        >
          <div class="card text-dark bg-light">
            <div class="h4 card-header text-dark">
              {{ course.classificationSectionTitle }} Section
            </div>

            <img
              class="card-img-top"
              :src="course.coverImageLink"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-title lead" style="text-transform:capitalize">
                {{ course.title }}
              </p>

              <p class="card-text text-light bg-info lead p-4 text-center">
                {{ course.description }}
              </p>

              <button type="button" class="btn btn-outline-success my-2">
                Show More Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h2 class="h2-responsive my-4 py-2 bg-secondary text-white">
          There Are No Courses Created By:
          <span class="text-danger" style="text-transform:Capitalize">
            {{ this.lecturerFullName }}
          </span>
        </h2>

        <NotFound />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
import NotFound from "@/components/global/NotFound.vue";
import Footer from "@/components/global/Footer.vue";

export default {
  name: "Classifications",

  data: function() {
    return {
      lecturerId: null,
      lecturerFullName: null,
      allActiveCourses: []
    };
  },

  mounted() {
    this.getLecturerInfoFromUrlParameters();
    this.fetchAllActiveCoursesByLecturerId();
  },

  methods: {
    getLecturerInfoFromUrlParameters() {
      this.lecturerId = this.$route.params.lecturerId;

      this.lecturerFullName = this.$route.params.lecturerFullName;
    },

    fetchAllActiveCoursesByLecturerId() {
      axios
        .get(
          "http://localhost:8383/api/v1/" + this.lecturerId + "/active-courses"
        )
        .then(response => {
          this.allActiveCourses = response.data;

          console.log(this.allActiveCourses);
        })
        .catch(error => {
          console.error("Error when fetch all courses => ", error);
        });
    }
  },

  components: {
    NotFound,
    Footer
  }
};
</script>

<style lang="scss" scoped></style>
