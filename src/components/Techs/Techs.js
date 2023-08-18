import "./Techs.css"

function Techs() {
  return (
    <section className='techs'>
      <p className='techs__name'>Технологии</p>
      <h2 className='techs__title'>7 технологий</h2>
      <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.</p>
      <ul className='techs__all'>
        <li className='techs__all-item'>HTML</li>
        <li className='techs__all-item'>CSS</li>
        <li className='techs__all-item'>JS</li>
        <li className='techs__all-item'>React</li>
        <li className='techs__all-item'>Git</li>
        <li className='techs__all-item'>Exliress.js</li>
        <li className='techs__all-item'>mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
