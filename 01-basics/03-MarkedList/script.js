import { createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

// Требуется создать Vue приложение
const vm = createApp({
  data() {
    return {
      emails: emails,
      searchValue: '',
    };
  },
  computed: {
    filteredEmails() {
      let result = [];
      for (let i = 0; i < this.emails.length; i++) {
        if (this.emails[i].toLowerCase().includes(this.searchValue) && this.searchValue != '') {
          result.push({
            email: this.emails[i],
            marked: true,
          });
        } else {
          result.push({
            email: this.emails[i],
            marked: false,
          });
        }
      }
      return result;
    },
  },
}).mount('#app');
