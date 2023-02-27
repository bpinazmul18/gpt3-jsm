import React from 'react'
import { useTranslation } from 'react-i18next'

const Menu = () => {
  const { t } = useTranslation()

  return (
    <>
      <p>
        <a href="#home">{t('navbarItem.home')}</a>
      </p>
      <p>
        <a href="#wpgt3">{t('navbarItem.whatIsGPT')}</a>
      </p>
      <p>
        <a href="#possibility">{t('navbarItem.openAI')}</a>
      </p>
      <p>
        <a href="#features">{t('navbarItem.caseStudies')}</a>
      </p>
      <p>
        <a href="#blog">{t('navbarItem.library')}</a>
      </p>
    </>
  )
}

export default Menu
