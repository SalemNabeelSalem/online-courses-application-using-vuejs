<template>
  <div id="home">
    <b-container class="home-container">
      <b-row align-v="center">
        <b-col md="4">
          <b-card
            title="Programming"
            img-src="https://picsum.photos/600/300/?image=30"
            img-alt="Programming-Image"
            img-top
            tag="article"
            style="max-width:30rem"
            class="mb-2 mt-4 text-center"
          >
            <b-button variant="primary">Show</b-button>
          </b-card>
        </b-col>

        <b-col md="4">
          <b-card
            title="Programming"
            img-src="https://picsum.photos/600/300/?image=30"
            img-alt="Programming-Image"
            img-top
            tag="article"
            style="max-width:30rem"
            class="mb-2 mt-4 text-center"
          >
            <b-button variant="primary">Show</b-button>
          </b-card>
        </b-col>

        <b-col md="4">
          <b-card
            title="Programming"
            img-src="https://picsum.photos/600/300/?image=30"
            img-alt="Programming-Image"
            img-top
            tag="article"
            style="max-width:30rem"
            class="mb-2 mt-4 text-center"
          >
            <b-button variant="primary">Show</b-button>
          </b-card>
        </b-col>

        <b-col md="4">
          <b-card
            title="Programming"
            img-src="https://picsum.photos/600/300/?image=30"
            img-alt="Programming-Image"
            img-top
            tag="article"
            style="max-width:30rem"
            class="mb-2 mt-4 text-center"
          >
            <b-button variant="primary">Show</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
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

<style lang="scss">
#home {
  height: 1000px;
  .home-container {
    // border: 1px solid blue;
    .row {
      .col {
        // border: 1px solid red;
      }
    }
  }
}
</style>
