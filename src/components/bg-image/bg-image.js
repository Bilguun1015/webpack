import Bg from './background.jpg';
import './bg-image.scss';

class BgImage {
  render() {
    const img = document.createElement('img');
    img.src = Bg;
    img.alt = 'person looking into the stars';
    img.classList.add('bg-image');

    const bodyDomElement = document.querySelector('body');
    bodyDomElement.appendChild(img);
  }
}

export default BgImage;
