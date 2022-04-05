<template>
  <Header title="roundtable newsroom" />
  <Container>
    <h2>Press Releases</h2>
    <div class="space-y-6">
      <div v-for="resource in resources" :key="resource.title">
        <h3 class="text-accent text-xl underline capitalize mb-2">{{ resource.title }}</h3>
        <p class="uppercase text-base text-gray-400">{{ resource.date }}</p>
      </div>
    </div>
  </Container>

  <Container class="bg-accent-lightest">
    <h2>Other Media</h2>
    <div class="space-y-6">
      <div v-for="resource in resources" :key="resource.title">
        <h3 class="text-accent text-xl underline capitalize mb-2">{{ resource.title }}</h3>
        <p class="uppercase text-base text-gray-400">{{ resource.date }}</p>
      </div>
    </div>
  </Container>

  <Container>
    <h2>Blogs</h2>
    <div class="grid gap-8 md:grid-cols-2">
      <div>
        <div class="h-80 w-full object-cover rounded-xl overflow-hidden">
          <img src="@/assets/images/hardhats.png" alt="" class="object-cover h-full w-full" />
        </div>
        <h3 class="text-2xl mt-4">COVID-19 Moving Forward: Omicron & Boosters - Zoom Webinar</h3>
        <p class="text-base text-gray-400">January 13, 2022</p>
      </div>
      <div>
        <div class="h-80 w-full object-cover rounded-xl overflow-hidden">
          <img src="@/assets/images/hardhats.png" alt="" class="object-cover h-full w-full" />
        </div>
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
    title: "Press Release article title Press Release article title Press Release article title",
    date: "feb 16, 2022",
  },
  {
    title: "Press Release article title Press Release article title Press Release article title",
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
