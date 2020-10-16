<template>
  <div class="help">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <b-button v-b-popover.hover.top="'How I Can Help You ?'" title="Help Page">
      Help Me
    </b-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Help",
  data: function() {
    return {
      pageName: "This Is The Help Page.",
      pageDescription: "Here You Will Find Everything Will Help You."
    };
  },
  components: {}
};
</script>

<style lang="scss"></style>
