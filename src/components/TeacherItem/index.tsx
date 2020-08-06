import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/58146407?s=460&u=3343bc33c7a1d332fdc1dc7d1fcec89743da3462&v=4" alt="Gabriela Garcia" />
            <div>
                <strong>Gabriela Garcia</strong>
                <span>Português</span>
            </div>
        </header>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /> <br />
            Atque molestias earum id quaerat explicabo odio excepturi, illum deserunt animi?
            Incidunt odio hic distinctio laboriosam officia eos et id deserunt. Perferendis.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 40,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Icone Whatsapp" />
                            Entrar em contato
            </button>
        </footer>
        </article>
    );
}

export default TeacherItem;