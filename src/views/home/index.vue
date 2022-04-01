<template>
  <Header title='home' />
  
  <!-- Split -->
  <Split 
    title="What is Rescon?"
description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pellentesque consectetur sagittis sapien sed sit interdum dignissim. Ultricies sagittis, vestibulum arcu et maecenas. Quis eget tellus rhoncus bibendum malesuada libero.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pellentesque consectetur sagittis sapien sed sit interdum dignissim. Ultricies sagittis, vestibulum arcu et maecenas. Quis eget tellus rhoncus bibendum malesuada libero. "
    :flip="true"

  >
    

  </Split>

<!-- Container -->
  <Container 
    
  >
    <h2> Our Mission </h2>
<p>RESCON is Ontario's leading association of residential builders committed to providing leadership and fostering innovation in the industry.</p>
  </Container>

<!-- Container -->
  <Container 
    
  >
    <h2>Areas of Focus</h2>
  </Container>

<!-- Container -->
  <Container 
    
  >
    <h2>Join Rescon</h2>
  </Container>
</template>

<script>
import Header from "@/components/base/Header";
import Split from "@/components/layouts/Split.vue";
import Container from "@/components/layouts/Container.vue";

    

export default {
  components: {
    Header,
    Split,
Container
  },
  
};
</script>
