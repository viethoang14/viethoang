const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const THE_PLAYLIST = 'PLAYLIST';

const playlist = $(".playlist");
const cd = $(".cd");
const playBtn = $(".btn-toggle-play");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const heading = $("header h2");
const player = $(".player");
const progress = $("#progress");
const nextBtn = $(".btn-next");
const prevBtn = $(".btn-prev");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const volUpBtn = $('.btn-volume-up')
const volDownBtn = $('.btn-volume-down')
const volumeRange = $('.volume-range')
const volumeControl = $('.volume-control')


const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config:JSON.parse(localStorage.getItem(THE_PLAYLIST)) || {},
  setConfig:function(key,value) {
    this.config[key] = value;
    localStorage.setItem(THE_PLAYLIST, JSON.stringify(this.config));
  },
  songs: [
    {
      name: "Ngày Không Có Em",
      singer: ["BÙI THỊ PHƯƠNG THẢO"],
      path: "./music/y2meta.com - NGÀY KHÔNG CÓ EM - ThịnK (Piano Version) (128 kbps).mp3",
      image:
        "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/300819430_747372289692582_5996322599485612626_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TmaplgNmjvQAX9LUulC&_nc_ht=scontent.fhph1-3.fna&oh=03_AVL5wdPuE4kB5I6fjyYtSZlnWxAq-msya5_MLhNdOUVqyQ&oe=633AEC61",
    },
    {
      name: "Vài Câu Nói Khiến Người Thay Đổi",
      singer: ["BÙI THỊ PHƯƠNG THẢO"],
      path: "./music/y2meta.com - vaicaunoicokhiennguoithaydoi - GREY D x tlinh _ Official Music Video (128 kbps).mp3",
      image:
        "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/300819430_747372289692582_5996322599485612626_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TmaplgNmjvQAX9LUulC&_nc_ht=scontent.fhph1-3.fna&oh=03_AVL5wdPuE4kB5I6fjyYtSZlnWxAq-msya5_MLhNdOUVqyQ&oe=633AEC61",
    },
    {
      name: "Chuyện Đôi Ta",
      singer: ["BÙI THỊ PHƯƠNG THẢO"],
      path: "./music/y2meta.com - Chuyện Đôi Ta (Freak D Lofi Ver.) - Emcee L ft Muộii (128 kbps).mp3",
      image:
        "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/300819430_747372289692582_5996322599485612626_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TmaplgNmjvQAX9LUulC&_nc_ht=scontent.fhph1-3.fna&oh=03_AVL5wdPuE4kB5I6fjyYtSZlnWxAq-msya5_MLhNdOUVqyQ&oe=633AEC61",
    },
    {
      name: "Anh Thề Đấy",
      singer: ["BÙI THỊ PHƯƠNG THẢO"],
      path: "./music/y2meta.com - Anh Thề Đấy - Thanh Hưng「Lo - Fi Version by 1 9 6 7」_ Audio Lyrics (128 kbps).mp3",
      image:
        "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/300819430_747372289692582_5996322599485612626_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TmaplgNmjvQAX9LUulC&_nc_ht=scontent.fhph1-3.fna&oh=03_AVL5wdPuE4kB5I6fjyYtSZlnWxAq-msya5_MLhNdOUVqyQ&oe=633AEC61",
    },
    {
      name: "Phải Chẳng Em Đã Yêu",
      singer: ["BÙI THỊ PHƯƠNG THẢO"],
      path: "./music/PhaiChangEmDaYeu-JukySanRedT-6940932.mp3",
      image:
        "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/300819430_747372289692582_5996322599485612626_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TmaplgNmjvQAX9LUulC&_nc_ht=scontent.fhph1-3.fna&oh=03_AVL5wdPuE4kB5I6fjyYtSZlnWxAq-msya5_MLhNdOUVqyQ&oe=633AEC61",
    },
    {
      name: "Trên Tình Bạn Dưới Tình Yêu",
      singer: ["BÙI THỊ PHƯƠNG THẢO"],
      path: "./music/TrenTinhBanDuoiTinhYeu-MIN-6802163.mp3",
      image:
        "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/300819430_747372289692582_5996322599485612626_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TmaplgNmjvQAX9LUulC&_nc_ht=scontent.fhph1-3.fna&oh=03_AVL5wdPuE4kB5I6fjyYtSZlnWxAq-msya5_MLhNdOUVqyQ&oe=633AEC61",
    },
    {
      name: "Tình Bạn Diệu Kỳ",
      singer: ["BÙI THỊ PHƯƠNG THẢO"],
      path: "./music/TinhBanDieuKy-AMeeRickyStarLangLD-6927558.mp3",
      image:
        "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/300819430_747372289692582_5996322599485612626_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TmaplgNmjvQAX9LUulC&_nc_ht=scontent.fhph1-3.fna&oh=03_AVL5wdPuE4kB5I6fjyYtSZlnWxAq-msya5_MLhNdOUVqyQ&oe=633AEC61",
    },
    {
      name: "Phía Sau Em",
      singer: ["BÙI THỊ PHƯƠNG THẢO"],
      path: "./music/Phia-Sau-Em-Kay-Tran-Binz.mp3",
      image:
        "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/300819430_747372289692582_5996322599485612626_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TmaplgNmjvQAX9LUulC&_nc_ht=scontent.fhph1-3.fna&oh=03_AVL5wdPuE4kB5I6fjyYtSZlnWxAq-msya5_MLhNdOUVqyQ&oe=633AEC61",
    },
    {
      name: "Hạ Còn Vương Nắng",
      singer: ["BÙI THỊ PHƯƠNG THẢO"],
      path: "./music/y2meta.com - HẠ CÒN VƯƠNG NẮNG _ DATKAA x KIDO x Prod. QT BEATZ [OFFICIAL MUSIC VIDEO] (128 kbps).mp3",
      image:
        "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/300819430_747372289692582_5996322599485612626_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TmaplgNmjvQAX9LUulC&_nc_ht=scontent.fhph1-3.fna&oh=03_AVL5wdPuE4kB5I6fjyYtSZlnWxAq-msya5_MLhNdOUVqyQ&oe=633AEC61",
    },
    {
      name: "Người Lạ Từng Thương",
      singer: ["BÙI THỊ PHƯƠNG THẢO"],
      path: "./music/y2meta.com - NGƯỜI LẠ TỪNG THƯƠNG - NHƯ VIỆT _ OFFICIAL MUSIC VIDEO (128 kbps).mp3",
      image:
        "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/300819430_747372289692582_5996322599485612626_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TmaplgNmjvQAX9LUulC&_nc_ht=scontent.fhph1-3.fna&oh=03_AVL5wdPuE4kB5I6fjyYtSZlnWxAq-msya5_MLhNdOUVqyQ&oe=633AEC61",
    },
    {
      name: "Yêu Nhau Nhé Bạn Thân",
      singer: ["BÙI THỊ PHƯƠNG THẢO"],
      path: "./music/y2meta.com - Yêu Nhau Nhé Bạn Thân _ Phạm Đình Thái Ngân _ Lyrics (128 kbps).mp3",
      image:
        "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/300819430_747372289692582_5996322599485612626_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TmaplgNmjvQAX9LUulC&_nc_ht=scontent.fhph1-3.fna&oh=03_AVL5wdPuE4kB5I6fjyYtSZlnWxAq-msya5_MLhNdOUVqyQ&oe=633AEC61",
    },
  ],

  render: function() {
    const htmls = this.songs.map((song, index) => {
      return `
        <div class="song ${index === this.currentIndex ? "active" : ""} "data-index="${index}">
          <div class="thumb" style="background-image: url('${song.image}')">
          </div>
          <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
          </div>
          <div class="option">
              <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
      `
    })
    playlist.innerHTML = htmls.join('');
  },

  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },

  handlEvents: function () {
    const _this = this
    const cdWidth = cd.offsetWidth

    //cử lý phóng to thu nhỏ CD
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const newCDWidth = cdWidth - scrollTop

      cd.style.width = newCDWidth > 0 ? newCDWidth + 'px' : 0
      cd.style.opacity = newCDWidth / cdWidth
    }

    //xử lý CD quay và dừng
    const cdThumbAnimate = cdThumb.animate([
      { transform: 'rotate(360deg)' }
    ], {
      duration: 10000, //10s
      iterations: Infinity,
    }
    )
    cdThumbAnimate.pause();

    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause()
      }
      else {
        audio.play()
      }
    }
    audio.onpause = function () {
      _this.isPlaying = false
        player.classList.remove('playing')
        cdThumbAnimate.pause()
    }
    audio.onplay = function () {
      _this.isPlaying = true
      player.classList.add('playing')
      cdThumbAnimate.play()
    }

    audio.ontimeupdate = function () {
      if(audio.duration){
        const progressPercent = audio.currentTime / audio.duration*100;
        progress.value = progressPercent
      }
    }
    progress.onchange = function (e) {
      const seekTime = audio.duration / 100 * e.target.value;
      audio.currentTime = seekTime;
    }
    randomBtn.onclick = function () {
      _this.isRandom= !_this.isRandom;
      _this.setConfig('isRandom', _this.isRandom);
      randomBtn.classList.toggle('active', _this.isRandom);
    }
    repeatBtn.onclick = function () {
      _this.isRepeat= !_this.isRepeat;
      _this.setConfig('isRepeat', _this.isRepeat);
      repeatBtn.classList.toggle('active', _this.isRepeat);
    }
    audio.onended = function () {
      if(_this.isRepeat)
      {
        audio.play();
      }
      else {
       nextBtn.click();
      }
    }

    nextBtn.onclick = function () {
        if(_this.isRandom){
          _this.playRandomSong();
        }
        else{
          _this.nextSong();
        }
        audio.play();
        _this.render();
        _this.scrollToActiveSong();
    }
    prevBtn.onclick = function () {
      if(_this.isRandom){
        _this.playRandomSong();
      }
      else{
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    }

    playlist.onclick = function (e) {
      const songNode = e.target.closest('.song:not(.active)');
      if(songNode|| e.target.closest('.options')){
        if(songNode)
        {
          _this.currentIndex=Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }
        if(e.target.closest('.options')){
          
        }
      }
    }

    volDownBtn.onclick=function(){
      if(audio.volume<0.1){
        alert('Bạn nghe nhạc không cần tiếng à !!! :v ')
      }
      else {
        audio.volume -= 0.1;
      }
    }
    volUpBtn.onclick=function(){
      if(audio.volume===1){
        alert('Âm Lượng to quá rồi bạn ơi !!! :v')
      }
      else {
        audio.volume += 0.1;
      }
    }
  },

  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
    audio.src=this.currentSong.path
  },

  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },

  nextSong: function () {
    this.currentIndex++;
    if(this.currentIndex>=this.songs.length){
      this.currentIndex=0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if(this.currentIndex<0){
      this.currentIndex=this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do{
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while(newIndex === this.currentIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  changeVolume: function(){
    audio.onvolumechange = function () {
      volumeRange.style.display = "block";
      setTimeout(function () {
          volumeRange.style.display = "none";
      }, 2000)
      volumeControl.value = audio.volume;
  }
    volumeControl.onchange = function(){
      audio.volume = volumeControl.value;
    }
  },

  scrollToActiveSong: function () {
    setTimeout(function () {
      $('.song.active').scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    },200)
  },

  start: function () {
    //cau hinh 
    this.loadConfig();
    //định nghĩa các thuộc tính cho objetc
    this.defineProperties();
    //lang nghe va xu ly cac su kien DOM
    this.handlEvents()
    //Tải thông tin bài hát đầu tiên vào UI khi đang chạy
    this.loadCurrentSong();
    // xu ly playlist
    this.render();
    // xu ly am luong
    this.changeVolume();
    
    repeatBtn.classList.toggle('active', this.isRepeat);
    randomBtn.classList.toggle('active', this.isRandom);
  }
}

app.start();
