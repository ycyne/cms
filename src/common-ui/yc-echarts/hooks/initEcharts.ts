import * as echarts from "echarts";
import type { EchartsOption } from "echarts";
import chinaMap from "../map/china.json";
echarts.registerMap("china", chinaMap);
export default function (el: HTMLElement) {
  const echartsInstance = echarts.init(el);
  const setChartOption = function (option: EchartsOption) {
    echartsInstance.setOption(options);
  };
  window.addEventListener("resize", () => {
    echartsInstance.resize();
  });
  const updateSize = () => {
    echartsInstance.resize();
  };
  return {
    echartsInstance,
    setChartOption,
    updateSize
  };
}
