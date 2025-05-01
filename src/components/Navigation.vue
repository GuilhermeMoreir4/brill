<template>
    <nav>
      <router-link to="/">
        <img id="logo" src="@/assets/app_logo.png" alt="Brill Logo">
      </router-link>
  
      <button class="mobile-menu-button" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
  
      <ul :class="{ 'mobile-menu': true, 'active': isMenuOpen }">
          <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
          <li><router-link to="/about" @click="closeMenu">About</router-link></li>
          <li><router-link to="/report-bug" @click="closeMenu">Report a Bug</router-link></li> 
        </ul>
    </nav>
    <header></header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  
  const closeMenu = () => {
    isMenuOpen.value = false;
  };
  </script>
  
  <style scoped>
    nav{
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-height: 10rem;
      padding: 1.5rem;
      position: relative;
    }
  
    ul{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0;
      padding: 0;
    }
    a{
      text-decoration: none;
      color: white;
      -webkit-tap-highlight-color: transparent;
    }
  
    li{
      padding: 1rem;
      list-style-type: none;
    }
  
    #logo{
      width: 50px;
      height: auto;
    }
  
    .router-link-active {
      font-weight: bold;
      text-decoration: underline;
    }
  
    .mobile-menu-button {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      -webkit-tap-highlight-color: transparent;
    }
  
    .mobile-menu-button span {
      display: block;
      width: 25px;
      height: 3px;
      background-color: white;
      margin: 5px 0;
      transition: 0.3s;
    }
  
    @media (max-width: 768px) {
      .mobile-menu-button {
        display: block;
      }
  
      ul {
        display: none;
      }
  
      .mobile-menu.active {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.9);
        padding: 5rem 2rem;
        z-index: 1000;
        margin: 0;
      }
  
      .mobile-menu.active li {
        padding: 1rem;
        text-align: center;
        width: 100%;
      }
  
      .mobile-menu.active a {
        display: block;
        padding: 1rem;
        font-size: 1.2rem;
        width: 100%;
      }
    }
  
    @media (min-width: 769px) {
      nav {
        padding-left: 20vh;
        padding-right: 20vh;
      }
    }
  </style>
  