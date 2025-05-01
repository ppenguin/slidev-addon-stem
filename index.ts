import { defineSlidevAddon } from "@slidev/types";

export default defineSlidevAddon({
  components: {
    PlotlyFigure: () => import("./components/PlotlyFigure.vue"),
    ImageFigure: () => import("./components/ImageFigure.vue"),
  },
});

console.log("[stem] addon loaded");
