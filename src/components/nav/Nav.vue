<template>
  <Popover class="fixed left-0 w-full top-0 z-20 bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-8 md:justify-start md:space-x-5">
        <div class="flex justify-start lg:w-0 flex-1">
          <router-link to="/">
            <span class="sr-only">Rescon</span>
            <div class="flex items-center">
              <img class="h-5 w-auto" src="@/assets/logo.svg" alt="Rescon" />
            </div>
          </router-link>
        </div>
        <div class="-mr-2 -my-2 lg:hidden">
          <PopoverButton
            class="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 transition hover:bg-white"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6 text-accent" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden lg:flex space-x-6 xl:space-x-7">
          <NavItem
            v-for="item in navigation"
            :path="item.path"
            :key="item.label"
            :dropdownItems="item.dropdownItems"
          >
            {{ item.label }}
          </NavItem>
        </PopoverGroup>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right lg:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-200 divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <router-link to="/">
                <img class="h-5 w-auto" src="@/assets/logo.svg" alt="Rescon" />
              </router-link>
              <div class="-mr-2">
                <PopoverButton
                  class="rounded-md p-2 inline-flex items-center justify-center transition hover:bg-accent-lightest"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6 text-accent" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <!-- <nav class="grid gap-y-8">
                <PopoverButton>
                  <router-link
                    v-for="item in navigation"
                    :key="item.label"
                    :to="item.path"
                    class="nav-item-mobile"
                  >
                    <span class="nav-item-mobile__text">{{ item.label }}</span>
                  </router-link>
                </PopoverButton>
              </nav> -->
              <nav class="grid">
                <PopoverButton>
                  <router-link to="/" class="nav-item-mobile">
                    <span class="nav-item-mobile__text">Home</span>
                  </router-link>
                </PopoverButton>

                <!-- ABOUT -->
                <Disclosure v-slot="{ open }">
                  <DisclosureButton class="cursor-pointer">
                    <router-link to="/about" class="nav-item-mobile pointer-events-none flex">
                      <span class="nav-item-mobile__text">About Us</span>
                      <ChevronUpIcon
                        :class="open ? 'transform rotate-180' : ''"
                        class="w-5 h-5 text-accent ml-auto"
                      />
                    </router-link>
                  </DisclosureButton>
                  <DisclosurePanel class="ml-2 grid">
                    <PopoverButton v-for="section in aboutSections" :key="section.href">
                      <router-link :to="section.href" class="nav-item-mobile">
                        <span class="nav-item-mobile__text">{{ section.label }}</span>
                      </router-link>
                    </PopoverButton>
                  </DisclosurePanel>
                </Disclosure>

                <!-- MEDIA -->
                <Disclosure v-slot="{ open }">
                  <DisclosureButton class="cursor-pointer">
                    <router-link to="/media" class="nav-item-mobile pointer-events-none flex">
                      <span class="nav-item-mobile__text">Media</span>
                      <ChevronUpIcon
                        :class="open ? 'transform rotate-180' : ''"
                        class="w-5 h-5 text-accent ml-auto"
                      />
                    </router-link>
                  </DisclosureButton>
                  <DisclosurePanel class="ml-2 grid">
                    <PopoverButton v-for="section in mediaSections" :key="section.href">
                      <router-link :to="section.href" class="nav-item-mobile">
                        <span class="nav-item-mobile__text">{{ section.label }}</span>
                      </router-link>
                    </PopoverButton>
                  </DisclosurePanel>
                </Disclosure>

                <PopoverButton>
                  <router-link to="/submissions" class="nav-item-mobile">
                    <span class="nav-item-mobile__text">Submissions</span>
                  </router-link>
                </PopoverButton>

                <!-- events -->
                <Disclosure v-slot="{ open }">
                  <DisclosureButton class="cursor-pointer">
                    <router-link to="/events" class="nav-item-mobile pointer-events-none flex">
                      <span class="nav-item-mobile__text">events</span>
                      <ChevronUpIcon
                        :class="open ? 'transform rotate-180' : ''"
                        class="w-5 h-5 text-accent ml-auto"
                      />
                    </router-link>
                  </DisclosureButton>
                  <DisclosurePanel class="ml-2 grid">
                    <PopoverButton v-for="section in eventsSections" :key="section.href">
                      <router-link :to="section.href" class="nav-item-mobile">
                        <span class="nav-item-mobile__text">{{ section.label }}</span>
                      </router-link>
                    </PopoverButton>
                  </DisclosurePanel>
                </Disclosure>

                <PopoverButton>
                  <router-link to="/orcca" class="nav-item-mobile">
                    <span class="nav-item-mobile__text">ORCCA</span>
                  </router-link>
                </PopoverButton>
                <PopoverButton>
                  <router-link to="/collective-agreements" class="nav-item-mobile">
                    <span class="nav-item-mobile__text">collective agreements</span>
                  </router-link>
                </PopoverButton>

                <PopoverButton>
                  <router-link to="/contact" class="nav-item-mobile">
                    <span class="nav-item-mobile__text">Contact</span>
                  </router-link>
                </PopoverButton>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
  <div class="nav-gap" />
</template>

<script>
import NavItem from "@/components/nav/NavItem.vue";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";
import { MenuIcon, XIcon, ChevronUpIcon } from "@heroicons/vue/outline";
import { navigation } from "@/data";

const aboutSections = [
  {
    href: "/about/overview",
    label: "Overview",
  },
  { href: "/about/team-members", label: "team members" },
  { href: "/about/boards", label: "board members" },
  { href: "/about/committees", label: "Commitees" },
  {
    href: "/about/our-affiliates",
    label: "our affiliates",
  },
];

const mediaSections = [
  {
    href: "/media/press-releases",
    label: "Press Releases",
  },
  { href: "/media/in-the-news", label: "In the News" },
  { href: "/media/blog", label: "blog" },
  { href: "/media/videos", label: "Videos" },
  { href: "/media/newsletters", label: "newsletters" },
];

const eventsSections = [
  {
    href: "/events/upcoming-events",
    label: "Upcoming Events",
  },
  { href: "/events/past-events", label: "Past Events" },
];
export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    MenuIcon,
    XIcon,
    NavItem,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon,
  },
  setup() {
    return { navigation, aboutSections, mediaSections, eventsSections };
  },
};
</script>
