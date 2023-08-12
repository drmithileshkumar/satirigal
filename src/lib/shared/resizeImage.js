

//@ts-nocheck
// function handleImageUpload(event) {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function(e) {
//       const img = new Image();
//       img.onload = function() {
//         uploadedImage = img;
//       };
//       img.src = e.target.result;
//     };
//     reader.readAsDataURL(file);
//   }
// }

export function resizeImage(uploadedImage, maxWidth, maxHeight) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const width = uploadedImage.width;
  const height = uploadedImage.height;
  const aspectRatio = width / height;

  let newWidth;
  let newHeight;

  if (width > height) {
    newWidth = maxWidth;
    newHeight = Math.round(newWidth / aspectRatio);
  } else {
    newHeight = maxHeight;
    newWidth = Math.round(newHeight * aspectRatio);
  }

  canvas.width = newWidth;
  canvas.height = newHeight;
  ctx.drawImage(uploadedImage, 0, 0, newWidth, newHeight);

  const resizedImageDataURL = canvas.toDataURL('image/jpeg', 0.9); // You can change 'image/jpeg' to 'image/png' if you prefer a PNG output

  return resizedImageDataURL;
}

