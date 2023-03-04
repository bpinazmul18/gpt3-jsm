import React from 'react'
import { useTranslation } from 'react-i18next'
import { Feature } from '../../components'

import './features.css'

const Features = () => {
  const { t } = useTranslation()
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">{t('features.title')}</h1>
        <p>{t('features.text')}</p>
      </div>

      <div className="gpt3__features-container">
        <Feature
          title={t('features.gpt3__features-container.1.title')}
          text={t('features.gpt3__features-container.1.text')}
        />
        <Feature
          title={t('features.gpt3__features-container.2.title')}
          text={t('features.gpt3__features-container.2.text')}
        />
        <Feature
          title={t('features.gpt3__features-container.3.title')}
          text={t('features.gpt3__features-container.3.text')}
        />
        <Feature
          title={t('features.gpt3__features-container.4.title')}
          text={t('features.gpt3__features-container.4.text')}
        />
      </div>
    </div>
  )
}

export default Features
