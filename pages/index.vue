<template>
  <div class="parent" @mousemove="onMouseMove">
    <header class="header grid-area">
      <div class="block-img">
        <img src="/img.png" />
        <div class="dropright">
          <a href="#">UA</a>
          <a href="#">RU</a>
        </div>
      </div>
      <!-- <img class="logo" src="/Union.svg" /> -->
      <svg
        id="svg1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        style="background-color: none"
      >
        <defs>
          <linearGradient id="top_bottom" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0" stop-color="black">
              <animate
                begin="svg1.click"
                dur="2s"
                attributeName="offset"
                fill="none"
                from="0"
                to="1"
              />
            </stop>
            <stop offset="0" stop-color="white">
              <animate
                begin="svg1.click"
                dur="2s"
                attributeName="offset"
                fill="black"
                from="0"
                to="1"
              />
            </stop>
          </linearGradient>
        </defs>

        <text id="txt" x="50%" y="50%">MOZGI</text>
      </svg>
      <div class="hamburger-wrap">
        <button class="hamburger" type="button" @click="showSidebar = true">
          <span class="hamburger__line"></span>
          <span class="hamburger__line"></span>
        </button>
      </div>
      <sidebar v-model="showSidebar"></sidebar>
    </header>
    <main class="main grid-area">
      <div class="link-hover-solid">
        <NuxtLink to="/where" style="text-decoration: none"
          ><p class="p-left">where?</p></NuxtLink
        >
      </div>
      <div class="block-orange"></div>
      <h1
        :class="{
          'disable-transform': disableTransform,
          centered: !disableTransform,
        }"
        ref="title"
        :style="{ left: tx + 'px', top: ty + 'px' }"
      >
        <marquee>FULL-CYCLE</marquee><br/><marquee direction="right"
          >EVENT AGENCY
        </marquee>
      </h1>
      <div class="link-hover-solid">
        <NuxtLink to="/what" style="text-decoration: none"
          ><p class="p-right">what?</p></NuxtLink
        >
      </div>
      <div class="text-point">
        <div class="point"></div>
        <svg
          xmlns="//www.w3.org/2000/svg"
          xmlns:xlink="//www.w3.org/1999/xlink"
          viewBox="0 0 500 500"
          fill="white"
        >
          <defs>
            <path
              d="M243.2, 382.4c-74.8,   
              0-135.5-60.7-135.5-135.5s60.7-135.5,135.5-135.5s135.5, 60.7, 135.5,
              135.5 S318, 382.4, 243.2, 382.4z"
              id="textcircle"
            />
          </defs>
          <text dy="-80" textLength="1200">
            <textPath xlink:href="#textcircle">
              showreel showreel showreel
            </textPath>
          </text>
        </svg>
      </div>
    </main>
    <footer class="footer grid-area">
      <div class="link-hover-solid">
        <NuxtLink to="/who" style="text-decoration: none"><p>who?</p></NuxtLink>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import "animate.css";
import Sidebar from "../component/Sidebar.vue"
export default defineComponent({
  components: {
    Sidebar
  },
  setup() {
    const showSidebar = ref(false);
    const tx = ref(0);
    const ty = ref(0);
    const disableTransform = ref(false);
    function onMouseMove(e) {
      const ratio = innerWidth / innerHeight;
      const rect = this.$refs.title.getBoundingClientRect();
      const centerX = Math.round(innerWidth / 2 - rect.width / 2);
      const centerY = Math.round(innerHeight / 2 - rect.height / 2);
      const deltaX = innerWidth / (20 * ratio);
      const deltaY = innerHeight / (20 * ratio);
      tx.value = e.x > centerX ? centerX + deltaX : centerX - deltaX;
      ty.value = e.y > centerY ? centerY + deltaY : centerY - deltaY;
      setTimeout(() => {
        const rect = this.$refs.title.getBoundingClientRect();
        this.tx = Math.round(innerWidth / 2 - rect.width / 2);
        this.ty = Math.round(innerHeight / 2 - rect.height / 2);
      }, 3000);
    }
    return {
      showSidebar,
      onMouseMove,
      tx,
      ty,
      disableTransform,
    };
  },
  mounted() {
    const rect = this.$refs.title.getBoundingClientRect();
    this.tx = Math.round(innerWidth / 2 - rect.width / 2);
    this.ty = Math.round(innerHeight / 2 - rect.height / 2);
    this.disableTransform = true;
  },
});
</script>
