<script setup lang="ts">
import SlideTypeTwo from '@/components/SlideTypeTwo.vue';
</script>

<template>
    <SlideTypeTwo>
        <h2>More Networking Concepts</h2>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h3>Proxy</h3>
        <p class="fragment">A server that forwards traffic from a client on to a destination</p>
        <p class="fragment">Hides the true client from the server</p>
        <h3 class="fragment">Reverse Proxy</h3>
        <p class="fragment">A server that takes incoming traffic and forwards it to another server</p>
        <p class="fragment">Hides the true server from the client</p>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h3>VPN (Virtual Private Network)</h3>
        <p class="fragment">Creates a secure tunnel to a VPN server that all traffic flows to first</p>
        <div>
            <p class="fragment">In practice this means</p>
            <ul>
                <li class="fragment">Packets are encrypted on device</li>
                <li class="fragment">They are then sent to the VPN server</li>
                <li class="fragment">The VPN server decrypts the packets</li>
                <li class="fragment">And then forwards them on to real destination</li>
            </ul>
        </div>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h3>VPN Part 2</h3>
        <div class="r-grid fragment">
            <div class="r-col">
                <p>Allows machines physically apart to be on the same "virtual" network</p>
            </div>
            <div class="r-col">
                <img
                    src="@/assets/images/vpn-diagram.jpg"
                    alt="A Diagram of a VPN showing multiple physical locations"
                />
            </div>
        </div>
    </SlideTypeTwo>
</template>
