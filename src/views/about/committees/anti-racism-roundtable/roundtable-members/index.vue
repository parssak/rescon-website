<template>
  <Header title="Roundtable Members" />
  <Container>
    <div class="grid gap-8 md:grid-cols-2">
      <div v-for="member in members" :key="member.title">
        <h3 class="text-accent underline mb-2 text-lg">
          {{ member.title }}
        </h3>
        <p>
          <span v-html="member.description"></span>
        </p>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
import Header from "@/components/base/Header";

const members = [
  {
    title: "BILD",
    description:
      "With almost 1,500 member companies, BILD is the voice of the home building, land development and professional renovation industry in the Greater Toronto Area. The building and renovation industry provides more than 269,000 jobs in the region and $30.3 billion in investment value. BILD is proudly affiliated with the Ontario and Canadian Home Builders' Associations.",
  },
  {
    title: "BOLT",
    description:
      "BOLT is a charitable foundation launched by Tridel, with the goal to assist under-resourced youth connect to careers in construction. BOLT creates awareness and offers exposure to the construction industry's diverse career opportunities by hosting Speak Outs, Days of Discovery, and Job Shadowing, as well as provides financial support for skilled training and post-secondary programs related to construction.",
  },
  {
    title: "Carpenters' Local 27",
    description:
      "Carpenters' Local 27 is a progressive Local with over 8,600 members working on a variety of projects and job sites across Toronto and the surrounding areas. Local 27 is part of 16 Locals across Ontario affiliated with the Carpenters' District Council of Ontario, which has over 30,000 members province wide. Our Executive Board, Business Representatives and Organizers have extensive experience in the industry before taking a staff role with Local 27 serving the membership. Staff of Local 27 understand the needs of both our members and signatory contractors and focus on ensuring contractors have the required skilled workforce needed to complete projects on time and on budget.",
  },
  {
    title: "Chief Prevention Officer (MLTSD)",
    description:
      "Ron Kelusky is Ontario's Chief Prevention Officer (CPO). The CPO oversees the Prevention Office within the Ministry of Labour, Training and Skills Development. Under the CPO's leadership, the Prevention Office has supported workplaces in Ontario to implement health and safety measures during the COVID-19 pandemic. This has included working on cross government and industry committees and producing over 200 workplace guidance resources which have been viewed over one million times.",
  },
  {
    title: "Ellis Don",
    description:
      "EllisDon is a world-leading construction and building services company that completes in excess of $5 billion worth of contracts annually, in every market sector and across the globe. Over the last 70 years, we have grown from being a general contractor to a multi-faceted company that can deliver any aspect of a project.",
  },
  {
    title: "First Work",
    description:
      "First Work Ontario's youth employment network, is a leading membership organization bringing together providers of youth programming and employment services, business leadership, academia, and government to develop and advance solutions for youth employment. Our direct engagement with youth ensures our services are relevant, culturally appropriate, and timely. Our membership community shapes our work and positions us as the bridge between the gap of young people and employment opportunities. Our continued advocacy at all levels of government supports progressive policy development for the benefit of all youth.",
  },
  {
    title: "George Brown College",
    description:
      "George Brown College (GBC) empowers lifelong learners to imagine possibilities and embrace change by offering a range of exciting options that prepare students for a world of constant change-as economic transformations, climate change, urbanization, and disruptive technologies continue to shake up established industries. At GBC, learning turns into opportunity through the unique learning ecosystem created for learners.",
  },
  {
    title: "Gillian Mason",
    description:
      "Gillian Mason Consultancy has spent more than 25 years as a senior executive, leading Toronto-based local, national, and international non-profit organizations, two of which she co-founded. Gillian's consultancy practice advises and assists non-profit organizations, and their public and private sector partners, to navigate complex systems, forge strategic partnerships and achieve sustainable social and economic change.",
  },
  {
    title: "Great Gulf",
    description:
      "The Great Gulf Group was established in 1975 and has become one of North America's leading real estate organizations with fully integrated activities that span the entire real estate spectrum. Through its various platforms including Ashton Woods and First Gulf, the Great Gulf Group develops, constructs, and manages residential and commercial real estate across 18 cities and employs over 1,500 people in North America. The Great Gulf Group has developed over 80,000 residences and 30 million square feet of commercial real estate over its 45-year history.",
  },

  {
    title: "IHSA",
    description:
      "The Infrastructure Health and Safety Association (IHSA) is Ontario's trusted health and safety resource. Our goal is to improve the lives of Ontario workers. We provide the resources and training that control and eliminate safety hazards in work environments involving high-risk activities. At IHSA we have always maintained a standard of excellence. We are proud of our role in helping to make Ontario one of the safest places in the world to work. Our focus is on workers and keeping our promise to provide them with the tools to Work Safe for Life.",
  },

  {
    title: "Job Talks",
    description:
      "Job Talks originates from the belief that when Canadians love what they do for work, they become not only better employees and co-workers, but also better citizens, family members, neighbors and friends. Through in-depth research and quality interviews with workers who are passionate about their jobs, we aim to help young people and career seekers discover trades that may be right for them. Job Talks believes that Canada is at its healthiest and strongest when more Canadians feel like they're doing what they were meant to do.",
  },
  {
    title: "LIUNA 1",
    description:
      "The LiUNA Local 183 Training Centre is dedicated to providing the most comprehensive training programs to apprentices and members. Our goal is to provide every trainee with the highest standard of skills and safety training. As a new era begins for the LiUNA Local 183 Training Centre, we see ourselves embracing new technologies and methods of training delivery. We provide training that includes the use of new materials, tools and techniques that are making their way onto the job sites, or are already present in the day to day work that our members perform. Our hands-on training is meant to simulate a true construction sector setting to ensure that contractors receive workers who are competent and productive.",
  },
  {
    title: "LIUNA",
    description:
      "LiUNA Local 183 is the largest Construction Local Union in North America. Founded in 1952 with little more than 400 members in their first year, LIUNA Local 183 has grown to now represent more than 60,000 construction workers and their families in the Greater Toronto Area. Our members work in every aspect of the construction industry including residential, sewer and watermain, roads and transit infrastructure, heavy civil, pipeline, railroads, and utilities sectors.",
  },
  {
    title: "Menkes",
    description:
      "Menkes Developments Ltd is a fully integrated, multi-disciplinary real estate development company. Menkes continues to raise the standard for outstanding quality design and superior value as a fully integrated, multi-disciplinary real estate company. Elegant family homes that exude character and charm; exclusive luxury condominiums with stunning amenities; and highly coveted office, commercial and industrial spaces, all set in prime locations.",
  },
  {},
];
export default {
  components: {
    Header,
    Container,
  },
  data() {
    return {
      members,
    };
  },
};
</script>
