<template>
  <div class="main">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "main",
  components: {},
  mixins: [],
  props: {},
  data: function () {
    return {
      message: "Hello main"
    };
  },
  created: function () {},
  mounted: function () {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
.main {
}
</style>
