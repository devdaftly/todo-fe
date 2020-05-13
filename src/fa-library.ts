import { library } from '@fortawesome/fontawesome-svg-core';

//import { } from '@fortawesome/free-brands-svg-icons';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function buildFontAwesomeLibrary() {
  library.add(faBars);
  library.add(faChevronLeft);
}
