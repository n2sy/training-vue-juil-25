<script setup>
import { RouterLink } from 'vue-router'

let props = defineProps(['selCand'])
</script>
<template>
  <div class="card-container">
    <div class="card">
      <div class="front">
        <div class="cover">
          <img src="/rotating_card_thumb2.png" />
        </div>
        <div class="user">
          <img class="img-circle" :src="selCand?.avatar" />
        </div>
        <div class="content">
          <div class="main">
            <h3 class="name">{{ selCand?.prenom }} {{ selCand?.nom }}</h3>
            <p class="profession">{{ selCand?.age }} ans</p>

            <p class="text-center">{{ selCand?.profession }} </p>
          </div>
          <div class="footer">
            <div class="rating"><i class="fa fa-mail-forward"></i> Auto Rotation</div>
          </div>
        </div>
      </div>
      <div class="back">
        <div class="header">
          <h5 class="motto">"To be or not to be, this is my awesome motto!"</h5>
        </div>
        <div class="content">
          <div class="main">
            <h4 class="text-center">Job Description</h4>
            <p class="text-center">
              Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...
            </p>

            <div class="stats-container">
              <div class="stats">
                <h4>235</h4>
                <p>Followers</p>
              </div>
              <div class="stats">
                <h4>114</h4>
                <p>Following</p>
              </div>
              <div class="stats">
                <h4>35</h4>
                <p>Projects</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="social-links text-center">
            <button class="btn btn-success">Recruter</button>
            <RouterLink :to="`/cv/${selCand.id}`" class="btn btn-info">Details</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('/rotating-card.css');
</style>
