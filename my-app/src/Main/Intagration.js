import TrackOne from '../img/chart-black.webp';
import TrackTwo from '../img/chart-four-circles.webp';
import TrackThree from '../img/chart-mountains.webp';
import TrackFour from '../img/chart-one-circle.webp';
import TrackFive from '../img/chart-waves.webp';
import TrackSix from '../img/chart-pillars.webp';
import TrackSeven from '../img/chart-precent.webp';

function Intagration() {
   return (
      <section className='page__intagration intagration'>
         <div className='intagration_container container'>
            <div className='intagration__body'>
               <div className='intagration__intagration-text'>
                  <h2 className='intagration-text_title title'>BI Tool Integration</h2>
                  <p className='intagration-text_subtitle subtitle'>We use Business Intelligence Tool that allows you to be updated what is happening in your business just by one click. Track revenue
                     and profit by one click.</p>
               </div>
               <div className='intagration__intagration-chart'>
                  <img className='intagration-chart_one' draggable="false" src={TrackOne} alt='chart' />
                  <img className='intagration-chart_two' draggable="false" src={TrackTwo} alt='chart' />
                  <img className='intagration-chart_three' draggable="false" src={TrackThree} alt='chart' />
                  <img className='intagration-chart_four' draggable="false" src={TrackFour} alt='chart' />
                  <img className='intagration-chart_five' draggable="false" src={TrackFive} alt='chart' />
                  <img className='intagration-chart_six' draggable="false" src={TrackSix} alt='chart' />
                  <img className='intagration-chart_seven' draggable="false" src={TrackSeven} alt='chart' />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Intagration;