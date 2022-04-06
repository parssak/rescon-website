<template>
  <Header title="submissions & reports" />

  <Container>
    <Menu>
      <div class="relative w-max">
        <span class="flex rounded-md uppercase bg-gray-100 w-max">
          <span class="px-4 py-2"> Select category </span>
          <MenuButton
            class="bg-accent text-white px-4 py-2 rounded-r-md flex items-center uppercase"
          >
            {{ selected }}
            <img src="@/assets/down.svg" alt="" class="w-3 h-3 ml-2" />
          </MenuButton>
        </span>
        <MenuItems
          class="absolute top-full right-0 grid border mt-2 rounded-md bg-white shadow-sm border"
        >
          <MenuItem v-slot="{ active }" v-for="option in options" :key="option">
            <button
              :class="`px-2 py-1 uppercase ${active ? 'bg-accent-lightest' : ''}`"
              @click="() => setSelected(option)"
            >
              {{ option }}
            </button>
          </MenuItem>
        </MenuItems>
      </div>
    </Menu>

    <div class="space-y-10 mt-12">
      <router-link to="/media/in-the-news/article" v-for="a in articles" :key="a.id" class="block">
        <h3 class="text-accent-dark underline text-xl capitalize mb-2">{{ a.title }}</h3>
        <p class="uppercase text-sm text-gray-500">{{ a.date }}</p>
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
import Container from "@/components/layouts/Container.vue";
import Header from "@/components/base/Header";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { DownloadIcon } from "@heroicons/vue/outline";

const options = ["all submissions", "no submissions"];
const newsletters = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const articles = [
  {
    id: 1,
    title: "RESCON Letter to Minister Clark on the Housing Affordability Task Force Report",
    date: "FEB 16, 2022",
  },
  {
    id: 2,
    title: "RESCON Letter to Minister Clark on the Housing Affordability Task Force Report",
    date: "FEB 16, 2022",
  },
  {
    id: 3,
    title: "RESCON Letter to Minister Clark on the Housing Affordability Task Force Report",
    date: "FEB 16, 2022",
  },
  {
    id: 4,
    title: "RESCON Letter to Minister Clark on the Housing Affordability Task Force Report",
    date: "FEB 16, 2022",
  },
  {
    id: 5,
    title: "RESCON Letter to Minister Clark on the Housing Affordability Task Force Report",
    date: "FEB 16, 2022",
  },
  {
    id: 6,
    title: "RESCON Letter to Minister Clark on the Housing Affordability Task Force Report",
    date: "FEB 16, 2022",
  },
  {
    id: 7,
    title: "RESCON Letter to Minister Clark on the Housing Affordability Task Force Report",
    date: "FEB 16, 2022",
  },
  {
    id: 8,
    title: "RESCON Letter to Minister Clark on the Housing Affordability Task Force Report",
    date: "FEB 16, 2022",
  },
];

export default {
  components: {
    Header,
    Container,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    DownloadIcon,
  },
  data() {
    return {
      options,
      selected: "all submissions",
      newsletters,
      articles,
    };
  },
  methods: {
    setSelected(option) {
      this.selected = option;
    },
  },
};
</script>
