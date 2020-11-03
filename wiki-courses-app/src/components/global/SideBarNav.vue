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
              <b-nav-item to="/dashboard" @click="hide">
                <font-awesome-icon :icon="['fas', 'home']" />
                Dashboard
              </b-nav-item>
              <b-nav-item to="/dashboard/sections" @click="hide">
                <font-awesome-icon :icon="['fas', 'edit']" />
                Sections
              </b-nav-item>
              <b-nav-item to="/dashboard/classifications">
                Classifications
              </b-nav-item>
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

<style lang="scss" scoped></style>
