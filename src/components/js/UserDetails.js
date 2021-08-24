import axios from 'axios'
  export default {
    data () {
    return {
      user: [],
      id : 0,
      userPosts: [],
    }
  },
  mounted: function () {
    this.id =this.$route.query.id;
    this.getUserDetail();
    this.getUserPosts();
  },

  methods: {
    getUsers: function () {
      this.$router.push({
        path: '/UserList', 
        query: {
            id: this.getUserId
        }
      });              
    },
    getUserDetail: function () {
      var self = this
      const url = 'https://thingproxy.freeboard.io/fetch/http://jsonplaceholder.typicode.com/users/' + this.id;
      const updatedURL = url;
      axios.get(updatedURL, {
        dataType: 'json',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include'
      })
      .then(function (response) {
        self.user = response.data;
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    getUserPosts: function () {
      var self = this;
      const url = 'https://thingproxy.freeboard.io/fetch/http://jsonplaceholder.typicode.com/posts?userId=' + this.id;
      const updatedURL = url;
      axios.get(updatedURL, {
        dataType: 'json',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'include'
      })
      .then(function (response) {
        self.userPosts = response.data;
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}

  