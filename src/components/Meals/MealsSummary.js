import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Hola. ¿Qué vas a pedir hoy?</h2>
      {/* <p>
        Somos la empresa de tecnología líder en Q-Commerce y delivery en toda
        Latinoamérica. Una plataforma digital simple, práctica y sin costo
        adicional que permite a los usuarios elegir su plato o productos
        favoritos dentro de miles de opciones disponibles y realizar su pedido a
        través del sitio web o las aplicaciones para iPhone y Android.
      </p> */}
      <p>Pedí delivery en Montevideo ahora</p>
    </section>
  );
};

export default MealsSummary;
