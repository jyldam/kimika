import {Link} from '@remix-run/react';

const SoundproofingSlide = () => {
  return (
    <div className="relative h-screen flex">
      <div className="relative z-10 m-auto p-4 space-y-8 flex flex-col items-center">
        <h1 className="text-4xl text-center font-bold italic uppercase drop-shadow-xl text-yellow-400">
          Комплексная шумоизоляция
        </h1>

        <div className="max-w-screen-md bg-black/50 p-4 space-y-2">
          <p className="text-center text-white/90">
            Шумоизоляция автомобиля - это процесс, который направлен на снижение
            уровня нежелательных звуков внутри автомобиля. Это важный этап при
            изменении и настройке автомобиля. Шумоизоляция помимо обеспечения
            комфорта пассажиров, также может предотвращать коррозию, защищая
            автомобиль от воздействия влаги и других факторов. Шумоизоляцию
            можно провести частично или полностью, в зависимости от желаемого
            эффекта.


          </p>
        </div>

        <Link to="/services/protect-car-body" className="btn">
          Подробнее
        </Link>
      </div>
      <img
        src="/slides/1.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-25"
      />
    </div>
  );
};

export default SoundproofingSlide;
