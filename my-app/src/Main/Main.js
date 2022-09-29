import AboutPlatforma from './AboutPlatforma';
import Mission from './Mission';
import Scanner from './Scanner';
import Intagration from './Intagration';
import QRCode from './QRCode';
import Generate from './Generate';
import Ordering from './Ordering';
import Notub from './Notub';
import Form from './Form';
import Cookie from './Cookie';

function Main() {
   return (
      <main className="page">
         <AboutPlatforma />
         <Cookie />
         <Mission />
         <Scanner />
         <Intagration />
         <QRCode />
         <Generate />
         <Ordering />
         <Notub />
         <Form />
      </main>
   );
}

export default Main;