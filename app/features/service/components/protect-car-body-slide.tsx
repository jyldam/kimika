import {Link} from '@remix-run/react';

const ProtectCarBodySlide = () => {
  return (
    <div className="relative h-screen flex">
      <div className="relative z-10 m-auto p-4 space-y-8 flex flex-col items-center">
        <h1 className="text-4xl text-center font-bold italic uppercase drop-shadow-xl text-yellow-400">
          Защита кузова антигравийной пленкой
        </h1>

        <div className="max-w-screen-md bg-black/50 p-4 space-y-2">
          <p className="text-center text-white/90">
            Предотвращяет старение автмобиля сохраняя лакокрасочное покрытие и
            цвет кузова автомобиля в первоначальном виде, уменьшает риски
            повреждения кузова, защищает от сколов, царапин, пескоструя,
            птичьего помета. Оклеиваются детали только в цвет кузова...
          </p>
        </div>

        <Link
          to="/services/protect-car-body"
          className="btn-aggressive uppercase">
          Вперед
          <span className="material-symbols-outlined text-3xl animate-fast-swim-right">
            keyboard_double_arrow_right
          </span>
        </Link>
      </div>
      <img
        src="/slides/0.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
      />
    </div>
  );
};

export default ProtectCarBodySlide;
