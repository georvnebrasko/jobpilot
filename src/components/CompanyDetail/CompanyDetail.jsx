// src/pages/CompanyDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CompanyDetail.scss';

import freepikImg from '../../assets/images/aeroflot.svg';
import appleImg from '../../assets/images/apple.svg';
import facebookImg from '../../assets/images/facebook.svg';
import figmaImg from '../../assets/images/figma.svg';
import yandexImg from '../../assets/images/yandexicon.svg';
import googleImg from '../../assets/images/google.svg';

function CompanyDetail() {
  const { companyId } = useParams();
  const navigate = useNavigate();

  // Пример статических данных компаний.
  const companies = {
    apple: {
      id: 'apple',
      name: 'Apple Inc.',
      logo: appleImg,
      industry: 'Информационные технологии (IT)',
      founded: '1976 г.',
      headquarters: 'Купертино, США',
      employees: '10000+',
      companyType: 'Частная',
      technologies: 'Swift, Objective-C, iOS, macOS',
      description: `Apple Inc. — американская транснациональная компания, занимающаяся разработкой и продажей потребительской электроники, программного обеспечения и онлайн-сервисов. Компания известна своими инновационными продуктами, такими как iPhone, iPad и Mac. Apple также активно развивает экосистему, включающую App Store, iCloud и другие сервисы, обеспечивая плавную интеграцию между устройствами. Благодаря фокусу на дизайне, качестве и пользовательском опыте, Apple стала одной из самых влиятельных и узнаваемых компаний в мире.`,
      benefits: `В Apple ценят творческий подход и инновации. Сотрудники получают возможность работать над продуктами, которые меняют мир. Компания предлагает вдохновляющую рабочую среду, поддержку профессионального развития и участие в передовых технологических проектах. В Apple создаются условия, где идеи могут воплощаться в жизнь, а каждый сотрудник чувствует свою значимость и вклад в общее дело. Это место, где объединяются талант, страсть и технологии.`,
      goal: `Наша цель — создавать лучшие в мире устройства и сервисы, которые помогают людям раскрывать свой потенциал. Мы стремимся разрабатывать технологии, которые делают жизнь проще, продуктивнее и насыщеннее. Apple фокусируется на том, чтобы каждый продукт приносил пользу, вдохновлял на творчество и способствовал самореализации. Через постоянные инновации и внимание к деталям мы стремимся делать мир лучше для каждого пользователя.`,
      website: 'https://www.apple.com',
      phone: '+1 408-996-1010',
      email: 'contact@apple.com',
      socialLinks: {
        facebook: 'https://facebook.com/apple',
        twitter: 'https://twitter.com/apple',
      },
    },
  
    freepik: {
      id: 'freepik',
      name: 'Freepik',
      logo: freepikImg,
      industry: 'Дизайн и графика',
      founded: '2005 г.',
      headquarters: 'Мадрид, Испания',
      employees: '500+',
      companyType: 'Частная',
      technologies: 'Adobe Photoshop, Illustrator, Sketch',
      description: `Freepik — ведущая платформа для дизайнеров, предлагающая миллионы векторных изображений, иллюстраций и фотографий для креативных проектов. Платформа помогает профессионалам и любителям находить качественные ресурсы для дизайна. Благодаря удобному интерфейсу, регулярному обновлению контента и разнообразию форматов, Freepik стал незаменимым инструментом для работы с визуальными материалами. Компания активно сотрудничает с художниками и контент-креаторами по всему миру, создавая вдохновляющее сообщество вокруг дизайна.`,
      benefits: `Freepik предоставляет своим сотрудникам гибкий график, возможность профессионального роста и работы над интересными проектами в динамичной среде. Компания поощряет инициативность, предлагает обучающие программы и по-настоящему ценит вклад каждого члена команды. Работая в Freepik, сотрудники получают доступ к современным инструментам и участвуют в развитии продуктов, которыми пользуются миллионы дизайнеров по всему миру. Это пространство для тех, кто хочет расти и создавать креативные решения.`,
      goal: `Наша цель — сделать дизайн доступным и вдохновляющим для каждого, кто стремится создавать красоту и функциональные решения. Мы хотим democratизировать визуальное творчество, предоставляя простой доступ к качественным ресурсам. Freepik стремится стать источником вдохновения и поддержки для дизайнеров всех уровней, помогая им воплощать свои идеи и развиваться. Через инновации, контент и сообщество мы создаём среду, в которой рождаются выдающиеся визуальные проекты.`,
      website: 'https://www.freepik.com',
      phone: '+34 910 123 456',
      email: 'info@freepik.com',
      socialLinks: {
        facebook: 'https://facebook.com/freepik',
        twitter: 'https://twitter.com/freepik',
      },
    },
  
    facebook: {
      id: 'facebook',
      name: 'Facebook Inc.',
      logo: facebookImg,
      industry: 'Социальные сети',
      founded: '2004 г.',
      headquarters: 'Менло-Парк, США',
      employees: '10000+',
      companyType: 'Частная',
      technologies: 'React, PHP, Hack',
      description: `Facebook Inc. — американская технологическая компания, управляющая одноимённой социальной сетью, которая соединяет миллиарды людей по всему миру. Компания также владеет Instagram, WhatsApp и другими сервисами. Facebook активно инвестирует в развитие цифровых коммуникаций, виртуальной и дополненной реальности, а также в развитие инфраструктуры интернета. Благодаря масштабности и инновационному подходу, компания играет ключевую роль в формировании будущего глобального цифрового взаимодействия.`,
      benefits: `Facebook предлагает своим сотрудникам конкурентоспособные условия, включая гибкий график, возможности для обучения и карьерного роста, а также работу над продуктами, влияющими на глобальное общение. Компания поощряет инициативность и предоставляет доступ к передовым инструментам и технологиям. Также сотрудники могут рассчитывать на социальные гарантии, корпоративные мероприятия и работу в мультикультурной среде, где ценятся идеи, креативность и командная работа.`,
      goal: `Наша цель — создавать платформы, которые помогают людям оставаться на связи, делиться информацией и строить сообщества. Мы стремимся к тому, чтобы наши технологии делали коммуникацию доступной, инклюзивной и безопасной для всех пользователей. Через развитие социальных платформ мы хотим расширять возможности для выражения, поддержки и сотрудничества между людьми независимо от их местоположения. Facebook строит цифровое будущее, где каждый может быть услышан.`,
      website: 'https://www.facebook.com',
      phone: '+1 650-543-4800',
      email: 'support@facebook.com',
      socialLinks: {
        facebook: 'https://facebook.com/facebook',
        twitter: 'https://twitter.com/facebook',
      },
    },
  
    figma: {
      id: 'figma',
      name: 'Figma Inc.',
      logo: figmaImg,
      industry: 'Дизайн и креатив',
      founded: '2012 г.',
      headquarters: 'Сан-Франциско, США',
      employees: '500+',
      companyType: 'Частная',
      technologies: 'WebGL, JavaScript, React',
      description: `Figma — современный облачный инструмент для дизайна интерфейсов, который позволяет командам работать над проектами в реальном времени. Благодаря интуитивно понятному интерфейсу и мощному функционалу, Figma быстро завоевала популярность среди дизайнеров по всему миру. Этот сервис предоставляет гибкие инструменты для создания прототипов, взаимодействия и совместной работы, облегчая процессы командного взаимодействия. Figma активно используется как в стартапах, так и в крупных компаниях, став неотъемлемой частью современного продуктового дизайна.`,
      benefits: `Figma предлагает своим сотрудникам креативную атмосферу, возможности для сотрудничества и постоянного профессионального развития, что позволяет создавать инновационные решения в сфере дизайна. Компания поддерживает культуру открытого диалога, поощряет обмен идеями и стремится к созданию комфортной рабочей среды. Сотрудники имеют доступ к обучающим ресурсам, участвуют в международных проектах и работают над продуктами, которыми пользуются миллионы. Figma — это место, где ценят талант, инициативу и стремление к росту.`,
      goal: `Наша цель — сделать дизайн доступным и эффективным, объединяя креативные умы для создания выдающихся продуктов. Мы стремимся democratизировать процесс дизайна, устраняя барьеры между идеями и их реализацией. Figma создаёт пространство, где дизайнеры, разработчики и менеджеры могут сотрудничать без ограничений, делая продукты красивыми, понятными и полезными. Через инновации мы хотим изменить подход к дизайну и дать людям инструменты для воплощения самых амбициозных идей.`,
      website: 'https://www.figma.com',
      phone: '+1 415-123-4567',
      email: 'hello@figma.com',
      socialLinks: {
        facebook: 'https://facebook.com/figma',
        twitter: 'https://twitter.com/figma',
      },
    },

    google: {
        id: 'google',
        name: 'Google LLC',
        logo: googleImg,
        industry: 'Информационные технологии (IT)',
        founded: '1998 г.',
        headquarters: 'Маунтин-Вью, США',
        employees: '10000+',
        companyType: 'Частная',
        technologies: 'Golang, Java, Android, Firebase',
        description: `Google LLC — американская компания, специализирующаяся на интернет-сервисах и продуктах, таких как поисковая система, онлайн-реклама, облачные вычисления и многое другое. Компания занимает лидирующее положение в сфере цифровых технологий и активно внедряет инновации в повседневную жизнь пользователей. Google разрабатывает и поддерживает широкий спектр решений — от мобильной операционной системы Android до платформ машинного обучения. Благодаря постоянному развитию и стремлению к совершенству, компания оказывает глобальное влияние на мир технологий.`,
        benefits: `В Google уделяют особое внимание комфорту сотрудников, предлагая гибкий график, питание в офисах, различные образовательные программы. Также предоставляются возможности для карьерного роста, участия в международных проектах и доступа к передовым технологическим разработкам. Сотрудники имеют возможность работать в многонациональной команде, развивать свои навыки в уникальной корпоративной культуре и получать поддержку в профессиональном и личностном развитии.`,
        goal: `Цель компании — организовать мировую информацию, сделать её доступной и полезной для каждого. Google стремится создавать инструменты, которые помогают людям находить нужные данные, взаимодействовать с цифровым пространством и принимать обоснованные решения. Компания делает акцент на прозрачности, инновационности и ответственности, стремясь формировать будущее, в котором технологии служат на благо общества.`,
        website: 'https://www.google.com',
        phone: '+1 650-253-0000',
        email: 'support@google.com',
        socialLinks: {
          facebook: 'https://facebook.com/google',
          twitter: 'https://twitter.com/google',
        },
      },
  
    yandex: {
      id: 'yandex',
      name: 'Яндекс',
      logo: yandexImg,
      industry: 'Информационные технологии, поисковые системы',
      founded: '1997 г.',
      headquarters: 'Москва, Россия',
      employees: '10000+',
      companyType: 'Публичная',
      technologies: 'Python, Java, Big Data, Machine Learning',
      description: `Yandex — ведущая российская IT-компания, предоставляющая широкий спектр сервисов: поисковая система, карты, такси, облачные технологии и многое другое. Компания активно внедряет инновационные решения в области искусственного интеллекта. Она стремится постоянно развиваться, улучшая существующие продукты и создавая новые, отвечающие потребностям современного пользователя. Благодаря сильной технической команде и многолетнему опыту, Yandex уверенно занимает лидирующие позиции на рынке.`,
      benefits: `Yandex ценит инновации и предлагает своим сотрудникам современные условия работы, возможности для профессионального роста и участие в масштабных технологических проектах. Компания предоставляет гибкий график, удалённую работу, корпоративные мероприятия, доступ к образовательным платформам и поддержку менторов. Это делает Yandex привлекательным местом для тех, кто хочет развиваться в динамичной и вдохновляющей среде.`,
      goal: `Наша цель — сделать цифровой мир более доступным и удобным для миллионов пользователей, используя передовые технологии и глубокий анализ данных. Мы стремимся улучшить повседневную жизнь людей, автоматизируя рутинные процессы и предоставляя интеллектуальные решения. Через постоянные инновации и развитие ИИ, мы хотим сформировать безопасное, эффективное и комфортное цифровое пространство для каждого.`,
      website: 'https://www.yandex.ru',
      phone: '+7 495 739-00-00',
      email: 'contact@yandex.ru',
      socialLinks: {
        facebook: 'https://facebook.com/yandex',
        twitter: 'https://twitter.com/yandex',
      },
    },
  };

  const company = companies[companyId];

  if (!company) {
    return (
      <div className="companyPage">
        <div className="companyPage__notFound">
          <h1>Компания не найдена</h1>
        </div>
      </div>
    );
  }

  // Пример обработчика кнопки «Просмотреть открытую позицию»
  const handleViewOpenPosition = () => {
    // Можно перенаправить на /find-jobs или на конкретную вакансию
    navigate('/find-jobs');
  };

  return (
    <div className="companyPage">
      {/* Шапка с названием, логотипом и кнопкой */}
      <div className="companyPage__header">
        <div className="companyPage__headerLeft">
          <img
            src={company.logo}
            alt={company.name}
            className="companyPage__logo"
          />
          <div className="companyPage__info">
            <h1 className="companyPage__name">{company.name}</h1>
            <p className="companyPage__subtitle">{company.industry}</p>
          </div>
        </div>
        <button 
          className="companyPage__openPositionBtn"
          onClick={handleViewOpenPosition}
        >
          Просмотреть открытую позицию
        </button>
      </div>

      {/* Основной контент в две колонки */}
      <div className="companyPage__content">
        {/* Левая колонка: описание, бенефиты, цель компании */}
        <div className="companyPage__leftColumn">
          <div className="companyPage__section">
            <h2 className="companyPage__sectionTitle">Описание</h2>
            <p>{company.description}</p>
          </div>

          <div className="companyPage__section">
            <h2 className="companyPage__sectionTitle">Бенефиты компании</h2>
            <p>{company.benefits}</p>
          </div>

          <div className="companyPage__section">
            <h2 className="companyPage__sectionTitle">Цель компании</h2>
            <p>{company.goal}</p>
          </div>
        </div>

        {/* Правая колонка: карточка с информацией и контактами */}
        <div className="companyPage__rightColumn">
          {/* Блок с ключевыми данными */}
          <div className="companyPage__infoBox">
            <h3>Основана</h3>
            <p>{company.founded}</p>
          </div>
          <div className="companyPage__infoBox">
            <h3>Тип организации</h3>
            <p>{company.companyType}</p>
          </div>
          <div className="companyPage__infoBox">
            <h3>Штаб-квартира</h3>
            <p>{company.headquarters}</p>
          </div>
          <div className="companyPage__infoBox">
            <h3>Число сотрудников</h3>
            <p>{company.employees}</p>
          </div>
          <div className="companyPage__infoBox">
            <h3>Технологии</h3>
            <p>{company.technologies}</p>
          </div>

          {/* Контактная информация */}
          <div className="companyPage__contactInfo">
            <h3>Контактная информация</h3>
            <ul>
              <li>
                <strong>Сайт: </strong>
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company.website}
                </a>
              </li>
              <li>
                <strong>Телефон:</strong> {company.phone}
              </li>
              <li>
                <strong>Email:</strong> {company.email}
              </li>
            </ul>
          </div>

          {/* Социальные сети */}
          <div className="companyPage__social">
            <h3>Следуй за нами</h3>
            <div className="companyPage__socialLinks">
              {company.socialLinks.facebook && (
                <a
                  href={company.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              )}
              {company.socialLinks.twitter && (
                <a
                  href={company.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              )}
              {/* Добавьте другие соцсети при необходимости */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetail;