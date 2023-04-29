import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import ProtectCarBodySlide from '~/features/service/components/protect-car-body-slide';
import SoundproofingSlide from '~/features/service/components/soundproofing-slide';

const ServicesSlider = () => {
  const slides = [ProtectCarBodySlide, SoundproofingSlide];

  return (
    <div className="relative">
      <Swiper
        navigation={{
          nextEl: '[data-next-slide]',
          prevEl: '[data-prev-slide]',
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // modules={[Autoplay, Navigation]}
        modules={[Navigation]}
        className="bg-black">
        {slides.map(Slide => (
          <SwiperSlide key={Slide.name}>
            <Slide />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        data-prev-slide=""
        className="absolute top-0 left-0 h-full px-4 z-10 hidden sm:block group">
        <span className="material-symbols-outlined text-yellow-400 text-3xl lg:text-6xl group-hover:-translate-x-2 transition-transform ease-in-out duration-100">
          chevron_left
        </span>
      </button>

      <button
        data-next-slide=""
        className="absolute top-0 right-0 h-full px-4 z-10 hidden sm:block group">
        <span className="material-symbols-outlined text-yellow-400 text-3xl lg:text-6xl group-hover:translate-x-2 transition-transform ease-in-out duration-100">
          chevron_right
        </span>
      </button>
    </div>
  );
};

export default ServicesSlider;
