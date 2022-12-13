<template>
  <div class="sidebar" :class="{ open: menuOpen }">
    <button type="button" class="close" @click="close">X</button>
    <NuxtLink to="/what" style="text-decoration: none">what?</NuxtLink>
    <NuxtLink to="/where" style="text-decoration: none">where?</NuxtLink>
    <NuxtLink to="/who" style="text-decoration: none">who?</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      menuOpen: false,
    };
  },
  watch: {
    modelValue(){
      this.menuOpen = this.modelValue
    }
  },
  mounted() {
    this.menuOpen = this.modelValue
  },
  methods: {
    close() {
      this.menuOpen = false;
      this.$emit("update:modelValue", this.menuOpen);
    },
  },

};
</script>
