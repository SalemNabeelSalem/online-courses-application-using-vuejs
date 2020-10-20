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
          <button class="btn btn-info float-right">
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
              <b-button block size="sm" variant="info" class="my-3">
                Update
              </b-button>
            </template>

            <template #cell(delete)>
              <b-button block size="sm" variant="danger" class="my-3">
                Delete
              </b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
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

      // For Sections Displaying Records Table.
      fields: [
        // { key: "id", label: "Id" },
        { key: "title", label: "Title" },
        { key: "cover_image_url", label: "Cover Image" },
        { key: "brief", label: "Description" },
        { key: "created_at", label: "Created Date" },
        // { key: "updated_at", label: "Updated Date" },
        { key: "is_active", label: "Activation Status" },
        { key: "update", label: "Update Info" },
        { key: "delete", label: "Delete Record" }
      ],

      // For Sections Displaying Records Table.
      items: [
        {
          id: 1,
          title: "programming",
          cover_image_url: "https://picsum.photos/600/300/?image=10",
          brief: "lorem ipsum dolor sit amet, consectetur elit.",
          created_at: "25/04/2020",
          updated_at: "25/04/2020",
          is_active: true
        },
        {
          id: 2,
          title: "database",
          cover_image_url: "https://picsum.photos/600/300/?image=20",
          brief: "lorem ipsum dolor sit amet, consectetur elit.",
          created_at: "26/04/2020",
          updated_at: "26/04/2020",
          is_active: false
        },
        {
          id: 3,
          title: "web design",
          cover_image_url: "https://picsum.photos/600/300/?image=30",
          brief: "lorem ipsum dolor sit amet, consectetur elit.",
          created_at: "27/04/2020",
          updated_at: "27/04/2020",
          is_active: true
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.sections-control-panel {
  height: 1000px;
}
</style>
