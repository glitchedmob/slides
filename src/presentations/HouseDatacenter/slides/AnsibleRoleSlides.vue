<script setup lang="ts">
import SlideTypeOne from '@/components/SlideTypeOne.vue';
</script>

<template>
    <SlideTypeOne>
        <h2>Ansible</h2>
        <ul>
            <li class="fragment">Handles operating system configuration after provisioning</li>
            <li class="fragment">Agentless: connects over SSH, no daemon required on targets</li>
            <li class="fragment">Playbooks define desired packages, files, services, and tasks</li>
            <li class="fragment">
                Inventory defines what machines are targeted
                <ul>
                    <li>Terraform integration can generate that inventory</li>
                </ul>
            </li>
        </ul>
    </SlideTypeOne>
</template>
