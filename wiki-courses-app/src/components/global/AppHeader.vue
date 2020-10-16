<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand to="/">Wiki-Courses</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/blog">Blog</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/help">Help</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  components: {}
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  font-size: 22px;
}

.nav-item {
  font-size: 18px;
  a {
    color: white !important;
  }
  a.router-link-exact-active {
    color: #212529 !important;
  }
}
</style>
