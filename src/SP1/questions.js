// chentrvax HARXER: 5,6,8,11,13,16,17,18,21,22,26,28
const Questions = [
  {
    id: 'Մ1',
    text: 'Ռիօ – 2016 Օլիմպիական խաղերում Հայաստանը քանի՞ մեդալ շահեց:',
    answers: [
      {
        text: '4',
        correct: true,
      }, {
        text: '7',
        correct: false,
      }, {
        text: '11',
        correct: false,
      }, {
        text: '6',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ2',
    text: 'Օլիմպիական խաղերում,ո՞վ է եղել Իրանի առաջին եւ միակ կին մեդալակիրը:',
    answers: [
      {
        text: 'Քիմիա Ալիզադեհ',
        correct: true,
      }, {
        text: 'Զահրա Նեմաթի',
        correct: false,
      }, {
        text: 'Լիդա Ֆարիման',
        correct: false,
      }, {
        text: 'Մելիքա Միր-Հոսէյնի',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ3',
    text: 'Օլիմպիական խաղերում քանի՞ մեդալ է շահել Ամերիկացի լեգենդար լողորդ՝ Մայքլ Ֆելփսը:',
    answers: [
      {
        text: '23',
        correct: true,
      }, {
        text: '18',
        correct: false,
      }, {
        text: '8',
        correct: false,
      }, {
        text: '14',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ4',
    text: 'Նշւած մարզիկներից ո՞րն է ամենատարեց Ֆուտբոլիստը:',
    answers: [
      {
        text: 'Քրիստիանօ Ռոնալդօ',
        correct: true,
      }, {
        text: 'Լուիզ Սուարեզ',
        correct: false,
      }, {
        text: 'Վէյն Ռունի',
        correct: false,
      }, {
        text: 'Սեսկ Ֆաբրեգաս',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ5',
    text: 'Աթենք-2004 Օլիմպիական խաղերում, ո՞ր երկիրն է նւաճել տղամարդկանց բասկետբոլի ախոյան կոչումը:',
    answers: [
      {
        text: 'Արգենտինա',
        correct: true,
      }, {
        text: 'Իսպանիա',
        correct: false,
      }, {
        text: 'Ամերիկա',
        correct: false,
      }, {
        text: 'Սերբիա',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ6',
    text: 'Նշւած Ֆուտբոլի հաւաքականներից ո՞րն է ամենաշատ մասնակցութիւնը բերել Եւրոպայի գաւաթին:',
    answers: [
      {
        text: 'Գերմանիա',
        correct: true,
      }, {
        text: 'Իտալիա',
        correct: false,
      }, {
        text: 'Ֆրանսիա',
        correct: false,
      }, {
        text: 'Անգլիա',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ7',
    text: 'Ամենաթանկ  թրանֆերանսը (TRANFERANS) ո՞ր Ֆուտբոլիստի դէպքում է կատարւել:',
    answers: [
      {
        text: 'Փոգբա',
        correct: true,
      }, {
        text: 'Գարեթ Բէյլ ',
        correct: false,
      }, {
        text: 'Նէյմար',
        correct: false,
      }, {
        text: 'Ռոնալդօ',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ8',
    text: 'Ո՞ր հաւաքականին է տրւած «Լոնդոնի հրաձիկներ»  տիտղոսը:',
    answers: [
      {
        text: 'Արսենալ',
        correct: true,
      }, {
        text: 'Չելսի',
        correct: false,
      }, {
        text: 'Էվերտոն',
        correct: false,
      }, {
        text: 'Տոտենհամ',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ9',
    text: 'Ո՞վ է համարւում 2017-ի թիւ մէկ թենիսիստը (սրահի թենիս):',
    answers: [
      {
        text: 'Էնդի Մարէյ',
        correct: true,
      }, {
        text: 'Ջոկովիչ',
        correct: false,
      }, {
        text: 'Նադալ',
        correct: false,
      }, {
        text: 'Ֆեդերեր',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ10',
    text: 'Իրանցի ո՞ր մրցավարին է վստահւել Ռիօ 2016-ի Ֆուտբոլի եզրափակիչ խաղի մրցավարութիւնը:',
    fontsize: '45px',
    answers: [
      {
        text: 'Ֆաղանի',
        correct: true,
      }, {
        text: 'Մոհսեն Թորքի',
        correct: false,
      }, {
        text: 'Մոհսեն ղահրամանի',
        correct: false,
      }, {
        text: 'Սայիդ Բախշիզադեհ',
        correct: false,
        fontSize: '30px',
      },
    ],
  },
  {
    id: 'Մ11',
    text: 'Ի՞նչէ կոչւում թեհրանի ամենահին մարզաւանը:',
    answers: [
      {
        text: 'Ամջադիէ',
        correct: true,
      }, {
        text: 'Ազադի',
        correct: false,
      }, {
        text: 'Շիրուդի',
        correct: false,
      }, {
        text: 'Արարատ',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ12',
    text: 'Մարատոնեան վազքուղին քանի՞ կիլոմետր է :',
    answers: [
      {
        text: '42',
        correct: true,
      }, {
        text: '10',
        correct: false,
      }, {
        text: '5',
        correct: false,
      }, {
        text: '30',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ13',
    text: 'N.B.A.-ում , ո՞ր հաւաքականն է նւաճել ամենաշատ ախոյան կոչումը:',
    answers: [
      {
        text: 'Բոստոն Սելտիկս',
        correct: true,
      }, {
        text: 'Լոսանջելես  Լէյքերս',
        correct: false,
      }, {
        text: 'Չիկագօ Բուլս',
        correct: false,
      }, {
        text: 'Մայամի Հիթ',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ14',
    text: 'Ո՞ր թւականին է հիմնադրւել N.B.A.-ը',
    answers: [
      {
        text: '1946',
        correct: true,
      }, {
        text: '1935',
        correct: false,
      }, {
        text: '1960',
        correct: false,
      }, {
        text: '1886',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ15',
    text: 'Սեղանի թենիսի գնդակի քաշը քանի՞ գրամ է:',
    answers: [
      {
        text: '2.72',
        correct: true,
      }, {
        text: '1',
        correct: false,
      }, {
        text: '2.50',
        correct: false,
      }, {
        text: '4',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ16',
    text: 'Ո՞ր երկրի քաղաքացի է արագավազ Ուսէյն (Հոսէյն) Բոլտը',
    answers: [
      {
        text: 'Ջամայիկա',
        correct: true,
      }, {
        text: 'Ամերիկա',
        correct: false,
      }, {
        text: 'Աֆրիկա',
        correct: false,
      }, {
        text: 'Փորտորիկօ',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ17',
    text: 'Վոլէյբոլ մարզաճիւղի մրցավարները քանի՞սն են :',
    answers: [
      {
        text: '10',
        correct: true,
      }, {
        text: '2',
        correct: false,
      }, {
        text: '5',
        correct: false,
      }, {
        text: '4',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ18',
    text: 'Քանի՞ մարզիկից է բաղկացած Վոլէյբոլ մարզաձեւի իւրաքանչիւր թիմը:',
    answers: [
      {
        text: '12',
        correct: true,
      }, {
        text: '22',
        correct: false,
      }, {
        text: '8',
        correct: false,
      }, {
        text: '14',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ19',
    text: 'Ո՞վ շահեց Ռիօ-2016-ի կանանց 100-մետր վազքի ոսկեայ մեդալը:',
    answers: [
      {
        text: 'Էլէյն թամսոն',
        correct: true,
      }, {
        text: 'Սերենա Վիլիամզ',
        correct: false,
      }, {
        text: 'Աննա շարափովա',
        correct: false,
      }, {
        text: 'Աննա կուրնիկովա',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ20',
    text: 'Քանի՞ սանտիմետր է, Սեղանի թենիսի սեղանի երկարութիւնը :',
    answers: [
      {
        text: '274',
        correct: true,
      }, {
        text: '300',
        correct: false,
      }, {
        text: '175',
        correct: false,
      }, {
        text: '250',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ21',
    text: 'Ի՞նչ է կոչւում աշխարհի լողի Ֆեդերացիան:',
    answers: [
      {
        text: 'FINA',
        correct: true,
      }, {
        text: 'FILA',
        correct: false,
      }, {
        text: 'FISA',
        correct: false,
      }, {
        text: 'IHF',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ22',
    text: 'Ի՞նչէ կոչւում միջազգային օլիմպիական կոմիտէն:',
    answers: [
      {
        text: 'I.O.C',
        correct: true,
      }, {
        text: 'I.A.A.F.',
        correct: false,
      }, {
        text: 'I.J.F.',
        correct: false,
      }, {
        text: 'I.S.F.',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ23',
    text: 'Տարւայ ո՞ր ամսում է կայանում՝ Տուր  դը Ֆրանս հեծանւային մրցաշարը:',
    answers: [
      {
        text: 'Յուլիս',
        correct: true,
      }, {
        text: 'Յունիս',
        correct: false,
      }, {
        text: 'Մարտ',
        correct: false,
      }, {
        text: 'Ապրիլ',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ24',
    text: '2014-ի Ֆուտբոլի աշխարհի գաւաթի մրցութիւններում, ո՞ր թիմը Գերմանիայի հաւաքականից «ծանր» պարտութիւն կրեց:',
    answers: [
      {
        text: 'Բրազիլիա',
        correct: true,
      }, {
        text: 'Անգլիա',
        correct: false,
      }, {
        text: 'Ֆրանսիա',
        correct: false,
      }, {
        text: 'Իտալիա',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ25',
    text: 'Եւրոպայի Ֆուտբոլի գաւաթի մրցութիւններում, ո՞ր երկիրն է երկակի (երկու անգամ անընդմեջ) ախոյան հանդիսացել:',
    answers: [
      {
        text: 'Իսպանիա',
        correct: true,
      }, {
        text: 'Իտալիա',
        correct: false,
      }, {
        text: 'Գերմանիա',
        correct: false,
      }, {
        text: 'Ֆրանսիա',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ26',
    text: 'Ո՞ր երկրում կամ երկրներում է կայացել՝ 2002 թւականին Ֆուտբոլի աշխարհի գաւաթը:',
    answers: [
      {
        text: 'Կորեա եւ ճապոնեա',
        correct: true,
      }, {
        text: 'Գերմանիա',
        correct: false,
      }, {
        text: 'Աւստրիա եւ  Շւեցարիա',
        correct: false,
      }, {
        text: 'Յունաստան',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ27',
    text: 'Ո՞ր լողաձեւով է սկսւում՝ անհատական խառը լողի մրցոյթը:',
    answers: [
      {
        text: 'Բատերֆլայ',
        correct: true,
      }, {
        text: 'գորտնալող',
        correct: false,
      }, {
        text: 'Կլոր լող',
        correct: false,
      }, {
        text: 'Թիկնալող',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ28',
    text: 'Ո՞վ է եղել 2015 թւականի բասկետբոլի աստղերի խաղի 3-նիշանոց նետումի յաղթողը:',
    answers: [
      {
        text: 'Կելլի Տամսոն',
        correct: true,
      }, {
        text: 'Ստեֆեն Քարի',
        correct: false,
      }, {
        text: 'Զաք Դավսոն',
        correct: false,
      }, {
        text: 'Ջէյմզ Հարդեն',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ29',
    text: 'Քանի՞ մետր է հեռացատկ մարզաձեւի վազքուղու երկարութիւնը:',
    answers: [
      {
        text: '40',
        correct: true,
      }, {
        text: '65',
        correct: false,
      }, {
        text: '15',
        correct: false,
      }, {
        text: '80',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ30',
    text: 'Քանի՞ րոպէանոց խաղամասերից է բաղկացած հանդբոլ մարզաձեւը:',
    answers: [
      {
        text: '2x30',
        correct: true,
      }, {
        text: '2x40',
        correct: false,
      }, {
        text: '2x20',
        correct: false,
      }, {
        text: '2x15',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ31',
    text: 'Լող մարզաձևը բաղկացածէ քանի՞ հիմնական մրցոյթաշարից:',
    answers: [
      {
        text: '4',
        correct: true,
      }, {
        text: '3',
        correct: false,
      }, {
        text: '6',
        correct: false,
      }, {
        text: '5',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ32',
    text: 'Իրանի միակ յաղթանակը համաշխարհային մրցանակի գաւաթ (جام جهانی) մրցաշարում ո՞ր հաւաքականի նկատմամբ էր:',
    answers: [
      {
        text: 'Ա.Մ.Ն.',
        correct: true,
      }, {
        text: 'Անգուլա',
        correct: false,
      }, {
        text: 'Նիջեռիէ',
        correct: false,
      }, {
        text: 'Բոսնի',
        correct: false,
      },
    ],
  },
  {
    id: 'Մ33',
    text: 'Նախքան Րէալ Մադրիդ, Ռոնալդոն խաղում է՞ր..',
    answers: [
      {
        text: 'Մանչեսթր Յունայթեդ',
        correct: true,
      }, {
        text: 'Բայեռն Մունիխ',
        correct: false,
      }, {
        text: 'Չելսի',
        correct: false,
      }, {
        text: 'Միլան',
        correct: false,
      },
    ],
  },

];

export default Questions;
