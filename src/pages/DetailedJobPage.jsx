// src/pages/DetailedJobPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DetailedJobView from '../components/DetailedJobView/DetailedJobView';

// Если у вас массив вакансий вынесен в отдельный файл, импортируйте его;
// для примера здесь он дублируется:
import appleImg from '../assets/images/apple.svg';
import googleImg from '../assets/images/google.svg';
import facebookImg from '../assets/images/facebook.svg';
import yandexImg from '../assets/images/yandexicon.svg';

const initialJobs = [
    {
        id: 0,
        title: 'Старший UX-дизайнер',
        city: 'Москва',
        salary: '30 000 - 35 000',
        category: 'design',
        company: 'Apple',
        companyIcon: appleImg,
        // Дополнительные поля для детального просмотра:
        postedDate: '15 августа 2025',
        dueDate: '15 октября 2025',
        education: 'Высшее',
        experience: '7 лет',
        description: 'Ищем опытного UX-дизайнера, который будет проектировать удобные, продуманные и интуитивно понятные интерфейсы. Вам предстоит проводить глубокие исследования поведения пользователей, создавать детализированные сценарии взаимодействия и продумывать интерфейсы, повышающие комфорт аудитории. Вы будете разрабатывать и тестировать прототипы, проводить юзабилити-тестирования, а также внедрять улучшения, основываясь на обратной связи от пользователей. В обязанности также входит координация команды дизайнеров, контроль качества и соответствия интерфейсов общим стандартам компании. Важна способность работать в команде, грамотно аргументировать свои решения и эффективно взаимодействовать с разработчиками и маркетологами. Мы ожидаем, что вы активно следите за тенденциями UX-дизайна и сможете внедрять в процессы новые эффективные методики и подходы.',
        responsibilities: [
            'Проведение UX-исследований и интервью с пользователями',
            'Разработка пользовательских сценариев и CJM',
            'Создание интерактивных прототипов интерфейсов',
            'Организация и проведение юзабилити-тестирований',
            'Анализ данных и обратной связи от пользователей',
            'Руководство командой младших UX-дизайнеров',
            'Контроль соблюдения стандартов UX/UI-дизайна',
            'Составление и ведение дизайн-документации',
            'Совместная работа с разработчиками и маркетологами',
            'Отслеживание трендов и внедрение лучших практик UX-дизайна',
        ],
      },
      {
        id: 1,
        title: 'Младший графический дизайнер',
        city: 'Санкт-Петербург',
        salary: '50 000 - 70 000',
        category: 'design',
        company: 'Apple',
        companyIcon: appleImg,
        postedDate: '1 сентября 2025',
        dueDate: '1 ноября 2025',
        education: 'Среднее специальное',
        experience: '1-3 года',
        description: 'Приглашаем младшего графического дизайнера с развитым чувством вкуса и желанием профессионально расти в команде профессионалов. Ваша работа будет включать создание графических материалов, таких как презентации, рекламные баннеры, инфографика, иконки, адаптацию визуального контента под различные форматы и устройства, а также подготовку материалов к печати и публикациям в интернете. Вы будете помогать старшим дизайнерам, поддерживать актуальность фирменного стиля компании, работать с типографикой и композициями. Мы ценим внимательность к деталям, аккуратность и творческий подход к работе. Вам предстоит активно изучать графические тренды, предлагать идеи для развития визуального стиля и помогать создавать привлекательный контент, способный заинтересовать нашу целевую аудиторию.',
        responsibilities: [
            'Создание графических макетов и баннеров',
            'Адаптация и подготовка графики для разных носителей',
            'Помощь старшим дизайнерам в реализации проектов',
            'Создание и редактирование презентаций компании',
            'Подготовка материалов к печати и публикациям',
            'Соблюдение фирменного стиля в разрабатываемых материалах',
            'Работа с типографикой, композицией и цветом',
            'Поддержание порядка в графических материалах и файлах',
            'Участие в обсуждении и генерации новых идей',
            'Отслеживание трендов графического дизайна'
        ],
      },
      {
        id: 2,
        title: 'Визуальный дизайнер',
        city: 'Ростов',
        salary: '20 000 - 25 000',
        category: 'design',
        company: 'Google',
        companyIcon: googleImg,
        postedDate: '20 июля 2025',
        dueDate: '20 сентября 2025',
        education: 'Высшее',
        experience: '3-5 лет',
        description: 'Ищем визуального дизайнера для разработки привлекательных, стильных и функциональных интерфейсов для сайтов и мобильных приложений. Вы будете создавать графические элементы, иконки, иллюстрации и другие визуальные компоненты, обеспечивая целостность и узнаваемость бренда компании. В ваши обязанности входит адаптация дизайна под различные устройства и форматы, создание креативов для рекламных кампаний, взаимодействие с UX-дизайнерами и разработчиками для воплощения идей в жизнь. Важна способность понимать потребности пользователей, грамотно использовать типографику, композицию и цвета, а также следить за актуальными трендами в области визуального дизайна и интегрировать их в проекты компании. Мы ценим инициативность, внимательность к деталям и желание создавать эстетичные, современные и качественные визуальные решения.',
        responsibilities: [
            'Разработка визуальной концепции сайтов и приложений',
            'Создание графических элементов интерфейсов',
            'Работа с типографикой и композициями интерфейсов',
            'Адаптация дизайна под различные устройства и форматы',
            'Создание дизайн-макетов рекламных материалов',
            'Поддержка и развитие брендового визуального стиля',
            'Сотрудничество с UX-дизайнерами и разработчиками',
            'Участие в презентации дизайн-решений команде',
            'Поддержание единства визуального восприятия продуктов компании',
            'Мониторинг визуальных трендов и внедрение их в проекты'
        ],
      },
      {
        id: 3,
        title: 'Инженер-программист',
        city: 'Казань',
        salary: '15 000 - 20 000',
        category: 'it',
        company: 'Google',
        companyIcon: googleImg,
        postedDate: '10 июня 2025',
        dueDate: '10 августа 2025',
        education: 'Высшее',
        experience: '5-7 лет',
        description: 'Приглашаем инженера-программиста с опытом разработки качественного программного обеспечения и умением решать технически сложные задачи. Вы будете проектировать и реализовывать программные решения, заниматься оптимизацией и отладкой приложений, а также интеграцией различных компонентов и сервисов. В обязанности входит написание технической документации, участие в код-ревью, регулярное тестирование продуктов на производительность и безопасность. Важно активно взаимодействовать с другими разработчиками и аналитиками, уметь оперативно исправлять возникающие ошибки и улучшать качество кода. Мы ожидаем, что вы будете следить за новыми технологиями в сфере программирования, постоянно повышать уровень своих знаний, а также предлагать и внедрять эффективные решения, повышающие производительность и стабильность наших приложений.',
        responsibilities: [
            'Разработка и поддержка программного обеспечения',
            'Проектирование архитектуры приложений',
            'Оптимизация существующего кода и его производительности',
            'Проведение тестирования и отладки приложений',
            'Интеграция программного обеспечения с другими системами',
            'Написание технической документации',
            'Участие в ревью кода и командной работе',
            'Решение сложных технических задач и багов',
            'Мониторинг и поддержка работы существующих проектов',
            'Отслеживание трендов в программировании и внедрение новых технологий'
        ],
      },
      {
        id: 4,
        title: 'Фронтенд-разработчик',
        city: 'Астрахань',
        salary: '50 000 - 60 000',
        category: 'it',
        company: 'Facebook',
        companyIcon: facebookImg,
        postedDate: '5 мая 2025',
        dueDate: '5 июля 2025',
        education: 'Высшее',
        experience: '3-5 лет',
        description: 'Ищем талантливого фронтенд-разработчика, который будет создавать быстрые, отзывчивые и удобные пользовательские интерфейсы сайтов и приложений. В ваши обязанности будет входить верстка интерфейсов на основе макетов, создание интерактивных элементов и реализация клиентской логики, а также интеграция фронтенда с бэкендом. Вы будете следить за кросс-браузерностью, адаптивностью и оптимизацией производительности сайтов и приложений. Необходимы знания HTML, CSS, JavaScript и современных фреймворков (React, Vue или Angular). Вы будете регулярно взаимодействовать с дизайнерами и другими разработчиками, участвовать в командных ревью кода, поддерживать высокие стандарты разработки и технической документации, изучать и применять на практике современные подходы и инструменты фронтенд-разработки.',
        responsibilities: [
            'Разработка и верстка пользовательских интерфейсов',
            'Создание интерактивных элементов и анимаций',
            'Оптимизация производительности и скорости загрузки сайта',
            'Обеспечение адаптивности и кросс-браузерности сайтов',
            'Взаимодействие с командой UX/UI-дизайнеров и бэкенд-разработчиков',
            'Реализация клиентской логики и интеграция с API',
            'Поддержка и развитие существующего фронтенд-кода',
            'Участие в код-ревью и поддержка стандартов разработки',
            'Написание и ведение технической документации',
            'Мониторинг и изучение новых фронтенд-технологий'
        ],
      },
      {
        id: 5,
        title: 'Бэкенд-разработчик',
        city: 'Москва',
        salary: '35 000 - 40 000',
        category: 'it',
        company: 'Facebook',
        companyIcon: facebookImg,
        postedDate: '12 апреля 2025',
        dueDate: '12 июня 2025',
        education: 'Высшее',
        experience: '4-6 лет',
        description: 'Приглашаем бэкенд-разработчика для создания надежных, масштабируемых и производительных серверных решений. Вы будете заниматься проектированием архитектуры приложений, разработкой REST API, работой с базами данных (SQL и NoSQL), интеграцией сторонних сервисов и системами безопасности данных. В обязанности входит оптимизация производительности приложений, тестирование и отладка кода, а также составление технической документации. Мы ценим способность эффективно взаимодействовать с командой фронтенд-разработчиков, решать сложные технические задачи, своевременно исправлять ошибки и следить за стабильностью работы серверных приложений. Также важно постоянно развиваться профессионально, изучать и внедрять в процесс разработки новые технологии, подходы и инструменты для создания качественного, быстрого и безопасного бэкенда.',
        responsibilities: [
            'Разработка серверной части веб-приложений',
            'Создание и поддержка REST API и сервисов',
            'Работа с базами данных и их оптимизация',
            'Реализация механизмов защиты данных и безопасности',
            'Интеграция приложений со сторонними сервисами',
            'Оптимизация производительности серверного ПО',
            'Участие в тестировании и отладке серверного кода',
            'Написание и ведение технической документации',
            'Взаимодействие с командой фронтенд-разработчиков',
            'Изучение новых технологий и внедрение их в разработку'
        ],
      },
      {
        id: 6,
        title: 'Маркетолог',
        city: 'Казань',
        salary: '20 000 - 25 000',
        category: 'marketing',
        company: 'Яндекс',
        companyIcon: yandexImg,
        postedDate: '1 марта 2025',
        dueDate: '1 мая 2025',
        education: 'Высшее',
        experience: '2-4 года',
        description: 'Ищем маркетолога, который будет заниматься разработкой и реализацией эффективных стратегий продвижения компании и её продуктов. Вы будете проводить маркетинговые исследования, анализировать конкурентов и предпочтения целевой аудитории, разрабатывать рекламные кампании, заниматься контент-маркетингом и продвижением в социальных сетях. Вам предстоит работать с подрядчиками и партнёрами компании, контролировать рекламный бюджет и эффективность продвижения, анализировать результаты и регулярно предоставлять отчёты руководству. Важно следить за актуальными трендами рынка, оперативно корректировать стратегию продвижения, генерировать идеи по привлечению клиентов и повышению узнаваемости бренда. Мы ожидаем от вас креативность, аналитический подход к работе, ответственность и способность достигать поставленных маркетинговых целей компании.',
        responsibilities: [
            'Проведение маркетинговых исследований и анализ рынка',
            'Разработка маркетинговых стратегий компании',
            'Запуск и контроль рекламных кампаний',
            'Создание контент-планов и ведение социальных сетей',
            'Анализ эффективности и подготовка отчетов по кампаниям',
            'Контроль рекламного бюджета и затрат',
            'Работа с подрядчиками и партнёрами',
            'Организация мероприятий и акций',
            'Мониторинг трендов и активности конкурентов',
            'Участие в разработке и развитии бренда компании'
        ],
      },
      {
        id: 7,
        title: 'Таргетолог',
        city: 'Санкт-Петербург',
        salary: '50 000 - 90 000',
        category: 'marketing',
        company: 'Яндекс',
        companyIcon: yandexImg,
        postedDate: '20 февраля 2025',
        dueDate: '20 апреля 2025',
        education: 'Среднее специальное',
        experience: '1-2 года',
        description: 'Ищем таргетолога с опытом работы в социальных сетях и умением эффективно привлекать целевую аудиторию. Вам предстоит настраивать и вести рекламные кампании в соцсетях, проводить сегментацию аудитории, создавать рекламные объявления и подбирать подходящие креативы. Важной частью работы будет являться регулярная оптимизация рекламных кампаний, контроль рекламного бюджета и анализ эффективности объявлений по ключевым метрикам (CPA, CPC, CTR). Также вы будете взаимодействовать с дизайнерами и копирайтерами, чтобы разрабатывать эффективный рекламный контент. Мы ожидаем, что вы будете отслеживать тренды в таргетированной рекламе, регулярно тестировать новые подходы, оперативно корректировать стратегии продвижения и добиваться высоких показателей конверсий, роста продаж и узнаваемости бренда.',
        responsibilities: [
            'Настройка и ведение рекламных кампаний в соцсетях',
            'Сегментация и анализ целевой аудитории',
            'Создание и тестирование рекламных объявлений и креативов',
            'Оптимизация рекламных кампаний по ключевым показателям',
            'Проведение регулярных A/B-тестирований рекламы',
            'Мониторинг и анализ эффективности рекламы',
            'Подготовка отчетности по результатам кампаний',
            'Контроль и эффективное распределение рекламного бюджета',
            'Взаимодействие с командой дизайнеров и копирайтеров',
            'Отслеживание трендов и внедрение новых подходов в таргетинге'
        ],
      },
];

function DetailedJobPage() {
    const { jobId } = useParams();
    const navigate = useNavigate();
  
    // Преобразуем jobId в число и находим соответствующую вакансию по id
    const numericId = parseInt(jobId, 10);
    const jobData = initialJobs.find((job) => job.id === numericId);
  
    if (!jobData) {
      return (
        <div className="detailedJobPage">
          <div className="detailedJobPage__error">
            <h2>Вакансия не найдена.</h2>
            <button onClick={() => navigate('/find-jobs')}>Вернуться</button>
          </div>
        </div>
      );
    }
  

    return (
        <div className="detailedJobPage">
          {/* Шапка (общий, поэтому он не повторяется, если вы используете его в App.js, его можно убрать здесь) */}
    
          {/* Контейнер для контента, чтобы отступы применялись только к нему */}
          <div className="detailedJobPage__content">
            <div className="detailedJobPage__banner">
              <h3 className="detailedJobPage__bannerText">Детали вакансии</h3>
            </div>
    
            <DetailedJobView jobData={jobData} />
          </div>
        </div>
      );
    }
    
    export default DetailedJobPage;