<template>
  <Header title="our blog" />

  <!-- BlogCardsPage -->
  <Container>
    <div class="max-w-xl mx-auto grid gap-8 lg:gap-y-9 lg:grid-cols-3 lg:max-w-none">
      <router-link
        v-for="post in posts"
        :key="post.title"
        class="flex flex-col overflow-hidden"
        :to="post.href"
      >
        <div class="flex-shrink-0 rounded-xl overflow-hidden">
          <img class="h-48 w-full object-cover" src="@/assets/images/hardhats.png" alt="" />
        </div>
        <div class="flex-1 bg-white mt-2 flex flex-col justify-between">
          <div class="flex-1">
            <router-link :to="post.href" class="block mt-2">
              <p class="text-accent-dark underline text-xl capitalize mb-2">
                {{ post.title }}
              </p>
              <div class="flex space-x-4 mt-2">
                <p class="text-sm font-medium text-accent">
                  <router-link :to="post.href" class="hover:underline">
                    {{ post.category.name }}
                  </router-link>
                </p>
                <p class="capitalize text-sm text-gray-700">{{ post.author.name }}</p>
                <p class="uppercase text-sm text-gray-500">{{ post.date }}</p>
              </div>
              <p class="mt-3 text-base text-gray-500">
                {{ post.description }}
              </p>
            </router-link>
          </div>
        </div>
      </router-link>
    </div>

    <nav
      class="py-3 flex items-center justify-between border-t border-gray-200 mt-6"
      aria-label="Pagination"
    >
      <div class="hidden sm:block">
        <p class="text-sm text-gray-700">
          Showing
          {{ " " }}
          <span class="font-medium">1</span>
          {{ " " }}
          to
          {{ " " }}
          <span class="font-medium">10</span>
          {{ " " }}
          of
          {{ " " }}
          <span class="font-medium">20</span>
          {{ " " }}
          results
        </p>
      </div>
      <div class="flex-1 flex justify-between sm:justify-end">
        <a
          href="#"
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
    </nav>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
import Header from "@/components/base/Header";
import BlogCardsPage from "@/components/layouts/blog/BlogCardsPage.vue";

const defaultPosts = [
  {
    title: "Blog Post",
    href: "/blog/post",
    category: { name: "Article", href: "/blog/post" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: "/chemsynergy-website/.png",
    readingTime: "6 min",
    author: {
      name: "Randy Rescon",
      href: "/blog/post",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Blog Post",
    href: "/blog/post",
    category: { name: "Video", href: "/blog/post" },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl: "/chemsynergy-website/blog-img.png",
    readingTime: "4 min",
    author: {
      name: "Randy Rescon",
      href: "/blog/post",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Blog Post",
    href: "/blog/post",
    category: { name: "Case Study", href: "/blog/post" },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: "/chemsynergy-website/blog-img.png",
    readingTime: "11 min",
    author: {
      name: "Randy Rescon",
      href: "/blog/post",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Blog Post",
    href: "/blog/post",
    category: { name: "Article", href: "/blog/post" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: "/chemsynergy-website/blog-img.png",
    readingTime: "6 min",
    author: {
      name: "Randy Rescon",
      href: "/blog/post",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Blog Post",
    href: "/blog/post",
    category: { name: "Video", href: "/blog/post" },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl: "/chemsynergy-website/blog-img.png",
    readingTime: "4 min",
    author: {
      name: "Randy Rescon",
      href: "/blog/post",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Blog Post",
    href: "/blog/post",
    category: { name: "Case Study", href: "/blog/post" },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: "/chemsynergy-website/blog-img.png",
    readingTime: "11 min",
    author: {
      name: "Randy Rescon",
      href: "/blog/post",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];
export default {
  components: {
    Header,
    BlogCardsPage,
    Container,
  },
  data() {
    return {
      posts: defaultPosts,
    };
  },
};
</script>
