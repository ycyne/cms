<template>
  <div class="dashboard">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  components: {},
  mixins: [],
  props: {},
  data: function () {
    return {
      message: "Hello dashboard"
    };
  },
  created: function () {},
  mounted: function () {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
.dashboard {
}
</style>
