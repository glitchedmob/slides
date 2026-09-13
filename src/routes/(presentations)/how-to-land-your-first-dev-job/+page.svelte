<script lang="ts">
    import presentation from './presentation';
    import RevealPresentation from '$lib/components/RevealPresentation.svelte';
    import ProfessionalHeadshotSlide from './slides/professional-headshot-slide.svelte';
    import LookingProfessionalSlide from './slides/looking-professional-slide.svelte';
    import InterviewFollowupSlide from './slides/interview-followup-slide.svelte';
    import SettingTheStageSlide from './slides/setting-the-stage-slide.svelte';
    import EverythingElseSlide from './slides/everything-else-slide.svelte';
    import SocialProfilesSlide from './slides/social-profiles-slide.svelte';
    import EmailAddressSlide from './slides/email-address-slide.svelte';
    import CoverLetterSlide from './slides/cover-letter-slide.svelte';
    import NetworkingSlide from './slides/networking-slide.svelte';
    import InterviewSlide from './slides/interview-slide.svelte';
    import PortfolioSlide from './slides/portfolio-slide.svelte';
    import PresenterSlide from './slides/presenter-slide.svelte';
    import ApplyingSlide from './slides/applying-slide.svelte';
    import LinkedinSlide from './slides/linkedin-slide.svelte';
    import ProjectsSlide from './slides/projects-slide.svelte';
    import TwitterSlide from './slides/twitter-slide.svelte';
    import WebsiteSlide from './slides/website-slide.svelte';
    import GithubSlide from './slides/github-slide.svelte';
    import ResumeSlide from './slides/resume-slide.svelte';
    import TitleSlide from './slides/title-slide.svelte';
    import BlogSlide from './slides/blog-slide.svelte';
</script>

<svelte:head>
    <title>{presentation.title}</title>
</svelte:head>

<RevealPresentation
    theme="custom"
    class="bg-[#263238] font-normal [--r-background-color:#263238] [--r-link-color-hover:#8dcffc] [--r-main-font:var(--font-sans)] [--r-selection-background-color:#bee4fd]"
>
    <TitleSlide />
    <SettingTheStageSlide />
    <PresenterSlide headerText="Who Am I?" />
    <LookingProfessionalSlide />
    <EmailAddressSlide />
    <ProfessionalHeadshotSlide />
    <SocialProfilesSlide />
    <GithubSlide />
    <LinkedinSlide />
    <TwitterSlide />
    <PortfolioSlide />
    <WebsiteSlide />
    <ProjectsSlide />
    <BlogSlide />
    <EverythingElseSlide />
    <NetworkingSlide />
    <ResumeSlide />
    <CoverLetterSlide />
    <ApplyingSlide />
    <InterviewSlide />
    <InterviewFollowupSlide />
    <PresenterSlide headerText="Questions?" />
</RevealPresentation>
