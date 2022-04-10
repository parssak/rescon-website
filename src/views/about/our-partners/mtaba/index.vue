<template>
  <Header title="Metropolitan Toronto Apartment Builders Association" />

  <Container>
    <div class="grid md:grid-cols-12 gap-12">
      <div class="md:col-span-3">
        <img src="@/assets/images/mtaba.png" alt="mtaba" class="object-contain w-48 md:w-full md:max-w-xs" />
      </div>
      <p class="md:col-span-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra laoreet mauris, arcu
        consequat imperdiet accumsan. Quis adipiscing ipsum nisl, habitasse molestie euismod
        vivamus. Sed amet non enim scelerisque non. Rhoncus interdum porttitor cras nisi dolor a
        sit. Lectus egestas mattis nunc, adipiscing. Ullamcorper odio viverra enim tristique. Quis
        massa augue nisl imperdiet etiam diam. Sed pulvinar purus varius dictum. Varius quis
        bibendum feugiat id mauris eu elementum sed. In ullamcorper in cursus etiam lorem lobortis
        ullamcorper. Feugiat velit sagittis id urna at amet. Quis tellus, adipiscing et turpis
        tristique cras. Mauris commodo semper blandit consectetur molestie rhoncus. Scelerisque
        habitant risus pretium, nulla tristique suscipit convallis ac, sodales.
      </p>
    </div>
  </Container>
</template>

<script>
import Container from "../../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";

export default {
  components: {
    Header,
    Container,
  },
};
</script>
