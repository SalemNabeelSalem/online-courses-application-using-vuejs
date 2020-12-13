<template>
  <div id="course-details">
    <div class="jumbotron">
      <h1 class="display-4 pb-4">{{ course.title }}</h1>

      <p class="lead">{{ course.description }}</p>

      <hr class="my-4" />

      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <div class="embed-responsive embed-responsive-16by9 hoverable">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/fa3Iczgh8Ok"
              style="height: 101%"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <hr class="my-4" />
    </div>

    <Footer />
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
import Footer from "@/components/global/Footer.vue";

export default {
  name: "CourseDetails",
  data: function() {
    return {
      courseId: null,
      course: null
    };
  },
  mounted() {
    this.getCourseIdFromUrlParameters();
    this.fetchCourseById();
  },
  methods: {
    getCourseIdFromUrlParameters() {
      this.courseId = this.$route.params.courseId;
    },

    fetchCourseById() {
      axios
        .get("http://localhost:8383/api/v1/course/" + this.courseId)
        .then(response => {
          this.course = response.data;

          console.log(this.course);
        })
        .catch(error => {
          console.error("Error when fetch course => ", error);
        });
    }
  },
  components: {
    Footer
  }
};
</script>

<style lang="scss" scoped></style>
