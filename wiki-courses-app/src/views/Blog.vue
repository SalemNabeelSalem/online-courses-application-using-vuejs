<template>
  <div class="blog">
    <p>{{ pageName }}</p>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="courses-area">
            <BlogPosts
              v-for="post in posts"
              :key="post.id"
              :id="post.id"
              :title="post.title"
              :date="post.date"
              :content="post.content"
              :author="post.author"
              :category="post.category"
            />
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
import JsonPosts from "../json/blog_posts.json";

export default {
  name: "Blog",
  data: function() {
    return {
      pageName: "Blog Page",
      pageDescription: "This Is Related To Blog Page.",
      posts: JsonPosts
    };
  },
  components: {
    BlogPosts,
    BlogSidebar
  }
};
</script>

<style lang="scss">
.fa-robot {
  color: red;
}
</style>
