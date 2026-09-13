<script setup lang="ts">
import RevealPresentation from '@/components/RevealPresentation.vue';
import { useTitle } from '@/composables/useTitle';
import ProfessionalHeadshotSlide from './slides/professional-headshot-slide.vue';
import LookingProfessionalSlide from './slides/looking-professional-slide.vue';
import InterviewFollowupSlide from './slides/interview-followup-slide.vue';
import SettingTheStageSlide from './slides/setting-the-stage-slide.vue';
import EverythingElseSlide from './slides/everything-else-slide.vue';
import SocialProfilesSlide from './slides/social-profiles-slide.vue';
import EmailAddressSlide from './slides/email-address-slide.vue';
import CoverLetterSlide from './slides/cover-letter-slide.vue';
import NetworkingSlide from './slides/networking-slide.vue';
import InterviewSlide from './slides/interview-slide.vue';
import PortfolioSlide from './slides/portfolio-slide.vue';
import PresenterSlide from './slides/presenter-slide.vue';
import ApplyingSlide from './slides/applying-slide.vue';
import LinkedinSlide from './slides/linkedin-slide.vue';
import ProjectsSlide from './slides/projects-slide.vue';
import TwitterSlide from './slides/twitter-slide.vue';
import WebsiteSlide from './slides/website-slide.vue';
import GithubSlide from './slides/github-slide.vue';
import ResumeSlide from './slides/resume-slide.vue';
import TitleSlide from './slides/title-slide.vue';
import BlogSlide from './slides/blog-slide.vue';

useTitle('How To Land Your First Dev Job');
</script>

<template>
    <RevealPresentation class="first-dev-job">
        <TitleSlide />
        <SettingTheStageSlide />
        <PresenterSlide header-text="Who Am I?" />
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
        <PresenterSlide header-text="Questions?" />
    </RevealPresentation>
</template>

<style lang="scss" src="./theme.scss"></style>
