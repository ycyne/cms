<template>
  <div class="notfound">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  components: {},
  mixins: [],
  props: {},
  data: function () {
    return {
      message: "Hello NotFound"
    };
  },
  created: function () {},
  mounted: function () {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
.notfound {
}
</style>
