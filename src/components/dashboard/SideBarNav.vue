<template>
  <div id="side-bar-nav">
    <b-button v-b-toggle.sidebar-no-header id="toggle-dashboard" class="mb-5">
      Toggle Dashboard
    </b-button>
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
    >
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title" class="mb-4">
            Dashboard Sections
          </h4>
          <nav class="mb-3">
            <b-nav vertical>
              <hr />

              <b-nav-item to="/dashboard/statistics" @click="hide">
                <span class="custom-fa-icon">
                  <font-awesome-icon :icon="['fas', 'chart-line']" />
                </span>
                Statistics
              </b-nav-item>

              <hr />

              <b-nav-item to="/dashboard/sections" @click="hide">
                <span class="custom-fa-icon">
                  <font-awesome-icon :icon="['fas', 'edit']" />
                </span>
                Sections
              </b-nav-item>

              <hr />

              <b-nav-item to="/dashboard/classifications">
                <span class="custom-fa-icon">
                  <font-awesome-icon :icon="['fas', 'shapes']" />
                </span>
                Classifications
              </b-nav-item>

              <hr />

              <b-nav-item to="/dashboard/lecturers">
                <span class="custom-fa-icon">
                  <font-awesome-icon :icon="['fas', 'user']" />
                </span>
                Lecturers
              </b-nav-item>

              <hr />

              <b-nav-item to="/dashboard/faq">
                <span class="custom-fa-icon">
                  <font-awesome-icon :icon="['fas', 'question']" />
                </span>
                FAQs
              </b-nav-item>

              <hr />
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">
            Close Sidebar
          </b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SideBarNav",
  components: {}
};
</script>

<style lang="scss" scoped>
#side-bar-nav {
  .custom-fa-icon {
    color: green;
  }

  hr {
    width: 100%;
    border: 1px solid gray;
    margin: 0px;
  }
}
</style>
