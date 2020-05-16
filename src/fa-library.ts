import { library } from '@fortawesome/fontawesome-svg-core';

//import { } from '@fortawesome/free-brands-svg-icons';
import * as fa from '@fortawesome/free-solid-svg-icons';

export default function buildFontAwesomeLibrary() {
  library.add(fa.faBars);
  library.add(fa.faCalendar);
  library.add(fa.faCalendarAlt);
  library.add(fa.faChevronLeft);
  library.add(fa.faInbox)
}
