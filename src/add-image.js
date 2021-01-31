import bg from './background.jpg';
const addImage = () => {
  const img = document.createElement('img');

  img.alt = 'background';
  img.width = 300;
  img.src = bg;
  const body = document.querySelector('body');
  body.appendChild(img);
};

export default addImage;
