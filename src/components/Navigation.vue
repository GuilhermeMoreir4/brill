<template>
    <nav>
      <img id = "logo" src = "@/assets/logo.png" alt = "Brill Logo">
  
      <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href = "#">Report a bug</a></li> 
        </ul>
    </nav>
    <header></header>
  </template>
  
  <script setup>
  // Component logic here
  </script>
  
  <style>
    nav{
      display: flex;
      justify-content: space-between;
      max-height: 10rem;
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
      width:100px;
    }
  </style>
  