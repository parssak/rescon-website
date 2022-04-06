<template>
  <div class="h-1/5 md:h-2/5 w-full absolute top-0 bg-accent-dark"></div>
  <Container>
    <div class="max-w-5xl mx-auto">
      <div class="w-full mb-5 object-cover rounded-xl overflow-hidden">
        <img src="@/assets/images/hardhats.png" alt="" />
      </div>
      <caption class="text-left w-full">
        Sagittis scelerisque nulla cursus in enim consectetur quam.
      </caption>
      <h2 class="mb-3 mt-6">{{ post.title }}</h2>
      <div class="flex space-x-4 mb-6">
        <p class="text-sm font-medium text-accent">
          <router-link :to="post.href" class="hover:underline">
            {{ post.category.name }}
          </router-link>
        </p>
        <p class="capitalize text-sm text-gray-700">{{ post.author.name }}</p>
        <p class="uppercase text-sm text-gray-500">{{ post.date }}</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut molestias ipsa
        nesciunt dicta voluptate, vel explicabo velit quibusdam fugiat, consequuntur quos nam porro
        non, molestiae dolor perspiciatis! Ab hic mollitia, perferendis quas officia possimus
        beatae? Corrupti quaerat dolore vitae obcaecati inventore dolores quo sequi facere quasi cum
        quas, excepturi tenetur laboriosam dolorem cupiditate reprehenderit laborum, nostrum
        explicabo molestias nesciunt! Quam, accusamus. Ad itaque corrupti et. Neque vel molestias
        recusandae totam, quia, repudiandae iure sint enim perferendis officiis quaerat reiciendis
        id reprehenderit voluptatem. Fugiat enim id culpa impedit consequatur voluptate iste amet!
        Commodi facilis tempora laudantium molestias voluptates labore in!
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut molestias ipsa
        nesciunt dicta voluptate, vel explicabo velit quibusdam fugiat, consequuntur quos nam porro
        non, molestiae dolor perspiciatis! Ab hic mollitia, perferendis quas officia possimus
        beatae? Corrupti quaerat dolore vitae obcaecati inventore dolores quo sequi facere quasi cum
        quas, excepturi tenetur laboriosam dolorem cupiditate reprehenderit laborum, nostrum
        explicabo molestias nesciunt! Quam, accusamus. Ad itaque corrupti et. Neque vel molestias
        recusandae totam, quia, repudiandae iure sint enim perferendis officiis quaerat reiciendis
        id reprehenderit voluptatem. Fugiat enim id culpa impedit consequatur voluptate iste amet!
        Commodi facilis tempora laudantium molestias voluptates labore in!
      </p>
      <div class="mt-6">
        <div class="flex justify-between">
          <a
            href="#"
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md btn-grey"
          >
            Previous
          </a>
          <a
            href="#"
            class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md btn-grey"
          >
            Next
          </a>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
const defaultPost = {
  title: "Boost your conversion rate",
  href: "/blog/details",
  category: {
    name: "Article",
    href: "/blog/details",
    color: "bg-indigo-100 text-indigo-800",
  },
  description:
    "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
  date: "Mar 16, 2020",
  datetime: "2020-03-16",
  author: {
    name: "Randy Rescon",
    href: "/blog/details",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  readingTime: "6 min",
};
export default {
  components: { Container },
  props: {
    post: {
      type: Object,
      default: defaultPost,
    },
  },
};
</script>
