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
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        @input="paginate(currentPage)"
        class="my-2"
      ></b-pagination>
    </b-container>

    <b-container class="classifications-container"></b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionCard from "@/components/home/SectionCard.vue";

export default {
  name: "Home",

  data: function() {
    return {
      pageName: "Home Page",

      pageDescription: "This Is Related To Home Page.",

      sections: [],

      displaySections: [],

      // Pagination Setting [01]
      currentPage: 1,

      // Pagination Setting [02]
      perPage: 3
    };
  },

  components: {
    SectionCard
  },

  mounted() {
    this.fetchAllSections();
  },

  methods: {
    async fetchAllSections() {
      const response = await fetch("json/sections.json");
      const values = await response.json();
      this.sections = values;
      this.displaySections = this.sections.slice(0, 3);
    },

    paginate(currentPage) {
      const start = (currentPage - 1) * this.perPage;
      this.displaySections = this.sections.slice(start, start + this.perPage);
    }
  },

  computed: {
    rows() {
      return this.sections.length;
    }
  }
};
</script>

<style lang="scss">
#home {
  height: 1000px;

  .sections-container {
    border: 1px solid blue;

    h2.h2-responsive {
      margin: 25px 0px -5px;
    }

    .pagination {
      display: inline-flex;
    }
  }
}
</style>
