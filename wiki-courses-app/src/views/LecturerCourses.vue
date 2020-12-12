<template>
  <div id="lecturer-courses">
    <h1>{{ this.$route.params.lecturerId }}</h1>
    <h1>{{ this.$route.params.lecturerFullName }}</h1>
  </div>
</template>

<script>
export default {
  name: "LecturerCourses"
};
</script>

<style lang="scss" scoped></style>
