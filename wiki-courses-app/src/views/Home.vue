<template>
  <div id="home">
    <b-container class="sections-container">
      <b-row align-v="center">
        <SectionCard
          v-for="(section, index) in sections"
          :key="index"
          :title="section.title"
          :cover_image_url="section.cover_image_url"
          :brief="section.brief"
        />
      </b-row>
    </b-container>
    <b-container class="classifications-container"></b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionCard from "@/components/home/SectionCard.vue";
import JsonSections from "../json/sections.json";

export default {
  name: "Home",
  data: function() {
    return {
      pageName: "Home Page",
      pageDescription: "This Is Related To Home Page.",
      sections: JsonSections
    };
  },
  components: {
    SectionCard
  }
};
</script>

<style lang="scss">
#home {
  height: 1000px;
  .sections-container {
    border: 1px solid blue;
  }
}
</style>
