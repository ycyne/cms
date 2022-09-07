<template>
  <div class="list">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "list",
  components: {},
  mixins: [],
  props: {},
  data: function () {
    return {
      message: "Hello list"
    };
  },
  created: function () {},
  mounted: function () {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
.list {
}
</style>
