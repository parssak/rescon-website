<template>
  <Header title="contact us" />
  <Container>
    <div class="divide-y-2 divide-accent-dark">
      <div class="grid gap-8 md:grid-cols-3 py-12 pt-0">
        <div>
          <h2 class="text-4xl">Contact Information</h2>
        </div>
        <div>
          <h3 class="text-offblack text-xl capitalize mb-2">Mailing Address</h3>
          <address class="not-italic">
            25 North Rivermede Road, Unit 13 <br />
            Vaughan, Ontario L4K 5V4
          </address>
          <h3 class="text-offblack text-xl capitalize mb-2 mt-6">Fax</h3>
          <a class="text-accent underline" href="tel:+905-760-7718">905-760-7718</a>
        </div>
        <div>
          <h3 class="text-offblack text-xl capitalize mb-2">Telephone</h3>
          <div class="space-y-2">
            <a class="block text-accent underline" href="tel:+905-760-7777">905-760-7777</a>
            <a class="block text-accent underline" href="tel:+1-866-531-1608">1-866-531-1608</a>
          </div>
          <h3 class="text-offblack text-xl capitalize mb-2 mt-6">Social Media</h3>
          <div class="flex items-center space-x-5">
            <a href="#"><img src="@/assets/twitter.svg" alt="" /></a>
            <a href="#"><img src="@/assets/linkedin.svg" alt="" /></a>
          </div>
        </div>
      </div>
      <div class="grid gap-8 md:grid-cols-3 py-12">
        <div>
          <h2 class="text-4xl">Membership</h2>
        </div>
        <div>
          <h3 class="text-offblack text-xl capitalize mb-2">Membership Inquiries</h3>
          <p>Andrew Pariser</p>
          <a class="text-accent underline" href="mailto:pariser@rescon.com">pariser@rescon.com</a>
        </div>
      </div>
      <div class="grid gap-8 md:grid-cols-3 py-12">
        <div>
          <h2 class="text-4xl">Media</h2>
        </div>
        <div>
          <h3 class="text-offblack text-xl capitalize mb-2">Media Coverage</h3>
          <p>Grant Cameron</p>
          <a class="text-accent underline" href="mailto:cameron@rescon.com">cameron@rescon.com</a>
        </div>
      </div>
    </div>
  </Container>
  <div class="md:h-1/5 h-80 w-full object-cover">
    <img src="@/assets/images/map.png" alt="map of birmingham" class="w-full h-full object-cover" />
  </div>
</template>

<script>
import Container from "../../components/layouts/Container.vue";
import Header from "@/components/base/Header";

export default {
  components: {
    Header,
    Container,
  },
};
</script>
