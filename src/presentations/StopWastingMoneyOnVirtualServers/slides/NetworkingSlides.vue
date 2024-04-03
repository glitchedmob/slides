<script setup lang="ts">
import SlideTypeTwo from '@/components/SlideTypeTwo.vue';
</script>
<template>
    <SlideTypeTwo>
        <h2>Networking Basics</h2>
        <ul class="fragment">
            <li>IP Addresses</li>
            <li>DNS</li>
            <li>Ports</li>
            <li>NAT</li>
            <li>VPN</li>
            <li>Reverse Proxies</li>
        </ul>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h3>IP (Internet Protocol) Addresses</h3>
        <p class="fragment">Numeric labels used to identify devices on a network. For example 192.168.1.2</p>
        <ul class="fragment">
            <li>Anytime data is sent on the network it's to an IP Address</li>
            <li>
                Not tightly coupled to the device
                <ul>
                    <li>Can be reassigned to a different device</li>
                </ul>
            </li>
        </ul>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h3>DNS (Domain Name System)</h3>
        <p class="fragment">A system that allows computers to convert human friendly names (like sgf.dev) into an IP address</p>
        <p class="fragment">Essentially the phonebook of a network</p>
        <p class="fragment"><strong>Types:</strong> A, CNAME</p>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h3>Ports</h3>
        <p class="fragment">Used to identify a specific protocol or application to communicate with</p>
        <div class="fragment r-grid">
            <div class="r-col-2">
                <p>Some common protocols <br> and ports</p>
            </div>
            <div class="r-col-1">
                <ul>
                    <li>HTTP - 80</li>
                    <li>HTTPS - 443</li>
                    <li>SSH - 20</li>
                </ul>
            </div>
        </div>
        <p class="fragment">Senders specify a reply port when sending packets</p>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h3>NAT (Network Address Translation)</h3>
        <p class="fragment">Allows a network to share an IP when communicating with another network</p>
        <p class="fragment">Rewrites outgoing packets to use the shared address + a unique port for the reply address</p>
        <p class="fragment">Uses a table of those rewrites to do the inverse for incoming packets</p>
    </SlideTypeTwo>
</template>
