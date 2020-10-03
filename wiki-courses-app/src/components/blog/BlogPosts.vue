<template>
  <div class="post-box">
    <h3 class="post-title">{{ title }}</h3>
    <span class="post-date">{{ date }}</span>
    <p class="post-content">{{ content }}</p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-author">{{ author }}</span>
      </div>
      <div class="col-sm-6 text-right">
        <span class="post-category">{{ category }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPosts",
  props: ["id", "title", "date", "content", "author", "category"]
};
</script>

<style lang="scss" scoped>
.post-box {
  padding: 15px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  text-align: left;

  .post-title {
    color: #dc3545;
    font-size: 30px;
  }

  .post-date {
    display: inline-block;
    padding: 0px 0px 13px;
    color: #6610f2;
    font-size: 14px;
    font-weight: bold;
  }

  .post-content {
    line-height: 1.7;
    color: #343a40;
    font-size: 18px;
  }

  // Author And Category Variables.
  $colorValue: #fff;
  $paddingValue: 6px 10px;
  $borderRadiusValue: 3px;

  .post-author {
    background-color: #007bff;
    color: $colorValue;
    padding: $paddingValue;
    border-radius: $borderRadiusValue;
  }

  .post-category {
    background-color: #007bff;
    color: $colorValue;
    padding: $paddingValue;
    border-radius: $borderRadiusValue;
  }
}
</style>
