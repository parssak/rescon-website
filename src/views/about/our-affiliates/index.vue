<template>
  <Header title="our affiliates" />

  <Container>
    <div class="grid gap-8 lg:grid-cols-3">
      <div class="flex flex-col items-center">
        <div class="w-full h-64 rounded-xl overflow-hidden">
          <img
            src="@/assets/images/hardhats-meeting.png"
            alt="hardhats in a meeting"
            class="object-cover w-full h-full"
          />
        </div>
        <h3 class="mt-4 mb-4 text-2xl text-center">Training & Education</h3>
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pellentesque
          consectetur sagittis sapien sed sit interdum dignissim.
        </p>
        <router-link class="btn btn-xl mt-4" to="/about/our-affiliates/training-and-education">
          Learn More
        </router-link>
      </div>

      <div class="flex flex-col items-center">
        <div class="w-full h-64 rounded-xl overflow-hidden">
          <img
            src="@/assets/images/holding-hardhat.png"
            alt="holding a hard hat"
            class="object-cover w-full h-full"
          />
        </div>
        <h3 class="mt-4 mb-4 text-2xl text-center">Training & Education</h3>
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pellentesque
          consectetur sagittis sapien sed sit interdum dignissim.
        </p>
        <router-link class="btn btn-xl mt-4" to="/about/our-affiliates/training-and-education">
          Learn More
        </router-link>
      </div>

      <div class="flex flex-col items-center">
        <div class="w-full h-64 rounded-xl overflow-hidden">
          <img
            src="@/assets/images/hardhats-lean.png"
            alt="hardhats-meeting"
            class="object-cover w-full h-full"
          />
        </div>
        <h3 class="mt-4 mb-4 text-2xl text-center">Training & Education</h3>
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pellentesque
          consectetur sagittis sapien sed sit interdum dignissim.
        </p>
        <router-link class="btn btn-xl mt-4" to="/about/our-affiliates/training-and-education">
          Learn More
        </router-link>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
import Header from "@/components/base/Header";

export default {
  components: {
    Header,
    Container,
  },
};
</script>
