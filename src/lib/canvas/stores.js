import { writable } from "svelte/store";

export const lineWidth = writable(2);
export const strokeColor = writable('red');
export const globalCompositeOperation = writable('source-over');
export const stMode = writable(false);
export const arcMode = writable(false);
export const rectMode = writable(false);
export const drawMode = writable('pen');
export const clearAll = writable(false);

export const writeMode = writable(false);
export const anchors = writable([]);