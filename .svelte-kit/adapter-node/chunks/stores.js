import { w as writable } from "./index2.js";
const refreshApp = writable(false);
const currentPath = writable("Satirigal");
const navList = writable([]);
const darkMode = writable(false);
const scannedQR = writable();
const showLeft = writable(true);
const defaultProfileImage = "/user.svg";
const initialProfileImage = defaultProfileImage;
const profileImage = writable(initialProfileImage);
profileImage.subscribe((value) => {
});
const defaultBannerImage = "/avatar.svg";
const initialBannerImage = defaultBannerImage;
const bannerImage = writable(initialBannerImage);
bannerImage.subscribe((value) => {
});
export {
  scannedQR as a,
  bannerImage as b,
  currentPath as c,
  darkMode as d,
  navList as n,
  profileImage as p,
  refreshApp as r,
  showLeft as s
};
