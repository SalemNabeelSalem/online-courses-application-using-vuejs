<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>

    <div class="container"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "About",
  data: function() {
    return {
      pageName: "About Page",
      pageDescription: "This Is Related To About Page."
    };
  },
  components: {}
};
</script>

<style lang="scss"></style>
