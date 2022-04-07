<template>
  <footer class="bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-8">
        <router-link to="/">
          <img class="w-auto" src="@/assets/logo-lg.svg" alt="Rescon" />
        </router-link>
        <div class="grid sm:grid-cols-2 gap-8">
          <!-- Contact -->
          <div>
            <h3 class="mb-3 text-lg">Contact</h3>
            <div class="space-y-2">
              <address class="not-italic">
                25 North Rivermede Road, Unit 13 <br />
                Vaughan, Ontario L4K 5V4
              </address>
              <a
                href="tel:+1 905-760-7777"
                class="block underline w-max transition text-accent hover:text-accent-hover"
                >+1 905-760-7777
              </a>
              <a
                href="tel:+1 866-531-1608"
                class="block underline w-max transition text-accent hover:text-accent-hover"
                >+1 866-531-1608
              </a>
              <a
                href="mailto:media@rescon.com"
                class="block underline w-max transition text-accent hover:text-accent-hover"
                >media@rescon.com</a
              >
            </div>
            <div class="flex space-x-5 mt-4">
              <a target="_blank" href="#" @click.stop>
                <img src="@/assets/twitter.svg" alt="Twitter" />
              </a>
              <a target="_blank" href="#" @click.stop>
                <img src="@/assets/linkedin.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>

          <!-- Navigation -->
          <div>
            <h3 class="mb-3 text-lg">Navigation</h3>
            <div class="space-y-2">
              <router-link
                v-for="route in navigation"
                :key="route.label"
                class="block underline w-max transition text-accent hover:text-accent-hover capitalize"
                :to="route.path"
                >{{ getFooterLabel(route.label) }}</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="mt-8 py-8 border-t-4 border-accent bg-accent-lightest">
    <div class="lg:max-w-7xl lg:mx-auto px-4 sm:px-6 lg:px-8 md:flex md:justify-between">
      <div>
        <p class="text-base text-gray-400">&copy; Copyright 2021 Rescon</p>
      </div>
      <div class="flex items-center space-x-2">
        <a
          target="_blank"
          href="#"
          class="block underline w-max transition text-accent hover:text-accent-hover"
          >Privacy Policy</a
        >
        <div class="h-1/2 w-0.5 bg-accent"></div>
        <a
          target="_blank"
          href="#"
          class="block underline w-max transition text-accent hover:text-accent-hover"
          >Terms & Conditions</a
        >
      </div>
      <a href="https://airwhistle.com/" target="_blank">
        <img src="@/assets/awm.svg" alt="Air Whistle Media" />
      </a>
    </div>
  </div>
</template>

<script>
import { navigation } from "@/data";

export default {
  setup() {
    return { navigation };
  },
  methods: {
    getFooterLabel(label) {
      switch (label) {
        case "about":
          return "About us";
        case "submissions":
          return "Submissions & Reports";
        default:
          return label;
      }
    },
  },
};
</script>
