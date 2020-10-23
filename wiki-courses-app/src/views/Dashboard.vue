<template>
  <div>
    <h1 class="my-5">{{ title }}</h1>
    <SectionsControlPanel />
  </div>
</template>

<script>
// @ is an alias to /src
import SectionsControlPanel from "@/components/dashboard/sections/SectionsControlPanel.vue";

export default {
  name: "Dashboard",

  data: function() {
    return {
      title: "Welcome To Wiki-Courses Dashborad"
    };
  },

  components: {
    SectionsControlPanel
  }
};
</script>

<style lang="scss" scoped></style>
