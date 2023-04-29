import {Form, useLoaderData} from '@remix-run/react';
import TextInput from '~/components/form/text-input';
import {useEffect, useState} from 'react';
import TextArea from '~/components/form/text-area';
import MaskedTextInput from '~/components/form/masked-text-input';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import {SITE_KEY} from '~/constants/captcha';
import ServicesSlider from '~/features/service/components/services-slider';
import {json} from '@remix-run/node';
import parsePosts from '~/features/insta/utils/parse-posts.server';

export const loader = async () => {
  const instaImages = await parsePosts();

  return json({instaImages});
};

const Index = () => {
  const {instaImages} = useLoaderData<typeof loader>();
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

  return (
    <>
      <main className="flex-grow">
        <ServicesSlider />

        <div className="lg:flex lg:items-start">
          <section className="py-8 lg:py-16 lg:w-full lg:sticky lg:top-0">
            <div className="max-w-screen-xl w-full mx-auto px-4">
              <h2 className="mb-8 font-bold italic text-3xl uppercase">
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
              <h2 className="mb-8 font-bold italic text-3xl uppercase">
                Instagram example
              </h2>

              <div className="flex flex-col gap-4 mb-8">
                {instaImages.map(image => (
                  <article key={image}>
                    <img
                      src={image}
                      alt="Instagram post"
                      className="w-full rounded-xl shadow"
                    />
                  </article>
                ))}
              </div>

              <div className="flex justify-center">
                <button className="btn">
                  <span>Все публикации</span>
                  <span className="material-symbols-outlined animate-swim-right">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </section>

          <section className="py-8 relative lg:py-16 lg:w-full lg:sticky lg:top-0">
            <div className="max-w-screen-xl w-full mx-auto px-4">
              <h2 className="mb-8 font-bold italic text-3xl uppercase">
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
        <div className="bg-primary-black/95 backdrop-blur-lg p-4 rounded-xl shadow m-auto w-full max-w-xl border border-white/10 translate-x-full translate-y-full scale-0 group-target:translate-x-0 group-target:translate-y-0 group-target:scale-100 transition-transform duration-300 sm:mr-0 sm:rounded-br-none">
          <div className="mb-8 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold italic text-3xl uppercase text-primary-white">
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
            <div className="sm:flex sm:gap-4">
              <TextInput label="Имя" name="name" id="ask_name" required />
              <MaskedTextInput
                mask="+7 (999) 999-99-99"
                type="tel"
                label="Номер телефона"
                name="phone"
                id="ask_phone"
                required
              />
            </div>
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

            <div>
              <input type="hidden" name="captcha_token" value={captchaToken} />
              <HCaptcha sitekey={SITE_KEY} onVerify={setCaptchaToken} />
            </div>

            <div className="flex justify-end">
              <button type="submit" className="btn">
                Отправить
              </button>
            </div>
          </Form>
        </div>
        <a
          href="#"
          className="fixed top-0 left-0 w-full h-full -z-10 bg-black/80 opacity-0 group-target:opacity-100 transition-opacity duration-300 sm:bg-transparent"></a>
      </div>
    </>
  );
};

export default Index;
