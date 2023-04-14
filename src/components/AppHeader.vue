


<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand"> <img class="image_header_nav"
          src="https://marketplace.canva.com/EAE5Ap-t-S4/1/0/1600w/canva-red-event-music-logo---logos-xyw7H3TZiMI.jpg"
          alt="">
        <i class="fa-solid fa-music"></i> Music app </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Tùy chọn
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/" class="dropdown-item">
                Trang chủ </router-link>
              <div class="dropdown-divider"></div>
              <router-link to="/music/create/" class="dropdown-item">Đăng bài hát mới</router-link>
              <div class="dropdown-divider"></div>
              <router-link to="/me/stored/music/" class="dropdown-item">Danh sách nhạc</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



