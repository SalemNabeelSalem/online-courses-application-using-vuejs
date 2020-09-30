<template>
  <div class="course-box">
    <h3 class="course-title">Course Title</h3>
    <span class="course-date">2020-09-01</span>
    <p class="course-description">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis voluptate
      quibusdam saepe, provident eos rerum delectus molestias odio facere minima
      tenetur, repudiandae corrupti deleniti et cumque sequi velit optio.
      Tempora.
    </p>
    <div class="row">
      <div class="col-sm-6">
        <span class="course-author">Course Author</span>
      </div>
      <div class="col-sm-6 text-right">
        <span class="course-category">Course Categories</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LibraryCourses"
};
</script>

<style lang="scss" scoped>
.course-box {
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  text-align: left;

  .course-title {
    color: #007bff;
  }

  .course-date {
    display: inline-block;
    padding: 0px 0px 13px;
    color: #653f3f;
    font-size: 14px;
    font-weight: bold;
  }

  .course-description {
    line-height: 1.7;
    color: #666;
  }

  // Author And Category Variables.
  $colorValue: #fff;
  $paddingValue: 6px 10px;
  $borderRadiusValue: 10px;

  .course-author {
    background-color: #6f7982;
    color: $colorValue;
    padding: $paddingValue;
    border-radius: $borderRadiusValue;
  }

  .course-category {
    background-color: #e83e8c;
    color: $colorValue;
    padding: $paddingValue;
    border-radius: $borderRadiusValue;
  }
}
</style>
