<script setup lang="ts">
import SlideTypeTwo from '@/components/SlideTypeTwo.vue';
</script>
<template>
    <SlideTypeTwo>
        <h2>What Can You Do With It?</h2>
    </SlideTypeTwo>

    <SlideTypeTwo>
        <h3>Devices</h3>
        <div class="r-grid">
            <div class="r-col">
                <ul>
                    <li>Keypads/Keyboards</li>
                    <li>Buttons</li>
                    <li>Joysticks</li>
                    <li>Controllers</li>
                </ul>
            </div>
            <div class="r-col fragment">
                <ul>
                    <li>LEDs</li>
                    <li>Displays</li>
                    <li>Speakers</li>
                    <li>Cameras</li>
                </ul>
            </div>
        </div>
        <br />
        <div class="r-grid">
            <div class="r-col fragment">
                <ul>
                    <li>Temperature Sensor</li>
                    <li>Moisture Sensor</li>
                    <li>Motion Sensor</li>
                    <li>Light Sensor</li>
                </ul>
            </div>
            <div class="r-col fragment">
                <ul>
                    <li>Servos/Motors</li>
                    <li>Relays</li>
                    <li>GPS</li>
                </ul>
            </div>
        </div>
    </SlideTypeTwo>

    <SlideTypeTwo>
        <h3>Projects</h3>
        <div class="r-stack">
            <div class="r-grid">
                <div class="r-col">
                    <video
                        data-autoplay
                        loop
                        muted
                        playsinline
                        autoplay
                        src="https://hackster.imgix.net/uploads/attachments/1417782/simon_zp4egD4FyG.gif?auto=format%2Ccompress&gifq=35&w=900&h=675&fit=min&fm=mp4"
                    />
                    <a
                        href="https://www.hackster.io/wilderness-labs/build-your-own-simon-game-with-meadow-3701d5"
                        target="_blank"
                    >
                        Build Your Own Simon Game with Meadow
                    </a>
                    <br />
                    <br />
                </div>
                <div class="r-col">
                    <video
                        data-autoplay
                        loop
                        muted
                        playsinline
                        autoplay
                        src="https://hackster.imgix.net/uploads/attachments/1167153/gif-200730_173650_(1)_gKE8yZxLnU.gif?auto=format%2Ccompress&amp;gifq=35&amp;w=900&amp;h=675&amp;fit=min&amp;fm=mp4"
                    />
                    <a
                        href="https://www.hackster.io/wilderness-labs/control-a-servo-with-a-rotary-encoder-using-meadow-47c003"
                        target="_blank"
                    >
                        Control a Servo with a Rotary Encoder Using Meadow
                    </a>
                </div>
            </div>
        </div>
    </SlideTypeTwo>

    <SlideTypeTwo>
        <h3>Projects Part 2</h3>

        <div class="r-grid">
            <div class="r-col">
                <video
                    data-autoplay
                    loop
                    muted
                    playsinline
                    autoplay
                    src="https://hackster.imgix.net/uploads/attachments/1418774/gif-220311_001955_IFKRFNqQ1y.gif?auto=format%2Ccompress&gifq=35&w=900&h=675&fit=min&fm=mp4"
                />
                <a
                    href="https://www.hackster.io/wilderness-labs/weather-station-using-public-web-service-using-meadow-e47765"
                    target="_blank"
                >
                    Weather Station Using Public Web Service Using Meadow
                </a>
            </div>
            <div class="r-col">
                <video
                    data-autoplay
                    loop
                    muted
                    playsinline
                    autoplay
                    src="https://hackster.imgix.net/uploads/attachments/1535188/gif-221211_005219_j0yvpQKoRc.gif?auto=format%2Ccompress&gifq=35&w=900&h=675&fit=min&fm=mp4"
                />
                <a
                    href="https://www.hackster.io/wilderness-labs/roll-an-led-dice-with-a-push-button-using-meadow-3beb46"
                    target="_blank"
                >
                    Roll an LED Dice with a push button using Meadow
                </a>
            </div>
        </div>
    </SlideTypeTwo>
</template>
