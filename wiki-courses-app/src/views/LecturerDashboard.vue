<template>
  <div id="lecturer-dashboard">
    <hr />

    {{ lecturerId }}

    <hr />

    <h1 class="my-5">{{ title }}</h1>

    <LecSideBarNav />

    <b-container fluid>
      <router-view />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import LecSideBarNav from "@/components/lecturer-dashboard/LecSideBarNav.vue";

export default {
  name: "LecturerDashboard",
  data() {
    return {
      title: "Welcome To Lecturer Dashborad",
      lecturerId: null,
      lecturerInfo: null
    };
  },
  mounted() {
    this.getLecturerInfoFromUrlParameters();
  },
  methods: {
    getLecturerInfoFromUrlParameters() {
      this.lecturerId = this.$route.params.lecturerId;

      this.lecturerInfo = this.$route.params.lecturerData;
    }
  },
  components: {
    LecSideBarNav
  }
};
</script>

<style lang="scss" scoped></style>
