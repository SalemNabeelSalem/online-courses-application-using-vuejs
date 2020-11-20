<template>
  <div id="lecturers-control-panel">
    <b-container fluid>
      <b-row class="bg-dark">
        <b-col lg="12">
          <p class="text-center text-light pt-2" style="font-size:25px;">
            Lecturers Control Panel
          </p>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid>
      <b-row class="mt-3">
        <b-col lg="6">
          <h3 class="text-info float-left">Lecturers</h3>
        </b-col>
        <b-col lg="6">
          <button
            class="btn btn-info float-right"
            @click="showLecturerAddModel"
          >
            <font-awesome-icon :icon="['fas', 'plus']" />&nbsp;
            <span>Add New Lecturer</span>
          </button>
        </b-col>
      </b-row>

      <hr class="bg-info" />

      <div class="alert alert-danger" v-if="errorMessage">
        {{ errorMessage }}
      </div>

      <div class="alert alert-success" v-if="successMessage">
        {{ successMessage }}
      </div>

      <!-- Displaying Records -->
      <b-row>
        <b-col lg="12">
          <b-table bordered hover :items="allLecturers" :fields="fields">
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>

            <template #cell(gender)="data">
              <b v-if="data.item.gender == 'M'">Male</b>
              <b v-else>Female</b>
            </template>

            <template #cell(profileImageLink)="data">
              <img
                v-bind:src="data.item.profileImageLink"
                width="200"
                height="150"
              />
            </template>

            <template #cell(isActive)="data">
              <b v-if="data.item.isActive" class="text-info">Active</b>
              <b v-else class="text-danger">Not Active</b>
            </template>

            <template #cell(update)="data">
              <b-button
                block
                size="sm"
                variant="info"
                class="my-3"
                @click="
                  showLecturerEditModel();
                  fillLecturerEditForm(
                    data.item.id,
                    data.item.fullName,
                    data.item.gender,
                    data.item.description,
                    data.item.email,
                    data.item.profileImageLink,
                    data.item.isActive
                  );
                "
              >
                Edit
              </b-button>
            </template>

            <template #cell(delete)="data">
              <b-button
                block
                size="sm"
                variant="danger"
                class="my-3"
                @click="
                  showLecturerDeleteModel();
                  fillLecturerEditForm(data.item.id, data.item.fullName);
                "
              >
                Delete
              </b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>

      <!-- Adding New Lecturer Model -->
      <div id="overlay" v-if="lecturerAddModel">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add New Lecturer</h5>

              <button
                type="button"
                class="close"
                @click="closeLecturerAddModel"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body p-4">
              <form
                id="lecturer-form"
                method="post"
                @submit.prevent="createNewLecturer"
              >
                <div class="form-group">
                  <input
                    type="text"
                    name="fullName"
                    class="form-contrlo form-control-lg"
                    placeholder="Full Name"
                    v-model="newLecturer.fullName"
                  />
                </div>

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

                  {{ newLecturer.gender }}
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="description"
                    class="form-contrlo form-control-lg"
                    placeholder="Description"
                    v-model="newLecturer.description"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="email"
                    class="form-contrlo form-control-lg"
                    placeholder="Email Address"
                    v-model="newLecturer.email"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="profile_image_link"
                    class="form-contrlo form-control-lg"
                    placeholder="Profile Image URL"
                    v-model="newLecturer.profileImageLink"
                  />
                </div>

                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-info btn-block btn-lg"
                    @click="closeLecturerEditModel"
                  >
                    Add Lecturer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- End Add Lecturer Model -->

      <!-- Start Edit Lecturer Model -->
      <div id="overlay" v-if="lecturerEditModel">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Lecturer</h5>

              <button
                type="button"
                class="close"
                @click="closeLecturerEditModel"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body p-4">
              <form
                id="lecturer-form"
                method="put"
                @submit.prevent="updateLecturer"
              >
                <div class="form-group">
                  <label class="float-left">Full Name</label>
                  <input
                    type="text"
                    name="title"
                    class="form-contrlo form-control-lg"
                    v-model="currentLecturer.email"
                  />
                </div>

                <div class="form-group">
                  <label class="float-left">Gender</label>
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

                {{ newLecturer.gender }}

                <div class="form-group">
                  <label class="float-left">Description</label>
                  <input
                    type="text"
                    name="brief"
                    class="form-contrlo form-control-lg"
                    v-model="currentLecturer.description"
                  />
                </div>

                <div class="form-group">
                  <label class="float-left">Email Address</label>
                  <input
                    type="text"
                    name="email_address"
                    class="form-contrlo form-control-lg"
                    v-model="currentLecturer.email"
                  />
                </div>

                <div class="form-group">
                  <label class="float-left">Profile Image URL</label>
                  <input
                    type="text"
                    name="cover_image_url"
                    class="form-contrlo form-control-lg"
                    v-model="currentLecturer.profileImageLink"
                  />
                </div>

                <div class="form-group">
                  <label>
                    {{ currentLecturer.isActive ? "Active" : "Not Active" }}
                  </label>
                  <input
                    type="checkbox"
                    name="isActive"
                    v-model="currentLecturer.isActive"
                  />
                </div>

                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-info btn-block btn-lg"
                    @click="closeLecturerEditModel;"
                  >
                    Update Lecturer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- End Edit Lecturer Model -->

      <!-- Start Delete Lecturer Model -->
      <div id="overlay" v-if="lecturerDeleteModel">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Delete Lecturer</h5>

              <button
                type="button"
                class="close"
                @click="closeLecturerDeleteModel"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body p-4">
              <h4 class="text-danger">
                Are you sure want to delete this lecturer ?
              </h4>

              <h5>
                You are deleting
                <span
                  style="color:blue; font-weight:bold; text-decoration:underline; text-transform:capitalize;"
                >
                  {{ currentLecturer.fullName }}
                </span>
                lecturer.
              </h5>

              <hr />

              <button
                class="btn btn-danger btn-lg m-1"
                @click="
                  deleteLecturer();
                  closeLecturerDeleteModel();
                "
              >
                Yes
              </button>

              <button
                class="btn btn-success btn-lg m-1"
                @click="closeLecturerDeleteModel"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End Delete Lecturer Model -->
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LecturersControlPanel",

  data: function() {
    return {
      errorMessage: "",
      successMessage: "",
      lecturerAddModel: false,
      lecturerEditModel: false,
      lecturerDeleteModel: false,

      genders: [
        { pref: "M", word: "Male" },
        { pref: "F", word: "Female" }
      ],

      // For Lecturers Displying Records Table.
      allLecturers: [],

      // Lecturer Data Model For Adding New Lecturer.
      newLecturer: {
        fullName: "",
        gender: "",
        description: "",
        email: "",
        profileImageLink: ""
      },

      currentLecturerId: "",

      currentLecturer: {
        fullName: "",
        gender: "",
        description: "",
        email: "",
        profileImageLink: "",
        isActive: ""
      },

      // For Lecturers Displaying Records Table.
      fields: [
        "index",
        { key: "fullName", label: "Full Name" },
        { key: "gender", label: "Gender" },
        { key: "description", label: "Description" },
        { key: "email", label: "Email Address" },
        { key: "profileImageLink", label: "Profile Image" },
        { key: "createdAt", label: "Registration Date" },
        { key: "isActive", label: "Activation Status" },
        { key: "update", label: "Update Info" },
        { key: "delete", label: "Delete Record" }
      ]
    };
  },

  // Life Cycle Method.
  mounted() {
    this.fetchAllLecturers();
    // this.test();
  },

  methods: {
    // This Method For Showing The Form Of Adding New Lecturer.
    showLecturerAddModel: function() {
      this.lecturerAddModel = true;
    },

    // This Method For Closing The Form Of Adding New Lecturer.
    closeLecturerAddModel: function() {
      this.lecturerAddModel = false;
    },

    // This Method For Showing The Form Of Editing Lecturer.
    showLecturerEditModel: function() {
      this.lecturerEditModel = true;
    },

    // This Method For Closing The Form Of Editing Lecturer.
    closeLecturerEditModel: function() {
      this.lecturerEditModel = false;
    },

    // This Method For Showing The Dialog Of Delete Lecturer.
    showLecturerDeleteModel: function() {
      this.lecturerDeleteModel = true;
    },

    // This Method For Closing The Dialog Of Delete Lecturer.
    closeLecturerDeleteModel: function() {
      this.lecturerDeleteModel = false;
    },

    fetchAllLecturers: function() {
      axios
        .get("http://localhost:8383/api/v1/all-lecturers")
        .then(response => {
          this.allLecturers = response.data;
          // console.log(response.data);
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("Error when fetch all lecturers => ", error);
        });
    },

    createNewLecturer: function() {
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
          this.fetchAllLecturers();
          console.log(response.data);
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("Error when add new lecturer => ", error);
        });
    },

    updateLecturer: function() {
      axios
        .put(
          "http://localhost:8383/api/v1/edit-lecturer/" +
            this.currentLecturerId,
          this.currentLecturer
        )
        .then(response => {
          this.successMessage = "Lecturer updated successfully.";
          this.fetchAllLecturers();
          console.log(response.data);
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("Error when edit lecturer => ", error);
        });
    },

    deleteLecturer: function() {
      console.log(this.currentLecturerId);
      axios
        .delete(
          "http://localhost:8383/api/v1/delete-lecturer/" +
            this.currentLecturerId
        )
        .then(response => {
          this.successMessage = "Lecturer deleted successfully.";
          this.fetchAllLecturers();
          console.log(response.data);
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("Error when delete lecturer => ", error);
        });
    },

    fillLecturerEditForm: function(
      id,
      fullName,
      gender,
      brief,
      email,
      image,
      status
    ) {
      this.currentLecturerId = id;
      this.currentLecturer.fullName = fullName;
      this.currentLecturer.gender = gender;
      this.currentLecturer.description = brief;
      this.currentLecturer.email = email;
      this.currentLecturer.profileImageLink = image;
      this.currentLecturer.isActive = status;
    },

    test: function() {
      console.log(this.currentLecturer);
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
#lecturers-control-panel {
  height: 1000px;

  #overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.6);

    #lecturer-form {
      input {
        width: 100%;
      }
    }

    #genders-drop-down {
      float: left;
      margin: 10px 0px 20px;
      font-size: 20px;
      padding: 6px 3px;
      width: 100%;
    }
  }
}
</style>
