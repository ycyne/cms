<template>
  <div class="overview">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "overview",
  components: {},
  mixins: [],
  props: {},
  data: function () {
    return {
      message: "Hello overview"
    };
  },
  created: function () {},
  mounted: function () {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
.overview {
}
</style>
