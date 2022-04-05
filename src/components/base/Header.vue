<template>
  <div class="relative">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" :src="imageSrc" alt="" />
      <div
        class="absolute inset-0 bg-gradient-to-r from-accent-grad to-transparent opacity-80"
        aria-hidden="true"
      />
      <div :class="`absolute inset-0 ${blueBG ? 'bg-accent-dark' : 'bg-transparent'} `"></div>
    </div>
    <Container>
      <div class="py-8">
        <p class="text-white mb-2 tracking-wider">RESCON</p>
        <h1
          class="text-4xl font-semibold tracking-wide text-white sm:text-5xl uppercase lg:text-6xl"
        >
          {{ title }}
        </h1>
        <p v-if="description" class="mt-6 text-xl text-indigo-100 max-w-3xl">
          {{ description }}
        </p>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
export default {
  components: { Container },
  name: "Header",
  props: {
    title: String,
    description: String,
  },
  computed: {
    imageSrc() {
      const baseURL = "/rescon-website/";
      const bannerURL = baseURL + "/banner/";
      const { path } = this.$route;
      switch (path) {
        case "/about/overview":
          return bannerURL + "about-overview.png";
        case "/about/boards":
          return bannerURL + "about-boards.png";
        case "/about/committees":
          return bannerURL + "about-committees.png";
        case "/about/team-members":
          return bannerURL + "about-team.png";
        case "/about/committees/anti-racism-roundtable/overview":
          return bannerURL + "about-arr-overview.png";
        case "/about/committees/anti-racism-roundtable/bipoc-initiative":
          return bannerURL + "about-arr-bipoc.png";
        case "/about/committees/anti-racism-roundtable/roundtable-members":
          return bannerURL + "about-arr-members.png";
        case "/about/committees/anti-racism-roundtable/roundtable-timeline":
          return bannerURL + "about-arr-timeline.png";
        case "/about/committees/anti-racism-roundtable/roundtable-resources":
          return bannerURL + "about-arr-resources.png";
        case "/about/committees/anti-racism-roundtable/roundtable-newsroom":
          return bannerURL + "about-arr-newsroom.png";
        case "/about/committees/building-innovation":
          return bannerURL + "about-innovation.png";
        case "/about/committees/health-and-safety":
          return bannerURL + "about-health.png";
        case "/about/committees/technical-council":
          return bannerURL + "about-technical.png";
        case "/about/committees/training-and-education":
          return bannerURL + "about-training.png";
        case "/about/our-affiliates":
          return bannerURL + "about-aff.png";
        case "/about/our-affiliates/training-and-education":
          return bannerURL + "about-aff-train.png";
        case "/about/our-affiliates/health-and-safety":
          return bannerURL + "about-aff-health.png";
        case "/about/our-affiliates/industry":
          return bannerURL + "about-aff-industry.png";
        case "/media/in-the-news":
          return bannerURL + "media-news.png";
        case "/media/press-releases":
          return bannerURL + "media-pr.png";
        default:
          return bannerURL + "about-overview.png";
      }
    },
    blueBG() {
      const { path } = this.$route;
      return path.includes("/about/our-partners");
    },
  },
};
</script>
