import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://randomuser.me/api/portraits/men/11.jpg'
          alt='Victor Teixeira'
        />
        <div>
          <strong>Victor Teixeira</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
        semper lacus. Aenean mollis dui id scelerisque ullamcorper. Donec eu
        lobortis ante.
        <br />
        <br />
        Suspendisse potenti. Proin interdum pulvinar tempus. Fusce condimentum
        mi ut odio laoreet lobortis.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt='WhatsApp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
