<template>
  <div id="courses-control-panel">
    <b-container fluid>
      <b-row class="bg-dark">
        <b-col lg="12">
          <p class="text-center text-light pt-2" style="font-size:25px;">
            Courses Control Panel
          </p>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid>
      <b-row class="mt-3">
        <b-col lg="6">
          <h3 class="text-info float-left">Courses</h3>
        </b-col>
        <b-col lg="6">
          <button class="btn btn-info float-right" @click="showCourseAddModel">
            <font-awesome-icon :icon="['fas', 'plus']" />&nbsp;
            <span>Add New Course</span>
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
          <b-table bordered hover :items="allCourses" :fields="fields">
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>

            <template #cell(coverImageLink)="data">
              <img v-bind:src="data.item.coverImageLink" width="200" />
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
                  showCourseEditModel();
                  fillCourseEditForm(
                    data.item.id,
                    data.item.title,
                    data.item.sourceUrl,
                    data.item.description,
                    null,
                    null,
                    null,
                    null,
                    null
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
                  showCourseDeleteModel();
                  fillCourseEditForm(data.item.id, data.item.title);
                "
              >
                Delete
              </b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>

      <!-- Adding New Course Model -->
      <div id="overlay" v-if="courseAddModel">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add New Course</h5>

              <button type="button" class="close" @click="closeCourseAddModel">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body p-4">
              <form
                id="course-form"
                method="post"
                @submit.prevent="createNewCourse"
              >
                <div class="form-group">
                  <input
                    type="text"
                    name="title"
                    class="form-contrlo form-control-lg"
                    placeholder="Title"
                    v-model="newCourse.title"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="sourceUrl"
                    class="form-contrlo form-control-lg"
                    placeholder="Source Url"
                    v-model="newCourse.sourceUrl"
                  />
                </div>

                <div class="form-group">
                  <select
                    id="courses-drop-down"
                    v-model="newCourse.classificationId"
                  >
                    <option disabled value="">
                      Please select classification of course
                    </option>

                    <option
                      v-for="(classification, index) in allClassifications"
                      :key="index"
                      v-bind:value="classification.id"
                    >
                      {{ classification.title }}
                    </option>
                  </select>

                  {{ newCourse.classificationId }}
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="description"
                    class="form-contrlo form-control-lg"
                    placeholder="Description"
                    v-model="newCourse.description"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="cover_image_url"
                    class="form-contrlo form-control-lg"
                    placeholder="Cover Image URL"
                    v-model="newCourse.coverImageLink"
                  />
                </div>

                <div class="form-group">
                  <select id="courses-drop-down" v-model="newCourse.language">
                    <option disabled value="">
                      Please select language of course
                    </option>

                    <option
                      v-for="(language, index) in languages"
                      :key="index"
                      v-bind:value="language.pref"
                    >
                      {{ language.word }}
                    </option>
                  </select>

                  {{ newCourse.language }}
                </div>

                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-info btn-block btn-lg"
                    @click="closeCourseEditModel"
                  >
                    Add Classification
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- End Add Course Model -->

      <!-- Start Edit Course Model -->
      <div id="overlay" v-if="courseEditModel">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Course</h5>

              <button type="button" class="close" @click="closeCourseEditModel">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body p-4">
              <form
                id="course-form"
                method="put"
                @submit.prevent="updateCourse"
              >
                <div class="form-group">
                  <input
                    type="text"
                    name="title"
                    class="form-contrlo form-control-lg"
                    placeholder="Title"
                    v-model="currentCourse.title"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="sourceUrl"
                    class="form-contrlo form-control-lg"
                    placeholder="Source Url"
                    v-model="currentCourse.sourceUrl"
                  />
                </div>

                <div class="form-group">
                  <select
                    id="courses-drop-down"
                    v-model="currentCourse.classificationId"
                  >
                    <option disabled value="">
                      Please select classification of course
                    </option>

                    <option
                      v-for="(classification, index) in allClassifications"
                      :key="index"
                      v-bind:value="classification.id"
                    >
                      {{ classification.title }}
                    </option>
                  </select>

                  {{ currentCourse.classificationId }}
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="description"
                    class="form-contrlo form-control-lg"
                    placeholder="Description"
                    v-model="currentCourse.description"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="cover_image_url"
                    class="form-contrlo form-control-lg"
                    placeholder="Cover Image URL"
                    v-model="currentCourse.coverImageLink"
                  />
                </div>

                <div class="form-group">
                  <select id="courses-drop-down" v-model="newCourse.language">
                    <option disabled value="">
                      Please select language of course
                    </option>

                    <option
                      v-for="(language, index) in languages"
                      :key="index"
                      v-bind:value="language.pref"
                    >
                      {{ language.word }}
                    </option>
                  </select>

                  {{ newCourse.language }}
                </div>

                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-info btn-block btn-lg"
                    @click="closeCourseEditModel;"
                  >
                    Update Classification
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- End Edit Course Model -->

      <!-- Start Delete Course Model -->
      <div id="overlay" v-if="courseDeleteModel">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Delete Classification</h5>

              <button
                type="button"
                class="close"
                @click="closeCourseDeleteModel"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body p-4">
              <h4 class="text-danger">
                Are you sure want to delete this Classification ?
              </h4>

              <h5>
                You are deleting
                <span
                  style="color:blue; font-weight:bold; text-decoration:underline; text-transform:capitalize;"
                >
                  {{ currentCourse.title }}
                </span>
                classification.
              </h5>

              <hr />

              <button
                class="btn btn-danger btn-lg m-1"
                @click="
                  deleteClassification();
                  closeCourseDeleteModel();
                "
              >
                Yes
              </button>

              <button
                class="btn btn-success btn-lg m-1"
                @click="closeCourseDeleteModel"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End Delete Course Model -->
    </b-container>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CoursesControlPanel",

  data: function() {
    return {
      errorMessage: "",
      successMessage: "",
      courseAddModel: false,
      courseEditModel: false,
      courseDeleteModel: false,

      lecturerId: null,

      languages: [
        { pref: "EN", word: "English" },
        { pref: "AR", word: "Arabic" }
      ],

      // For Classifications Displying.
      allClassifications: [],

      // For Courses Displying Records Table.
      allCourses: [],

      // Course Data Model For Adding New Course.
      newCourse: {
        title: "",
        sourceUrl: "",
        classificationId: "",
        description: "",
        coverImageLink: "",
        lecturerId: "",
        language: ""
      },

      currentCourseId: "",

      currentCourse: {
        title: "",
        sourceUrl: "",
        classificationId: "",
        description: "",
        coverImageLink: "",
        lecturerId: "",
        language: "",
        isActive: ""
      },

      // For Courses Displaying Records Table.
      fields: [
        "index",
        { key: "title", label: "Title" },
        { key: "sourceUrl", label: "Course URL" },
        { key: "description", label: "Description" },
        { key: "classificationTitle", label: "Classification" },
        { key: "classificationSectionTitle", label: "Section" },
        { key: "coverImageLink", label: "Cover Image" },
        // { key: "lecturerFullName", label: "Lecturer" },
        { key: "language", label: "Language" },
        // { key: "createdAt", label: "Created Date" },
        // { key: "updatedAt", label: "Last Updated Date" },
        { key: "isActive", label: "Activation Status" },
        { key: "update", label: "Update Info" },
        { key: "delete", label: "Delete Record" }
      ]
    };
  },

  // Life Cycle Method.
  mounted() {
    this.setLecturerIdFromUrl();
    this.fetchAllCourses();
    this.fetchAllClassifications();
    // this.test();
  },

  methods: {
    // This Method For Showing The Form Of Adding New Course.
    showCourseAddModel: function() {
      this.courseAddModel = true;
    },

    // This Method For Closing The Form Of Adding New Course.
    closeCourseAddModel: function() {
      this.courseAddModel = false;
    },

    // This Method For Showing The Form Of Editing Course.
    showCourseEditModel: function() {
      this.courseEditModel = true;
    },

    // This Method For Closing The Form Of Editing Course.
    closeCourseEditModel: function() {
      this.courseEditModel = false;
    },

    // This Method For Showing The Dialog Of Delete Course.
    showCourseDeleteModel: function() {
      this.courseDeleteModel = true;
    },

    // This Method For Closing The Dialog Of Delete Course.
    closeCourseDeleteModel: function() {
      this.courseDeleteModel = false;
    },

    fetchAllClassifications: function() {
      axios
        .get("http://localhost:8383/api/v1/all-classifications")
        .then(response => {
          this.allClassifications = response.data;
          console.log(this.allClassifications);
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("error when fetch all classifications =>", error);
        });
    },

    fetchAllCourses: function() {
      axios
        .get("http://localhost:8383/api/v1/" + this.lecturerId + "/all-courses")
        .then(response => {
          this.allCourses = response.data;
          // console.log("all courses => " + response.data);
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("error when fetch all classifications => ", error);
        });
    },

    createNewCourse: function() {
      axios
        .post("http://localhost:8383/api/v1/add-courses", this.newCourse)
        .then(response => {
          this.newCourse = {
            title: "",
            sourceUrl: "",
            classificationId: "",
            description: "",
            coverImageLink: "",
            lecturerId: "",
            language: ""
          };
          this.successMessage = "Course added successfully.";
          this.fetchAllCourses();
          console.log(response.data);
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("error when add new course => ", error);
        });
    },

    updateCourse: function() {
      axios
        .put(
          "http://localhost:8383/api/v1/edit-classification/" +
            this.currentCourseId,
          this.currentCourse
        )
        .then(response => {
          this.successMessage = "Classifiction updated successfully.";
          this.fetchAllCourses();
          console.log(response.data);
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("error when edit classification => ", error);
        });
    },

    deleteClassification: function() {
      console.log(this.currentCourseId);
      axios
        .delete(
          "http://localhost:8383/api/v1/delete-classification/" +
            this.currentCourseId
        )
        .then(response => {
          this.successMessage = "Classification deleted successfully.";
          this.fetchAllCourses();
          console.log(response.data);
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("error when delete classification => ", error);
        });
    },

    fillCourseEditForm: function(
      id,
      title,
      sourceUrl,
      classificationId,
      description,
      image,
      lecturerId,
      language,
      status
    ) {
      this.currentCourseId = id;
      this.currentCourse.title = title;
      this.currentCourse.sourceUrl = sourceUrl;
      this.currentCourse.classificationId = classificationId;
      this.currentCourse.description = description;
      this.currentCourse.coverImageLink = image;
      this.currentCourse.lecturerId = lecturerId;
      this.currentCourse.language = language;
      this.currentCourse.isActive = status;

      console.log(this.currentCourse);
    },

    setLecturerIdFromUrl() {
      this.lecturerId = this.$route.params.lecturerId;
      this.newCourse.lecturerId = this.lecturerId;
      console.log("lecturer id => " + this.lecturerId);
    },

    test: function() {
      console.log(this.currentCourse);
    }
  }
};
</script>

<style lang="scss" scoped>
#courses-control-panel {
  height: 1000px;

  #overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.6);

    #course-form {
      input {
        width: 100%;
      }

      #courses-drop-down {
        float: left;
        margin: 10px 0px 20px;
        font-size: 20px;
        padding: 6px 3px;
        width: 100%;
      }
    }
  }
}
</style>
