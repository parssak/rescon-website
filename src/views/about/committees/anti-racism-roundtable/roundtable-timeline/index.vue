<template>
  <Header title="roundtable timeline" />

  <div class="relative overflow-hidden">
    <Container>
      <div class="flex flex-col items-center text-center">
        <div
          v-for="(event, idx) in history"
          :key="event.year"
          :class="`w-full flex flex-col items-center relative ${
            idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`"
        >
          <div
            :class="`w-full order-1 md:order-none flex py-4 md:py-12 ${
              idx % 2 === 0 ? 'md:justify-end' : 'justify-start'
            }`"
          >
            <div
              class="bg-accent-lightest p-6 rounded-3xl mx-auto md:mx-0 max-w-md md:max-w-sm shadow-lg"
            >
              {{ event.description }}
            </div>
          </div>
          <div class="hidden flex-shrink-0 md:flex flex-col items-center mx-6">
            <div class="w-3 absolute inset-y-0" style="background-color: #909090"></div>
            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-accent-darkest relative"></div>
          </div>
          <div :class="`w-full mt-6 md:mt-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'} `">
            <h3 class="text-3xl mb-0">{{ event.year }}</h3>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "../../../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";

const history = [
  {
    year: "JUNE 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa neque, ut quis sed quis lacus lectus. Rhoncus, velit, leo scelerisque posuere massa condimentum. ",
  },
  {
    year: "JULY 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa neque, ut quis sed quis lacus lectus. Rhoncus, velit, leo scelerisque posuere massa condimentum. ",
  },
  {
    year: "SEPTEMBER 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa neque, ut quis sed quis lacus lectus. Rhoncus, velit, leo scelerisque posuere massa condimentum. ",
  },
  {
    year: "MARCH 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa neque, ut quis sed quis lacus lectus. Rhoncus, velit, leo scelerisque posuere massa condimentum. ",
  },
];

export default {
  components: {
    Header,
    Container,
  },
  data() {
    return {
      history,
    };
  },
};
</script>
