<template>
  <div class="help">
    <HelpMessage />
  </div>
</template>

<script>
// @ is an alias to /src
import HelpMessage from "@/components/HelpMessage.vue";

export default {
  name: "Help",
  components: {
    HelpMessage
  }
};
</script>
