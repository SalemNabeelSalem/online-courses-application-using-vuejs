<template>
  <div class="library">
    <p>{{ pageName }}</p>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="courses-area">
            <LibraryCourses />
          </div>
        </div>

        <div class="col-md-4">
          <div class="sidebar-area">
            <LibrarySidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LibraryCourses from "@/components/Library/LibraryCourses.vue";
import LibrarySidebar from "@/components/Library/LibrarySidebar.vue";

export default {
  name: "Library",
  data: function() {
    return {
      pageName: "Library Page",
      pageDescription: "This Is Related To Library Page."
    };
  },
  components: {
    LibraryCourses,
    LibrarySidebar
  }
};
</script>

<style lang="scss"></style>
