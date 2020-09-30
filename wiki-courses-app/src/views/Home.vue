<template>
  <div class="home">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>

    <div class="container">
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        Learn Vue Js
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: function() {
    return {
      pageName: "Home Page",
      pageDescription: "This Is Related To Home Page."
    };
  },
  components: {}
};
</script>

<style lang="scss"></style>
