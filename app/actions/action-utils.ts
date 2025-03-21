export const slugify = (value: string) => {
    return value
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, '-')
        .replace(/^[-]+|[-]+$/g, '');
};