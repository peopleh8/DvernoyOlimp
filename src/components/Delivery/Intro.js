import React from 'react'
import { Link } from 'gatsby'

import './Intro.scss'

import sprite from '../../icons/sprite.svg'

const DeliveryIntro = () => {
  return (
    <section className="delivery intro">
      <div className="container">
        <h1 className="delivery__title title title--dark">Оплата и доставка дверей</h1>
        <div className="delivery__inner">
          <div className="delivery__content delivery-content">
            <div className="delivery__subtitle">Отдел Логистики - 044 221 28 66  (вопросы доставки)</div>
            <div className="delivery__block delivery-block">
              <div className="delivery-block__header">
                <div className="delivery-block__header-icon">
                  <svg><use href={`${sprite}#portmone`} /></svg>
                </div>
                <div className="delivery-block__header-title">ОПЛАТА</div>
              </div>
              <article className="delivery-block__article">
                <ul>
                  <li>
                    <strong>Наличный расчет</strong>
                    <p>
                      Оплата наличными производится в магазинах Дверной Олимп исключительно в национальной валюте.
                    </p>
                  </li>
                  <li>
                    <strong>Безналичный расчет (включая НДС).</strong>
                    <p>
                      Оплата товара по безналичному расчёту производится согласно выставленного счёта на оплату на расчётный счёт нашей компании. Наше предприятие является плательщиком НДС на общих основаниях.
                    </p>
                  </li>
                  <li>
                    <strong>Оплата банковской картой</strong>
                    <p>
                      Оплата наличными производится в магазинах Дверной Олимп исключительно в национальной валюте.
                    </p>
                  </li>
                  <li>
                    <strong>Оплата банковской картой</strong>
                    <p>
                      - банковской картой (Visa, MasterCard) в салонах Дверной Олимп (комиссия взимается согласно тарифам банка). <br/>
                      - оплата через терминал самообслуживания (комиссия взимается согласно тарифам банка).
                    </p>
                    <p>
                    </p>
                  </li>
                  <li>
                    <strong>Онлайн оплата на сайте.</strong>
                    <p>
                      через выставление инвойса на E-mail через LiqPay (предварительно запросите просчет у менеджера)
                    </p>
                  </li>
                  <li>
                    <strong>Кредит.</strong>
                    <p>
                      - оплата частями. <a href="#" target="_blank" rel="noreferrer">Подробная информация здесь.</a>
                    </p>
                  </li>
                </ul>
                <strong>Минимальная сумма заказа- 2000 грн.;</strong>
                <em>PS. Правило минимальной суммы заказа не распространяется на самостоятельный самовывоз со складов. Присутствует оплата доставки, на самовывоз из магазина.</em>
              </article>
            </div>
            <div className="delivery__block delivery-block">
              <div className="delivery-block__header">
                <div className="delivery-block__header-icon">
                  <svg><use href={`${sprite}#car`} /></svg>
                </div>
                <div className="delivery-block__header-title">ДОСТАВКА</div>
              </div>
              <article className="delivery-block__article">
                <p>
                  Дверной Олимп сотрудничает только с перевозчиком "Новая почта", так как у него обязательным является страхование товара, и в случае потери, повреждения и т.п. возмещается стоимость, указанная в страховке.
                </p>
                <div className="delivery-subblock">
                  <div className="delivery-subblock__item">
                    <strong>1. Доставка до склада Новой Почты, при заказе:</strong>
                    <ul>
                      <li>от 8000 грн - бесплатно*, при условии, что это будет указано в счете Дверного Олимпа, так как продавец предварительно должен проверить, подпадает ли Ваш заказ под акцию;</li>
                      <li>
                        до 8000 грн - за счет Покупателя, по тарифам Новой Почты (расчет ориентировочной стоимости**);
                        <em>** - Дверной Олимп не несет ответственности за перевозку и тарифы перевозчика, за это несет ответственность сам Перевозчик</em>
                      </li>
                      <li>от 1000 грн - бесплатно на доставку фурнитуры.</li>
                      <li>на двери, сума заказа которых - до 3000 грн (на фурнитуру до 800грн) - кроме оплаты клиентом доставки Новой Почтой, плюс 150 грн доплата за доставку со склада Дверной Олимп до склада отправки Новой Почты;</li>
                    </ul>
                  </div>
                  <div className="delivery-subblock__item">
                    <strong>*Акция бесплатной доставки НЕ действует:</strong>
                    <ul>
                      <li>на заказы с применением НДС;</li>
                      <li>на некоторие модели дверей ТМ Омис и Новий Стиль, ТМ Брама, (ТМ Стилгард Forza, Un, Torre, Fuomo, Polo, Tech) -уточняйте у менеджеров;</li>
                      <li>на двери, купленные без коробки и наличника;</li>
                      <li>на двери стоимостью до 8000 грн, ф-ры до 1000 грн;</li>
                      <li>если двери не складские, а под заказ.</li>
                      <li>если в карточке товара, не отмечена "Бесплатная доставка Новой Почтой.</li>
                      <li>на г. Киев и радиус 50 км от черты Киева, г.Одесса и радиус 50 км от черты Одесы.</li>
                    </ul>
                  </div>
                  <div className="delivery-subblock__item">
                    <strong>*2. Адресная доставка:</strong>
                    <p>
                      Возможно оформить Адресную доставку - с доплатой разницы между стоимостью доставки на отделение и адресной доставкой домой клиенту, в момент оформления заказа, по тарифам Новой Почты. Согласно правил Новой Почты, в таком случае необходима 100% предоплата, так как наложенный платеж осуществляется только в отделении. Если клиент изначально оформил доставку на склад, можно в телефонном режиме Новой Почте, заказать услугу "Переадресация", которую необходимо будет оплатить клиенту при получении товара дома.
                    </p>
                    <span className="quote">Доставка груза обычно осуществляется за 1-3 дня.</span>
                  </div>
                </div>
              </article>
            </div>
            <div className="delivery__block delivery-block">
              <div className="delivery-block__header">
                <div className="delivery-block__header-icon">
                  <svg><use href={`${sprite}#card`} /></svg>
                </div>
                <div className="delivery-block__header-title">СТОИМОСТЬ ДОСТАВКИ</div>
              </div>
              <article className="delivery-block__article">
                <h5>КИЕВ - 490 грн</h5>
                <h5>Киевская область — 490 грн*. (до подъезда) в следующие населенные пункты:</h5>
                <div className="delivery-block__article-inner">
                  <div className="delivery-block__article-item">Борисполь</div>
                  <div className="delivery-block__article-item">Вишневое (бесплатно)*</div>
                  <div className="delivery-block__article-item">Ирпень</div>
                  <div className="delivery-block__article-item">Петроп. Борщаговка</div>
                  <div className="delivery-block__article-item">Боярка (бесплатно)*</div>
                  <div className="delivery-block__article-item">Ворзель</div>
                  <div className="delivery-block__article-item">Коцюбинское</div>
                  <div className="delivery-block__article-item">Пуща-Водица</div>
                  <div className="delivery-block__article-item">Бровары</div>
                  <div className="delivery-block__article-item">Вышгород (бесплатно)*</div>
                  <div className="delivery-block__article-item">Крюковщина (бесплатно)*</div>
                  <div className="delivery-block__article-item">Романовка</div>
                  <div className="delivery-block__article-item">Буча</div>
                  <div className="delivery-block__article-item">Гостомель</div>
                  <div className="delivery-block__article-item">Петровское</div>
                  <div className="delivery-block__article-item">Соф. Борщаговка</div>
                </div>
                <em>* - при заказе до 7000 грн. доплата + 200 грн за доставку</em>
                <em>Для городов, не указанных выше в радиусе 40 км от черты Киева - 490грн + 14грн/км</em>
                <h3>ОДЕССА - 390грн,  Одесская обл. в радиусе до 40 км - 390 грн + 14грн/км. (от 40 км - доставка Новой Почтой либо доплата 14 грн за км)</h3>
                <em>***Заказы, стоимостью до 6000 грн, которые заказаны в Одессе со склада в Киеве - отправляются путем доставки Перевозчика за доп плату.</em>
              </article>
            </div>
            <div className="delivery__block delivery-block">
              <div className="delivery-block__header">
                <div className="delivery-block__header-icon">
                  <svg><use href={`${sprite}#user-check`} /></svg>
                </div>
                <div className="delivery-block__header-title">САМОВЫВОЗ</div>
              </div>
              <article className="delivery-block__article">
                <ul>
                  <li>Предварительно уточняете у менеджеров наличие необходимого товара.</li>
                  <li>Оформляете заявку и узнаете адрес склада или магазина, в котором находится заказ.</li>
                  <li>Оплачиваете и отгружаете купленный товар.</li>
                </ul>
                <p className="green-text">
                  Плата за доставку с нашего склада в один из магазинов сети Дверной Олимп (для осуществления оттуда самовывоза) будет равняться стоимости доставки в город магазина, откуда будет делаться самовывоз клиентом. При самовывозе со склада Дверного Олимпа - без дополнительной оплаты (при стоимости заказа от 3000грн)
                </p>
                <strong>Адреса складов:</strong>
                <ul>
                  <li>г. Ирпень (ул. Антонова, 11-А)</li>
                  <li>г. Одесса (пр-т Небесной Сотни (Маршала Жукова), 3а) .</li>
                </ul>
                <p className="green-text">
                  Внимание: склад консультаций и услуг погрузки товара не предоставляет! Задача склада - отпустить товар, предварительно оформленный Вами. По любым вопросам обращайтесь в офис.
                </p>
              </article>
            </div>
            <div className="delivery__block delivery-block">
              <div className="delivery-block__header">
                <div className="delivery-block__header-icon">
                  <svg><use href={`${sprite}#express-car`} /></svg>
                </div>
                <div className="delivery-block__header-title">Экспресс-доставка</div>
              </div>
              <article className="delivery-block__article">
                <p>
                  При условии заказа до 13:00 осуществляется на следующий день, по г. Киев, г. Ирпень, г. Буча (др. города по согласованию). Стоимость - 950 грн.
                </p>
                <p>
                  (Минимальная стоимость заказа 5000 грн.)
                </p>
              </article>
            </div>
            <div className="delivery__block delivery-block">
              <div className="delivery-block__header">
                <div className="delivery-block__header-icon">
                  <svg><use href={`${sprite}#portmone`} /></svg>
                </div>
                <div className="delivery-block__header-title">ОПЛАТА ДОСТАВКИ</div>
              </div>
              <article className="delivery-block__article">
                <ul>
                  <li>Наложенным платежом, на отделении Новой Почты;</li>
                  <li>На банковскую карту Visa/MasterCard - с указанием назначения платежа и номером заказа.**</li>
                  <li>Безналичный расчет на р/с предприятия, с НДС или без НДС.</li>
                </ul>
                <em>** - Будьте осторожны! Не пересылайте деньги тем, кто требует не указывать/оставлять пустое место назначение платежа. Это могут быть мошенники. Особенно могут вызвать подозрение те интернет-магазины, у которых нет своих магазинов оффлайн.</em>
              </article>
            </div>
            <div className="delivery__block delivery-block">
              <div className="delivery-block__header">
                <div className="delivery-block__header-icon">
                  <svg><use href={`${sprite}#note`} /></svg>
                </div>
                <div className="delivery-block__header-title">ЭТАПЫ ОФОРМЛЕНИЯ</div>
              </div>
              <article className="delivery-block__article">
                <strong>Для оформления заказа необходимо:</strong>
                <ul>
                  <li>выбрать товар, подтвердить наличие и оформить накладную;</li>
                  <li>оплатить предоплату если товар в наличии, 70% - если товар "под заказ", либо 100% предоплату (если необходима Адресная доставка);</li>
                  <li>остальную часть суммы доплатить по услуге "наложенный платеж*" на отделении Новой Почты, после осмотра товара.</li>
                </ul>
                <em>* - за его проведение Перевозчик берет комиcсию около 20 грн + 2% от суммы перевода</em>
              </article>
            </div>
            <div className="delivery__block delivery-block">
              <div className="delivery-block__header">
                <div className="delivery-block__header-icon">
                  <svg><use href={`${sprite}#achive`} /></svg>
                </div>
                <div className="delivery-block__header-title">ПРЕИМУЩЕСТВА</div>
              </div>
              <article className="delivery-block__article">
                <ul>
                  <li>Оплата клиентами осуществляется согласно официальных реквизитов, с указанием в назначении платежа номера заказа.</li>
                  <li>Будьте внимательны! Не отправляйте ваши деньги на личные карты, в особенности, если просят ничего не указывать в поле назначения платежа. Это могут быть мошенники!</li>
                  <li>Наличие у нас оффлайн сети (т.е. стационарных магазинов) подтверждает нашу надежность по сравнению с другими интернет-магазинами, имеющими лишь сайт, который можно удалить за считанные минуты.</li>
                </ul>
              </article>
            </div>
            <div className="delivery__block delivery-block">
              <div className="delivery-block__header">
                <div className="delivery-block__header-icon">
                  <svg><use href={`${sprite}#post`} /></svg>
                </div>
                <div className="delivery-block__header-title">ПРАВИЛА НОВОЙ ПОЧТЫ</div>
              </div>
              <article className="delivery-block__article">
                <ul>
                  <li>
                    при отправке обязательным является покупка обриштовки для дверей (что гарантирует клиенту целостность товара и возмещение средств, в случае повреждения), поэтому цена за доставку увеличивается примерно на 150-180 грн*;
                    <em>* - для просчета стоимости в тарифах отмечайте пункт обриштовка.</em>
                  </li>
                  <li>также обязательным является страхование товара (его оплачивает Дверной Олимп). Что страхует клиента от получения битого товара, ибо в таком случае Новая Почта возмещает стоимость!</li>
                </ul>
              </article>
            </div>
            <div className="delivery__block delivery-block">
              <div className="delivery-block__header">
                <div className="delivery-block__header-icon">
                  <svg><use href={`${sprite}#clock`} /></svg>
                </div>
                <div className="delivery-block__header-title">ВРЕМЯ ДОСТАВКИ</div>
              </div>
              <article className="delivery-block__article">
                <p>10.00 - 19.00. Выходные дни: суббота, воскресенье.</p>
              </article>
            </div>
            <div className="delivery__block delivery-block">
              <div className="delivery-block__header">
                <div className="delivery-block__header-icon">
                  <svg><use href={`${sprite}#schedule`} /></svg>
                </div>
                <div className="delivery-block__header-title">ВРЕМЯ ДОСТАВКИ</div>
              </div>
              <article className="delivery-block__article">
                <p>
                  Доставка заказа 1-3 рабочих дня, при условии наличия товара на складе. Но, если нужно очень срочно, звоните! Мы приложим все усилия, чтобы помочь Вам.
                </p>
              </article>
            </div>
            <div className="delivery__block delivery-block">
              <div className="delivery-block__header">
                <div className="delivery-block__header-icon">
                  <svg><use href={`${sprite}#user-check`} /></svg>
                </div>
                <div className="delivery-block__header-title">ПОЛУЧЕНИЕ ТОВАРА</div>
              </div>
              <article className="delivery-block__article">
                <ul>
                  <li>Покупатель обязан при получении товара осмотреть его и при наличии претензий оформить соответствующую рекламацию на отделении Новой почты.</li>
                  <li>Покупатель обязуется следить за сроками доставки товара самостоятельно.</li>
                </ul>
                <p className="green-text">
                  В случае отказа от заказа, предоплата в размере 15% которая являлась стоимостью услуги доставки Новой Почтой (если складской товар), и полная предоплата если товар "под заказ", НЕ возвращается, в том случае когда эта услуга уже выполнена.
                </p>
              </article>
            </div>
            <div className="delivery__block delivery-block">
              <div className="delivery-block__header">
                <div className="delivery-block__header-icon">
                  <svg><use href={`${sprite}#pen`} /></svg>
                </div>
                <div className="delivery-block__header-title">ПРИ ПОЛУЧЕНИИ ТОВАРА</div>
              </div>
              <article className="delivery-block__article">
                <p>
                  Покупатель обязан осмотреть товар и подписать акт-приема передачи. Претензии к внешнему виду и механическим повреждениям (не касается заводских дефектов) Вы можете предъявить только во время передачи Вам товара продавцом. Ссылка на то, что Покупатель не осмотрел товар (или плохо осмотрел), что торопил водитель, плохое освещение, испачканный товар и др. причины — не являются основанием для возврата или обмена товара после отъезда водителя.
                </p>
              </article>
            </div>
            <div className="delivery__block delivery-block">
              <div className="delivery-block__header">
                <div className="delivery-block__header-icon">
                  <svg><use href={`${sprite}#peoples`} /></svg>
                </div>
                <div className="delivery-block__header-title">ПОДЪЕМ</div>
              </div>
              <article className="delivery-block__article">
                <div className="delivery-block__table">
                  <div className="delivery-block__table-row">
                    <div className="delivery-block__table-row-item">ПОДЪЕМ</div>
                    <div className="delivery-block__table-row-item">ВХОДНЫЕ</div>
                    <div className="delivery-block__table-row-item">МЕЖКОМНАТНЫЕ/ПЛИНТУС</div>
                  </div>
                  <div className="delivery-block__table-row">
                    <div className="delivery-block__table-row-item">По ступенькам</div>
                    <div className="delivery-block__table-row-item">
                      <p>
                        технические, эконом до 7000 грн: 70 грн./этаж, но не менее 300 грн.
                      </p>
                      <p>
                        входные от 7000 грн - 80грн/этаж, но не менее 450 грн.
                      </p>
                      <p>
                        двустворчатые - по договоренности.
                      </p>
                    </div>
                    <div className="delivery-block__table-row-item">60 грн./этаж</div>
                  </div>
                  <div className="delivery-block__table-row">
                    <div className="delivery-block__table-row-item">Грузовой лифт</div>
                    <div className="delivery-block__table-row-item">300 грн.</div>
                    <div className="delivery-block__table-row-item">60 грн.</div>
                  </div>
                  <div className="delivery-block__table-row">
                    <div className="delivery-block__table-row-item">Занос на 1-й этаж (или частный дом)</div>
                    <div className="delivery-block__table-row-item">300 грн. (двустворчатые по договоренности)</div>
                    <div className="delivery-block__table-row-item">60 грн.</div>
                  </div>
                </div>
                <p>
                  Если проезд к месту разгрузки затруднен, доставка будет осуществлена максимально близко к месту планируемой выгрузки без нарушения правил дорожного движения и вероятности повреждения автомобиля, а перенос товара считается как подъем на этаж за каждые 30 метров.
                </p>
              </article>
            </div>
            <div className="delivery__block delivery-block">
              <div className="delivery-block__header">
                <div className="delivery-block__header-title">Товариство з обмеженою відповідальністю "Дверний Олімп"</div>
              </div>
              <article className="delivery-block__article">
                <p>
                  <strong>Місцезнаходження юридичної особи:</strong>
                  04114, м. Київ, вулиця Автозаводська, будинок 29-А, приміщення 4
                </p>
                <p>
                  <strong>
                    Дата та номер запису в Єдиному державному реєстрі юридичних осіб та фізичних осіб-підприємців про проведення державної реєстрації:
                    <span>29.10.2015, 1 069 102 0000 035539</span>
                  </strong>
                </p>
                <div className="delivery-block__links">
                  <h4>Адреса магазинов (для просмотра ИНФО нажать НА АДРЕС):</h4>
                  <div className="delivery-block__links-inner">
                    <div className="delivery-block__links-item">
                      <div className="delivery-block__links-title">КИЕВ</div>
                      <div className="delivery-block__links-list">
                        <Link className="delivery-block__links-link" to="#">
                          <span className="delivery-block__links-text">Голосеевский (м. Васильковская)</span>
                          <span className="delivery-block__links-icon">
                            <svg><use href={`${sprite}#big-item-arrow`} /></svg>
                          </span>
                        </Link>
                        <Link className="delivery-block__links-link" to="#">
                          <span className="delivery-block__links-text">Оболонский р-н</span>
                          <span className="delivery-block__links-icon">
                            <svg><use href={`${sprite}#big-item-arrow`} /></svg>
                          </span>
                        </Link>
                        <Link className="delivery-block__links-link" to="#">
                          <span className="delivery-block__links-text">Голосеевский (м. Васильковская)</span>
                          <span className="delivery-block__links-icon">
                            <svg><use href={`${sprite}#big-item-arrow`} /></svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="delivery-block__links-item">
                      <div className="delivery-block__links-title">КИЕВ</div>
                      <div className="delivery-block__links-list">
                        <Link className="delivery-block__links-link" to="#">
                          <span className="delivery-block__links-text">Голосеевский (м. Васильковская)</span>
                          <span className="delivery-block__links-icon">
                            <svg><use href={`${sprite}#big-item-arrow`} /></svg>
                          </span>
                        </Link>
                        <Link className="delivery-block__links-link" to="#">
                          <span className="delivery-block__links-text">Оболонский р-н</span>
                          <span className="delivery-block__links-icon">
                            <svg><use href={`${sprite}#big-item-arrow`} /></svg>
                          </span>
                        </Link>
                        <Link className="delivery-block__links-link" to="#">
                          <span className="delivery-block__links-text">Голосеевский (м. Васильковская)</span>
                          <span className="delivery-block__links-icon">
                            <svg><use href={`${sprite}#big-item-arrow`} /></svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="delivery-block__links-item">
                      <div className="delivery-block__links-title">КИЕВ</div>
                      <div className="delivery-block__links-list">
                        <Link className="delivery-block__links-link" to="#">
                          <span className="delivery-block__links-text">Голосеевский (м. Васильковская)</span>
                          <span className="delivery-block__links-icon">
                            <svg><use href={`${sprite}#big-item-arrow`} /></svg>
                          </span>
                        </Link>
                        <Link className="delivery-block__links-link" to="#">
                          <span className="delivery-block__links-text">Оболонский р-н</span>
                          <span className="delivery-block__links-icon">
                            <svg><use href={`${sprite}#big-item-arrow`} /></svg>
                          </span>
                        </Link>
                        <Link className="delivery-block__links-link" to="#">
                          <span className="delivery-block__links-text">Голосеевский (м. Васильковская)</span>
                          <span className="delivery-block__links-icon">
                            <svg><use href={`${sprite}#big-item-arrow`} /></svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="delivery__banner delivery-banner">
            <div className="delivery-banner__inner">
              <div className="delivery-banner__inner sidebar-banner">
                <div className="delivery-banner__icon sidebar-banner__icon">
                  <svg><use href={`${sprite}#banner-user`} /></svg>
                </div>
                <div className="delivery-banner__title sidebar-banner__title">Нужна консультация?</div>
                <p className="delivery-banner__desc sidebar-banner__desc">Перезвоните или напишите нам, мы с радостью поможем</p>
                <a className="delivery-banner__phone sidebar-banner__phone" href="tel:380800339827">0 800 339 827</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeliveryIntro