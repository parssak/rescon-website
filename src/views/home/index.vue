<template>
  <HeroImageOverlay>
    <div class="p-4 sm:p-10 bg-white rounded-lg space-y-6 mt-24 sm:mt-48 md:mt-80 max-w-max">
      <h1>
        Providing leadership,<br class="hidden md:block" />
        Fostering innovation
      </h1>
      <p class="text-lg max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus nec, cursus ac massa.
        Proin viverra tincidunt bibendum ullamcorper nunc.
      </p>
      <router-link to="/about/overview" class="btn btn-xl">Learn More</router-link>
    </div>
  </HeroImageOverlay>

  <!-- Split -->
  <Split
    title="About Rescon"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pellentesque consectetur sagittis sapien sed sit interdum dignissim. Ultricies sagittis, vestibulum arcu et maecenas. Quis eget tellus rhoncus bibendum malesuada libero eget tellus. "
    :flip="true"
  >
    <template v-slot:extra-content>
      <router-link to="/about/overview" class="btn btn-xl mt-8">Learn More</router-link>
    </template>
    <img
      src="@/assets/images/smile-hardhats.png"
      alt="people smiling wearing suits and hardhats"
      class="h-full object-cover"
    />
  </Split>

  <!-- Content Boxes -->
  <Container class="bg-accent-dark">
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(content, index) in contents"
        :key="index"
        class="flex flex-col items-center text-center"
      >
        <img src="@/assets/images/content-box.png" alt="content" class="rounded-lg" />
        <h3 class="mt-8 mb-2 text-white text-2xl">{{ content.title }}</h3>
        <p class="text-white text-base">{{ content.description }}</p>
        <router-link to="/about/overview" class="btn btn-lg btn-light mt-4">Learn More</router-link>
      </div>
    </div>
  </Container>

  <!-- Blogs -->
  <Container>
    <div class="grid gap-8 lg:grid-cols-3">
      <router-link v-for="post in blogs" :key="post.title" :to="post.href">
        <img src="@/assets/images/hardhats.png" alt="assortment of hard hats" class="rounded-lg" />
        <h3 class="mt-8 mb-2 text-accent-darkest text-2xl capitalize underline">{{ post.title }}</h3>
        <span>{{ post.author }}</span
        ><span class="text-gray-500">{{ post.date }}</span>
        <p class="mt-2">
          {{ post.description }}
        </p>
      </router-link>
    </div>
  </Container>

  <!-- Container -->
  <Container>
    <h2>Join Rescon</h2>
  </Container>
</template>

<script>
import HeroImageOverlay from "../../components/layouts/hero/HeroImageOverlay.vue";
import Header from "@/components/base/Header";
import Split from "@/components/layouts/Split.vue";
import Container from "@/components/layouts/Container.vue";

const contents = [
  {
    title: "Content Box",
    description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
  },
  {
    title: "Content Box",
    description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
  },
  {
    title: "Content Box",
    description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
  },
  {
    title: "Content Box",
    description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
  },
];

const blogs = [
  {
    title: "Latest News",
    author: "Randy Rescon",
    date: "Mar 16, 2020",
    href: "/media/blog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pellentesque consectetur sagittis sapien sed sit interdum dignissim.",
  },
  {
    title: "Press Release",
    author: "Randy Rescon",
    date: "Mar 16, 2020",
    href: "/media/blog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pellentesque consectetur sagittis sapien sed sit interdum dignissim.",
  },
  {
    title: "Blog Post",
    author: "Randy Rescon",
    date: "Mar 16, 2020",
    href: "/media/blog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pellentesque consectetur sagittis sapien sed sit interdum dignissim.",
  },
];

export default {
  components: {
    Header,
    Split,
    Container,
    HeroImageOverlay,
  },
  data() {
    return {
      contents,
      blogs,
    };
  },
};
</script>
