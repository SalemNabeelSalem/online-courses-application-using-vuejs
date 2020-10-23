<template>
  <div class="sections-control-panel">
    <b-container fluid>
      <b-row class="bg-dark">
        <b-col lg="12">
          <p class="text-center text-light pt-2" style="font-size:25px;">
            Sections Control Panel
          </p>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <b-row class="mt-3">
        <b-col lg="6">
          <h3 class="text-info float-left">Sections</h3>
        </b-col>
        <b-col lg="6">
          <button class="btn btn-info float-right" @click="showSectionAddModel">
            <font-awesome-icon :icon="['fas', 'plus']" />&nbsp;
            <span>Add New Section</span>
          </button>
        </b-col>
      </b-row>

      <hr class="bg-info" />

      <div class="alert alert-danger" v-if="errorMessage">
        Error Message
      </div>

      <div class="alert alert-success" v-if="successMessage">
        Success Messgae
      </div>

      <!-- Displaying Records -->
      <b-row>
        <b-col lg="12">
          <b-table bordered hover :items="items" :fields="fields">
            <template #cell(cover_image_url)="data">
              <img v-bind:src="data.item.cover_image_url" width="200" />
            </template>

            <template #cell(is_active)="data">
              <b v-if="data.item.is_active" class="text-info">Active</b>
              <b v-else class="text-danger">Not Active</b>
            </template>

            <template #cell(update)>
              <b-button
                block
                size="sm"
                variant="info"
                class="my-3"
                @click="showSectionEditModel"
              >
                Edit
              </b-button>
            </template>

            <template #cell(delete)>
              <b-button
                block
                size="sm"
                variant="danger"
                class="my-3"
                @click="showSectionDeleteModel"
              >
                Delete
              </b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>

      <!-- Adding New Section Model -->
      <div id="overlay" v-if="sectionAddModel">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add New Section</h5>
              <button type="button" class="close" @click="closeSectionAddModel">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-4">
              <form id="section-form" action="#" method="post">
                <div class="form-group">
                  <input
                    type="text"
                    name="title"
                    class="form-contrlo form-control-lg"
                    placeholder="Title"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="cover_image_url"
                    class="form-contrlo form-control-lg"
                    placeholder="Cover Image Url"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="brief"
                    class="form-contrlo form-control-lg"
                    placeholder="Brief"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="created_at"
                    class="form-contrlo form-control-lg"
                    placeholder="Created Date"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="updated_at"
                    class="form-contrlo form-control-lg"
                    placeholder="Updated Date"
                  />
                </div>
                <div class="form-group">
                  <button
                    class="btn btn-info btn-block btn-lg"
                    @click="closeSectionAddModel"
                  >
                    Add Section
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- End Add Section Model -->

      <!-- Start Edit Section Model -->
      <div id="overlay" v-if="sectionEditModel">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Section</h5>
              <button
                type="button"
                class="close"
                @click="closeSectionEditModel"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-4">
              <form id="section-form" action="#" method="post">
                <div class="form-group">
                  <input
                    type="text"
                    name="title"
                    class="form-contrlo form-control-lg"
                    placeholder="Title"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="cover_image_url"
                    class="form-contrlo form-control-lg"
                    placeholder="Cover Image Url"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="brief"
                    class="form-contrlo form-control-lg"
                    placeholder="Brief"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="created_at"
                    class="form-contrlo form-control-lg"
                    placeholder="Created Date"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="updated_at"
                    class="form-contrlo form-control-lg"
                    placeholder="Updated Date"
                  />
                </div>
                <div class="form-group">
                  <button
                    class="btn btn-info btn-block btn-lg"
                    @click="closeSectionEditModel"
                  >
                    Update Section
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- End Edit Section Model -->

      <!-- Start Delete Section Model -->
      <div id="overlay" v-if="sectionDeleteModel">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Delete Section</h5>
              <button
                type="button"
                class="close"
                @click="closeSectionDeleteModel"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-4">
              <h4 class="text-danger">
                Are you sure want to delete this section ?
              </h4>
              <h5>You are deleting 'programming' section.</h5>
              <hr />
              <button
                class="btn btn-danger btn-lg m-1"
                @click="closeSectionDeleteModel"
              >
                Yes
              </button>
              <button
                class="btn btn-success btn-lg m-1"
                @click="closeSectionDeleteModel"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End Delete Section Model -->
    </b-container>
  </div>
</template>
<script>
export default {
  name: "SectionsControlPanel",

  data: function() {
    return {
      errorMessage: false,
      successMessage: false,
      sectionAddModel: false,
      sectionEditModel: false,
      sectionDeleteModel: false,

      // For Sections Displaying Records Table.
      fields: [
        { key: "title", label: "Title" },
        { key: "cover_image_url", label: "Cover Image" },
        { key: "brief", label: "Description" },
        { key: "created_at", label: "Created Date" },
        { key: "is_active", label: "Activation Status" },
        { key: "update", label: "Update Info" },
        { key: "delete", label: "Delete Record" }
      ],

      // For Sections Displaying Records Table.
      items: [
        {
          id: 1,
          title: "programming",
          cover_image_url:
            "https://dummyimage.com/600x300/473647/fff.jpg&text=Dummy-Image",
          brief: "lorem ipsum dolor sit amet, consectetur elit.",
          created_at: "25/04/2020",
          updated_at: "25/04/2020",
          is_active: true
        },
        {
          id: 2,
          title: "database",
          cover_image_url:
            "https://dummyimage.com/600x300/473647/fff.jpg&text=Dummy-Image",
          brief: "lorem ipsum dolor sit amet, consectetur elit.",
          created_at: "26/04/2020",
          updated_at: "26/04/2020",
          is_active: false
        },
        {
          id: 3,
          title: "web design",
          cover_image_url:
            "https://dummyimage.com/600x300/473647/fff.jpg&text=Dummy-Image",
          brief: "lorem ipsum dolor sit amet, consectetur elit.",
          created_at: "27/04/2020",
          updated_at: "27/04/2020",
          is_active: true
        },
        {
          id: 4,
          title: "networking",
          cover_image_url:
            "https://dummyimage.com/600x300/473647/fff.jpg&text=Dummy-Image",
          brief: "lorem ipsum dolor sit amet, consectetur elit.",
          created_at: "28/04/2020",
          updated_at: "28/04/2020",
          is_active: true
        }
      ]
    };
  },

  methods: {
    // This method for showing the form of adding new section.
    showSectionAddModel: function() {
      this.sectionAddModel = true;
    },

    // This method for closing the form of adding new section.
    closeSectionAddModel: function() {
      this.sectionAddModel = false;
    },

    // This method for showing the form of editing section.
    showSectionEditModel: function() {
      this.sectionEditModel = true;
    },

    // This method for closing the form of editing section.
    closeSectionEditModel: function() {
      this.sectionEditModel = false;
    },

    // This method for showing the dialog of delete section.
    showSectionDeleteModel: function() {
      this.sectionDeleteModel = true;
    },

    // This method for closing the dialog of delete section.
    closeSectionDeleteModel: function() {
      this.sectionDeleteModel = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.sections-control-panel {
  height: 1000px;

  #overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.6);

    #section-form {
      input {
        width: 100%;
      }
    }
  }
}
</style>
