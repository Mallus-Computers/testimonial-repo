import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './App.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
  {
    id: 1,
    username: 'Felix - UX Designer',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames gravida quisque massa purus euismod integer tincidunt. ',
  },

  {
    id: 2,
    username: 'Mitchelle - UX Designer',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames gravida quisque massa purus euismod integer tincidunt. ',
  },

  {
    id: 3,
    username: 'Kaitlyn - Web Developer',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames gravida quisque massa purus euismod integer tincidunt. ',
  },

  {
    id: 4,
    username: 'Jed Salmon - Web Developer',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames gravida quisque massa purus euismod integer tincidunt. ',
  },

  {
    id: 5,
    username: 'Alexander - Web Developer',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames gravida quisque massa purus euismod integer tincidunt. ',
  },
  {
    id: 6,
    username: 'Emmanuel - Web Developer',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames gravida quisque massa purus euismod integer tincidunt. ',
  },
  {
    id: 7,
    username: 'Yousef - Web Developer',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames gravida quisque massa purus euismod integer tincidunt. ',
  },

]

function App() {
  return (
    <div className="section">
        <h3 className="title">Testimonial</h3>
        <img className="group" src="/Group.png" alt="" />
        <img className="group-fade" src="/Group.png" alt="" />

        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
       {data.map (user =>(
         <SwiperSlide key={user.id} className="slide">
           <div className="slide-content">
             <div className="text-section">
                <img className="open-quote" src="/quote.png" alt="" />
                <img  className="close-quote" src="/closequote.png" alt="" /> 
               <div className="header-text-section">
                <p className="user-testimonial">{user.testimonial}</p>
              </div>
                <div className="user-image">
                  <img clasName="photo" src="/Ellipse.jpg" alt="" className="user-photo" />
                  <h5>{user.username}</h5>
                </div>
             </div>
            </div>
         </SwiperSlide>
       ))}
      </Swiper>
    </div>
  );
}

export default App;
