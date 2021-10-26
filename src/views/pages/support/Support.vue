<template>
  <section class="faq-contact">
    <b-row class="mt-5 pt-75 text-center">
      <b-col cols="12">
        <h2>You still have a question?</h2>
        <b-card-text class="mb-3">
          If you cannot find a question in our FAQ, you can always contact us.
          We will answer to you shortly!
        </b-card-text>
      </b-col>
      <b-col sm="6">
        <b-card class="shadow-none py-1 faq-contact-card">
          <b-avatar size="42" rounded variant="light-primary" class="mb-2">
            <feather-icon icon="PhoneCallIcon" size="18" />
          </b-avatar>
          <h4>+ (359) 885955926</h4>
          <span class="text-body">We are always happy to help!</span>
        </b-card>
      </b-col>
      <b-col sm="6">
        <b-card class="shadow-none py-1 faq-contact-card">
          <b-avatar size="42" rounded variant="light-primary" class="mb-2">
            <feather-icon icon="MailIcon" size="18" />
          </b-avatar>
          <h4>hello@bulkit.app</h4>
          <span class="text-body">Best way to get answer faster!</span>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import {
  BCard,
  BCardBody,
  BCardText,
  BRow,
  BCol,
  BAvatar,
} from "bootstrap-vue";

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BAvatar,
    BCardBody,
    BCardText,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-support.scss";
</style>
