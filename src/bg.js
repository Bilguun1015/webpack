import Heading from './components/heading/heading.js';
import BgImage from './components/bg-image/bg-image.js';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('bg'));
const bgImage = new BgImage();
bgImage.render();
