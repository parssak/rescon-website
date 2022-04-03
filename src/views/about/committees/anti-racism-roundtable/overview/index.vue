<template>
  <Header title="Anti-Racism Roundtable" />
  <Split
    :flip="true"
    title="opening statement"
    description='RESCON is proud of the incredibly diverse and multicultural workforce in the construction industry. We acknowledge that having people from all backgrounds highly benefits our industry, as it offers unique perspectives that lead to new innovative ideas. Our ability to work together and respect each other has been the backbone of achieving excellence in construction and continues to help us better serve the communities in which we build. <br><br> RESCON has always taken a leadership role in the fight against racism and discrimination. Any form of racism, discrimination or hate is not welcome in the construction industry. <br><br> RESCON, representing more than 200 residential builders in the province, along with members of its Anti-Racism Roundtable are " Construction Against Racism Everywhere" (CARE).'
  >
    <img
      src="@/assets/images/small-meeting.png"
      alt="small meeting"
      class="w-full h-full object-cover"
    />
  </Split>

  <Container class="bg-accent-lightest">
    <h3>Our Commitment</h3>
    <p>
      The RESCON Anti-Racism Roundtable will provide a forum for leading industry associations to
      work together to address the immediate challenges of systemic and overt anti-Black racism in
      the construction industry while consistently fostering diversity, equity, and inclusion of all
      underrepresented minorities within our workforce for the long term.
    </p>

    <h3 class="mt-12 md:mt-20">Our Approach</h3>
    <p>
      The RESCON CARE Anti-Racism Roundtable brings together Builders, Sub-Trades, Education
      Stakeholders, Employment Agencies, the Provincial and Municipal Government, and Unions to
      develop short- and long-term goals surrounding racism in construction.
    </p>
  </Container>
</template>

<script>
import Container from "../../../../../components/layouts/Container.vue";
import Split from "../../../../../components/layouts/Split.vue";
import Header from "@/components/base/Header";

export default {
  components: {
    Header,
    Split,
    Container,
  },
};
</script>
