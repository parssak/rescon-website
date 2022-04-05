<template>
  <Header title="roundtable resources" />
  <Container>
    <h2>Government Resources</h2>
    <div class="space-y-6">
      <div v-for="resource in resources" :key="resource.title">
        <h3 class="text-accent text-xl underline capitalize mb-2">{{ resource.title }}</h3>
        <p class="uppercase text-base text-gray-400">{{ resource.date }}</p>
      </div>
    </div>
  </Container>

  <Container class="bg-accent-lightest">
    <h2>IHSA Resources / Bulletin</h2>
    <div class="space-y-6">
      <div v-for="resource in resources" :key="resource.title">
        <h3 class="text-accent text-xl underline capitalize mb-2">{{ resource.title }}</h3>
        <p class="uppercase text-base text-gray-400">{{ resource.date }}</p>
      </div>
    </div>
  </Container>

  <Container>
    <h2>Events</h2>
    <div class="grid gap-8 md:grid-cols-2">
      <div>
        <div class="h-72 w-full bg-gray-700"></div>
        <h3 class="text-2xl mt-4">COVID-19 Moving Forward: Omicron & Boosters - Zoom Webinar</h3>
        <p class="text-base text-gray-400">January 13, 2022</p>
      </div>
      <div>
        <div class="h-72 w-full bg-gray-700"></div>
        <h3 class="text-2xl mt-4">COVID-19 Moving Forward: Omicron & Boosters - Zoom Webinar</h3>
        <p class="text-base text-gray-400">January 13, 2022</p>
      </div>
    </div>
  </Container>

  <Container class="bg-accent-lightest">
    <h2>Additional resources</h2>
    <div class="space-y-6">
      <div v-for="resource in resources" :key="resource.title">
        <h3 class="text-accent text-xl underline capitalize mb-2">{{ resource.title }}</h3>
        <p class="uppercase text-base text-gray-400">{{ resource.date }}</p>
      </div>
    </div>
  </Container>

  <Container>
    <h2>Events</h2>
    <div class="grid gap-8 md:grid-cols-2">
      <div>
        <div class="h-72 w-full bg-gray-700"></div>
        <h3 class="text-2xl mt-4">COVID-19 Moving Forward: Omicron & Boosters - Zoom Webinar</h3>
        <p class="text-base text-gray-400">January 13, 2022</p>
      </div>
      <div>
        <div class="h-72 w-full bg-gray-700"></div>
        <h3 class="text-2xl mt-4">COVID-19 Moving Forward: Omicron & Boosters - Zoom Webinar</h3>
        <p class="text-base text-gray-400">January 13, 2022</p>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "../../../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";

const resources = [
  {
    title: "government resources headline title government resources headline title",
    date: "feb 16, 2022",
  },
  {
    title: "government resources headline title government resources headline title",
    date: "feb 16, 2022",
  },
];
export default {
  components: {
    Header,
    Container,
  },
  data() {
    return {
      resources,
    };
  },
};
</script>
