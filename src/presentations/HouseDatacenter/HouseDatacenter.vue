<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useReveal } from '@/composables/useReveal';
import { useTitle } from '@/composables/useTitle';
import PresentationWrapper from '@/components/PresentationWrapper.vue';
import IntroSlides from '@/presentations/HouseDatacenter/slides/IntroSlides.vue';
import AudienceCalibrationSlides from '@/presentations/HouseDatacenter/slides/AudienceCalibrationSlides.vue';
import SpeakerIntroSlides from '@/presentations/HouseDatacenter/slides/SpeakerIntroSlides.vue';
import WhyIBuiltThisSlides from '@/presentations/HouseDatacenter/slides/WhyIBuiltThisSlides.vue';
import CoreThesisSlides from '@/presentations/HouseDatacenter/slides/CoreThesisSlides.vue';
import IaCLadderSlides from '@/presentations/HouseDatacenter/slides/IaCLadderSlides.vue';
import KubernetesAsDestinationSlides from '@/presentations/HouseDatacenter/slides/KubernetesAsDestinationSlides.vue';
import TerraformRoleSlides from '@/presentations/HouseDatacenter/slides/TerraformRoleSlides.vue';
import AnsibleRoleSlides from '@/presentations/HouseDatacenter/slides/AnsibleRoleSlides.vue';
import ProxmoxRoleSlides from '@/presentations/HouseDatacenter/slides/ProxmoxRoleSlides.vue';
import EndToEndFlowSlides from '@/presentations/HouseDatacenter/slides/EndToEndFlowSlides.vue';
import NetworkingRealitySlides from '@/presentations/HouseDatacenter/slides/NetworkingRealitySlides.vue';
import TailscaleHeadscaleSlides from '@/presentations/HouseDatacenter/slides/TailscaleHeadscaleSlides.vue';
import MikroTikAsCodeSlides from '@/presentations/HouseDatacenter/slides/MikroTikAsCodeSlides.vue';
import AutomationPolicySlides from '@/presentations/HouseDatacenter/slides/AutomationPolicySlides.vue';
import DemosSlides from '@/presentations/HouseDatacenter/slides/DemosSlides.vue';
import TitleSlide from '@/components/TitleSlide.vue';

const { initialize, destroy } = useReveal();

const title = 'I turned My House Into a Datacenter (And You Can Too)';

useTitle(title);

onMounted(async () => {
    await initialize();
});

onUnmounted(() => {
    destroy();
});
</script>

<template>
    <PresentationWrapper>
        <IntroSlides />
        <AudienceCalibrationSlides />
        <SpeakerIntroSlides />
        <WhyIBuiltThisSlides />
        <CoreThesisSlides />
        <IaCLadderSlides />
        <KubernetesAsDestinationSlides />
        <TerraformRoleSlides />
        <AnsibleRoleSlides />
        <ProxmoxRoleSlides />
        <NetworkingRealitySlides />
        <MikroTikAsCodeSlides />
        <TailscaleHeadscaleSlides />
        <AutomationPolicySlides />
        <EndToEndFlowSlides />
        <DemosSlides />
        <TitleSlide title="Questions?" />
    </PresentationWrapper>
</template>
