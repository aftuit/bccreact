// "strict mode"

import React from "react";

const LangContext = React.createContext(null);

const language = {
  ru: {
    header: {
      title:
        "Получите самые уютные и комфортные дома своей мечты вместе c нами",
      button: "Выбрать квартиру",
    },
    missions: {
      title: "НАША МИССИЯ",
      desc: "Быть самым надежным именем в сфере недвижимости во всем мир",
      info: `Мы всегда стремимся обеспечить лучший жизненный опыт. Сегодня 
            лучше, чем вчера. Завтра лучше, чем сегодня. Стройте знаменитые здания и 
            просторные резиденции в рекордно короткие сроки, обеспечив жителям наиболее 
            полноценный образ жизни.`,
    },
    row: {
      item1: [
        "Жилые комплексы",
        "Возможность владеть недвижимостью путем создания ряда объектов жилой недвижимости в удобном месте и по доступным ценам.",
      ],
      item2: [
        "Коммерческие разработки",
        "Наша миссия — это бескомпромиссное стремление создать прекрасную среду для жизни, работы и хорошей жизни.",
      ],
      item3: [
        "Инвестор",
        "Имея более чем 10-летний опыт работы, наша команда заработала прочную репутацию надежной и заслуживающей доверия организации в сфере недвижимости.",
      ],
    },
    preview: {
      title: "НАШИ ПРЕИМУЩЕСТВА",
      desc: "Делаем жилые помещения доступными",
      item1: [
        "ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ",
        `Жилой комплекс строится на основе стандартов XXI века, современных технологий гидроизоляции, звукоизоляции, теплоизоляции, материалов и монолитных блоков. Строительство ведется по современным технологиям как зарубежного, так и отечественного производства.`,
      ],
      item2: [
        "КОМФОРТ И БЕЗОПАСНОСТЬ",
        "Анализ факторов, влияющих на комфорт и безопасность среды обитания, как внутри дома, так и на прилегающих к нему пространствах, показал, что они отличаются по видам физического воздействия на человека, ощущениям, восприятию и удобству пользования элементами пространства.",
      ],
      item3: [
        "ЭКСКЛЮЗИВНЫЙ ДИЗАЙН",
        "Наш проект отличается высококачественным строительством, использованием передовых технологий, a также современным дизайном. Дизайн комплекса был разработан лучшими дизайнерами Турции и отличается своим новомодным и изысканным стилем.",
      ],
      item4: [
        "СОВРЕМЕННАЯ АРХИТЕКТУРА",
        "Уникальность в том, что цокольные части всего комплекса соединены между собой и есть дополнительные парковочные места. Первый и второй этажи комплекса отведены под магазины и хозяйственные постройки.",
      ],
    },
    apartments: {
      title: "",
      desc: "ПЛАНИРОВКА КВАРТИР",
      select1: "2-х комнатные",
      select2: "3-х комнатные",
      floors: [
        "этаж - 1",
        "этаж - 2",
        "этаж - 3",
        "этаж - 4",
        "этаж - 5",
        "этаж - 6",
        "этаж - 7",
        "этаж - 8",
        "этаж - 9",
        "этаж - 10",
        "этаж - 11",
        "этаж - 12",
        "этаж - 13",
        "этаж - 14",
        "этаж - 15",
        "этаж - 16",
      ],
      info: "О квартире",
      total: "Стоимость от ",
      area: "Площадь от ",
      balcony: "Балкон ",
      bedroom: "Спальня ",
      bathroom: "Санузел ",
      hallway: "Прихожая ",
      kitchen: "Кухня ",
      living_room: "Отель ",
      call: "Забронировать",
    },
    video: {
      title1: "Мы ответим на все",
      title2: "Ваши вопросы!",
      desc: "Оставьте заявку или позвоните по телефону",
      consult: "Получить консультацию",
    },
    consultation: {
      title: "Пoлyчитe консультацию",
      textb: "Сообщение отправлено!",
      texti: "Мы свяжемся c вами скоро",
      name: "Имя",
      tel: "Телефон",
      desc: "Нажимая кнопку “Получить консультацию” вы соглашаетесь c условиями обработки личных данных",
      button: "Получить консультацию",
    },
    footer: {
      title: "Наши филиалы:",

      b1: "Сергелийский 9-й",
      b2: "Сергелийский 10-й",
      b3: "Янги Дархан",
    },
  },

  uz: {
    header: {
      title: `Biz bilan orzuyingizdagi eng shinam va qulay uylarga ega bo'ling`,
      button: "Xonadon tanlang",
    },
    missions: {
      title: "BIZNING MAQSAD",
      desc: "Dunyo bo'ylab eng ishonchli ko'chmas mulk nomi bo'lish",
      info: `Biz doimo eng yaxshi hayot tajribasini taqdim etishga intilamiz.
            Bugun kechagidan yaxshiroq. Ertangi kun bugungidan yaxshiroq. 
            Rekord vaqt ichida mashhur binolar va keng turar-joylarni qurish,
            aholi uchun eng to'laqonli hayot tarzini ta'minlaydi.`,
    },
    row: {
      item1: [
        "Turar-joy komplekslari",
        "Qulay joylarda hamda hamyonbop narxlarda bir qator turar-joy mulklarini yaratish orqali ko'chmas mulkka ega bo'lish imkoni.",
      ],
      item2: [
        "Tijoriy ishlanmalar",
        "Bizning vazifamiz yashash, ishlash va yaxshi hayot kechirish uchun ajoyib muhit yaratishga murosasiz intilishdir.",
      ],
      item3: [
        "Investor",
        "Jamoamiz o'zining 10 yillik tajribasi davomida ishonchli va ishonchli ko'chmas mulk tashkiloti sifatida mustahkam obro'ga ega bo'lib kelmoqda.",
      ],
    },
    preview: {
      title: "BIZNING AVZALLIKLARIMIZ",
      desc: "Yashash joylarini qulay qilish",
      item1: [
        "INNOVATSION TEXNOLOGIYALAR",
        `Turar-joy majmuasi XXI asr standartlari asosida zamonaviy gidroizolyatsiya, ovoz o'tkazmaydigan, issiqlik izolatsiyasi kabi texnologiyalar, materiallar, monolit bloklar asosida barpo etilmoqda. Qurilish ham xorijiy, ham mahalliy ishlab chiqarishning zamonaviy texnologiyalaridan foydalangan holda amalga oshirilmoqda.`,
      ],
      item2: [
        "QULAYLIK VA XAVFSIZLIK",
        "Uy ichida ham, unga tutash bo'lgan joylarda ham atrof-muhitning qulayligi va xavfsizligiga ta'sir qiluvchi omillarning tahlili shuni ko'rsatdiki, ular insonga jismoniy ta'sir turlari, hissiyotlar, idrok etish va kosmik elementlardan foydalanish qulayligi bilan farqlanadi.",
      ],
      item3: [
        "EKSKLUZIV DIZAYN",
        "Loyihamiz yuqori sifatli qurilishi, ilg'or texnologiyalardan foydalanish, shuningdek, zamonaviy dizayni bilan ajralib turadi. Majmua dizayni Turkiyaning eng yaxshi dizaynerlari tomonidan ishlab chiqilgan bo'lib, o'zining yangi va murakkab uslubi bilan ajralib turadi.",
      ],
      item4: [
        "ZAMONAVIY ARXITEKTURA",
        "O'ziga xoslik shundaki, butun majmuaning podval qismlari ulangan va qo'shimcha avtoturargohlar mavjud. Majmuaning birinchi ikkinchi qavati do‘konlar, maishiy xizmat ko‘rsatish binolari uchun ajratilgan.",
      ],
    },
    apartments: {
      title: "",
      desc: "Xonadon loyihasi",
      select1: "2 xonali",
      select2: "3 xonali",
      floors: [
        "1 - etaj",
        "2 - etaj",
        "3 - etaj",
        "4 - etaj",
        "5 - etaj",
        "6 - etaj",
        "7 - etaj",
        "8 - etaj",
        "9 - etaj",
        "10 - etaj",
        "11 - etaj",
        "12 - etaj",
        "13 - etaj",
        "14 - etaj",
        "15 - etaj",
        "16 - etaj",
      ],
      info: "Xonadon haqida",
      total: "Jami summa ",
      area: "Maydon ",
      balcony: "Balkon ",
      bedroom: "Yotoqxona ",
      bathroom: "Yuvinish xonasi ",
      hallway: "Koridor",
      kitchen: "Oshxona ",
      living_room: "Mehmonxona",
      call: "Bog'lanish",
    },
    video: {
      title1: "Barcha savollarga javob beramiz!",
      title2: "",
      desc: "So'rov qoldiring yoki qo'ng'iroq qiling",
      consult: "Konsultatsiya olish",
    },
    consultation: {
      title: "Konsultatsiya oling",
      textb: "Xabar yuborildi!",
      texti: "Tez orada siz bilan bog'lanamiz",
      name: "Ismingiz",
      tel: "Telefon raqamingiz",
      desc: `“Maslahat olish” tugmasini bosish orqali siz shaxsiy ma'lumotlarni qayta ishlash shartlariga rozilik bildirasiz`,
      button: "Maslahat olish",
    },
    footer: {
      title: "Bizning filiallarimiz:",
      textb: "Xabar yuborildi!",
      texti: "Tez orada siz bilan bog'lanamiz!",
      b1: "Sergeli 9-hudud",
      b2: "Sergeli 10-hudud",
      b3: "Yangi darhon",
    },
  },

  en: {
    header: {
        title:
          "Get the most cozy and comfortable home of your dreams with us",
        button: "Choose an apartment",
      },
      missions: {
        title: "OUR MISSION",
        desc: "To be the most trusted real-estate name worldwide",
        info: `We always strive to provide the best life experience. Today
        better than yesterday. Tomorrow is better 
        than today. Build iconic buildings and spacious 
        residences in record time to provide residents with 
        the most fulfilling lifestyle.`,
      },
      row: {
        item1: [
          "Residential complexes",
          "Opportunity to own real estate by creating a range of residential properties in a convenient location and at affordable prices.",
        ],
        item2: [
          "Commercial developments",
          "Our mission is to uncompromisingly strive to create a wonderful environment for living, working and living well.",
        ],
        item3: [
          "Investor",
          "With over 10 years of experience, our team has built a solid reputation as a reliable and trustworthy organization in the real estate industry.",
        ],
      },
      preview: {
        title: "OUR ADVANTAGES",
        desc: "Making living spaces accessible",
        item1: [
          "INNOVATIVE TECHNOLOGIES",
          `The residential complex is being built on the basis of the standards of the XXI century, modern technologies of waterproofing, sound insulation, thermal insulation, materials and monolithic blocks. The construction is carried out using modern technologies of both foreign and domestic production.`,
        ],
        item2: [
          "COMFORT AND SAFETY",
          "An analysis of the factors affecting the comfort and safety of the environment, both inside the house and in the spaces adjacent to it, showed that they differ in the types of physical impact on a person, sensations, perception and ease of use of space elements.",
        ],
        item3: [
          "EXCLUSIVE DESIGN",
          "Our project is characterized by high quality construction, advanced technologies and modern design. The design of the complex was developed by the best designers of Turkey and is distinguished by its newfangled and sophisticated style.",
        ],
        item4: [
          "MODERN ARCHITECTURE",
          "The uniqueness is that the basement parts of the entire complex are interconnected and there are additional parking spaces. The first and second floors of the complex are reserved for shops and outbuildings.",
        ],
      },
      apartments: {
        title: "",
        desc: "LAYOUT OF APARTMENTS",
        select1: "2 rooms",
        select2: "3 rooms",
        floors: [
          "1st floor",
          "2nd floor",
          "3rd floor",
          "4th floor",
          "5th floor",
          "6th floor",
          "7th floor",
          "8th floor",
          "9th floor",
          "10th floor",
          "11th floor",
          "12th floor",
          "13th floor",
          "14th floor",
          "15th floor",
          "16th floor"
        ],
        info: "About the apartment",
        total: "Price from ",
        area: "Area from ",
        balcony: "Balcony ",
        bedroom: "Bedroom ",
        bathroom: "Bathroom ",
        hallway: "Hallway ",
        kitchen: "Kitchen ",
        living_room: "Hotel ",
        call: "Reservation",
      },
      video: {
        title1: "We will answer your questions",
        title2: "Your questions!",
        desc: "Leave a request or call",
        consult: "Get the consultation",
      },
      consultation: {
        title: "Get the consultation",
        textb: "Message has been sent!",
        texti: "We will contact you soon",
        name: "Name",
        tel: "Phone number",
        desc: `By clicking the "Get a consultation" button, you agree to the terms of personal data processing`,
        button: "Get the consultation",
      },
      footer: {
        title: "Our branches:",
  
        b1: "Sergeli 9th",
        b2: "Sergeli 10th",
        b3: "Yangi Darkhan",
      },
  },
};

const LangProvider = ({ children }) => {
  const [lang] = React.useState(language);
  const [languageType, setLanguageType] = React.useState("ru");
  return (
    <LangContext.Provider value={{ lang, languageType, setLanguageType }}>
      {children}
    </LangContext.Provider>
  );
};

export { LangProvider, LangContext };
