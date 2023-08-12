import { bounceOut, backOut, elasticOut, sineOut } from 'svelte/easing';

export function typewriter(node, { delay=0, speed = 1 }) {
    const valid = (
        node.childNodes.length === 1 &&
        node.childNodes[0].nodeType === Node.TEXT_NODE
    );

    if (!valid) {
        throw new Error(`This transition only works on elements with a single text node child`);
    }

    const text = node.textContent;
    const duration = text.length / (speed * 0.01);

    return {
        delay,
        duration,
        tick: t => {
            const i = ~~(text.length * t);
            node.textContent = text.slice(0, i);
        }
    };
}

export function rotate3Din(node, { x, y, delay = 0, duration = 1000}) {
    return {
        delay,
        duration,
        css: t => {
            const eased = bounceOut(t);
            return `
                transform-style: preserve-3d;
                transform-origin: ${x}px ${y}px;
                transform: rotateY(${90*(1-eased)}deg);
            `
        }
    }
}

export function rotate3Dout(node, { duration = 1000, x, y }) {
    return {
        duration,
        css: t => {
            const eased = backOut(t);
            return `
                
                
                transform: translateX(100px);
            `
        }
    }
}

export function zoom(node, { delay=0, duration=1000, start=0, r=1, easing = sineOut}) {
    return {
        delay,
        duration,
        css: t => {
            const eased = easing(t)
            return `
                r: ${eased*r}px;
            `
        }
    }
}