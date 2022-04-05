<template>
  <Header title="press releases" />

  <Container>
    <div class="space-y-6">
      <router-link
        to="/media/press-releases/article"
        v-for="a in articles"
        :key="a.id"
        class="block"
      >
        <h3 class="text-accent-dark underline text-xl capitalize mb-2">{{ a.title }}</h3>
        <p class="uppercase text-sm text-gray-600">{{ a.date }}</p>
      </router-link>
    </div>

    <nav
      class="py-3 flex items-center justify-between border-t border-gray-200 mt-6"
      aria-label="Pagination"
    >
      <div class="hidden sm:block">
        <p class="text-sm text-gray-700">
          Showing
          {{ " " }}
          <span class="font-medium">1</span>
          {{ " " }}
          to
          {{ " " }}
          <span class="font-medium">10</span>
          {{ " " }}
          of
          {{ " " }}
          <span class="font-medium">20</span>
          {{ " " }}
          results
        </p>
      </div>
      <div class="flex-1 flex justify-between sm:justify-end">
        <a
          href="#"
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
    </nav>
  </Container>
</template>

<script>
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";

const articles = [
  {
    id: 1,
    title:
      "Press Release - Press Release Press Release Press Release Press Release Press ReleasE Press Release",
    date: "FEB 16, 2022",
  },
  {
    id: 2,
    title:
      "Press Release - Press Release Press Release Press Release Press Release Press ReleasE Press Release",
    date: "FEB 16, 2022",
  },
  {
    id: 3,
    title:
      "Press Release - Press Release Press Release Press Release Press Release Press ReleasE Press Release",
    date: "FEB 16, 2022",
  },
  {
    id: 4,
    title:
      "Press Release - Press Release Press Release Press Release Press Release Press ReleasE Press Release",
    date: "FEB 16, 2022",
  },
  {
    id: 5,
    title:
      "Press Release - Press Release Press Release Press Release Press Release Press ReleasE Press Release",
    date: "FEB 16, 2022",
  },
  {
    id: 6,
    title:
      "Press Release - Press Release Press Release Press Release Press Release Press ReleasE Press Release",
    date: "FEB 16, 2022",
  },
  {
    id: 7,
    title:
      "Press Release - Press Release Press Release Press Release Press Release Press ReleasE Press Release",
    date: "FEB 16, 2022",
  },
  {
    id: 8,
    title:
      "Press Release - Press Release Press Release Press Release Press Release Press ReleasE Press Release",
    date: "FEB 16, 2022",
  },
];

export default {
  components: {
    Header,
    Container,
  },
  data() {
    return {
      articles,
    };
  },
};
</script>
