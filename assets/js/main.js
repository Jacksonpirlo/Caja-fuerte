const vm = Vue.createApp({
  data() {
    return {
      ingreso: false,
      pantalla: "|",
      clave: "",
      attr: "src",
      dinero: "https://img.freepik.com/vector-gratis/monedas-oro-billetes-icono-estilo-dibujos-animados-3d-pila-monedas-signo-dolar-fajo-dinero-o-efectivo-ilustracion-vector-plano-ahorro-riqueza-economia-finanzas-ganancias-concepto-moneda_74855-25998.jpg?w=360",
      styles: {
        backgroundColor: "rgb(100, 100, 100)",
        boxShadow: "2px 2px 12px 4px rgb(100, 100, 100)"
      },
      botones: [
        { id: 1, text: "1" },
        { id: 2, text: "2" },
        { id: 3, text: "3" },
        { id: 4, text: "4" },
        { id: 5, text: "5" },
        { id: 6, text: "6" },
        { id: 7, text: "7" },
        { id: 8, text: "8" },
        { id: 9, text: "9" },
        { id: 10, text: "X" },
        { id: 11, text: "0" },
      ]
    }
  },

  methods: {
    teclas(boton) {
      if (boton.id === 10) {
        this.pantalla = "";
        console.log(this.pantalla)

        // Para eliminar uno por uno
        // this.pantalla = this.pantalla.slice(0, -1);
        // pero ahun no me decido si colocarlo :)

        if (this.pantalla === "") {
          this.pantalla = "|"
        }
        return;
      } else if (this.pantalla === "|") {
        this.pantalla = boton.text
      } else {
        this.pantalla += boton.text
        this.clave = this.pantalla
        console.log(this.clave)
      }
    },

    enviar() {
      if (this.clave === "12345") {
        this.styles.backgroundColor = "#0f0"
        this.styles.boxShadow = "2px 2px 10px 5px rgb(9, 255, 0) !important"
        document.getElementById("correct-sound").play()
        setTimeout(() => {
          this.ingreso = true
          this.styles.backgroundColor = "#ccc"
          this.styles.boxShadow = "2px 2px 12px 4px rgb(100, 100, 100) !important"
        }, 2000) // Duración de 2 segundos
      } else {
        this.styles.backgroundColor = "#f00"
        this.styles.boxShadow = "2px 2px 10px 5px rgb(255, 0, 0) !important"
        document.getElementById("incorrect-sound").play()
        setTimeout(() => {
          this.styles.backgroundColor = "#ccc"
          this.styles.boxShadow = "2px 2px 12px 4px rgb(100, 100, 100) !important"
        }, 2000)
      }
    },

    cerrar() {
      this.ingreso = false
    }
  },

  template: `

   <audio id="correct-sound" src="./assets/sound/correctow.mp3" />
    <audio id="incorrect-sound" src="./assets/sound/incorrecto.mp3" />

    <div class="container-box" v-if="!ingreso">
      <div class="luz-neutral" :style="styles"></div>
      <div class="box-window">
        <div class="window"> {{ pantalla }} </div>
      </div>

      <div class="box">
        <button v-for="boton in botones" :key="boton.id" @click="teclas(boton)"> {{ boton.text }} </button>
        <button @click="enviar"> Entrar </button>
      </div>
    </div>

    <div v-else>
        <div class="datos">
  
        <div class="datos-item">
  
        <h1>Dinero</h1>
        <img :[attr]="dinero"></img>
  
        <div class="dinero-container">
        <div class="dinero">5000$</div>
        <button @click="cerrar">Cerrar</button>
        </div>
  
        </div>

        
        </div>
      </div>
  `
}).mount("#app");
