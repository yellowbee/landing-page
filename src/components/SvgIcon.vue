<template>
  <component :is="dynamicIcon" />
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    dynamicIcon() {
      return () => {
        if (!this.icon) {
          return "";
        }

        if (!/.svg$/i.test(this.icon)) {
          this.icon = `${this.icon}.svg`;
        }

        return import(
          /* webpackChunkName: "icons" */
          /* webpackMode: "lazy-once" */
          `../assets/svg/${this.icon}`
        );
      };
    }
  }
};
</script>