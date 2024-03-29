Meteor.startup(function () {
  if(Markers.find().count() === 0){
    let marker = [
      {
        lat: 12.870380,
        lng: 100.895176,
        thumbnailUrl: 'https://copy.com/wkJQvBrERixvr63T',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'pattaya1',
        contentUrl : [
          'https://copy.com/WP8fAYiaRigeH8Mr',
          'https://copy.com/XT8HXys0PsckW7w4',
          'https://copy.com/pX63wEF6BTEBDWFi',
          'https://copy.com/JYghl4nAZniLeYK7',
          'https://copy.com/HXCaM9NMjTvQg8Jj',
          'https://copy.com/2rfX39BykHbInuWF',
          'https://copy.com/mR8G4kikT1sByoIs',
          'https://copy.com/PeNfZL92I1w10NIz',
          'https://copy.com/CS3nugJEE2n4I8Se',
          'https://copy.com/JTlQDWrXRhyQvDsu',
        ]
      },
      {
        lat: 12.935303,
        lng: 100.887966,
        thumbnailUrl: 'https://copy.com/b4Pm6YJViuKakwI9',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'pattaya2',
        contentUrl : [
          'https://copy.com/zaWXEvGCWT6Mq6hU',
          'https://copy.com/ojz9nZzxQqNvzjOn',
          'https://copy.com/1ER9xMZR4ALDRddx',
          'https://copy.com/8bq9Ub7P41FwiCiE',
          'https://copy.com/hHI87QEz1u3rN9LO',
          'https://copy.com/GcTbgvyhYxTcPlBs',
          'https://copy.com/Dx9koIMv1YrXoMt3',
          'https://copy.com/HypZSwylNaLdFNku',
          'https://copy.com/t8GPr8KDWXD6kI3t',
          'https://copy.com/LgbEeymQQBc47Kws',
        ]
      },
      {
        lat: 12.983482,
        lng: 100.922985,
        thumbnailUrl: 'https://copy.com/2mlMFqPLwcZB8EUQ',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'pattaya3',
        contentUrl : [
          'https://copy.com/1bLtnjy33yon8ZWa',
          'https://copy.com/nPXdYV9R7JFZDxPJ',
          'https://copy.com/QK3T19r0xtoAKwca',
          'https://copy.com/PR6gXbnmNZkKE6RA',
          'https://copy.com/dlibnYKcjLyIweek',
          'https://copy.com/BrKgpIK0G14tHAaA',
          'https://copy.com/sUREfDTIddZPwqZo',
          'https://copy.com/hpD3a0ucJZQRRMUC',
          'https://copy.com/zOszcykcxUArJ0VD',
          'https://copy.com/9pjQmnEWuVvNzBhJ',
        ]
      },
      {
        lat: 13.050048,
        lng: 100.912342,
        thumbnailUrl: 'https://copy.com/mVW4FVfyFR3T8IAv',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'pattaya4',
        contentUrl : [
          'https://copy.com/fITDlWqacJMjeg9h',
          'https://copy.com/By4ExpHQFhCIfxkC',
          'https://copy.com/zFA1BKO7NtJ4Dzxy',
          'https://copy.com/j8eC8jXAzmWITadG',
          'https://copy.com/K0v0ZhawbYlH8pnf',
          'https://copy.com/ivGIWnQVOUsdNkBA',
          'https://copy.com/wHS4dCS8vi27AVNT',
          'https://copy.com/hXiKO2RTKWL3Y64j',
          'https://copy.com/uRiWD1jb9Gj1cq3C',
          'https://copy.com/GMPlJFllqj4qPk8B',
          'https://copy.com/v2WcyB1V9tmdbQYz',
          'https://copy.com/ySn06Q6wnJHzg3LM',
        ]
      },
      {
        lat: 41.256001,
        lng: 16.458979,
        thumbnailUrl: 'https://copy.com/sdpssf6UIyUkhCkC',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'Italy1',
        contentUrl : [
          'https://copy.com/Y2KWTsiARWL6soqY',
          'https://copy.com/KSPlxnP48G7nTVi3',
          'https://copy.com/oSBu2HxsSU0unjMC',
          'https://copy.com/4LQryIFBtqsZnlaQ',
          'https://copy.com/4WOIoccrDXXWaxvF',
          'https://copy.com/cBm9ursw2ENjsT8Q',
          'https://copy.com/S3iAEMbuDS07kwmi',
          'https://copy.com/UELZO01twlg7iSPE',
          'https://copy.com/iLV9PYt87O6DIFtD',
          'https://copy.com/CX2wK24gRhmvNDwv',
        ]
      },
      {
        lat: 41.252323,
        lng: 16.474042,
        thumbnailUrl: 'https://copy.com/aQ1zyASzFhQYlBY4',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'Italy2',
        contentUrl : [
          'https://copy.com/hiIGLYUmdcfnvYmo',
          'https://copy.com/DvbY2Bq6dQ0dpHgO',
          'https://copy.com/XEnrRR94neKRSQfF',
          'https://copy.com/7lC2AAuAw9DTOLUs',
          'https://copy.com/7gxHyQZdTMFhEafy',
          'https://copy.com/mdx6ptLTPZRurqRX',
          'https://copy.com/D4H1gwjyUEd3xYn8',
          'https://copy.com/Rwse4kqIlsD29ULZ',
          'https://copy.com/MoLW0eDNXSfjbo4N',
          'https://copy.com/Uikq4nWRCZ1LnVez',
        ]
      },
      {
        lat: 18.787747,
        lng: 98.993128,
        thumbnailUrl: 'https://copy.com/tN6j8OporrTDuIGm',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'Thailand',
        contentUrl : [
          'https://copy.com/YTI2OZRJntdCG8Mm',
          'https://copy.com/76HTe4Fc9E99egIY',
          'https://copy.com/CKxkwTh9cYfEm0e4',
          'https://copy.com/ssEcBHftf4MxeQCn',
          'https://copy.com/rhynICnqWYrav2FZ',
          'https://copy.com/BMECkAC6xYE1tA0l',
          'https://copy.com/c2NxWJumzpZzzeRL',
          'https://copy.com/uXLlYqfQqOg7Xlrs',
          'https://copy.com/tcFXKbn8bF9AbvHX',
          'https://copy.com/FJqJDIUTXBNVchvc',
          'https://copy.com/eKDkXWMwCq0N2QqO',
          'https://copy.com/0adRVhMq9fcyBh9b',
          'https://copy.com/sJNHzwgNgGTimHQ7',
          'https://copy.com/Kkz3Rwp39jndrGsH',
          'https://copy.com/c0vt3RcMddJb28cG',
          'https://copy.com/PTIsLtxFADExwZ30',
        ]
      },
      {
        lat: 24.880095,
        lng: 102.832892,
        thumbnailUrl: 'https://copy.com/eG6PsCttmDoOxZaw',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'ChinaKunming',
        contentUrl : [
            'https://copy.com/eYYRjcVUQG10N73p',
            'https://copy.com/sjLHKZVlK8nSbjpW',
            'https://copy.com/RjEKQE1tYPq6qJzG',
            'https://copy.com/bivZyFiI7B2w6bxO',
            'https://copy.com/KdWpNXvvcvJCaIIc',
            'https://copy.com/pGPM6kSsCr0JWBa1',
            'https://copy.com/lUhgez1cU12zd9vc',
            'https://copy.com/Xpmy7DshPHIJZQ4m',
            'https://copy.com/v7vAESoJOKcBnA6L',
            'https://copy.com/JQxwtveLepwgTCjT',
        ]
      },
      {
        lat: 31.230416,
        lng: 121.473701,
        thumbnailUrl: 'https://copy.com/pw7fKFrguaUz1EUj',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'ChinaShanghai',
        contentUrl : [
          'https://copy.com/bOpsvwPvC0LuCtFw',
          'https://copy.com/NIBurISvdcSXEUK9',
          'https://copy.com/oHKSOkyB6ECObAAc',
          'https://copy.com/IBkKdXAmGwJiYAfi',
          'https://copy.com/BOCVBuV3P9Noovnr',
          'https://copy.com/Kjh0XrfEBFcfYRsW',
          'https://copy.com/MCwGYdeGfpjuOm9D',
          'https://copy.com/RD9rNW8YUC7SgWGk',
          'https://copy.com/94T9EdApeoBQKBMI',
          'https://copy.com/BOCVBuV3P9Noovnr',
        ]
      },
      {
        lat: 13.757318,
        lng: 100.495269,
        thumbnailUrl: 'https://copy.com/HWeBMzcpzsv1DM6L',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'ThailandBangkok',
        contentUrl : [
          'https://copy.com/dwvFME6Q7YY9ztoX',
          'https://copy.com/F3vgSbHqEScUhtPQ',
          'https://copy.com/zv2TUpyodod7B6tt',
          'https://copy.com/zN94k6fAs390revz',
          'https://copy.com/BLEjpBfFhOSAsUv8',
          'https://copy.com/uNTxZ9DXTbMLBCbD',
          'https://copy.com/IPEel2LPWzhqCRYV',
          'https://copy.com/uvCr8apH8HDBLjIp',
          'https://copy.com/K0AAwL2Qkp9QtpJK',
          'https://copy.com/CBYqBKYTcyBLJ4wk',
        ]
      },
      {
        lat: 41.247935,
        lng: 16.488805,
        thumbnailUrl: 'https://copy.com/xrE9463f8289Nubf',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'ItalyIronShirt',
        contentUrl : [
          'https://copy.com/MGlFQlG4ghYoSonp',
          'https://copy.com/RRDPKWRgBQHGdhVM',
          'https://copy.com/n098H3GkfPTOFKrl',
          'https://copy.com/kvTSOB9myjbPxI7H',
          'https://copy.com/AT7F46dCNdw0fl7t',
          'https://copy.com/2ha8hXY7L3fLGeyg',
          'https://copy.com/efn9YdjVdsyEiAz3',
          'https://copy.com/FNYiPTuIXWeo98xW',
          'https://copy.com/nQtFxUHujIeTzbZu',
          'https://copy.com/1ouGAIhRi4fXNBEu',
        ]
      },
      {
        lat: 23.129110,
        lng: 113.264385,
        thumbnailUrl: 'https://copy.com/QYynm2qNE4OUJQFP',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'ChinaGuangZhou',
        contentUrl : [
          'https://copy.com/gsLoFcqYlnoatgwg',
          'https://copy.com/ch71Y3Vti8vgIZ2f',
          'https://copy.com/ymUuPbG7NctTQEL1',
          'https://copy.com/RE6Y8Z1abGPyl7uB',
          'https://copy.com/zDcUO3BXf0IM4WMr',
          'https://copy.com/Zy6abL09lwzbWwiV',
          'https://copy.com/V7MgtO9WIjJPQ7ac',
          'https://copy.com/qodJr9uoRMKCpOfr',
          'https://copy.com/2nfND9ZVwbeV1xSK',
          'https://copy.com/oeHuo1gJgHAoOWqu',
          'https://copy.com/dWIEzOTSBUqNGQa2',
        ]
      },
      {
        lat: 18.788017,
        lng: 98.986226,
        thumbnailUrl: 'https://copy.com/ZwtgRthisSZxTYK8',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'PoliceTraining',
        contentUrl : [
          'https://copy.com/nuRySjWj90Pxwtry',
          'https://copy.com/CtciqosMvyL4gSd9',
          'https://copy.com/Gd7npW7brLp0oPCh',
          'https://copy.com/ZsefMRNBoVs1yA9q',
          'https://copy.com/8V4oikfJCPTvUIRS',
          'https://copy.com/hxcoSB94rqZLpTiL',
          'https://copy.com/d983wBlZ71HAvLHA',
          'https://copy.com/IMuHfCLazQHIi9Uh',
          'https://copy.com/Usq2iCVlY6meo6wj',
          'https://copy.com/Yy89o7T9AaTlCWSR',
        ]
      },
      {
        lat: 41.243638,
        lng: 16.503600 ,
        thumbnailUrl: 'https://copy.com/JOAjex4WZRsNR2HN',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'ItalyTaiChi',
        contentUrl : [
          'https://copy.com/HgTtnyAN4WirZkDP',
          'https://copy.com/trTY9htroVpQrNdP',
          'https://copy.com/BIiJYw8kJm2xFKs0',
          'https://copy.com/soyFLbTVtYd49VJB',
          'https://copy.com/9ezL2Dh2DUfzgTOa',
          'https://copy.com/PpreWt3Pi0K3fPId',
          'https://copy.com/8w2l2RdZwI8uRXfs',
          'https://copy.com/y3bOheZjoOeBw0Wt',
          'https://copy.com/z2J7dUKnzTaIfI7g',
          'https://copy.com/P0pBWUePRDmvv1nP',
          ]
      },
      {
        lat: 44.426767,
        lng: 26.102538,
        thumbnailUrl: 'https://copy.com/YAU0nK0c20sW9PvK',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'RomaniaPicture',
        contentUrl : [
          'https://copy.com/ko7v7Z2jCXlP9fC6',
          'https://copy.com/1xcvqEguzB0vIzcR',
          'https://copy.com/lw8lss1tDAcFgZjV',
          'https://copy.com/pAjP3ApC7PGwhQ2f',
          'https://copy.com/bzT69kBBdfa2SPPu',
          'https://copy.com/tZc9L7CvsJm9mhXG',
          'https://copy.com/z2elW6XWzoxySCdu',
          'https://copy.com/Ldck2WXSoKkcoAsD',
          'https://copy.com/UdWr9xqYc9mWubM7',
          ]
      },
      {
        lat: 36.896891,
        lng: 30.713323,
        thumbnailUrl: 'https://copy.com/Hr9AWHN8NTyyIH6v',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'TurkeyPicture',
        contentUrl : [
          'https://copy.com/gdz1ccN2NOuDspJr',
          'https://copy.com/yGRyR9EsJcIhNvep',
          'https://copy.com/HFYswTLXBf1J8ULW',
          'https://copy.com/BPjHPYzyCSJWLgIU',
          'https://copy.com/IrqOLpi37z8zPH1C',
          'https://copy.com/m0HUXfkH6RTbF7RP',
          'https://copy.com/p9zVTR6yLFQbkitB',
          'https://copy.com/ZXW0PA6gtNr8aWrO',
          'https://copy.com/D6lgxOJLOmhzhpdI',
          ]
      },
      {
        lat: 41.238964,
        lng: 16.518846,
        thumbnailUrl: 'https://copy.com/P0so3rxKye7kmKFy',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'Italy',
        contentUrl : [
          'https://copy.com/p0L0chGS2pXBBDb0',
          'https://copy.com/jE0VQmTsubuHCtu7',
          'https://copy.com/ODWNy3kXo8LCHGjA',
          'https://copy.com/VsWIj6EkgbCzVOD2',
          'https://copy.com/FKWlNfrjnGJiMlBr',
          'https://copy.com/ZZReCWiJlScJWxkr',
          'https://copy.com/dtjkf3lwE9dBtsLc',
          'https://copy.com/uUnwYSrnu0OAMmqk',
          'https://copy.com/EWO0OeLwppTYpHfm',
          'https://copy.com/34gBVFSwOSlJBeEL',
          ]
      },
      {
        lat: 41.233090,
        lng: 16.496873,
        thumbnailUrl: 'https://copy.com/z7x9bbDss8DTtk8I',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'WorkshopBasicItaly',
        contentUrl : [
          'https://copy.com/VZaMh4f2keCIujYs',
          'https://copy.com/dxZ72AcWhTMOKrOG',
          'https://copy.com/wdJsU6imGWbuOUOO',
          'https://copy.com/6eVNXvvxBVDc2WyR',
          'https://copy.com/hnCh7TPgDn19R7Lv',
          'https://copy.com/fioK9033VegyIVX1',
          'https://copy.com/Ne8qJ62Jj0GC3A2F',
          'https://copy.com/vF24saB6OROBDu0Y',
          'https://copy.com/pZk87pketl194ZUJ',
          'https://copy.com/WFf2AiME7AZ7JnIs',
          ]
      },
      {
        lat: 41.245114,
        lng: 16.504802,
        thumbnailUrl: 'https://copy.com/taUDhysQvD6H7cs3',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'Ansel',
        contentUrl : [
          'https://copy.com/tlH7GwGW6gwK0GXJ',
          'https://copy.com/DOQxKMMW6gZvHOdz',
          'https://copy.com/bFYFiM8crWK0d26T',
          'https://copy.com/kZBYAJRAI9PbAziB',
          'https://copy.com/kASRFlZJVK8aOQmH',
          'https://copy.com/HZkqe3GGoug4G3vB',
          'https://copy.com/3VNWPr8kOnLebhRK',
          'https://copy.com/JY2GXtdGDQ3KWUCQ',
          'https://copy.com/JQHZQQwF2H2KPe0m',
          'https://copy.com/97cNsEXucF28vicL',
          ]
      },
      {
        lat: 46.697405,
        lng: 7.737647,
        thumbnailUrl: 'https://copy.com/hvjmUtJxAsyBCEIi',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'Switzerland2015-Thun',
        contentUrl : [
          'https://copy.com/qkyuo3FfB33hP87Z',
          'https://copy.com/XptGdOVZMSC1RoEE',
          'https://copy.com/xVJYzeQ1H8WvQvBe',
          'https://copy.com/ANUAZbXWg4qRgoON',
          'https://copy.com/Xbm02SK3LRLe62AL',
          'https://copy.com/VGF8dd14LDsQ61jy',
          'https://copy.com/N6wYbOBpzB0YfgA8',
          'https://copy.com/pnQ6hR3rr2OnZ79g',
          'https://copy.com/rvMqbuoehYWdcUwv',
          'https://copy.com/69fbQ8ToAmwRlnbo',
          ]
      },
      {
        lat: 34.746611,
        lng: 113.625328,
        thumbnailUrl: 'https://copy.com/RiWZygYx3DBcWcEd',
        albumWidth: 50,
        albumHeight: 38,
        albumName: 'ChinaZhengZhou',
        contentUrl : [
          'https://copy.com/P0so3rxKye7kmKFy',
          'https://copy.com/6AaOmoIvxCH8UjUh',
          'https://copy.com/E4hPxB9p1XIh16JY',
          'https://copy.com/Pi7LvQeGDG0F0wAA',
          'https://copy.com/8ui6Kq4VrquW1hFI',
          'https://copy.com/QXAbztEiCPQhsByS',
          'https://copy.com/UOLG711TU9qtMSOP',
          'https://copy.com/KljImCuKnnjUFuDN',
          'https://copy.com/12dsgCogMKUoHXDa',
          'https://copy.com/3QAGoIosEAdaMDo8',
          ]
      },
    ]
    //insert
    _.each(marker, function (data) {
      Markers.insert(data)
    })
  }
})
