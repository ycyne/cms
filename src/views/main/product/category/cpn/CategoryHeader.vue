<template>
  <div class="categoryheader">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "CategoryHeader",
  components: {},
  mixins: [],
  props: {},
  data: function () {
    return {
      message: "Hello CategoryHeader"
    };
  },
  created: function () {},
  mounted: function () {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
.categoryheader {
}
</style>
