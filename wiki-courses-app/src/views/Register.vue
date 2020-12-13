<template>
  <div id="register">
    <div class="alert alert-danger" v-if="errorMessage">
      {{ errorMessage }}
    </div>

    <div class="alert alert-success" v-if="successMessage">
      {{ successMessage }}
    </div>

    <div class="container">
      <div class="form">
        <h2 class="main-text">Sign Up Today</h2>

        <!-- Start of form -->
        <form class="register-form" @submit.prevent="createNewLecturer">
          <input
            type="first_name"
            placeholder="full name"
            required
            v-model="newLecturer.fullName"
          />

          <div class="form-group">
            <select id="genders-drop-down" v-model="newLecturer.gender">
              <option disabled value="">
                Please select gender of lecturer
              </option>

              <option
                v-for="(gender, index) in genders"
                :key="index"
                v-bind:value="gender.pref"
              >
                {{ gender.word }}
              </option>
            </select>
          </div>

          <input
            type="text"
            placeholder="email address"
            required
            v-model="newLecturer.email"
          />

          <button class="btn" type="submit">
            Sign me up!
          </button>

          <p class="message">
            Already registered?
            <a href="/login">Sign In</a>
          </p>
        </form>
        <!-- End of form -->
      </div>
    </div>
    <!-- End of form -->

    <Footer />
  </div>
</template>

<script>
import axios from "axios";

import Footer from "@/components/global/Footer.vue";

export default {
  name: "Register",
  data() {
    return {
      errorMessage: "",
      successMessage: "",
      newLecturer: {
        fullName: "",
        gender: "",
        description: "lorem ipsum dolor sit amet, consectetur elit.",
        email: "",
        profileImageLink: "/img/lecturers/lecturer-img.png"
      },

      genders: [
        { pref: "M", word: "Male" },
        { pref: "F", word: "Female" }
      ]
    };
  },
  methods: {
    createNewLecturer() {
      axios
        .post("http://localhost:8383/api/v1/add-lecturer", this.newLecturer)
        .then(response => {
          this.newLecturer = {
            fullName: "",
            gender: "",
            description: "",
            email: "",
            profileImageLink: ""
          };

          this.successMessage = "Lecturer added successfully.";

          console.log(response.data);

          // this.$router.push("/login");
        })
        .catch(error => {
          this.errorMessage = error;

          console.error("error when add new lecturer => ", error);
        });
    }
  },
  components: {
    Footer
  }
};
</script>

<style lang="scss" scoped>
/*loading the roboto font from google fonts*/
/*you can use any font you want*/
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

/*setting the font and the backgroud color. change it to what you want*/
#register {
  font-family: "Roboto", sans-serif;

  /* Main container */
  /*change the width to whatever you want*/
  .container {
    width: 400px;
    padding: 5% 0 0;
    margin: auto;
  }

  .form {
    position: relative;
    background-color: #fff;
    width: 400px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  .main-text {
    font-weight: 100;
    color: #333;
  }

  /*styling the inputs*/
  .form input {
    width: 100%;
    height: auto;
    margin: 0 0 15px;
    padding: 15px;
    outline: 0;
    border: none;
    font-family: "Roboto", sans-serif;
    background: #f2f2f2;
    box-sizing: border-box;
    font-size: 14px;
  }

  /*giving the submit button some awsome styles*/
  .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #28a745;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }

  /*chaning the styles from the button if you hover over it*/
  .form button:hover,
  .form button:active,
  .form button:focus {
    background: #e74c3c;
  }

  /*message link*/
  .form .message a {
    color: #e74c4c;
    text-decoration: none;
  }
}
</style>
