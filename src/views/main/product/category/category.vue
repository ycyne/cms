<template>
  <div class="category">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "category",
  components: {},
  mixins: [],
  props: {},
  data: function () {
    return {
      message: "Hello category"
    };
  },
  created: function () {},
  mounted: function () {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
.category {
}
</style>
