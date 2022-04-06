<template>
  <Header title="collective agreements" />

  <Container>
    <Menu>
      <div class="relative w-max">
        <span class="flex rounded-md uppercase bg-gray-100 w-max">
          <span class="px-4 py-2"> Select time period </span>
          <MenuButton class="bg-accent text-white px-4 py-2 rounded-r-md flex items-center">
            {{ selected }}
            <img src="@/assets/down.svg" alt="" class="w-3 h-3 ml-2" />
          </MenuButton>
        </span>
        <MenuItems
          class="absolute top-full right-0 grid border mt-2 rounded-md bg-white shadow-sm border"
        >
          <MenuItem v-slot="{ active }" v-for="option in options" :key="option">
            <button
              :class="`px-2 py-1 ${active ? 'bg-accent-lightest' : ''}`"
              @click="() => setSelected(option)"
            >
              {{ option }}
            </button>
          </MenuItem>
        </MenuItems>
      </div>
    </Menu>

    <h2 class="mt-12">May 1, 2019 - April 30, 2022</h2>
    <div class="grid gap-6">
      <a
        v-for="(newsletter, index) in newsletters"
        :key="index"
        class="flex items-center space-x-2"
        href="#"
      >
        <DownloadIcon class="w-7 h-7 text-accent" />
        <p class="text-accent underline">{{ newsletter }} {{ selected }}</p>
      </a>
    </div>
  </Container>
</template>

<script>
import Container from "../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { DownloadIcon } from "@heroicons/vue/outline";

const options = ["2017", "2018", "2019", "2020", "2021", "2022"];
const newsletters = [
  "DRCLB Collective Agreement",
  "MTABA Collective Agreement",
  "TRCLB Collective Agreement",
  "DRCLB Collective Agreement",
  "MTABA Collective Agreement",
  "TRCLB Collective Agreement",
  "DRCLB Collective Agreement",
  "MTABA Collective Agreement",
  "TRCLB Collective Agreement",
  "DRCLB Collective Agreement",
  "MTABA Collective Agreement",
  "TRCLB Collective Agreement",
  "DRCLB Collective Agreement",
  "MTABA Collective Agreement",
  "TRCLB Collective Agreement",
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
      selected: "2020",
      newsletters,
    };
  },
  methods: {
    setSelected(option) {
      this.selected = option;
    },
  },
};
</script>
