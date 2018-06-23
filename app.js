"use strict";

const NYTURL = "https://api.nytimes.com/svc/topstories/v2/";
const APIKEY = config.KEY;
const SECTIONS = "home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world"; // From NYTimes"


function buildUrl(url) {
  return NYTURL + url + ".json?api-key=" + APIKEY
}

Vue.component('news-list', {
  props: ['results'],
  template: `
    <section>
      <div class="section" v-for="posts in processedPosts">
        <div class="col s12 m6 l4" v-for="post in posts">
          <a :href="post.url" target="_blank">
            <div class="card medium hoverable">
              <div class="card-image">
                <img :src="post.image_url" alt="image">
              </div>
              <div class="card-content">
                <span class="card-title">{{ post.title }}</span>
                <p>{{ post.abstract }}.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    `,
    computed: {
      processedPosts() {
        let posts = this.results;
  
        //Add image_url attribute
        posts.map(post => {
          let imgObj = post.multimedia.find(media => media.format === "superJumbo");
          post.image_url = imgObj ? imgObj.url : "http://placehold.it/300x200?text=NO IMAGE";
        });
  
        //Put array into Chunks
        let i, j, chunkedArray = [], chunk = 4;
        for (i=0, j=0; i < posts.length; i += chunk, j++) {
          chunkedArray[j] = posts.slice(i, i+chunk);
        }
  
        return chunkedArray;
      }
    }
});

const vm = new Vue({
  el: '#app',
  data: {
    results: [],
    sections: SECTIONS.split(', '), //create an array of the sections
    section: 'home', //set default section to 'home'
    loading: true
  },
  mounted() {
    this.getPosts('home');
  },
  methods: {
    getPosts(section) {
      let url = buildUrl(section);
      axios.get(url).then((response) => {
        this.loading = false;
        this.results = response.data.results;
      }).catch( error => {console.log(error); });
    }
  }
});