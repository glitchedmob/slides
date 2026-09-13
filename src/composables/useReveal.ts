import { shallowRef } from 'vue';
import Reveal, { type RevealApi, type RevealConfig } from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight';
import RevealNotes from 'reveal.js/plugin/notes';

type RevealOnReadyCallback = (reveal: RevealApi) => void | Promise<void>;

export const reveal = shallowRef<RevealApi>();
let isReadyCallbacks: RevealOnReadyCallback[] = [];
const onReady = (callback: RevealOnReadyCallback) => {
    if (reveal.value?.isReady()) {
        callback(reveal.value);
        return;
    }

    isReadyCallbacks.push(callback);
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
} satisfies RevealConfig;

const initialize = async (element: HTMLElement, options: RevealConfig = {}) => {
    if (reveal.value) {
        throw new Error('Reveal already initialized, please call `destroy` first before creating a new instance.');
    }

    const instance = new Reveal(element);
    // Store the instance before awaiting plugins so unmount can destroy a pending deck.
    reveal.value = instance;
    try {
        await instance.initialize({
            ...revealOptions,
            ...options,
            plugins: [...revealOptions.plugins, ...(options.plugins ?? [])],
        });
    } catch (error) {
        if (reveal.value === instance) destroy();
        throw error;
    }

    if (reveal.value !== instance) return;
    const callbacks = isReadyCallbacks;
    isReadyCallbacks = [];
    callbacks.forEach((callback) => callback(instance));
};

const destroy = () => {
    reveal.value?.destroy();
    reveal.value = undefined;
    isReadyCallbacks = [];
};

export const useReveal = () => {
    return { reveal, onReady, initialize, destroy };
};
