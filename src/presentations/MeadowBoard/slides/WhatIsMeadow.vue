<script setup lang="ts">
import SlideTypeOne from '@/components/SlideTypeOne.vue';
import SlideTypeTwo from '@/components/SlideTypeTwo.vue';
</script>

<template>
    <SlideTypeTwo>
        <h2>What is IoT?</h2>
        <ul class="fragment">
            <li>
                Internet of Things
                <ul>
                    <li>AKA internet connected physical devices</li>
                </ul>
            </li>
            <li>Bridges the physical and digital world</li>
            <li>Latest software revolution</li>
        </ul>
    </SlideTypeTwo>

    <SlideTypeTwo>
        <h2>What is Meadow?</h2>
        <ul class="fragment">
            <li>A microcontroller from Wilderness Labs</li>
            <li>Runs application written in .NET</li>
            <li>Plug & play drivers for additional hardware</li>
        </ul>
    </SlideTypeTwo>

    <SlideTypeTwo>
        <div class="r-grid">
            <div class="r-col">
                <h4>F7v2 Feather</h4>
                <img
                    src="https://cdn.shopify.com/s/files/1/0241/9920/0831/products/meadow-front-back_f38d3509-6f31-4002-97a2-4379de656a8b_1024x1024@2x.jpg?v=1647573014"
                    alt=""
                />
            </div>
            <div class="r-col">
                <h4>F7v2 Core-Compute</h4>
                <img
                    src="https://cdn.shopify.com/s/files/1/0241/9920/0831/products/IMG_4530_1024x1024@2x.jpg?v=1663401096"
                    alt=""
                />
            </div>
        </div>
    </SlideTypeTwo>

    <SlideTypeOne>
        <h2>Specs</h2>
        <ul class="fragment">
            <li>
                STM32F7 @ 216 MHz
                <ul>
                    <li>2D graphics and JPEG accelerators</li>
                </ul>
            </li>
            <li>32MB RAM</li>
            <li>64MB flash storage</li>
            <li>
                ESP32 coprocessor
                <ul>
                    <li>2.4GHz WiFi - Bluetooth</li>
                </ul>
            </li>
        </ul>
    </SlideTypeOne>

    <SlideTypeOne>
        <img
            class="stretch"
            src="http://developer.wildernesslabs.co/Common_Files/Meadow_F7v2_Micro_Pinout.svg"
            alt=""
        />
    </SlideTypeOne>

    <SlideTypeOne>
        <h2>The Software Stack</h2>
        <ul class="fragment">
            <li>
                Meadow OS
                <ul>
                    <li>RTOS based on NuttX</li>
                </ul>
            </li>
            <li>Mono Runtime</li>
            <li>Meadow.Core</li>
            <li>Meadow.Foundation</li>
        </ul>
    </SlideTypeOne>
</template>
