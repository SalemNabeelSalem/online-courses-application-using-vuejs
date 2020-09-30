<template>
  <div class="library">
    <h1>{{ pageName }}</h1>

    <p>{{ pageDescription }}</p>

    <div class="container">
      <div class="row">
        <div class="col md 8">
          <Courses />
        </div>

        <div class="col md 4"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Courses from "@/components/Library/Courses.vue";

export default {
  name: "Library",
  data: function() {
    return {
      pageName: "Library Page",
      pageDescription: "This Is Related To Library Page."
    };
  },
  components: {
    Courses
  }
};
</script>

<style lang="scss"></style>
