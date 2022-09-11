<template>
  <nav>
    <router-link :to="{name:'home'}">Home Page</router-link> |
    <router-link :to="{name:'about'}">About Us</router-link>
    <router-view />
    <nav class="navbar navbar-expand-lg bg-info">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"></li>
            <li class="nav-item"></li>
            <li class="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
    <br>
    <div class="container text-center">
      <button class="btn btn-success" @click="displayCreate" v-text="create_button_text"></button>
    </div>
    
    <div v-if="view_all_city" class="container">
      <h1 class="text-center">All City Information</h1>
      <div v-for="city in city_information1" :key="city.city">
        <div class="container border">
        <i><h2>{{city.city}}</h2></i>
        <ol>
          <li>State: {{city.state}}</li>
          <li>Rank: {{city.rank}}</li>
          <li>Growth from 2000 to 2013: {{city.growth_from_2000_to_2013}}</li>
          <li>Population: {{city.population}}</li>
          <li>Latitude: {{city.latitude}}</li>
          <li>Longitude: {{city.longitude}}</li>
        </ol>
        <button class="btn btn-info" @click="editCity(city)">Edit City Information</button>
        <button class="btn btn-danger" @click="deleteCity(city)">Delete This City Entry</button>
      </div>
      </div>
    </div>
    <div v-if="view_create_city" class="container">
      <h1 class="text-center">Create</h1>
      <form @submit="addCity">
        <label for="city" class="form-label">Enter the city name: </label>
        <input type="text" id="city" class="form-control" v-model="new_city.city" placeholder="City Name">

        <label for="growth_from_2000_to_2013" class="form-label">Enter the Growth from 2000 to 2013: </label>
        <input type="text" id="growth_from_2000_to_2013" class="form-control" v-model="new_city.growth_from_2000_to_2013" placeholder="Enter the Growth from 2000 to 2013">

        <label for="latitude" class="form-label">Enter the latitude: </label>
        <input type="number" id="latitude" class="form-control" v-model="new_city.latitude">

        <label for="longitude" class="form-label">Enter the longitude: </label>
        <input type="number" id="longitude" class="form-control" v-model="new_city.longitude">

        <label for="population" class="form-label">Enter the population: </label>
        <input type="text" id="population" class="form-control" v-model="new_city.population" placeholder="Population">

        <label for="rank" class="form-label">Enter the rank: </label>
        <input type="text" id="rank" class="form-control" v-model="new_city.rank" placeholder="Rank of the City">

        <label for="state" class="form-label">Enter the state: </label>
        <input type="text" id="state" class="form-control" v-model="new_city.state" placeholder="State">
        <button class="btn btn-secondary">Create</button>
      </form>
    </div>
    <div v-if="view_edit_city" class="container">
      <h1 class="text-center">Edit The City Information of: {{edit_city_information.city}}</h1>
      <form @submit="afterEditing">
        <label for="state" class="form-label">Enter the State Name: </label>
        <input type="text" id="state" class="form-control" v-model="edit_city_information.state" >

        <label for="growth_from_2000_to_2013" class="form-label">Enter the Growth from 2000 to 2013: </label>
        <input type="text" id="growth_from_2000_to_2013" class="form-control" v-model="edit_city_information.growth_from_2000_to_2013" >

        <label for="rank" class="form-label">Enter the rank: </label>
        <input type="text" id="rank" class="form-control" v-model="edit_city_information.rank" >

        <label for="population" class="form-label">Enter the population: </label>
        <input type="text" id="population" class="form-control" v-model="edit_city_information.population" >
        <br>
        <button class="btn btn-primary">Edit The Information</button>
      </form>
    </div>
    
    <br>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      create_button_text : "Create a New City Entry",
      view_all_city : true,
      view_create_city : false,
      view_edit_city : false,
      new_city : {
        city : "",
        growth_from_2000_to_2013 : "",
        latitude :0 ,
        longitude : 0,
        population : "",
        rank : "",
        state: ""
      },
      city_information1: [
        {
          city: "New York",
          growth_from_2000_to_2013: "4.8%",
          latitude: 40.7127837,
          longitude: -74.0059413,
          population: "8405837",
          rank: "1",
          state: "New York",
        },
        {
          city: "Los Angeles",
          growth_from_2000_to_2013: "4.8%",
          latitude: 34.0522342,
          longitude: -118.2436849,
          population: "3884307",
          rank: "2",
          state: "California",
        },
        {
          city: "Chicago",
          growth_from_2000_to_2013: "-6.1%",
          latitude: 41.8781136,
          longitude: -87.6297982,
          population: "2718782",
          rank: "3",
          state: "Illinois",
        },
      ],
      edit_city_information : 0
    };
  },
  methods : {
    displayCreate(){
      this.create_button_text = "View All City Information"
      if(this.view_edit_city){
        this.view_edit_city = !this.view_edit_city
        this.view_create_city = !this.view_create_city
      }else{
        this.view_all_city = !this.view_all_city
        this.view_create_city = !this.view_create_city
      }
    },
    addCity() {
      if(this.create_button_text){
        this.create_button_text = "Create a New City Information"
      }
      this.city_information1.push(this.new_city)
      this.view_create_city = !this.view_create_city
      this.view_all_city = !this.view_all_city
    },
    editCity(single_city){
      if(this.view_all_city){
        this.create_button_text = "Create a New City Information"
      }
      this.view_all_city = !this.view_all_city
      this.view_edit_city = !this.view_edit_city
      this.edit_city_information = single_city
    },
    afterEditing(){
      this.view_edit_city = !this.view_edit_city
      this.view_all_city = !this.view_all_city
    },
    deleteCity(single_city){
      this.city_information1.pop(single_city)
    }
  }
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
