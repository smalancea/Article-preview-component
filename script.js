const shareOptions = document.getElementById('share-options');
const shareIcon = document.getElementById('share-icon');

shareIcon.addEventListener('click', () => {
  if (shareOptions.style.visibility === 'visible') {
    shareOptions.style.visibility = 'hidden';
  } else {
    shareOptions.style.visibility = 'visible';
  }
});
