<template>
  <div class="welcome-message">
    <h1>Welcome To VueJS</h1>
    <p>This Is About Page</p>
  </div>
</template>

<script>
export default {
  name: "WelcomeMessage"
};
</script>

<style lang="scss" scoped>
$color: blue;
$fontSize: 20px;

.welcome-message {
  border: 2px solid black;
}

.welcome-message h1 {
  color: $color;
}

.welcome-message p {
  font-size: $fontSize;
}
</style>
