<template>
  <Header title="Team Members" />

  <Container>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <router-link
        :to="`/about/team-members/${person.id}`"
        v-for="person in people"
        :key="person.name"
      >
        <img src="@/assets/images/smile-guy.png" alt="Person" class="rounded-xl" />
        <h3 class="text-xl capitalize text-accent-dark underline mb-1 mt-4">{{ person.name }}</h3>
        <p>{{ person.title }}</p>
        <div class="flex space-x-5 mt-2">
          <a target="_blank" :href="person.socials.twitter" @click.stop>
            <img src="@/assets/twitter.svg" alt="Twitter" />
          </a>
          <a target="_blank" :href="person.socials.linkedin" @click.stop>
            <img src="@/assets/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </router-link>
    </div>
  </Container>
</template>

<script>
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
import { people } from "@/data";

export default {
  components: {
    Header,
    Container,
  },
  data() {
    return {
      people,
    };
  },
};
</script>
