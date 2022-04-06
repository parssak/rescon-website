<template>
  <Header title="orcca" />

  <Container>
    <div class="grid md:grid-cols-12 gap-12">
      <div class="md:col-span-3">
        <img src="@/assets/images/orcca.png" alt="trclb" class="object-contain w-full max-w-xs" />
      </div>
      <div class="md:col-span-9">
        <h3>Ontario Residential Council of Construction Associations</h3>
        <p>
          ORCCA is a council of associations who are designated bargaining agencies in the
          residential sector of the construction industry. Its membership is restricted to
          residential employer bargaining agencies regardless of union affiliation. ORCCA functions
          as a coordinating body to align association positions on a number of issues which affect
          the residential sector and often acts as the voice of the unionized residential
          construction industry. ORCCA conducts joint research in preparation for bargaining and
          assists in compiling longitudinal studies of wages, benefits and terms and conditions of
          employment to assist the parties in collective bargaining. In addition, ORCCA has
          submitted briefs and position papers on issues which are common to its members. ORCCA is
          critical to the interests of all residential sector associations of the construction
          industry and provides the managers of the various associations to gather and share
          information about issues affecting the industry. All issues are open to consideration and
          discussion.
        </p>
        <router-link to="/collective-agreements" class="btn btn-xl mt-4"
          >View Collective Agreements</router-link
        >
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
import Header from "@/components/base/Header";

export default {
  components: {
    Header,
    Container,
  },
};
</script>
