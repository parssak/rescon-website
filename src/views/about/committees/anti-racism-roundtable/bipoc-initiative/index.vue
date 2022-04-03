<template>
  <Header title="BIPOC Initiative - Testimonials" />
  <Split
    :flip="true"
    title="opening statement"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra commodo fames nunc, pretium augue magna tristique sit imperdiet. Dictum eu nascetur arcu imperdiet sed tristique nulla sed. Amet turpis eget ultricies morbi dictum congue ipsum morbi sit. Nibh cras at viverra at lobortis at sit. Enim mauris mauris sagittis, purus volutpat non fermentum consectetur gravida. Dictumst dignissim enim sit ut ac amet. Cursus scelerisque massa dictum id ipsum. Urna, ac lacinia non at nibh velit eget. Ultrices tempor elementum semper faucibus. Vitae, sit diam sed eu eget pulvinar. Varius lacinia eget praesent augue urna est mi. Netus velit, velit imperdiet elementum accumsan malesuada orci sed. Mauris sodales pharetra neque libero. Eu sed porttitor massa duis lectus maecenas commodo."
  >
    <img
      src="@/assets/images/orange-vest.png"
      alt="small meeting"
      class="w-full h-full object-cover"
    />
  </Split>

  <div class="relative overflow-hidden">
    <div class="absolute inset-0 object-cover"><img src="@/assets/images/bricks.png" alt="" /></div>
    <div class="absolute inset-0 bg-accent-dark opacity-80"></div>
    <Container>
      <div class="flex flex-col items-center">
        <img src="@/assets/quoteicon.svg" alt="" />
        <blockquote
          class="text-white text-2xl uppercase tracking-wider max-w-3xl text-center mx-auto mt-6"
        >
          “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa
          sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
        </blockquote>
        <div class="mt-8 flex items-center space-x-2">
          <p class="text-white font-medium">Randy Rescon</p>
          <p class="text-accent-light">/</p>
          <p class="text-white">Construction Manager</p>
        </div>
      </div>
    </Container>
  </div>

  <Container
    v-for="(t, index) in testimonials"
    :key="index"
    :class="index % 2 === 0 ? 'bg-white' : 'bg-accent-lightest'"
  >
    <div class="flex flex-col md:flex-row">
      <div class="flex-shrink-0 rounded-xl overflow-hidden mb-8 md:mr-8">
        <img src="@/assets/images/woman-smile.png" alt="" class="w-full h-full object-cover" />
      </div>
      <div>
        <h3>{{ t.title }}</h3>
        <p>{{ t.description }}</p>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
import Split from "@/components/layouts/Split.vue";
import Header from "@/components/base/Header";

const testimonials = [
  {
    title: "Testimonial Story",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra commodo fames nunc, pretium augue magna tristique sit imperdiet. Dictum eu nascetur arcu imperdiet sed tristique nulla sed. Amet turpis eget ultricies morbi dictum congue ipsum morbi sit. Nibh cras at viverra at lobortis at sit. Enim mauris mauris sagittis, purus volutpat non fermentum consectetur gravida. Dictumst dignissim enim sit ut ac amet. Cursus scelerisque massa dictum id ipsum. Urna, ac lacinia non at nibh velit eget.",
  },
  {
    title: "Testimonial Story",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra commodo fames nunc, pretium augue magna tristique sit imperdiet. Dictum eu nascetur arcu imperdiet sed tristique nulla sed. Amet turpis eget ultricies morbi dictum congue ipsum morbi sit. Nibh cras at viverra at lobortis at sit. Enim mauris mauris sagittis, purus volutpat non fermentum consectetur gravida. Dictumst dignissim enim sit ut ac amet. Cursus scelerisque massa dictum id ipsum. Urna, ac lacinia non at nibh velit eget.",
  },
  {
    title: "Testimonial Story",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra commodo fames nunc, pretium augue magna tristique sit imperdiet. Dictum eu nascetur arcu imperdiet sed tristique nulla sed. Amet turpis eget ultricies morbi dictum congue ipsum morbi sit. Nibh cras at viverra at lobortis at sit. Enim mauris mauris sagittis, purus volutpat non fermentum consectetur gravida. Dictumst dignissim enim sit ut ac amet. Cursus scelerisque massa dictum id ipsum. Urna, ac lacinia non at nibh velit eget.",
  },
  {
    title: "Testimonial Story",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra commodo fames nunc, pretium augue magna tristique sit imperdiet. Dictum eu nascetur arcu imperdiet sed tristique nulla sed. Amet turpis eget ultricies morbi dictum congue ipsum morbi sit. Nibh cras at viverra at lobortis at sit. Enim mauris mauris sagittis, purus volutpat non fermentum consectetur gravida. Dictumst dignissim enim sit ut ac amet. Cursus scelerisque massa dictum id ipsum. Urna, ac lacinia non at nibh velit eget.",
  },
  {
    title: "Testimonial Story",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra commodo fames nunc, pretium augue magna tristique sit imperdiet. Dictum eu nascetur arcu imperdiet sed tristique nulla sed. Amet turpis eget ultricies morbi dictum congue ipsum morbi sit. Nibh cras at viverra at lobortis at sit. Enim mauris mauris sagittis, purus volutpat non fermentum consectetur gravida. Dictumst dignissim enim sit ut ac amet. Cursus scelerisque massa dictum id ipsum. Urna, ac lacinia non at nibh velit eget.",
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
      testimonials,
    };
  },
};
</script>
