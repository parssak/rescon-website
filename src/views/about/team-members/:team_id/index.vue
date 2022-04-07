<template>
  <div class="flex flex-col overflow-x-hidden">
    <div class="bg-accent-lightest p-8">
      <div class="lg:max-w-7xl lg:mx-auto px-4 sm:px-6 lg:px-8 flex space-x-5 items-center text-sm md:text-base">
        <router-link to="/">
          <HomeIcon class="w-5 h-5" />
        </router-link>
        <div>/</div>
        <router-link to="/about/team-members" class="uppercase">Team Members</router-link>
        <div>/</div>
        <span class="uppercase text-accent-dark">{{ item.name }}</span>
      </div>
    </div>
    <div class="bg-accent-dark lg:p-12">
      <Split
        dark
        :title="item.name"
        description="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pellentesque consectetur sagittis sapien sed sit interdum dignissim. Ultricies sagittis, vestibulum arcu et maecenas. Quis eget tellus rhoncus bibendum malesuada libero. 
        <br/><br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pellentesque consectetur sagittis sapien sed sit interdum dignissim. Ultricies sagittis, vestibulum arcu et maecenas. Quis eget tellus rhoncus bibendum malesuada libero. 
      "
        :flip="true"
      >
        <img
          src="@/assets/images/smile-guy.png"
          alt="Person"
          class="rounded-xl w-full h-full object-cover"
        />
        <template v-slot:extra-content>
          <div class="flex space-x-5 mt-6">
            <a target="_blank" :href="item.socials.twitter" @click.stop>
              <img src="@/assets/twitter-white.svg" alt="Twitter" />
            </a>
            <a target="_blank" :href="item.socials.linkedin" @click.stop>
              <img src="@/assets/linkedin-white.svg" alt="LinkedIn" />
            </a>
          </div>
        </template>
      </Split>
    </div>
  </div>
</template>

<script>
import Split from "../../../../components/layouts/Split.vue";
import FullSplit from "@/components/layouts/FullSplit.vue";
import Header from "@/components/base/Header";
import { HomeIcon } from "@heroicons/vue/solid";

import { people } from "@/data";
export default {
  components: {
    Header,
    FullSplit,
    Split,
    HomeIcon,
  },
  data() {
    return {
      people,
      item: people.find((item) => item.id === this.$route.params.team_id),
    };
  },
  watch: {
    $route() {
      this.item = people.find((item) => item.id === this.$route.params.team_id);
    },
  },
};
</script>
