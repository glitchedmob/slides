import { ref } from 'vue';
import Reveal from 'reveal.js';

type RevealOnReadyCallback = (reveal: Reveal.Api) => void | Promise<void>;

const reveal = ref<Reveal.Api | undefined>();
const isReadyCallbacks = ref<RevealOnReadyCallback[]>([]);
const onReady = (callback: RevealOnReadyCallback) => {
    if (reveal.value) {
        callback(reveal.value);
        return;
    }

    isReadyCallbacks.value.push(callback);
};

export const useReveal = () => {
    const initialize = async () => {
        const revealInstance = new Reveal();

        await revealInstance.initialize({
            hash: true,
            respondToHashChanges: true,
            history: true,
            controls: true,
            progress: true,
            center: true,
            embedded: true,
            controlsTutorial: false,
        });

        reveal.value = revealInstance;
        isReadyCallbacks.value.forEach((cb) => cb(revealInstance));
        isReadyCallbacks.value = [];
    };

    const destroy = () => {
        reveal.value?.destroy();
        reveal.value = undefined;
        isReadyCallbacks.value = [];
    };

    return { reveal, onReady, initialize, destroy };
};

if (import.meta.hot) {
    import.meta.hot.on('vite:afterUpdate', () => {
        reveal.value?.sync();
    });
}
