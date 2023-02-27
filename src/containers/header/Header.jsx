import React from 'react'
import { useTranslation } from 'react-i18next'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

import './header.css'

const Header = () => {
  const { t } = useTranslation()
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">{t('header.title')}</h1>

        <p>{t('header.description')}</p>

        <div className="gpt3__header-content__input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t('header.input-group.email')}
          />

          <button type="button">{t('header.input-group.btn')}</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="People" />
          <p>{t('header.access-people')}</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
