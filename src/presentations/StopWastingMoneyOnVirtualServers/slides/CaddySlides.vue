<script setup lang="ts">
import SlideTypeOne from '@/components/SlideTypeOne.vue';
</script>

<template>
    <SlideTypeOne>
        <h2>Caddy</h2>
    </SlideTypeOne>
    <SlideTypeOne>
        <h3>What Is It?</h3>
        <p class="fragment">Caddy is a very easy to use reverse proxy server</p>
        <p class="fragment">Has comparable features to others such as Nginx or HaProxy</p>
        <p class="fragment">It can seamlessly generate SSL certificates and keep them updated</p>
    </SlideTypeOne>
    <SlideTypeOne>
        <h3>Caddy Setup (Docker Compose)</h3>
        <pre><code data-trim data-noescape data-line-numbers="|2|3|4|5-9|10-17|11">
services:
  reverse-proxy:
    image: caddy:latest
    restart: always
    ports:
      - "80:80"
      - "443:443"
      - "443:443/udp"
      - "2019:2019"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - caddy_data:/data
      - caddy_config:/config

volumes:
  caddy_data:
  caddy_config:
        </code></pre>
    </SlideTypeOne>
    <SlideTypeOne>
        <h3>Caddy Setup (Caddyfile)</h3>
        <pre><code data-trim data-noescape data-line-numbers="|2">
https://social.sgf.dev {
	reverse_proxy 10.0.0.3:9000
}
        </code></pre>
    </SlideTypeOne>
</template>
