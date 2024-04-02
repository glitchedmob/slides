<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    src: string;
    active: boolean;
    position: {
        x: number;
        y: number;
    };
}>();

const toX = computed(() => `${props.position.x}vw`);
const toY = computed(() => `${props.position.y}vh`);

const leaveX = computed(() => {
    if (props.position.x >= 50) {
        return `103vw`;
    }

    return '-3vw';
});
const leaveY = computed(() => `${props.position.y}vh`);
</script>

<template>
    <Transition>
        <div v-show="active" class="pattern-icon">
            <img :src="src" alt="" />
        </div>
    </Transition>
</template>

<style scoped lang="scss">
.pattern-icon {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(v-bind(toX), v-bind(toY));
    opacity: 1;

    &.v-enter-active,
    &.v-leave-active {
        transition:
            transform 400ms ease-in-out,
            opacity 400ms ease-in-out;
    }

    &.v-enter-active {
        transition-delay: 100ms;
    }

    &.v-enter-from,
    &.v-leave-to {
        transform: translate(v-bind(leaveX), v-bind(leaveY)) !important;
        opacity: 0;
    }

    img {
        display: block;
        margin: 0;
    }
}
</style>
