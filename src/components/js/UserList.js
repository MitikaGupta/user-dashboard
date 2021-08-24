import axios from 'axios'
  export default {
    data () {
    return {
      sortBy: 'name',
      sortDesc: false,
      search: '',
      headers: [
        { align: 'left', value: 'name'},
        { align: 'right', value: 'email'},
      ],
      options: [
          { item: 'name', name: 'Name' },
          { item: 'email', name: 'Email' }
      ],
      userData: [],
      selectedDropdown: null,
    }
  },
  mounted: function () {
      this.getUserList()
  },
  methods: {
    userClick: function(item){
      this.getUserId = item.id;
      this.$router.push({
        path: '/UserDetails', 
        query: {
              id: this.getUserId
          }
      });              
    },
    sortUsingDropDown: function () {
        this.sortBy = this.selectedDropdown;
    },
    getUserList: function () {
      var self = this
      const url = 'http://jsonplaceholder.typicode.com/users'
      axios.get(url, {
        dataType: 'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        credentials: 'include'
      })
      .then(function (response) {
        self.userData = response.data;
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}