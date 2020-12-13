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
              <h5 class="card-title text-capitalize font-weight-bold">
                {{ classification.title }}
              </h5>

              <p class="card-text">
                {{ classification.brief }}
              </p>

              <a
                class="btn btn-success"
                @click="goToCourses(classification.id, classification.title)"
              >
                Show All Related Courses
              </a>
            </div>

            <span
              class="badge badge-secondary"
              style="text-transform:capitalize"
            >
              {{ classification.sectionTitle }}
            </span>
          </div>
        </div>
      </div>
      <hr />
    </div>

    <div class="map">
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-4">Take A Tour In Our Campus</h1>
          <p class="lead">
            The Faculty Of Engineering Is Located In Al Shaab City, Aden
            Province. The New Building Was Opened In 2012.
          </p>
          <img
            src="img/resources/home/aden-unv-map.png"
            class="img-fluid rounded mx-auto d-block pb-3"
          />
          <a
            href="http://adeneng-faculty.edu.ye/research/library.html"
            class="btn btn-primary rounded-0"
          >
            Read More
          </a>
        </div>
      </div>
    </div>

    <div class="library">
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-4">Explore our Library books & Researches</h1>
          <p class="lead">
            The Faculty's Library Contains Hundreds Of Books From Different
            Fields In Engineering And Science. Papers And Students Final
            Projects Can Be Found In The Library Too.
          </p>
          <img
            src="img/resources/home/librery.jpg"
            class="img-fluid rounded mx-auto d-block pb-3"
          />
          <a
            href="http://adeneng-faculty.edu.ye/about/campus.html"
            class="btn btn-primary rounded-0"
          >
            Read More
          </a>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
import Carousel from "@/components/home/Carousel.vue";
import Footer from "@/components/global/Footer.vue";

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

      // console.log("section id = " + sectionId);
    },

    goToCourses(classificationId, classificationTitle) {
      this.$router.push({
        name: "Courses",
        params: {
          classificationId: classificationId,
          classificationTitle: classificationTitle
        }
      });

      console.log("classification id = " + classificationId);

      console.log("classification title = " + classificationTitle);
    },

    fetchAllActiveSections() {
      axios
        .get("http://localhost:8383/api/v1/active-sections")
        .then(response => {
          this.allActiveSections = response.data.slice(0, 6);
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

  components: {
    Carousel,
    Footer
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

  .map {
    .jumbotron {
      margin: 0;
      background-color: #f8f9fa;
    }
  }

  .library {
    .jumbotron {
      margin: 0;
      background-color: #e9ecef;
    }
  }
}
</style>
