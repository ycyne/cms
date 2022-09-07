<template>
  <div class="goods">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "goods",
  components: {},
  mixins: [],
  props: {},
  data: function () {
    return {
      message: "Hello goods"
    };
  },
  created: function () {},
  mounted: function () {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
.goods {
}
</style>
