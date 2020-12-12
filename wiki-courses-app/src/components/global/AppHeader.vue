<template>
  <div id="app-header">
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand to="/">Wiki-Courses</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/sections">Sections</b-nav-item>
          <b-nav-item to="/classifications">Classifications</b-nav-item>
          <b-nav-item to="/lecturers">Lecturers</b-nav-item>
          <b-nav-item to="/contact-us">Contact Us</b-nav-item>
          <b-nav-item to="/faq">FAQ</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <b-nav-item to="/login" style="list-style-type:none;">
        Lecturer
      </b-nav-item>
      <b-nav-item to="/sign-up" style="list-style-type:none;">
        Sign Up
      </b-nav-item>

      <b-nav-item to="/admin" style="list-style-type:none;">
        Admin
      </b-nav-item>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss" scoped>
#app-header {
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
}
</style>
