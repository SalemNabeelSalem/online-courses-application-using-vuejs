<template>
  <div class="header">
    <div class="logo">Wiki Courses</div>
    <ul class="nav">
      <router-link to="/" tag="li" exact>
        <a>Home</a>
      </router-link>
      <router-link to="/about" tag="li">
        <a>About</a>
      </router-link>
      <router-link to="/help" tag="li" replace>
        <a>Help</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss">
.header {
  background-color: #333;
  color: #fff;
  overflow: hidden;

  .logo {
    font-size: 24px;
    padding: 20px;
    float: left;
    width: 200px;
  }

  .nav {
    float: left;
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
