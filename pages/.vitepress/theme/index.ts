import type { Theme } from "vitepress";
import Aplos from "aplos/no-blog/Layout.vue";
import "./custom.scss";
import "aplos/no-blog";

export default {
  Layout: Aplos,
} satisfies Theme;