<template>
  <div id="course-details">
    <h1>Course Details</h1>

    {{ this.$route.params.courseId }}
  </div>
</template>

<script>
export default {
  name: "CourseDetails"
};
</script>

<style lang="scss" scoped></style>
