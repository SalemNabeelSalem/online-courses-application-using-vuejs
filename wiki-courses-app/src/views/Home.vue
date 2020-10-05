<template>
  <div id="home">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <div id="courses-box">
      <div class="container">
        <div class="row">
          <div class="col-lg-4"><Course /></div>
          <div class="col-lg-4"><Course /></div>
          <div class="col-lg-4"><Course /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Course from "@/components/home/Course.vue";

export default {
  name: "Home",
  data: function() {
    return {
      pageName: "Home Page",
      pageDescription: "This Is Related To Home Page."
    };
  },
  components: {
    Course
  }
};
</script>

<style lang="scss">
#home {
  height: 1000px;
}
</style>
