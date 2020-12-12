<template>
  <div id="lecturer-dashboard">
    <h1 class="my-5">Welcome {{ lecturerInfo.fullName }} To Your Dashborad.</h1>

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
