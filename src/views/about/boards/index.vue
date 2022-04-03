<template>
  <Header title="board members" />

  <Container>
    <p>
      The RESCON Board of Directors is comprised of the officers of the
      <router-link class="underline text-accent" to="/about/our-partners/mtaba">MTABA</router-link>,
      <router-link class="underline text-accent" to="/about/our-partners/trclb">TRCLB</router-link>,
      and
      <router-link class="underline text-accent" to="/about/our-partners/drclb">DRCLB</router-link>
      Associations as well as builders not affiliated to a union collective agreement. RESCON
      represents its members in issues areas which are not restricted to labour relations and
      collective bargaining but impact all residential builders equally. RESCON plays a critical
      role in the following key areas:
    </p>
    <ul class="text-lg mt-4">
      <li>Building Code and Technical Issues</li>
      <li>Innovations in Construction Practices and Methods</li>
      <li>WSIB and Health and Safety</li>
      <li>Training and Education</li>
      <li>Market Housing Affordability and Land Supply Issues</li>
    </ul>
  </Container>

  <Container>
    <div class="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
      <!-- jrca -->
      <div class="text-center flex flex-col items-center">
        <img
          src="@/assets/images/jrca.png"
          alt="jrca logo"
          class="w-full h-full object-contain max-w-xs"
        />
        <h3 class="text-3xl text-black mt-8 mb-2">JRCA</h3>
        <p>Joint Residential Construction <br />Association Board</p>
        <router-link class="btn btn-xl mt-6" to="/about/our-partners/jrca">Learn More</router-link>
      </div>

      <!-- mtaba -->
      <div class="text-center flex flex-col items-center">
        <img
          src="@/assets/images/mtaba.png"
          alt="mtaba logo"
          class="w-full h-full object-contain max-w-xs"
        />
        <h3 class="text-3xl text-black mt-8 mb-2">MTABA</h3>
        <p>
          Metropolitan Toronto Apartment<br />
          Builders Association
        </p>
        <router-link class="btn btn-xl mt-6" to="/about/our-partners/mtaba">Learn More</router-link>
      </div>

      <!-- trclb -->
      <div class="text-center flex flex-col items-center">
        <img
          src="@/assets/images/trclb.png"
          alt="trclb logo"
          class="w-full h-full object-contain max-w-xs"
        />
        <h3 class="text-3xl text-black mt-8 mb-2">TRCLB</h3>
        <p>
          Toronto Residential Construction <br />
          Labour Bureau Board
        </p>
        <router-link class="btn btn-xl mt-6" to="/about/our-partners/trclb">Learn More</router-link>
      </div>

      <!-- drclb -->
      <div class="text-center flex flex-col items-center">
        <img
          src="@/assets/images/drclb.png"
          alt="drclb logo"
          class="w-full h-full object-contain max-w-xs"
        />
        <h3 class="text-3xl text-black mt-8 mb-2">DRCLB</h3>
        <p>
          Durham Residential Construction <br />
          Labour Bureau Board
        </p>
        <router-link class="btn btn-xl mt-6" to="/about/our-partners/drclb">Learn More</router-link>
      </div>
    </div>
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
