<template>
  <div class="yc-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h3>{{ title }}</h3>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "YcCard",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
.yc-card {
  margin-bottom: 10px;
}
.card-header {
  h3 {
    line-height: 20px;
    padding: 0;
    margin: 0;
  }
}
</style>
