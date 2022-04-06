<template>
  <Header title="upcoming events" />

  <Container
    v-for="(committee, index) in committees"
    :key="committee.title"
    :class="index % 2 === 0 ? 'bg-white' : 'bg-accent-lightest'"
  >
    <div class="grid gap-12 lg:grid-cols-2">
      <div class="order-1 lg:order-none aspect-w-2 aspect-h-1">
        <img
          src="@/assets/images/zoom-coffee.png"
          alt="people raising hands in meeting"
          class="rounded-xl object-cover"
        />
      </div>
      <div class="flex items-center">
        <div>
          <h3>{{ committee.title }}</h3>
          <p>
            {{ committee.description }}
          </p>
          <a :href="committee.href" class="btn btn-xl mt-5">
            <DownloadIcon class="w-5 h-5 mr-2" />
            Learn More
          </a>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
import { DownloadIcon } from "@heroicons/vue/outline";

const committees = [
  {
    title: "upcoming event",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl viverra feugiat elit sit lectus sed cras urna.",
    date: "March 10, 2022",
    type: "Webinar",
  },
  {
    title: "upcoming event",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl viverra feugiat elit sit lectus sed cras urna.",
    date: "March 10, 2022",
    type: "Webinar",
  },
  {
    title: "upcoming event",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl viverra feugiat elit sit lectus sed cras urna.",
    date: "March 10, 2022",
    type: "Webinar",
  },
];

export default {
  components: {
    Header,
    Container,
    DownloadIcon,
  },
  data() {
    return {
      committees,
    };
  },
};
</script>
