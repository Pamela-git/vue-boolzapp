// milestone2 ---> chat differenziate:
// cliccando sulla chat vedo quella corrispondente;
// con header con dati relativi a chat attiva;
// relativa chat in elenco rimane selezionata
var app = new Vue({
el: '#container',
data: {
  indexChat: 0,
  newmsg: "",
  searchchat: "",
  chat: [
    {
      name: "Fabio",
      img: "img/avatar_1.jpg",
      show: true,
      message: [
        {
          text: "Ciao come stai?",
          status: "item-send",
          day: "23/11/2020 15:32:00",
          novisibledrop: "novisible"
        },
        {
          text: "bene tu?",
          status: "item-received",
          day: "23/11/2020 15:35:20",
          novisibledrop: "novisible"
        }
      ],
    },
    {
      name: "Michele",
      img: "img/avatar_2.jpg",
      show: true,
      message: [
        {
          text: "Ricordati di dare da mangiare al gatto",
          status:"item-send",
          day: "22/11/2020 09:15:29",
          novisibledrop: "novisible"
        },

        {
          text: "Va bene",
          status: "item-received",
          day: "22/11/2020 09:20:29",
          novisibledrop: "novisible"
        },
        {
          text: "Dove trovo i croccanti?",
          status: "item-received",
          day: "22/11/2020 09:37:40",
          novisibledrop: "novisible"
        }
      ],
    },
    {
      name: "Valeriana",
      img: "img/avatar_6.jpg",
      show: true,
      message: [
        {
          text: "Hai visto Sucker Punch?",
          status:"item-send",
          day: "21/11/2020 23:30:01",
          novisibledrop: "novisible",

        },
        {
          text: "Si! Tu che ne pensi?",
          status: "item-received",
          day: "21/11/2020 23:45:37",
          novisibledrop: "novisible",
        }
      ],
    },
    {
      name: "Luisa",
      img: "img/avatar_4.jpg",
      show: true,
      message: [
        {
          text: "Ciao ci vediamo sta sera?",
          status:"item-received",
          day: "21/11/2020 21:00:00",
          novisibledrop: "novisible",
        },
        {
          text: "Mmm non so hai qualcosa di strano",
          status: "item-send",
          day: "21/11/2020 21:30:30",
          novisibledrop: "novisible",

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
      if (this.newmsg === "") {

      } else {
        this.chat[this.indexChat].message.push({
        text: this.newmsg,
        day: this.currentday(),
        status: "item-send",
        novisibledrop: "novisible"
        }),
        this.newmsg = "";
      }
      //funzione per messaggio automatico dopo un secondo, mettere app oppure usare una arrow function perchè il this diventa l'oggetto della funzione anonima
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
        status: "item-received",
        novisibledrop: "novisible"
        })
    },
    // funzione che parte dopo un sec
    timeout: function () {
      setTimeout(this.messaggioauto, 1000)
    },
    //funzione per cercare il nome utente (milestone 4)
    search() {
      // element è l'elemento dell'array sul quale stiamo ad ogni giro
      this.chat.forEach((element, index) => {
        // se l'elemento di quel momento con proprietà name matcha con il valore dell'input inserito dall'utente,
        // match confronta la stringa della proprietà name con cià che gli viene passato tra parentesi e ritorna ciò che corrisponde
        if (element.name.toLowerCase().match(this.searchchat.toLowerCase())) {
          element.show = true //allora la proprietà show di quell'elemento rimane true
        } else {
          element.show = false //altrimenti la setti in false in modo che non si vedano
        }
      })
    },
    // per far vedere il dropdown
    showdrop: function (i) {
      if (this.chat[this.indexChat].message[i].novisibledrop === "novisible") {
        this.chat[this.indexChat].message[i].novisibledrop = "visible"
      } else {
        this.chat[this.indexChat].message[i].novisibledrop = "novisible"
      }
    },
    // per rimuovere il messaggio
    removemessage: function (el) {
      this.chat[this.indexChat].message.splice(el, 1);
    }

  }

})
