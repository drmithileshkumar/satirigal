//@ts-nocheck
import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const refreshApp = writable(false);
export const clipboardData = writable('');
export const currentPath = writable('Satirigal');
export const navList = writable([]);
export const darkMode = writable(false);
export const showSettings = writable(false)
export const loggedInUser = writable();
export const visitedUser = writable();
export const scannedQR = writable();
export const INVOICE = writable();
export const showLeft = writable(true);
export const saveProfile = writable(false);
export const lineBreak = writable("");
const defaultProfileImage = '/user.svg';
const initialProfileImage = browser ? window.localStorage.getItem('profileImage') ?? defaultProfileImage : defaultProfileImage;
export const profileImage = writable(initialProfileImage);
profileImage.subscribe((value) => {
    if(browser) {
        window.localStorage.setItem('profileImage', value);
    }
});
const defaultBannerImage = '/avatar.svg';
const initialBannerImage = browser ? window.localStorage.getItem('bannerImage') ?? defaultBannerImage : defaultBannerImage;
export const bannerImage = writable(initialBannerImage);
bannerImage.subscribe((value) => {
    if(browser) {
        window.localStorage.setItem('bannerImage', value);
    }
});
