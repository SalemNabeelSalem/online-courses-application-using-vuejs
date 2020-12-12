<template>
  <div id="classifications-control-panel">
    <b-container fluid>
      <b-row class="bg-dark">
        <b-col lg="12">
          <p class="text-center text-light pt-2" style="font-size:25px;">
            Classifications Control Panel
          </p>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid>
      <b-row class="mt-3">
        <b-col lg="6">
          <h3 class="text-info float-left">Classifications</h3>
        </b-col>
        <b-col lg="6">
          <button
            class="btn btn-info float-right"
            @click="showClassificationAddModel"
          >
            <font-awesome-icon :icon="['fas', 'plus']" />&nbsp;
            <span>Add New Classification</span>
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
          <b-table bordered hover :items="allClassifications" :fields="fields">
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
                  showClassificationEditModel();
                  fillClassificationEditForm(
                    data.item.id,
                    data.item.title,
                    data.item.brief,
                    null,
                    data.item.coverImageLink,
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
                  showClassificationDeleteModel();
                  fillClassificationEditForm(data.item.id, data.item.title);
                "
              >
                Delete
              </b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>

      <!-- Adding New Classification Model -->
      <div id="overlay" v-if="classificationAddModel">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add New Classification</h5>

              <button
                type="button"
                class="close"
                @click="closeClassificationAddModel"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body p-4">
              <form
                id="classification-form"
                method="post"
                @submit.prevent="createNewClassification"
              >
                <div class="form-group">
                  <input
                    type="text"
                    name="title"
                    class="form-contrlo form-control-lg"
                    placeholder="Title"
                    v-model="newClassification.title"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="brief"
                    class="form-contrlo form-control-lg"
                    placeholder="Description"
                    v-model="newClassification.brief"
                  />
                </div>

                <div class="form-group">
                  <select
                    id="sections-drop-down"
                    v-model="newClassification.sectionId"
                  >
                    <option disabled value="">
                      Please select section of classification
                    </option>

                    <option
                      v-for="(section, index) in allSections"
                      :key="index"
                      v-bind:value="section.id"
                    >
                      {{ section.title }}
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="cover_image_url"
                    class="form-contrlo form-control-lg"
                    placeholder="Cover Image URL"
                    v-model="newClassification.coverImageLink"
                  />
                </div>

                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-info btn-block btn-lg"
                    @click="closeClassificationEditModel"
                  >
                    Add Classification
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- End Add Classification Model -->

      <!-- Start Edit Classification Model -->
      <div id="overlay" v-if="classificationEditModel">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Classification</h5>

              <button
                type="button"
                class="close"
                @click="closeClassificationEditModel"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body p-4">
              <form
                id="classification-form"
                method="put"
                @submit.prevent="updateClassification"
              >
                <div class="form-group">
                  <label class="float-left">Title</label>
                  <input
                    type="text"
                    name="title"
                    class="form-contrlo form-control-lg"
                    v-model="currentClassification.title"
                  />
                </div>

                <div class="form-group">
                  <label class="float-left">Brief</label>
                  <input
                    type="text"
                    name="brief"
                    class="form-contrlo form-control-lg"
                    v-model="currentClassification.brief"
                  />
                </div>

                <div class="form-group">
                  <label class="float-left">Section</label>
                  <select
                    id="sections-drop-down"
                    v-model="currentClassification.sectionId"
                  >
                    <option disabled value="">
                      Please select section of classification
                    </option>

                    <option
                      v-for="(section, index) in allSections"
                      :key="index"
                      v-bind:value="section.id"
                    >
                      {{ section.title }}
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="float-left">Cover Image URL</label>
                  <input
                    type="text"
                    name="cover_image_url"
                    class="form-contrlo form-control-lg"
                    v-model="currentClassification.coverImageLink"
                  />
                </div>

                <div class="form-group">
                  <label>
                    {{
                      currentClassification.isActive ? "Active" : "Not Active"
                    }}
                  </label>
                  <input
                    type="checkbox"
                    name="isActive"
                    v-model="currentClassification.isActive"
                  />
                </div>

                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-info btn-block btn-lg"
                    @click="closeClassificationEditModel;"
                  >
                    Update Classification
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- End Edit Classification Model -->

      <!-- Start Delete Classification Model -->
      <div id="overlay" v-if="classificationDeleteModel">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Delete Classification</h5>

              <button
                type="button"
                class="close"
                @click="closeClassificationDeleteModel"
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
                  {{ currentClassification.title }}
                </span>
                classification.
              </h5>

              <hr />

              <button
                class="btn btn-danger btn-lg m-1"
                @click="
                  deleteClassification();
                  closeClassificationDeleteModel();
                "
              >
                Yes
              </button>

              <button
                class="btn btn-success btn-lg m-1"
                @click="closeClassificationDeleteModel"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End Delete Classification Model -->
    </b-container>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ClassificationsControlPanel",

  data: function() {
    return {
      errorMessage: "",
      successMessage: "",
      classificationAddModel: false,
      classificationEditModel: false,
      classificationDeleteModel: false,

      // For Sections Displying.
      allSections: [],

      // For Classifications Displying Records Table.
      allClassifications: [],

      // Classification Data Model For Adding New Classification.
      newClassification: {
        title: "",
        brief: "",
        sectionId: "",
        coverImageLink: ""
      },

      currentClassificationId: "",

      currentClassification: {
        title: "",
        brief: "",
        coverImageLink: "",
        sectionId: "",
        isActive: ""
      },

      // For Classifications Displaying Records Table.
      fields: [
        "index",
        { key: "title", label: "Title" },
        { key: "coverImageLink", label: "Cover Image" },
        { key: "sectionTitle", label: "Section" },
        { key: "brief", label: "Description" },
        { key: "createdAt", label: "Created Date" },
        { key: "updatedAt", label: "Last Updated Date" },
        { key: "isActive", label: "Activation Status" },
        { key: "update", label: "Update Info" },
        { key: "delete", label: "Delete Record" }
      ]
    };
  },

  // Life Cycle Method.
  mounted() {
    this.fetchAllClassifications();
    this.fetchAllSections();
    // this.test();
  },

  methods: {
    // This Method For Showing The Form Of Adding New Classification.
    showClassificationAddModel: function() {
      this.classificationAddModel = true;
    },

    // This Method For Closing The Form Of Adding New Classification.
    closeClassificationAddModel: function() {
      this.classificationAddModel = false;
    },

    // This Method For Showing The Form Of Editing Classification.
    showClassificationEditModel: function() {
      this.classificationEditModel = true;
    },

    // This Method For Closing The Form Of Editing Classification.
    closeClassificationEditModel: function() {
      this.classificationEditModel = false;
    },

    // This Method For Showing The Dialog Of Delete Classification.
    showClassificationDeleteModel: function() {
      this.classificationDeleteModel = true;
    },

    // This Method For Closing The Dialog Of Delete Classification.
    closeClassificationDeleteModel: function() {
      this.classificationDeleteModel = false;
    },

    fetchAllSections: function() {
      axios
        .get("http://localhost:8383/api/v1/all-sections")
        .then(response => {
          this.allSections = response.data;
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("error when fetch all sections =>", error);
        });
    },

    fetchAllClassifications: function() {
      axios
        .get("http://localhost:8383/api/v1/all-classifications")
        .then(response => {
          this.allClassifications = response.data;
          // console.log(response.data);
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("error when fetch all classifications => ", error);
        });
    },

    createNewClassification: function() {
      axios
        .post(
          "http://localhost:8383/api/v1/add-classification",
          this.newClassification
        )
        .then(response => {
          this.newClassification = {
            title: "",
            brief: "",
            sectionId: "",
            coverImageLink: ""
          };
          this.successMessage = "Classification added successfully.";
          this.fetchAllClassifications();
          console.log(response.data);
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("error when add new classification => ", error);
        });
    },

    updateClassification: function() {
      axios
        .put(
          "http://localhost:8383/api/v1/edit-classification/" +
            this.currentClassificationId,
          this.currentClassification
        )
        .then(response => {
          this.successMessage = "Classifiction updated successfully.";
          this.fetchAllClassifications();
          console.log(response.data);
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("error when edit classification => ", error);
        });
    },

    deleteClassification: function() {
      console.log(this.currentClassificationId);
      axios
        .delete(
          "http://localhost:8383/api/v1/delete-classification/" +
            this.currentClassificationId
        )
        .then(response => {
          this.successMessage = "Classification deleted successfully.";
          this.fetchAllClassifications();
          console.log(response.data);
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("error when delete classification => ", error);
        });
    },

    fillClassificationEditForm: function(
      id,
      title,
      brief,
      sectionId,
      image,
      status
    ) {
      this.currentClassificationId = id;
      this.currentClassification.title = title;
      this.currentClassification.brief = brief;
      this.currentClassification.sectionId = sectionId;
      this.currentClassification.coverImageLink = image;
      this.currentClassification.isActive = status;
    },

    test: function() {
      console.log(this.currentClassification);
    }
  }
};
</script>

<style lang="scss" scoped>
#classifications-control-panel {
  height: 1000px;

  #overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.6);

    #classification-form {
      input {
        width: 100%;
      }

      #sections-drop-down {
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
