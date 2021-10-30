



const app = Vue.createApp({
  data() {
    return {
      // Jengkel
      counterLevelJengkel: 1,
      counterBeliJengkel: 0,
      hargaJengkel: 15000,
      // Kesel
      counterLevelKesel: 1,
      counterBeliKesel: 0,
      hargaKesel: 18000,
      // gajelas
      counterLevelGajelas: 1,
      counterBeliGajelas: 0,
      hargaGajelas: 14000,
      // Indomie
      counterLevelIndomie: 1,
      counterBeliIndomie: 0,
      hargaIndomie: 12000,
      totalSemua: 0,

      listBeli: [],
      totalArray: [],
      editArrayValue: [],

      // Modal ====================================================================
      modalBeli: 0,
      modalLevel: 0,

      mieDiKeranjang: 'Mie Kesel',

      tmpIndex: 0,
      atasNama: '',
      meja: 1

    }
  },
  methods: {
    notif() {
      const notif = document.getElementById('notif')

      notif.innerHTML = `      <div class="alert alert-success alert-dismissible fade show notif" style="padding: 10px;" role="alert">
        <strong>${this.mieDiKeranjang}</strong> masuk keranjang:)
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

      // document.getElementById('notif').style.display = 'block'
      gsap.from('#notif', {duration: 1.5, x: -300, opacity: 0})
      window.setTimeout(function() {
        $(".notif").fadeTo(500, 0).slideUp(500, function(){
          
        });
        }, 5000);
    },
    // Jengkel ====================================
    plusJengkel(){
      // console.log('plus');
      if (this.counterLevelJengkel === 4) {
        this.counterLevelJengkel = 4
      } else {
        this.counterLevelJengkel++
      }
    },
    minJengkel(){
      // console.log('min');
      if (this.counterLevelJengkel === 1) {
        this.counterLevelJengkel = 1
      } else {
        this.counterLevelJengkel--
      }
    },


    plusBeliJengkel(){
      // console.log('plus');
      this.counterBeliJengkel++
    },
    minBeliJengkel(){
      // console.log('min');
      if (this.counterBeliJengkel === 0) {
        this.counterBeliJengkel = 0
      } else {
        this.counterBeliJengkel--
      }
    },

    keranjangJengkel(){
      if (this.counterBeliJengkel === 0) {
        alert('Minimal beli 1')
        return false
      }
      const tmp = {
        nama: 'Mie Jengkel',
        level: this.counterLevelJengkel,
        harga: this.hargaJengkel,
        jumlah: this.counterBeliJengkel,
        total: this.hargaJengkel * this.counterBeliJengkel
      }

      this.totalSemua += tmp.total
      this.totalArray.push(tmp.total)

      this.listBeli.push(tmp)
      this.mieDiKeranjang = tmp.nama

      this.counterBeliJengkel = 0
      this.counterLevelJengkel = 1

      this.mieDiKeranjang = tmp.nama

      this.notif()

      
    },


    // Kesel ====================================
    plusKesel(){
      // console.log('plus');
      if (this.counterLevelKesel === 4) {
        this.counterLevelKesel = 4
      } else {
        this.counterLevelKesel++
      }
    },
    minKesel(){
      // console.log('min');
      if (this.counterLevelKesel === 1) {
        this.counterLevelKesel = 1
      } else {
        this.counterLevelKesel--
      }
    },


    plusBeliKesel(){
      // console.log('plus');
      this.counterBeliKesel++
    },
    minBeliKesel(){
      // console.log('min');
      if (this.counterBeliKesel === 0) {
        this.counterBeliKesel = 0
      } else {
        this.counterBeliKesel--
      }
    },


    keranjangKesel(){
      if (this.counterBeliKesel === 0) {
        alert('Minimal beli 1')
        return false
      }
      const tmp = {
        nama: 'Mie Kesel',
        level: this.counterLevelKesel,
        harga: this.hargaKesel,
        jumlah: this.counterBeliKesel,
        total: this.counterBeliKesel * this.hargaKesel
      }
      this.totalSemua += tmp.total
      this.totalArray.push(tmp.total)

      this.listBeli.push(tmp)

      this.counterBeliKesel = 0
      this.counterLevelKesel = 1
      this.mieDiKeranjang = tmp.nama
      this.notif()
    },


    // Gajelas ==============================================
    plusGajelas(){
      // console.log('plus');
      if (this.counterLevelGajelas === 4) {
        this.counterLevelGajelas = 4
      } else {
        this.counterLevelGajelas++
      }
    },
    minGajelas(){
      // console.log('min');
      if (this.counterLevelGajelas === 1) {
        this.counterLevelGajelas = 1
      } else {
        this.counterLevelGajelas--
      }
    },


    plusBeliGajelas(){
      // console.log('plus');
      this.counterBeliGajelas++
    },
    minBeliGajelas(){
      // console.log('min');
      if (this.counterBeliGajelas === 0) {
        this.counterBeliGajelas = 0
      } else {
        this.counterBeliGajelas--
      }
    },

    keranjangGajelas(){
      if (this.counterBeliGajelas === 0) {
        alert('Minimal beli 1')
        return false
      }
      const tmp = {
        nama: 'Mie Gajelas',
        level: this.counterLevelGajelas,
        harga: this.hargaGajelas,
        jumlah: this.counterBeliGajelas,
        total: this.hargaGajelas * this.counterBeliGajelas
      }
      this.totalSemua += tmp.total
      this.totalArray.push(tmp.total)

      this.listBeli.push(tmp)
      this.counterBeliGajelas = 0
      this.counterLevelGajelas = 1

      this.mieDiKeranjang = tmp.nama
      this.notif()
    },



    // Indomie ==============================================
    plusIndomie(){
      // console.log('plus');
      if (this.counterLevelIndomie === 4) {
        this.counterLevelIndomie = 4
      } else {
        this.counterLevelIndomie++
      }
    },
    minIndomie(){
      // console.log('min');
      if (this.counterLevelIndomie === 1) {
        this.counterLevelIndomie = 1
      } else {
        this.counterLevelIndomie--
      }
    },


    plusBeliIndomie(){
      // console.log('plus');
      this.counterBeliIndomie++
    },
    minBeliIndomie(){
      // console.log('min');
      if (this.counterBeliIndomie === 0) {
        this.counterBeliIndomie = 0
      } else {
        this.counterBeliIndomie--
      }
    },

    keranjangIndomie(){
      if (this.counterBeliIndomie === 0) {
        alert('Minimal beli 1')
        return false
      }
      const tmp = {
        nama: 'Mie Indomie',
        level: this.counterLevelIndomie,
        harga: this.hargaIndomie,
        jumlah: this.counterBeliIndomie,
        total: this.counterBeliIndomie * this.hargaIndomie
      }
      this.totalSemua += tmp.total
      this.totalArray.push(tmp.total)

      this.listBeli.push(tmp)
      console.log(this.listBeli);

      this.counterBeliIndomie = 0
      this.counterLevelIndomie = 1
      this.mieDiKeranjang = tmp.nama
      this.notif()
    },


    removeList(indexSelected){
      // console.log('Haloooo', index);
      this.listBeli = this.listBeli.filter((list, index) => index !== indexSelected)
      const yangDiHapus = this.listBeli.filter((list, index) => index === indexSelected)

      this.totalSemua = this.totalSemua - this.totalArray[indexSelected]
      
      this.totalArray = this.totalArray.filter((list, index) => index !== indexSelected)

    },


    editButton(selectedIndex){
      this.tmpIndex = selectedIndex
      console.log(this.tmpIndex);
      this.modalBeli = this.listBeli[selectedIndex].jumlah
      this.modalLevel = this.listBeli[selectedIndex].level

      console.log("edit", selectedIndex);
      console.log(selectedIndex);
      console.log(this.listBeli[selectedIndex].harga);

    },

    saveChanges(tmpIndex){
      console.log(tmpIndex);
      this.listBeli[tmpIndex].jumlah = this.modalBeli
      this.listBeli[tmpIndex].level = this.modalLevel

      this.listBeli[tmpIndex].total = this.listBeli[tmpIndex].harga * this.listBeli[tmpIndex].jumlah

      console.log(this.listBeli);
      this.editArrayValue = []
      for (let i = 0; i < this.listBeli.length; i++) {
        this.editArrayValue.push(this.listBeli[i].total)
        
      }

      this.totalSemua = 0
      for (let i = 0; i < this.editArrayValue.length; i++) {
        this.totalSemua += this.editArrayValue[i]
        
      }

      // console.log(this.editArrayValue);
    },

    minBeliEdit() {
      // console.log('minBeli');
      if (this.modalBeli === 1) {
        this.modalBeli = 1
      } else {
        this.modalBeli--
      }
    },

    plusBeliEdit() {
      // console.log('plusBeli');
      this.modalBeli++
    },

    minLevelEdit() {
      // console.log('minLevelBeli');
      if (this.modalLevel === 1) {
        this.modalLevel = 1
      } else {
        this.modalLevel--
      }
    },

    plusLevelEdit() {
      // console.log('minLevelBeli');
      if (this.modalLevel === 4) {
        this.modalLevel = 4
      } else {
        this.modalLevel++
      }
    },

    default() {
      this.counterBeliGajelas = 0
      this.counterLevelGajelas = 1

      this.counterBeliIndomie = 0
      this.counterLevelIndomie = 1

      this.counterBeliKesel = 0
      this.counterLevelKesel = 1

      this.counterBeliJengkel = 0
      this.counterLevelJengkel = 1
    },

    tmp(){
      const listContentP = document.getElementById('listP').textContent
      return listContentP
    },

    checkout(){
      let kamus = 'abcdefghijklmnopqrstuvwxyz'
      let counter = 0
      for (let i = 0; i < this.atasNama.length; i++) {
        // const element = array[i];
        for (let j = 0; j < kamus.length; j++) {
          if (this.atasNama[i].toUpperCase() === kamus[j].toUpperCase()) {
          counter++
          break;
          }
        }

      }

      console.log(counter);

      if (this.atasNama === '' || counter === 0) {
        alert('Nama harus di isi')
        document.getElementById('checkoutButton1').style.display = 'block'
      } else if(this.atasNama === '' || counter === 0 || counter < 3) {
        alert('Nama minimal 3 huruf')
        document.getElementById('checkoutButton1').style.display = 'block'
      } else {
        console.log('checkout');
        const checkout = document.getElementById('checkout').style.display = 'none'
        // console.log('mie');
        const mie = document.getElementById('mie').style.display = 'none'
        const cart = document.getElementById('cart').style.display = 'none'
        const listP = document.getElementById('listP').style.display = 'none'
        document.getElementById('listP2').style.display = 'none'
        document.getElementById('final').style.display = 'block'
        document.getElementById('buttonSemua').style.display = 'none'
        document.getElementById('checkoutButton1').style.display = 'none'
        document.getElementById('buttonSemua2').style.display = 'block'
      }

    },

    removeCheckout(){
      // console.log('halo');
      document.getElementById('checkoutButton1').style.display = 'none'
    },

    backCheckout(){
      document.getElementById('checkoutButton1').style.display = 'block'
    },


    plusMeja(){
      // console.log('plus');
      if (this.meja === 10) {
        this.meja = 10
      } else {
        this.meja++
      }
    },
    minMeja(){
      // console.log('min');
      if (this.meja === 1) {
        this.meja = 1
      } else {
        this.meja--
      }
    },

    Kembali(){
      document.getElementById('checkoutButton1').style.display = 'block'
      // const listP = document.getElementById('listP').innerHTML = 'block'
      // console.log('kembali');
      document.getElementById('final').style.display = 'none'
      const checkout = document.getElementById('checkout').style.display = 'none'
      console.log('mie');
      const mie = document.getElementById('mie').style.display = 'block'
      const cart = document.getElementById('cart').style.display = 'none'
      const listP = document.getElementById('listP').style.display = 'block'
      document.getElementById('listP2').style.display = 'none'
      document.getElementById('buttonSemua').style.display = 'block'
      document.getElementById('buttonSemua2').style.display = 'none'
      this.atasNama = ''
      this.meja = 1
      this.listBeli = []
      this.totalSemua = 0

    },

    mieButton() {
      const checkout = document.getElementById('checkout').style.display = 'none'
      console.log('mie');
      const mie = document.getElementById('mie').style.display = 'block'
      const cart = document.getElementById('cart').style.display = 'none'
      const listP = document.getElementById('listP').style.display = 'block'
      document.getElementById('listP2').style.display = 'none'
      document.getElementById('buttonSemua').style.display = 'block'
    },
    minumanButton() {
      this.default()
      console.log('minuman');
      const listP = document.getElementById('listP').style.display = 'block'
      document.getElementById('listP2').style.display = 'none'
    },
    cartButton() {
      this.default()
      const checkout = document.getElementById('checkout').style.display = 'block'
      const mie = document.getElementById('mie')
      const listP = document.getElementById('listP').style.display = 'none'
      document.getElementById('listP2').style.display = 'block'
      const cart = document.getElementById('cart').style.display = 'block'
      

      mie.style.display = 'none'

      console.log('cart');
    }
  }
})

app.mount('#app')



