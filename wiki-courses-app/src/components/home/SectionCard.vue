<template>
  <b-col md="4">
    <b-card
      :title="title"
      :img-src="cover_image_url"
      img-alt="Image-Alternative-Text"
      img-top
      tag="article"
      style="max-width:30rem"
      class="mb-2 mt-4 text-center"
    >
      <b-card-text>
        {{ brief }}
      </b-card-text>
      <b-button variant="primary">Show Related</b-button>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "SectionCard",
  props: [
    "id",
    "title",
    "cover_image_url",
    "brief",
    "created_at",
    "updated_at",
    "is_active"
  ]
};
</script>

<style lang="scss" scoped>
.card-text {
  color: #6610f2;
  font-weight: bold;
  text-align: center;
  background-color: #d2cccc;
  padding: 15px 5px;
}
</style>
