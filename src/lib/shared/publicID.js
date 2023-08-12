// @ts-nocheck
const SLUG_SUFFIX_CHARS = 'abcdefghijklmnopqrstuvwxyz1234567890'

const generateRandomSuffix = (length = 8) =>
    Array(length)
        .fill(0)
        .map(
            () =>
                SLUG_SUFFIX_CHARS[~~(Math.random() * SLUG_SUFFIX_CHARS.length)]
        )
        .join('')

export const createPublicID = (name, count) => {
    const splitName = name.split(" ").map(part => part.trim()).join('');
    // const sanitizedTitle = name.replace(/[^a-zA-Z0-9-]+/g, '-').toLowerCase()
    // const suffix = generateRandomSuffix()
    return count > 0 ? `${splitName}${count}` : `${splitName}`
}