<script setup lang="ts">
import SlideTypeTwo from '@/components/SlideTypeTwo.vue';
</script>
<template>
    <SlideTypeTwo>
        <h2>What Can You Do With it?</h2>
    </SlideTypeTwo>

    <SlideTypeTwo>
        <div class="r-grid">
            <div class="r-col fragment">
                <h3>Web</h3>
                <ul>
                    <li>ASP.NET</li>
                    <li>Blazor (Server & WebAssembly)</li>
                </ul>
            </div>
            <div class="r-col fragment">
                <h3>Mobile</h3>
                <ul>
                    <li>Xamarin</li>
                    <li>MAUI</li>
                </ul>
            </div>
        </div>
        <br />
        <div class="r-grid">
            <div class="r-col fragment">
                <h3>Desktop</h3>
                <ul>
                    <li>Blazor Hybrid</li>
                    <li>WinUI and WinAppSDK</li>
                    <li>MAUI</li>
                </ul>
            </div>
            <div class="r-col fragment">
                <h3>Microservices and Cloud</h3>
                <ul>
                    <li>Serverless</li>
                    <li>Designed for Docker</li>
                </ul>
            </div>
        </div>
    </SlideTypeTwo>

    <SlideTypeTwo>
        <div class="r-grid">
            <div class="r-col fragment">
                <h3>Machine Learning</h3>
                <ul>
                    <li>ML.NET</li>
                    <li>Apache Spark</li>
                </ul>
            </div>
            <div class="r-col fragment">
                <h3>Game Development</h3>
                <ul>
                    <li>Unity</li>
                    <li>MonoGame</li>
                    <li>Godot</li>
                </ul>
            </div>
        </div>
        <br />
        <div class="fragment">
            <h3>IoT (Internet of Things)</h3>
            <ul>
                <li>IoT Libraries (including device bindings)</li>
                <li>Meadow</li>
            </ul>
        </div>
    </SlideTypeTwo>

    <SlideTypeTwo>
        <h4>It Does All of This While Using the Same:</h4>
        <ul class="fragment">
            <li>Programming languages</li>
            <li>Libraries</li>
            <li>Tools and techniques</li>
        </ul>
    </SlideTypeTwo>
</template>
