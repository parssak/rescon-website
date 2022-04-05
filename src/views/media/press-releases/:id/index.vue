<template>
  <Container>
    <h2 class="mb-3">{{ post.title }}</h2>
    <div class="flex items-center mb-6">
      <div class="flex space-x-2">
        <p class="font-medium text-sm text-black">{{ post.author.name }}</p>
        <p class="text-sm text-gray-500">
          {{ post.date }}
        </p>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut molestias ipsa
      nesciunt dicta voluptate, vel explicabo velit quibusdam fugiat, consequuntur quos nam porro
      non, molestiae dolor perspiciatis! Ab hic mollitia, perferendis quas officia possimus beatae?
      Corrupti quaerat dolore vitae obcaecati inventore dolores quo sequi facere quasi cum quas,
      excepturi tenetur laboriosam dolorem cupiditate reprehenderit laborum, nostrum explicabo
      molestias nesciunt! Quam, accusamus. Ad itaque corrupti et. Neque vel molestias recusandae
      totam, quia, repudiandae iure sint enim perferendis officiis quaerat reiciendis id
      reprehenderit voluptatem. Fugiat enim id culpa impedit consequatur voluptate iste amet!
      Commodi facilis tempora laudantium molestias voluptates labore in!
      <br /><br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut molestias ipsa
      nesciunt dicta voluptate, vel explicabo velit quibusdam fugiat, consequuntur quos nam porro
      non, molestiae dolor perspiciatis! Ab hic mollitia, perferendis quas officia possimus beatae?
      Corrupti quaerat dolore vitae obcaecati inventore dolores quo sequi facere quasi cum quas,
      excepturi tenetur laboriosam dolorem cupiditate reprehenderit laborum, nostrum explicabo
      molestias nesciunt! Quam, accusamus. Ad itaque corrupti et. Neque vel molestias recusandae
      totam, quia, repudiandae iure sint enim perferendis officiis quaerat reiciendis id
      reprehenderit voluptatem. Fugiat enim id culpa impedit consequatur voluptate iste amet!
      Commodi facilis tempora laudantium molestias voluptates labore in!
      <br /><br />
      Quam laoreet arcu enim diam sed non cursus. Turpis morbi felis, ut ullamcorper sem sem diam
      felis. Rutrum ultrices egestas amet venenatis turpis neque condimentum tellus sit. Congue
      vestibulum arcu netus sed habitasse. Nisl ut maecenas et nulla leo consectetur nec. Pretium
      dolor faucibus et quisque. Pellentesque eu amet, leo nisl ac. A nec egestas nascetur lorem vel
      at. Faucibus malesuada massa interdum duis turpis. Donec a aliquam vulputate id. Lectus cras
      lectus pulvinar fusce. Urna erat sed amet adipiscing. Facilisi purus vitae pellentesque
      posuere venenatis vestibulum urna, ac.
    </p>
  </Container>
</template>

<script>
import Container from "../../../../components/layouts/Container.vue";
import BlogContent from "../../../../components/layouts/blog/BlogContent.vue";
import Header from "@/components/base/Header";

const post = {
  title:
    "Initiatives to attract women to construction have only scratched the surface, builders say",
  author: {
    name: "Randy Rescon",
  },
  date: "Mar 3, 2022",
};
export default {
  components: {
    Header,
    BlogContent,
    Container,
  },
  data() {
    return {
      post,
    };
  },
};
</script>
