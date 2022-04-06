<template>
  <Header title="videos" />

  <Container>
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
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md btn-grey"
        >
          Previous
        </a>
        <a
          href="#"
          class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md btn-grey"
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

export default {
  components: {
    Header,
    Container,
  },
};
</script>
