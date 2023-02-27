import React from 'react'
import { useTranslation } from 'react-i18next'
import { Feature } from '../../components/index'

import './whatGPT3.css'

const WhatGPT3 = () => {
  const { t } = useTranslation()

  return (
    <div className="gpt3__whatgpt3 section__margin">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title={t('gpt3__whatgpt3.gpt3__whatgpt3-feature.title')}
          text={t('gpt3__whatgpt3.gpt3__whatgpt3-feature.text')}
        />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          {t('gpt3__whatgpt3.gpt3__whatgpt3-heading.title')}
        </h1>
        <p>{t('gpt3__whatgpt3.gpt3__whatgpt3-heading.text')}</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature
          title={t('gpt3__whatgpt3.gpt3__whatgpt3-container.1.title')}
          text={t('gpt3__whatgpt3.gpt3__whatgpt3-container.1.text')}
        />
        <Feature
          title={t('gpt3__whatgpt3.gpt3__whatgpt3-container.2.title')}
          text={t('gpt3__whatgpt3.gpt3__whatgpt3-container.2.text')}
        />
        <Feature
          title={t('gpt3__whatgpt3.gpt3__whatgpt3-container.3.title')}
          text={t('gpt3__whatgpt3.gpt3__whatgpt3-container.3.text')}
        />
      </div>
    </div>
  )
}

export default WhatGPT3
