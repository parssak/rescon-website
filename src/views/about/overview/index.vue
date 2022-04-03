<template>
  <Header title="Company Overview" />

  <Split
    title="What is Rescon"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pellentesque consectetur sagittis sapien sed sit interdum dignissim. Ultricies sagittis, vestibulum arcu et maecenas. Quis eget tellus rhoncus bibendum malesuada libero. 
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pellentesque consectetur sagittis sapien sed sit interdum dignissim. Ultricies sagittis, vestibulum arcu et maecenas. Quis eget tellus rhoncus bibendum malesuada libero. "
    :flip="true"
  >
    <img
      src="@/assets/images/smile-hardhats.png"
      alt="people smiling wearing suits and hardhats"
      class="h-full object-cover"
    />
  </Split>

  <!-- Our Mission -->
  <Container>
    <div class="flex flex-col items-center text-center py-20 rounded-lg overflow-hidden relative">
      <img
        src="@/assets/images/lightbulb.png"
        alt="lightbulb"
        class="absolute inset-0 object-cover"
      />
      <div class="absolute inset-0 bg-accent mix-blend-multiply opacity-80"></div>
      <div class="relative">
        <h2 class="text-white mb-4">Our Mission</h2>
        <p class="max-w-2xl text-white">
          RESCON is Ontario's leading association of residential builders committed to providing
          leadership and fostering innovation in the industry.
        </p>
      </div>
    </div>
  </Container>

  <!-- Areas of Focus -->
  <Container>
    <h2 class="text-center mb-16">Areas of Focus</h2>
    <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div v-for="area in areasFocus" :key="area.title">
        <img src="@/assets/images/smile-crane.png" alt="" class="rounded-lg mb-6" />
        <h3 class="text-accent-light text-2xl mb-2">{{ area.title }}</h3>
        <ul>
          <li v-for="feature in area.features" :key="feature">
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </Container>

  <!-- Join Rescon -->
  <Container class="bg-accent-dark">
    <div class="text-center flex flex-col items-center">
      <h2 class="text-white">Join Rescon</h2>
      <p class="text-white max-w-2xl">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo.
        Elit sunt amet fugiat veniam occaecat fugiat.
      </p>
      <router-link to="/contact" class="btn btn-xl btn-light mt-6">
        Get in touch
      </router-link>
    </div>
  </Container>
</template>

<script>
import Container from "../../../components/layouts/Container.vue";
import Split from "../../../components/layouts/Split.vue";
import Header from "@/components/base/Header";

const areasFocus = [
  {
    title: "LABOUR RELATIONS AND COLLECTIVE BARGAINING",
    features: [
      "Negotiations and Collective Bargaining Research and Preparation",
      "Trade Contractor Liaison Group",
      "Administration and Grievance Mediation and Arbitration",
      "Bill 148: Fairer workplaces, better jobs act.",
    ],
  },
  {
    title: "BUILDING CODE REFORM AND TECHNICAL STANDARDS",
    features: [
      "Six-storey mid-rise housing",
      "Building Approval Issues",
      "E-permitting initiative",
      "Accessibility",
    ],
  },
  {
    title: "BUILDING SCIENCE AND INNOVATION",
    features: [
      "Panelized Housing",
      "Window Wall",
      "Tall Wood Buildings",
      "Energy Efficiency and Low-carbon buildings",
    ],
  },
  {
    title: "LABOUR SUPPLY, TRAINING AND EDUCATION",
    features: [
      "George Brown College Endowment Program",
      "Humber College partnership",
      "Increasing the Supply of Skilled Trades",
      "Promoting of the skilled trades in high school and post-secondary",
      "The Ontario College of Trades",
      "Women in Skilled Trades program (WIST)",
    ],
  },
  {
    title: "MARKET HOUSING AFFORDABILITY & LAND SUPPLY ISSUES",
    features: ["Government imposed costs on Housing", "Land Supply", "Affordable Housing"],
  },
  {
    title: "HEALTH AND SAFETY",
    features: [
      "Infrastructure Health and Safety Association (IHSA)",
      "Construction Employers Coalition participation (under the WSIB)",
      "Impacts of recreational cannabis legalization (Bill C-45)",
    ],
  },
  {
    title: "LIASON WITH GOVERNMENT",
    features: ["Lien Act review", "Ontario Municipal Board (OMB) review", "Tarion review"],
  },
];

export default {
  components: {
    Header,
    Split,
    Container,
  },
  data() {
    return {
      areasFocus,
    };
  },
};
</script>
