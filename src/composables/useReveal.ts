import { ref } from 'vue';
import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealNotes from 'reveal.js/plugin/notes/notes';

type RevealOnReadyCallback = (reveal: Reveal.Api) => void | Promise<void>;

export const reveal = ref<Reveal.Api | undefined>();
const isReadyCallbacks = ref<RevealOnReadyCallback[]>([]);
const onReady = (callback: RevealOnReadyCallback) => {
    if (reveal.value) {
        callback(reveal.value);
        return;
    }

    isReadyCallbacks.value.push(callback);
};

const revealOptions = {
    hash: true,
    respondToHashChanges: true,
    history: true,
    controls: true,
    progress: true,
    center: true,
    embedded: true,
    controlsTutorial: false,
    plugins: [RevealHighlight, RevealNotes],
} satisfies Reveal.Options;

const initialize = async () => {
    if (reveal.value) {
        throw new Error('Reveal already initialized, please call `destroy` first before creating a new instance.');
    }

    const revealInstance = new Reveal();

    await revealInstance.initialize(revealOptions);

    reveal.value = revealInstance;
    isReadyCallbacks.value.forEach((cb) => cb(revealInstance));
    isReadyCallbacks.value = [];
};

const destroy = () => {
    reveal.value?.destroy();
    reveal.value = undefined;
    isReadyCallbacks.value = [];
};

export const useReveal = () => {
    return { reveal, onReady, initialize, destroy };
};
