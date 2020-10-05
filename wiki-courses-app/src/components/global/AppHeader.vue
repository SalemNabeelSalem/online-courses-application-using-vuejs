<template>
  <div class="header">
    <div class="container">
      <div class="logo">Wiki Courses</div>

      <ul class="text-right">
        <router-link to="/" tag="li" exact>
          <a>Home</a>
        </router-link>

        <router-link to="/blog" tag="li">
          <a>Blog</a>
        </router-link>

        <router-link to="/about" tag="li">
          <a>About</a>
        </router-link>

        <router-link to="/help" tag="li">
          <a>Help</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss">
.header {
  background-color: #4caf50;
  color: #fff;
  overflow: hidden;

  .logo {
    font-size: 24px;
    padding: 20px;
    float: left;
    width: 200px;
  }

  ul {
    width: calc(100% - 200);
    margin: 0;

    li {
      margin: 25px;
      display: inline-block;

      a {
        color: #fff;
        text-decoration: none;
        font-size: 20px;
      }
    }
  }
}
</style>
