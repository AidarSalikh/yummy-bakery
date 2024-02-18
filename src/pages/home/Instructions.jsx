import { BsCake2 } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";
import { GoGift } from "react-icons/go";

function Instructions() {
  return (
    <section className="instructions">
      <h2 className="instructions--title">Как сделать заказ</h2>
      <div className="instructions--content">
        <article className="instructions--content--article">
          <BsCake2 size={70} />
          <div>
            <h6>Выбрать изделие</h6>
            <p>Определиться, какое изделие Bakery вам по душе:</p>
            <p>классический торт,</p>
            <p>торт с индивидуальным дизайном, </p>
            <p> фирменная выпечка или пирожные, </p>
            <p>кондитерские изделия ручной работы.</p>
          </div>
        </article>
        <article className="instructions--content--article">
          <IoIosPhonePortrait size={70} />
          <h6>Оформить заказ</h6>
          <div>
            <p>Онлайн, на странице товара</p>
            <p>По телефонам +7 (495) 931-90-00 </p>
            <p> По e-mail bakery@azimuthotels.com</p>
            <p>Непосредственно в Bakery</p>
          </div>
        </article>
        <article className="instructions--content--article">
          <GoGift size={70} />
          <h6>Выбрать способ получения</h6>
          <div>
            <p>
              Вы всегда можете приехать в Bakery и забрать свой заказ - мы
              расположены максимально удобно для посещения. Также у нас работает
              доставка - её стоимость рассчитывается индивидуально
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Instructions;
