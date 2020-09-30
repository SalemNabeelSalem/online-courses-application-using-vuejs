<template>
  <div class="help">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>

    <div class="container"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Help",
  data: function() {
    return {
      pageName: "Help Page",
      pageDescription: "This Is Related To Help Page."
    };
  },
  components: {}
};
</script>

<style lang="scss"></style>
