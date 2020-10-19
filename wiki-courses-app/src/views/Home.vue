<template>
  <div id="home">
    <b-container class="sections-container">
      <h2 class="h2-responsive py-2 bg-info text-white">Sections</h2>

      <b-row align-v="center">
        <SectionCard
          v-for="section in displaySections"
          :key="section.id"
          :title="section.title"
          :cover_image_url="section.cover_image_url"
          :brief="section.brief"
        />
      </b-row>

      <b-pagination
        v-model="sectionsPaginateCurrentPage"
        :total-rows="totalSectionsCount"
        :per-page="sectionsPaginatePerPage"
        @input="sectionsPaginate(sectionsPaginateCurrentPage)"
        class="my-2"
      ></b-pagination>
    </b-container>

    <b-container class="classifications-container">
      <h2 class="h2-responsive my-5 py-2 bg-info text-white">
        Classifications
      </h2>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionCard from "@/components/home/SectionCard.vue";

export default {
  name: "Home",

  data: function() {
    return {
      // Section Component Data.
      allSections: [],

      // Section Component Data.
      displaySections: [],

      // Pagination Data.
      sectionsPaginateCurrentPage: 1,

      // Pagination Data.
      sectionsPaginatePerPage: 3
    };
  },

  mounted() {
    this.fetchAllSections();
  },

  methods: {
    async fetchAllSections() {
      const response = await fetch("json/sections.json");
      const values = await response.json();
      this.allSections = values;
      this.displaySections = this.allSections.slice(0, 3);
    },

    sectionsPaginate(sectionsPaginateCurrentPage) {
      const start =
        (sectionsPaginateCurrentPage - 1) * this.sectionsPaginatePerPage;

      this.displaySections = this.allSections.slice(
        start,
        start + this.sectionsPaginatePerPage
      );
    }
  },

  computed: {
    totalSectionsCount() {
      return this.allSections.length;
    }
  },

  components: {
    SectionCard
  }
};
</script>

<style lang="scss">
#home {
  height: 1000px;

  .sections-container {
    border: 1px solid transparent;

    h2.h2-responsive {
      margin: 25px 0px -5px;
    }

    .pagination {
      display: inline-flex;
    }
  }
}
</style>
