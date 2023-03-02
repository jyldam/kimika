import {Swiper, SwiperSlide} from 'swiper/react';
import {Form} from '@remix-run/react';
import {Autoplay, Navigation} from 'swiper';
import TextInput from '~/components/form/text-input';
import Button from '~/components/actions/button';
import {useEffect, useState} from 'react';
import TextArea from '~/components/form/text-area';
import MaskedTextInput from '~/components/form/masked-text-input';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import {SITE_KEY} from '~/constants/captcha';
import {range} from 'lodash';

const Index = () => {
  const [captchaToken, setCaptchaToken] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      location.hash !== ''
        ? document.body.classList.add('overflow-hidden')
        : document.body.classList.remove('overflow-hidden');
    };

    handleHashChange();
    addEventListener('hashchange', handleHashChange);
    return () => removeEventListener('hashchange', handleHashChange);
  }, []);

  const instaFeed = [
    'http://ctan.math.utah.edu/ctan/tex-archive/macros/latex/contrib/mwe/example-image-9x16.png',
    'http://ctan.math.utah.edu/ctan/tex-archive/macros/latex/contrib/mwe/example-image-9x16.png',
    'http://ctan.math.utah.edu/ctan/tex-archive/macros/latex/contrib/mwe/example-image-9x16.png',
  ];

  return (
    <>
      <main className="flex-grow">
        <section className="relative">
          <Swiper
            navigation={{
              nextEl: '[data-next-slide]',
              prevEl: '[data-prev-slide]',
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="bg-black">
            {range(0, 6).map(num => (
              <SwiperSlide className="relative" key={num}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <h1 className="text-white text-4xl text-center font-bold italic uppercase drop-shadow-xl text-yellow-400">
                    Kimika detailing
                  </h1>
                </div>
                <img
                  src={`/slides/${num}.jpg`}
                  alt=""
                  className="w-full max-h-screen object-cover opacity-50"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div className="flex justify-between h-full">
              <button data-prev-slide="" className="h-full px-4">
                <span className="material-symbols-outlined text-yellow-400 text-3xl lg:text-6xl">
                  chevron_left
                </span>
              </button>
              <button data-next-slide="" className="h-full px-4">
                <span className="material-symbols-outlined text-yellow-400 text-3xl lg:text-6xl">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </section>

        <div className="lg:flex lg:items-start">
          <section className="py-8 lg:py-16 lg:w-full lg:sticky lg:top-0">
            <div className="max-w-screen-xl w-full mx-auto px-4">
              <h2 className="text-2xl mb-8 font-bold italic text-3xl uppercase">
                Example text
              </h2>

              <article>
                <p className="text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque faucibus dui metus, id vehicula sem lacinia at. Morbi
                  sed libero ex. Donec sapien diam, ultricies ac velit vel,
                  tempor consectetur dui. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia curae;
                  Maecenas vel congue diam. Aenean consectetur placerat nibh, eu
                  facilisis mi molestie a. Pellentesque tincidunt consectetur
                  velit, in sodales sapien sodales eu. Nulla mattis orci tortor,
                  a luctus turpis vehicula et. Vivamus tincidunt ac lorem id
                  commodo. Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices posuere cubilia curae; Aliquam vel maximus orci.
                  Aliquam eu lacus luctus nulla iaculis commodo eget vitae
                  augue. Donec pretium massa nisl. Mauris gravida massa in
                  tortor tempor, quis egestas dolor malesuada. Aliquam egestas
                  gravida lorem, ut molestie ipsum bibendum vitae.
                </p>
              </article>
            </div>
          </section>

          <section className="py-8 lg:py-16 lg:w-full lg:sticky lg:top-0">
            <div className="max-w-screen-xl w-full mx-auto px-4">
              <h2 className="text-2xl mb-8 font-bold italic text-3xl uppercase">
                Instagram example
              </h2>

              <div className="flex flex-col gap-4 mb-8">
                {instaFeed.map((image, i) => (
                  <article key={i}>
                    <img
                      src={image}
                      alt="Instagram post"
                      className="w-full rounded-xl shadow"
                    />
                  </article>
                ))}
              </div>

              <div className="flex justify-center">
                <Button>
                  <span>Все публикации</span>
                  <span className="material-symbols-outlined animate-swim-right">
                    chevron_right
                  </span>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-8 relative lg:py-16 lg:w-full lg:sticky lg:top-0">
            <div className="max-w-screen-xl w-full mx-auto px-4">
              <h2 className="text-2xl mb-8 font-bold italic text-3xl uppercase">
                Example text
              </h2>

              <article>
                <p className="text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque faucibus dui metus, id vehicula sem lacinia at. Morbi
                  sed libero ex. Donec sapien diam, ultricies ac velit vel,
                  tempor consectetur dui. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia curae;
                  Maecenas vel congue diam. Aenean consectetur placerat nibh, eu
                  facilisis mi molestie a. Pellentesque tincidunt consectetur
                  velit, in sodales sapien sodales eu. Nulla mattis orci tortor,
                  a luctus turpis vehicula et. Vivamus tincidunt ac lorem id
                  commodo. Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices posuere cubilia curae; Aliquam vel maximus orci.
                  Aliquam eu lacus luctus nulla iaculis commodo eget vitae
                  augue. Donec pretium massa nisl. Mauris gravida massa in
                  tortor tempor, quis egestas dolor malesuada. Aliquam egestas
                  gravida lorem, ut molestie ipsum bibendum vitae.
                </p>
              </article>
            </div>

            <img
              src="/167996.jpg"
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-20 sm:rounded-xl"
            />
          </section>
        </div>

        <div className="fixed right-4 bottom-4 z-20">
          <a
            href="#contact"
            className="bg-yellow-400 w-12 h-12 flex items-center justify-center rounded-full shadow border border-white/10 animate-jump relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-400 before:animate-ping before:rounded-full before:-z-10">
            <span className="material-symbols-outlined text-black">chat</span>
          </a>
        </div>
      </main>

      <footer className="py-8 border-t border-white/10">
        <div className="max-w-screen-xl w-full mx-auto px-4">
          <p>footer</p>
        </div>
      </footer>

      <div
        id="contact"
        className="fixed top-0 left-0 w-full h-full p-4 z-20 overflow-x-hidden overflow-y-auto flex invisible target:visible transition-[visibility] duration-300 group">
        <div className="bg-black p-4 rounded-xl shadow m-auto w-full border border-white/10 translate-x-full scale-50 group-target:translate-x-0 group-target:scale-100 transition-transform duration-300">
          <div className="mb-8 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold italic text-3xl uppercase">
                Напишите нам
              </h2>
              <a href="#" className="material-symbols-outlined text-white/80">
                close
              </a>
            </div>

            <p className="text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <Form action="/" className="space-y-4">
            <TextInput label="Имя" name="name" id="ask_name" required />
            <MaskedTextInput
              mask="+7 (999) 999-99-99"
              type="tel"
              label="Номер телефона"
              name="phone"
              id="ask_phone"
              required
            />
            <TextInput
              type="email"
              label="Электронная почта"
              name="email"
              id="ask_email"
            />
            <TextArea
              label="Сообщение"
              name="message"
              id="ask_message"
              required
            />

            <input type="hidden" name="captcha_token" value={captchaToken} />
            <HCaptcha sitekey={SITE_KEY} onVerify={setCaptchaToken} />

            <div className="flex justify-end">
              <Button type="submit">Отправить</Button>
            </div>
          </Form>
        </div>
        <a
          href="#"
          className="fixed top-0 left-0 w-full h-full -z-10 bg-black/80 opacity-0 group-target:opacity-100 transition-opacity duration-300"></a>
      </div>
    </>
  );
};

export default Index;
