<template>
  <div class="showcharts">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "ShowCharts",
  components: {},
  mixins: [],
  props: {},
  data: function () {
    return {
      message: "Hello ShowCharts"
    };
  },
  created: function () {},
  mounted: function () {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
.showcharts {
}
</style>
