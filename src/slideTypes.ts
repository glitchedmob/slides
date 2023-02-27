export const slideTypes = {
    none: 'none',
    title: 'title',
    type1: 'type1',
    type2: 'type2',
} as const;

export type SlideTypes = (typeof slideTypes)[keyof typeof slideTypes];

export const parseSlideType = (value: string | undefined): SlideTypes => {
    return Object.values(slideTypes).find((slideType) => slideType === value) ?? slideTypes.none;
};
