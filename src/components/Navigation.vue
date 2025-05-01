<template>
    <nav>
      <router-link to="/">
        <img id="logo" src="@/assets/app_logo.png" alt="Brill Logo">
      </router-link>
  
      <ul>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/report-bug">Report a Bug</router-link></li> 
        </ul>
    </nav>
    <header></header>
  </template>
  
  <script setup>
  // Component logic here
  </script>
  
  <style scoped>
    nav{
      display: flex;
      justify-content: space-between;
      max-height: 10rem;
      padding-top: 30px;
      padding-left: 20vh;
      padding-right: 20vh;
    }
  
    ul{
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    a{
      text-decoration: none;
      color: white;
    }
  
    li{
      padding: 20px;
      list-style-type: none;
    }
  
    #logo{
      width:50px;
    }
  
    .router-link-active {
      font-weight: bold;
      text-decoration: underline;
    }
  </style>
  