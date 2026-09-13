<script lang="ts">
    import PresentationWrapper from '$lib/components/PresentationWrapper.svelte';
    import IntroSlides from '$lib/presentations/HouseDatacenter/slides/IntroSlides.svelte';
    import AudienceCalibrationSlides from '$lib/presentations/HouseDatacenter/slides/AudienceCalibrationSlides.svelte';
    import SpeakerIntroSlides from '$lib/presentations/HouseDatacenter/slides/SpeakerIntroSlides.svelte';
    import WhyIBuiltThisSlides from '$lib/presentations/HouseDatacenter/slides/WhyIBuiltThisSlides.svelte';
    import CoreThesisSlides from '$lib/presentations/HouseDatacenter/slides/CoreThesisSlides.svelte';
    import IaCLadderSlides from '$lib/presentations/HouseDatacenter/slides/IaCLadderSlides.svelte';
    import KubernetesAsDestinationSlides from '$lib/presentations/HouseDatacenter/slides/KubernetesAsDestinationSlides.svelte';
    import TerraformRoleSlides from '$lib/presentations/HouseDatacenter/slides/TerraformRoleSlides.svelte';
    import AnsibleRoleSlides from '$lib/presentations/HouseDatacenter/slides/AnsibleRoleSlides.svelte';
    import ProxmoxRoleSlides from '$lib/presentations/HouseDatacenter/slides/ProxmoxRoleSlides.svelte';
    import EndToEndFlowSlides from '$lib/presentations/HouseDatacenter/slides/EndToEndFlowSlides.svelte';
    import NetworkingRealitySlides from '$lib/presentations/HouseDatacenter/slides/NetworkingRealitySlides.svelte';
    import TailscaleHeadscaleSlides from '$lib/presentations/HouseDatacenter/slides/TailscaleHeadscaleSlides.svelte';
    import MikroTikAsCodeSlides from '$lib/presentations/HouseDatacenter/slides/MikroTikAsCodeSlides.svelte';
    import AutomationPolicySlides from '$lib/presentations/HouseDatacenter/slides/AutomationPolicySlides.svelte';
    import DemosSlides from '$lib/presentations/HouseDatacenter/slides/DemosSlides.svelte';
    import TitleSlide from '$lib/components/TitleSlide.svelte';
</script>

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
