<template>
  <div class="help">
    <h1>Welcome To Help Page</h1>

    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Ipsum.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelpMessage"
};
</script>

<style lang="scss" scoped>
$fontSize: 20px;

.help {
  border: 3px solid green;
}

.help p {
  font-size: $fontSize;
  color: black;
  line-height: 1.6em;
}
</style>
