<template>
  <Header title="Committees" />
  <Container
    v-for="(committee, index) in committees"
    :key="committee.title"
    :class="index % 2 === 0 ? 'bg-white' : 'bg-accent-lightest'"
  >
    <router-link class="grid gap-12 lg:grid-cols-2" :to="committee.href">
      <div class="order-1 lg:order-none aspect-w-2 aspect-h-1">
        <img
          src="@/assets/images/hands-up.png"
          alt="people raising hands in meeting"
          class="rounded-xl object-cover"
        />
      </div>
      <div class="flex items-center">
        <div>
          <h3 class="text-accent underline">{{ committee.title }}</h3>
          <p>
            {{ committee.description }}
          </p>
        </div>
      </div>
    </router-link>
  </Container>
</template>

<script>
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";

const committees = [
  {
    title: "Training & Education",
    href: "/about/committees/training-and-education",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl viverra feugiat elit sit lectus sed cras urna.",
  },
  {
    // technical council
    title: "Technical Council",
    href: "/about/committees/technical-council",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl viverra feugiat elit sit lectus sed cras urna.",
  },
  {
    // health and safety
    title: "Health & Safety",
    href: "/about/committees/health-and-safety",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl viverra feugiat elit sit lectus sed cras urna.",
  },
  {
    // building innovation
    title: "Building Innovation",
    href: "/about/committees/building-innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl viverra feugiat elit sit lectus sed cras urna.",
  },
  {
    // anti-racism roundtable
    title: "Anti-Racism Roundtable",
    href: "/about/committees/anti-racism-roundtable/overview",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl viverra feugiat elit sit lectus sed cras urna.",
  },
];

export default {
  components: {
    Header,
    Container,
  },
  data() {
    return {
      committees,
    };
  },
};
</script>
