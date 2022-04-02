<template>
  <div>
    <div v-if="dropdownItems && dropdownItems.length > 0" class="flex items-center -mr-2">
      <Popover class="relative">
        <PopoverButton
          class="
            group
            rounded-md
            inline-flex
            items-center
            text-base
            font-medium
            capitalize
            whitespace-nowrap
            transition
            text-grey
            hover:text-accent
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal,
          "
          @click.stop
        >
          <router-link :to="path"><slot></slot></router-link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2 h-5 w-5 group-transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </PopoverButton>

        <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-1"
        >
          <PopoverPanel
            class="absolute mt-3 transform z-10 w-screen max-w-sm lg:ml-0 left-1/2 -translate-x-1/2"
          >
            <div class="border shadow-sm">
              <div class="relative grid gap-6 bg-white sm:gap-8">
                <PopoverButton>
                  <router-link
                    v-for="item in dropdownItems"
                    :key="item.label"
                    :to="item.path"
                    class="p-3 flex items-center transition hover:bg-accent-lightest group relative"
                  >
                    <p
                      class="
                        text-sm
                        lg:text-base
                        font-medium
                        capitalize
                        text-black
                        group-hover:text-accent
                      "
                    >
                      {{ item.label }}
                    </p>
                    <svg
                      v-if="item.dropdownItems.length > 0"
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-auto h-5 w-5 group-transition"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <div
                      v-if="item.dropdownItems.length > 0"
                      class="
                        absolute
                        left-full
                        p-3
                        group-hover:visible
                        invisible
                        whitespace-nowrap
                        border border-l-0
                      "
                    >
                      <div v-for="inner in item.dropdownItems" :key="inner.path">
                        {{ inner.label }}
                      </div>
                    </div>
                  </router-link>
                </PopoverButton>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
    </div>
    <div v-else class="nav-item">
      <router-link :to="path">
        <slot> </slot>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
export default {
  name: "NavItem",
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
  },
  props: {
    path: String,
    dropdownItems: {
      type: Array,
      required: false,
    },
  },
};
</script>
