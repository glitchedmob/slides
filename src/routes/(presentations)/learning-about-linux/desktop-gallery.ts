import type PhotoSwipeLightbox from 'photoswipe/lightbox';
import type { RevealConfig, RevealPlugin } from 'reveal.js';

const desktops = [
    {
        // User-provided GNOME screenshot on Fedora.
        src: '/learning-about-linux/desktops/gnome.webp',
        width: 5116,
        height: 2880,
        title: 'GNOME · Activities overview',
        alt: 'GNOME Activities overview with workspaces, open windows, and an app dock',
    },
    {
        // https://kde.org/plasma-desktop/
        src: '/learning-about-linux/desktops/kde-plasma.webp',
        width: 1920,
        height: 1080,
        title: 'KDE Plasma',
        alt: 'KDE Plasma desktop with a bottom panel and application launcher open',
    },
    {
        // https://www.linuxmint.com/edition.php?id=326
        src: '/learning-about-linux/desktops/cinnamon.webp',
        width: 1920,
        height: 1200,
        title: 'Cinnamon · Linux Mint',
        alt: 'Linux Mint Cinnamon desktop with its application menu and bottom panel',
    },
    {
        // https://zorin.com/os/pro/
        src: '/learning-about-linux/desktops/zorin-windows-11.webp',
        width: 1368,
        height: 768,
        title: 'Zorin OS Pro · Windows 11-like layout',
        alt: 'Zorin OS Pro with a Windows 11-like centered taskbar and application menu',
    },
];

export default function DesktopGallery(): RevealPlugin {
    let lightbox: PhotoSwipeLightbox | undefined;
    let root: HTMLElement | null = null;
    let disposed = false;
    let restoreNavigation = () => {};

    const openGallery = (event: Event) => {
        const trigger =
            event.target instanceof Element ? event.target.closest<HTMLButtonElement>('[data-desktop-gallery]') : null;
        if (!trigger || !root?.contains(trigger)) return;
        event.preventDefault();
        trigger.focus();
        lightbox?.loadAndOpen(0);
    };

    return {
        id: 'desktop-gallery',
        async init(deck) {
            const { default: Lightbox } = await import('photoswipe/lightbox');
            if (disposed) return;

            root = deck.getRevealElement();
            if (!root) return;
            lightbox = new Lightbox({
                dataSource: desktops,
                pswpModule: () => import('photoswipe'),
                mainClass: 'linux-desktop-gallery',
                bgOpacity: 1,
                showHideAnimationType: 'none',
                padding: { top: 48, bottom: 0, left: 0, right: 0 },
                initialZoomLevel: (zoom) => {
                    if (!zoom.panAreaSize || !zoom.elementSize) return zoom.fit;
                    return Math.min(zoom.panAreaSize.x / zoom.elementSize.x, zoom.panAreaSize.y / zoom.elementSize.y);
                },
                arrowPrev: false,
                arrowNext: false,
                zoom: false,
                counter: false,
                closeTitle: 'Close gallery (Escape)',
                escKey: true,
                arrowKeys: true,
                trapFocus: true,
                returnFocus: true,
                imageClickAction: 'next',
                tapAction: 'next',
                doubleTapAction: false,
                bgClickAction: 'close',
            });

            let navigation: Pick<RevealConfig, 'keyboard' | 'touch' | 'mouseWheel'> | undefined;
            restoreNavigation = () => {
                if (!navigation) return;
                deck.configure(navigation);
                navigation = undefined;
            };
            lightbox.on('beforeOpen', () => {
                const { keyboard, touch, mouseWheel } = deck.getConfig();
                navigation = { keyboard, touch, mouseWheel };
                deck.configure({ keyboard: false, touch: false, mouseWheel: false });
            });
            lightbox.on('destroy', restoreNavigation);
            lightbox.on('uiRegister', () => {
                lightbox?.pswp?.ui?.registerElement({
                    name: 'desktop-name',
                    appendTo: 'root',
                    onInit(element, gallery) {
                        element.setAttribute('aria-live', 'polite');
                        const updateName = () => {
                            element.textContent = desktops[gallery.currIndex]?.title ?? '';
                        };
                        gallery.on('change', updateName);
                        updateName();
                    },
                });
            });
            lightbox.init();
            root.addEventListener('click', openGallery);
        },
        destroy() {
            disposed = true;
            root?.removeEventListener('click', openGallery);
            lightbox?.destroy();
            restoreNavigation();
        },
    };
}
