<template>
  <div class="sidebar">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "BlogSidebar",
  data: function() {
    return {
      title: "sidebar content ss asd"
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  border: 1px solid blue;
  text-align: center;
}
</style>
