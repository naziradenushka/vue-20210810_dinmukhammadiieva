import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',
  fetchMeetupById,
  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },
  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      meetup: null,
      error: false,
    };
  },
  watch: {
    meetupId(newValue) {
      this.meetupById();
    },
  },
  mounted() {
    this.meetupById();
  },
  methods: {
    meetupById() {
      this.meetup = null;
      this.$options
        .fetchMeetupById(this.meetupId)
        .then((meetup) => {
          this.error = false;
          this.meetup = meetup;
        })
        .catch((e) => {
          this.meetup = null;
          this.error = e.message;
        });
    },
  },

  template: `
    <div class="page-meetup">
    
      <meetup-view v-if="!error && meetup" :meetup="meetup" />

      <ui-container v-else-if="!error && meetup == null">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-if="error">
        <ui-alert>{{ error }}</ui-alert>
      </ui-container>
    </div>`,
});
