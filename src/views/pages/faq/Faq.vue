<template>
  <div>
    <!-- faq search section: not needed for now -->
    <section id="faq-search-filter" v-if="false">
      <b-card
        no-body
        class="faq-search"
        :style="{backgroundImage:`url(${require('@/assets/images/banner/banner.png')})`}"
      >
        <b-card-body class="text-center">
          <h2 class="text-primary">
            Let's answer some questions
          </h2>
          <b-card-text class="mb-2">
            or choose a category to quickly find the help you need
          </b-card-text>

          <!-- form -->
          <b-form class="faq-search-input">
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="SearchIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="searchbar"
                v-model="faqSearchQuery"
                placeholder="Search faq..."
              />
            </b-input-group>
          </b-form>
          <!-- form -->
        </b-card-body>
      </b-card>
    </section>
    <!--/ faq search section -->

    <!-- frequently asked questions tabs pills -->
    <section id="faq-tabs">
      <b-tabs
        vertical
        content-class="col-12 col-md-8 col-lg-9"
        pills
        nav-wrapper-class="faq-navigation col-md-4 col-lg-3 col-12"
        nav-class="nav-left"
      >

        <!-- payment tab -->
        <b-tab
          v-for="(categoryObj, categoryName, index) in faqData"
          :key="categoryName"
          :active="!index"
        >

          <!-- title -->
          <template #title>
            <feather-icon
              :icon="categoryObj.icon"
              size="18"
              class="mr-1"
            />
            <span class="font-weight-bold">{{ categoryObj.title }}</span>
          </template>

          <faq-question-answer :options="categoryObj" />
        </b-tab>
        <!--/ payment tab -->

        <!-- sitting lady image -->
        <template #tabs-end>
          <b-img
            fluid
            :src="require('@/assets/images/illustration/faq-illustrations.svg')"
            class="d-none d-md-block mt-auto"
          />
        </template>
        <!--/ sitting lady image -->
      </b-tabs>
    </section>
    <!--/ frequently asked questions tabs pills -->

    <Support />
    <!--/ contact us -->
  </div>
</template>

<script>
import {
  BCard, BCardBody, BForm, BInputGroup, BFormInput, BCardText, BInputGroupPrepend, BTabs, BTab, BImg, BRow, BCol,
} from 'bootstrap-vue'
import FaqQuestionAnswer from './FaqQuestionAnswer.vue'
import Support from "@/views/pages/support/Support.vue"

export default {
  components: {
    BForm,
    BCard,
    BRow,
    BCol,
    BCardBody,
    BInputGroup,
    BFormInput,
    BCardText,
    BInputGroupPrepend,
    BTabs,
    BTab,
    BImg,
    FaqQuestionAnswer,
    Support
  },
  data() {
    return {
      faqSearchQuery: '',
      faqData: {},
    }
  },
  watch: {
    faqSearchQuery: {
      immediate: true,
      handler() {
        this.fetchData()
      },
    },
  },
  methods: {
    fetchData() {
      this.$http.get('/faq/data', { params: { q: this.faqSearchQuery } }).then(res => { this.faqData = res.data })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-faq.scss';
</style>
