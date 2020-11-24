// milestone2 ---> chat differenziate:
// cliccando sulla chat vedo quella corrispondente;
// con header con dati relativi a chat attiva;
// relativa chat in elenco rimane selezionata
var app = new Vue({
el: '#container',
data: {
  indexChat: 0,
  newmsg: "",
  chat: [
    {
      name: "Fabio",
      img: "img/avatar_1.jpg",
      message: [
        {
          text: "Ciao come stai?",
          status: "item-send",
          day: "23/11/2020 15:32:00"
        },
        {
          text: "bene tu?",
          status: "item-received",
          day: "23/11/2020 15:35:20",
        }
      ],
    },
    {
      name: "Michele",
      img: "img/avatar_2.jpg",
      message: [
        {
          text: "Ricordati di dare da mangiare al gatto",
          status:"item-send",
          day: "22/11/2020 09:15:29"
        },

        {
          text: "Va bene",
          status: "item-received",
          day: "22/11/2020 09:20:29"
        },
        {
          text: "Dove trovo i croccanti?",
          status: "item-received",
          day: "22/11/2020 09:37:40"
        }
      ],
    },
    {
      name: "Valeriana",
      img: "img/avatar_6.jpg",
      message: [
        {
          text: "Hai visto Sucker Punch?",
          status:"item-send",
          day: "21/11/2020 23:30:01"
        },
        {
          text: "Si! Tu che ne pensi?",
          status: "item-received",
          day: "21/11/2020 23:45:37"
        }
      ],
    },
    {
      name: "Luisa",
      img: "img/avatar_4.jpg",
      message: [
        {
          text: "Ciao ci vediamo sta sera?",
          status:"item-received",
          day: "21/11/2020 21:00:00"
        },
        {
          text: "Mmm non so hai qualcosa di strano",
          status: "item-send",
          day: "21/11/2020 21:30:30"
        }
      ],
    }

  ]

},
methods: {
    // funzione per collegare chat selezionata al blocco chat aperta
    selectcontact(index) {
      this.indexChat = index;
    },
    // metodo per estrapolare la data e l'ora correnti
    currentday: function () {
      var today = new Date();
      var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;
      return dateTime;
    },
    //metodo per pushare il nuovo oggetto relativo all'input
    newtext: function() {
      this.chat[this.indexChat].message.push({
      text: this.newmsg,
      day: this.currentday(),
      status: "item-send"
      }),
      this.newmsg = "";
      //funzione per messaggio automatico dopo un secondo:
      // setTimeout(function () {
      //   app.chat[app.indexChat].message.push({
      //   text: "ok",
      //   day: app.currentday(),
      //   status: "item-received"
      //   });
      // }, 1000)
    },
    // messaggio automatico
    messaggioauto: function () {
      this.chat[this.indexChat].message.push({
      text: "ok",
      day: this.currentday(),
      status: "item-received"
      })
    },
    // funzione che parte dopo un sec
    timeout: function () {
      setTimeout(this.messaggioauto, 1000)
    }

  }

})
