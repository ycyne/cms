<template>
  <div class="department">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "department",
  components: {},
  mixins: [],
  props: {},
  data: function () {
    return {
      message: "Hello department"
    };
  },
  created: function () {},
  mounted: function () {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
.department {
}
</style>
