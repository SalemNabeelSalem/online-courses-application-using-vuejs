<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",

  props: ["currentPage", "rows", "perPage"],

  mounted() {
    this.testOnConsole();
  },

  methods: {
    testOnConsole() {
      console.log("Current Page = " + this.currentPage);
      console.log("Rows = " + this.rows);
      console.log("perPage = " + this.perPage);
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  display: inline-flex;
}
</style>
