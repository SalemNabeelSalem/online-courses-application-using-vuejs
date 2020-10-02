<template>
  <div class="library">
    <p>{{ pageName }}</p>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="courses-area">
            <BlogPosts />

            <BlogPosts />
          </div>
        </div>

        <div class="col-md-4">
          <div class="sidebar-area">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogPosts from "@/components/blog/BlogPosts.vue";
import BlogSidebar from "@/components/blog/BlogSidebar.vue";

export default {
  name: "Library",
  data: function() {
    return {
      pageName: "Blog Page",
      pageDescription: "This Is Related To Blog Page."
    };
  },
  components: {
    BlogPosts,
    BlogSidebar
  }
};
</script>

<style lang="scss"></style>
