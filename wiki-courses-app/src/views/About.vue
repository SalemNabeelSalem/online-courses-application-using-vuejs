<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <b-button
      v-b-popover.hover.top="'What Do You Want To Know About Us ?'"
      title="About Us Page"
    >
      About Us
    </b-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "About",
  data: function() {
    return {
      pageName: "This Is The About Us Page.",
      pageDescription: "Here You Will Find Everything About Us."
    };
  },
  components: {}
};
</script>

<style lang="scss"></style>
