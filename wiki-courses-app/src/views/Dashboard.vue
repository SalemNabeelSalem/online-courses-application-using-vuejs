<template>
  <div id="dashboard">
    <h1 class="my-5">{{ title }}</h1>

    <SideBarNav />

    <b-container fluid>
      <router-view />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import SectionsControlPanel from "@/components/dashboard/sections/SectionsControlPanel.vue";
import SideBarNav from "@/components/dashboard/SideBarNav.vue";

export default {
  name: "Dashboard",

  data: function() {
    return {
      title: "Welcome To Wiki-Courses Dashborad"
    };
  },

  components: {
    SideBarNav
    // SectionsControlPanel
  }
};
</script>

<style lang="scss" scoped></style>
