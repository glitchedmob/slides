<script lang="ts">
    import presentation from './presentation';
    import PresentationWrapper from '$lib/components/PresentationWrapper.svelte';
    import IntroSlides from './slides/IntroSlides.svelte';
    import AudienceCalibrationSlides from './slides/AudienceCalibrationSlides.svelte';
    import SpeakerIntroSlides from './slides/SpeakerIntroSlides.svelte';
    import WhyIBuiltThisSlides from './slides/WhyIBuiltThisSlides.svelte';
    import CoreThesisSlides from './slides/CoreThesisSlides.svelte';
    import IaCLadderSlides from './slides/IaCLadderSlides.svelte';
    import KubernetesAsDestinationSlides from './slides/KubernetesAsDestinationSlides.svelte';
    import TerraformRoleSlides from './slides/TerraformRoleSlides.svelte';
    import AnsibleRoleSlides from './slides/AnsibleRoleSlides.svelte';
    import ProxmoxRoleSlides from './slides/ProxmoxRoleSlides.svelte';
    import EndToEndFlowSlides from './slides/EndToEndFlowSlides.svelte';
    import NetworkingRealitySlides from './slides/NetworkingRealitySlides.svelte';
    import TailscaleHeadscaleSlides from './slides/TailscaleHeadscaleSlides.svelte';
    import MikroTikAsCodeSlides from './slides/MikroTikAsCodeSlides.svelte';
    import AutomationPolicySlides from './slides/AutomationPolicySlides.svelte';
    import DemosSlides from './slides/DemosSlides.svelte';
    import TitleSlide from '$lib/components/TitleSlide.svelte';
</script>

<svelte:head>
    <title>{presentation.title}</title>
</svelte:head>

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
