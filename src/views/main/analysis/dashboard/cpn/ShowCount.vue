<template>
  <div class="showcount">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "ShowCount",
  components: {},
  mixins: [],
  props: {},
  data: function () {
    return {
      message: "Hello ShowCount"
    };
  },
  created: function () {},
  mounted: function () {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
.showcount {
}
</style>
