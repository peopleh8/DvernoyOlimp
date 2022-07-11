import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Collapse } from 'react-collapse'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import sprite from '../../icons/sprite.svg'

import { PrefixContext } from '../../context/PrefixContext'

const FooterLinks = () => {
  let prefix = useContext(PrefixContext)

  const [ list, setList ] = useState([
    {
      title: 'О КОМПАНИИ',
      isOpen: true,
      id: 1,
      links: [
        {
          title: 'Главная',
          link: `${prefix}`,
          id: 11,
        },
        {
          title: 'О нас',
          link: `${prefix}about/`,
          id: 12,
        },
        {
          title: 'Блог',
          link: `${prefix}blog/`,
          id: 13,
        },
        {
          title: 'Условия возврата',
          link: `${prefix}#/`,
          id: 14,
        },
        {
          title: 'Отзывы',
          link: `${prefix}#/`,
          id: 15,
        },
        {
          title: 'Контакты',
          link: `${prefix}contacts/`,
          id: 16,
        }
      ]
    },
    {
      title: 'ОБЩИЕ ВОПРОСЫ',
      isOpen: true,
      id: 2,
      links: [
        {
          title: 'Замер дверей',
          link: `${prefix}ruler/`,
          id: 21,
        },
        {
          title: 'Установка',
          link: `${prefix}montage/`,
          id: 22,
        },
        {
          title: 'Гарантии',
          link: `${prefix}credit/`,
          id: 23,
        },
        {
          title: 'Доставка и оплата',
          link: `${prefix}delivery/`,
          id: 24,
        },
        {
          title: 'Производители',
          link: `${prefix}brands/`,
          id: 25,
        },
        {
          title: 'Политика конфиденциальности',
          link: `${prefix}privacy/`,
          id: 26,
        }
      ]
    },
    {
      title: 'КАТАЛОГ ДВЕРЕЙ',
      isOpen: true,
      id: 3,
      links: [
        {
          title: 'Двери в Киеве',
          link: `${prefix}catalog/`,
          id: 31,
        },
        {
          title: 'Входные двери в Киеве',
          link: `${prefix}catalog/`,
          id: 32,
        },
        {
          title: 'Бронированные двери в Киеве',
          link: `${prefix}catalog/`,
          id: 33,
        },
        {
          title: 'Двери в Одессе',
          link: `${prefix}catalog/`,
          id: 34,
        },
        {
          title: 'Входные двери в Одессе',
          link: `${prefix}catalog/`,
          id: 35,
        },
        {
          title: 'Бронированные двери в Одессе',
          link: `${prefix}catalog/`,
          id: 36,
        }
      ]
    }
  ])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 746px)': () => {
        setList(list.map(item => {
          return {
            ...item,
            isOpen: true,
            links: [...item.links]
          }
        }))
      },
      '(max-width: 745px)': () => {
        setList(list.map(item => {
          return {
            ...item,
            isOpen: false,
            links: [...item.links]
          }
        }))
      }
    })
  }, [])

  const toggleIsOpen = id => {
    ScrollTrigger.matchMedia({
      '(max-width: 745px)': () => {
        setList(list.map(item => {
          return {
            ...item,
            isOpen: item.id === id ? !item.isOpen : item.isOpen,
            links: [...item.links]
          }
        }))
      }
    })
  }

  return (
    <div className="footer__links footer-links">
      {
        list.map(item => {
          return (
            <div className={`footer-links__item ${item.isOpen ? 'open' : ''}`} key={item.id}>
              <div
                className="footer-links__title footer-title"
                onClick={() => toggleIsOpen(item.id)}
              >
                {item.title}
                <span className="footer-links__title-icon">
                  <svg><use href={`${sprite}#catalog-arrow`} /></svg>
                </span>
              </div>
              <Collapse isOpened={item.isOpen}>
                <ul className="footer-links__list">
                  {
                    item.links.map(link => {
                      return (
                        <li className="footer-links__list-item" key={link.id}>
                          <Link className="footer-links__list-link" activeClassName="active" to={link.link}>{link.title}</Link>
                          <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
                        </li>
                      )
                    })
                  }
                </ul>
              </Collapse>
            </div>
          )
        })
      }
    </div>
  )
}

export default FooterLinks