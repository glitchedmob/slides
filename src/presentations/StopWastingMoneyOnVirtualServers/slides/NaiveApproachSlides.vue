<script setup lang="ts">
import SlideTypeOne from '@/components/SlideTypeOne.vue';
</script>

<template>
    <SlideTypeOne>
        <h2>A Naive Approach</h2>
    </SlideTypeOne>
    <SlideTypeOne>
        <h3>Port Forwarding</h3>
        <p class="fragment">Allows incoming traffic on a port to be forwarded to a specific device on the network</p>
        <ul>
            <li class="fragment">Needs to be supported by your NAT device (router)</li>
            <li class="fragment">Your ISP may explicitly block this feature</li>
            <li class="fragment">Your ISP may give your NAT device a different IP at any time</li>
        </ul>
    </SlideTypeOne>
    <SlideTypeOne>
        <h3>Dynamic DNS</h3>
        <p class="fragment">Uses an agent on a device in your network to detect public IP changes</p>
        <p class="fragment">When a change is detected, it dynamically updates a DNS record</p>
    </SlideTypeOne>
    <SlideTypeOne>
        <h3>Why Is This Naive?</h3>
        <ul class="fragment">
            <li class="fragment">May not be option</li>
            <li class="fragment">
                Exposes your home IP to the public
                <ul>
                    <li>This can be mitigated</li>
                </ul>
            </li>
            <li class="fragment">
                Is likely against your ISPs TOS
                <ul>
                    <li>And could be trivially detected</li>
                </ul>
            </li>
        </ul>
    </SlideTypeOne>
</template>
