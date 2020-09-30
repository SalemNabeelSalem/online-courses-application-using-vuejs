<template>
  <div class="help">
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
