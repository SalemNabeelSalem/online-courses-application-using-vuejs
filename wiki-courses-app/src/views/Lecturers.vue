<template>
  <div id="lecturers">
    <div class="container">
      <div class="row">
        <div
          class="col-md-4 mt-4"
          v-for="(lecturer, index) in allActiveLecturers"
          :key="index"
        >
          <div class="card user-card">
            <div class="card-header">
              <h3>Profile</h3>
            </div>

            <div class="card-block">
              <div class="user-image">
                <img
                  :src="lecturer.profileImageLink"
                  class="img-radius"
                  alt="User-Profile-Image"
                />
              </div>

              <h6 class="f-w-600 m-t-25 m-b-10">{{ lecturer.fullName }}</h6>

              <p class="text-muted">
                <span
                  v-if="lecturer.isActive"
                  style="font-weight:bold; color:green"
                >
                  Active
                </span>
                <span v-else style="font-weight:bold; color:red">
                  Not Active
                </span>

                |

                <span style="font-weight:bold">
                  {{ lecturer.gender == "M" ? "Male" : "Female" }}
                </span>
              </p>

              <hr />

              <p class="m-t-15 text-muted">
                {{ lecturer.description }}
              </p>

              <div class="bg-c-blue counter-block m-t-10 p-20">
                <div class="row">
                  <div class="col-4">
                    <i class="fa fa-comment"></i>
                    <p>1256</p>
                  </div>

                  <div class="col-4">
                    <i class="fa fa-user"></i>
                    <p>8562</p>
                  </div>

                  <div class="col-4">
                    <i class="fa fa-suitcase"></i>
                    <p>189</p>
                  </div>
                </div>
              </div>

              <hr />

              <div class="row justify-content-center user-social-link">
                <div class="col-auto">
                  <a :href="`mailto:${lecturer.email}`">
                    <i class="fa fa-envelope"></i>
                  </a>
                </div>
              </div>

              <hr />

              <a class="btn btn-success">
                Show All Related Coureses
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
import Footer from "@/components/global/Footer.vue";

export default {
  name: "Lecturers",
  data: function() {
    return {
      allActiveLecturers: []
    };
  },

  mounted() {
    this.fetchAllActiveLecturers();
  },

  methods: {
    fetchAllActiveLecturers() {
      axios
        .get("http://localhost:8383/api/v1/all-lecturers")
        .then(response => {
          this.allActiveLecturers = response.data;
        })
        .catch(error => {
          console.error("Error when fetch all lecturers => ", error);
        });
    }
  },

  components: {
    Footer
  }
};
</script>

<style lang="scss" scoped>
#lecturers {
  .card.user-card {
    border-top: none;

    -webkit-box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.05),
      0 -2px 1px -2px rgba(0, 0, 0, 0.04), 0 0 0 -1px rgba(0, 0, 0, 0.05);

    box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.05),
      0 -2px 1px -2px rgba(0, 0, 0, 0.04), 0 0 0 -1px rgba(0, 0, 0, 0.05);

    -webkit-transition: all 150ms linear;

    transition: all 150ms linear;
  }

  .card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);
    box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);
    border: none;
    margin-bottom: 30px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .card .card-header {
    background-color: transparent;
    border-bottom: none;
    padding: 25px;
  }

  .card .card-header h5 {
    margin-bottom: 0;
    color: #222;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    margin-right: 10px;
    line-height: 1.4;
  }

  .card .card-header + .card-block,
  .card .card-header + .card-block-big {
    padding-top: 0;
  }

  .user-card .card-block {
    text-align: center;
  }

  .card .card-block {
    padding: 25px;
  }

  .user-card .card-block .user-image {
    position: relative;
    margin: 0 auto;
    display: inline-block;
    padding: 5px;
    width: 110px;
    height: 110px;
  }

  .user-card .card-block .user-image img {
    z-index: 20;
    position: absolute;
    top: 5px;
    left: 5px;
    width: 100px;
    height: 100px;
  }

  .img-radius {
    border-radius: 50%;
  }

  .f-w-600 {
    font-weight: 600;
  }

  .m-b-10 {
    margin-bottom: 10px;
  }

  .m-t-25 {
    margin-top: 25px;
  }

  .m-t-15 {
    margin-top: 15px;
  }

  .card .card-block p {
    line-height: 1.4;
  }

  .text-muted {
    color: #919aa3 !important;
  }

  .user-card .card-block .activity-leval li.active {
    background-color: #2ed8b6;
  }

  .user-card .card-block .activity-leval li {
    display: inline-block;
    width: 15%;
    height: 4px;
    margin: 0 3px;
    background-color: #ccc;
  }

  .user-card .card-block .counter-block {
    color: #fff;
  }

  .bg-c-blue {
    background: linear-gradient(45deg, #4099ff, #73b4ff);
  }

  .bg-c-green {
    background: linear-gradient(45deg, #2ed8b6, #59e0c5);
  }

  .bg-c-yellow {
    background: linear-gradient(45deg, #ffb64d, #ffcb80);
  }

  .bg-c-pink {
    background: linear-gradient(45deg, #ff5370, #ff869a);
  }

  .m-t-10 {
    margin-top: 10px;
  }

  .p-20 {
    padding: 20px;
  }

  .user-card .card-block .user-social-link i {
    font-size: 30px;
  }

  .user-card .card-block .user-image:before {
    bottom: 0;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }

  .user-card .card-block .user-image:after,
  .user-card .card-block .user-image:before {
    content: "";
    width: 100%;
    height: 48%;
    border: 2px solid #4099ff;
    position: absolute;
    left: 0;
    z-index: 10;
  }

  .user-card .card-block .user-image:after {
    top: 0;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }

  .user-card .card-block .user-image:after,
  .user-card .card-block .user-image:before {
    content: "";
    width: 100%;
    height: 48%;
    border: 2px solid #4099ff;
    position: absolute;
    left: 0;
    z-index: 10;
  }
}
</style>
