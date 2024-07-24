document.addEventListener("DOMContentLoaded", () => {
    //burger

    const icons = document.querySelectorAll('.icon');
const header = document.querySelector('.header-block');
const headerContainer = document.querySelector('header');
const body = document.body;
const menuItems = document.querySelectorAll('.nav-header a');

function openMenu() {
    icons.forEach(icon => icon.classList.add('open'));
    header.classList.add('show');
    headerContainer.classList.add('active');
    body.classList.add('hidden');
}

function closeMenu() {
    icons.forEach(icon => icon.classList.remove('open'));
    header.classList.remove('show');
    headerContainer.classList.remove('active');
    body.classList.remove('hidden');
}

icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        if (header.classList.contains('show')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
});

menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        closeMenu();
    });
});

    //Счетчик
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);  
    targetDate.setHours(18, 0, 0, 0);  
 
    const formatNumber = (number) => {
        return number.toString().padStart(2, '0');
    };

    const updateCountdown = () => {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            document.querySelector('.date').textContent = 'Countdown finished!';
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.querySelector('.date').textContent = 
            `${days} : ${formatNumber(hours)} : ${formatNumber(minutes)} : ${formatNumber(seconds)}`;
    };
 
    updateCountdown(); 
    setInterval(updateCountdown, 1000);

    //Статья
    const dateOf = document.querySelector('.data-date'); 
    const date = new Date();
    const data = new Date();
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    date.setDate(date.getDate() - 3); 
    const day = date.getDate(); 
    const monthName = months[date.getMonth()];
    
    dateOf.innerHTML = day + " " + monthName + " " + "2024 г.";  
    // Рандомное число
    const numRandom = document.querySelector('.nums');
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let currentNumber = localStorage.getItem('currentNumber');
    if (currentNumber === null) {
        currentNumber = getRandomNumber(262000, 900291);
    } else {
      currentNumber2 = getRandomNumber(1, 5);
        currentNumber = parseInt(currentNumber, 10) + currentNumber2;
    }
 
    localStorage.setItem('currentNumber', currentNumber);
    numRandom.innerHTML = currentNumber;

    const numPos = document.querySelector('.num-pos')

    const updateNumber = () => {
      numPos.innerHTML = getRandomNumber(10, 20);
    };
    
    updateNumber();
    setInterval(updateNumber, 10000);

    // Бегунок
  
    document.getElementById('investmentRange').addEventListener('input', function() {
      const investment = parseFloat(this.value);
      const dailyRate = 0.18;
   
      const potentialDailyProfit = investment * dailyRate;
   
      const totalValue = investment + potentialDailyProfit;
   
      document.querySelector('.numss-reng').innerText = `${investment.toFixed(2)}₽`;
      document.getElementById('potentialProfit').innerText = `${totalValue.toFixed(2)}₽`;
  });
   
  document.addEventListener('DOMContentLoaded', function() {
      const initialInvestment = parseFloat(document.getElementById('investmentRange').value);
      const dailyRate = 0.18;
  
      const potentialDailyProfit = initialInvestment * dailyRate;
      const totalValue = initialInvestment + potentialDailyProfit;
  
      document.querySelector('.numss-reng').innerText = `${initialInvestment.toFixed(2)}₽`;
      document.getElementById('potentialProfit').innerText = `${totalValue.toFixed(2)}₽`;
  });
  
    
    //Cвайпер

    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        slidesPerView: 1,
        spaceBetween: 10,
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints:{ 
            400:{
                slidesPerView: 2, 
                spaceBetween: 30,
            },
            660:{
                slidesPerView: 3, 
                spaceBetween: 30,
            }
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      });

      //play video

      const buttons = document.querySelectorAll('.btn-show');

        buttons.forEach(button => {
            button.addEventListener('click', function (event) {
            event.preventDefault();
            const video = this.previousElementSibling;
            video.play();
            this.style.display = 'none';

            video.addEventListener('pause', () => {
                this.style.display = 'block';
            });

            video.addEventListener('ended', () => {
                this.style.display = 'block';
            });
            });
        });
        const videos = document.querySelectorAll('.swiper-slide video');

        videos.forEach(video => {
          video.addEventListener('click', function () {
            if (this.paused) {
              this.play();
            } else {
              this.pause();
            }
          });
        });

      //pop-up

      document.querySelectorAll('.btn').forEach(item => {
        item.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('popup').classList.add('active');
      })
    });
    
    document.getElementById('closePopup').addEventListener('click', function() {
        document.getElementById('popup').classList.remove('active');
    });
    
    document.getElementById('popup').addEventListener('click', function(event) {
        if (event.target === this) {
            this.classList.remove('active');
        }
    });
    

    //line

    
    function getUniqueData() {
      const names = [
          'Иван П.', 'Алексей Г.', 'Марина В.', 'Олег С.', 'Сергей Л.',
          'Дмитрий Т.', 'Валентина К.', 'Елена Р.', 'Андрей Н.', 'Екатерина М.',
          'Петр А.', 'Наталья Б.', 'Константин Г.', 'Людмила О.', 'Юрий Ф.',
          'Анна Л.', 'Владимир С.', 'Татьяна И.', 'Александр В.', 'Ольга Д.',
          'Светлана К.', 'Максим Ж.', 'Юлия Х.', 'Станислав Е.', 'Ирина П.',
          'Денис Р.', 'Мария С.', 'Михаил В.', 'Кирилл Г.', 'Елена Н.',
          'Виктория Т.', 'Роман И.', 'Евгения Л.', 'Дмитрий К.', 'Ксения Х.',
          'Анатолий Ф.', 'Тимур В.', 'Анжела Р.', 'Фёдор Б.', 'Ирина В.',
          'Валерий С.', 'Галина К.', 'Олег П.', 'Марина Т.', 'Игорь Н.',
          'Нина Л.', 'Евгений М.', 'Светлана Ф.', 'Андрей Г.', 'Лариса Т.'
      ];

      const symbols = ['NFLX', 'BA', 'TSLA', 'FB', 'GOOGL', 'AMZN', 'MSFT', 'AAPL'];
      const values = ['+41663₽', '+48057₽', '+48272₽', '+44340₽', '+49721₽', '+44790₽', '+42156₽', '+41313₽', '+53942₽', '+60577₽'];

      return Array.from({ length: 50 }, (_, index) => {
          const date = new Date(Date.now() + (index + 2) * 60000);
          const formattedDate = date.toISOString().replace('T', ' ').substring(0, 19);

          return {
              name: names[index % names.length],
              symbol: symbols[Math.floor(Math.random() * symbols.length)],
              value: values[Math.floor(Math.random() * values.length)],
              date: formattedDate
          };
      });
  }

  function getUpdatedData() {
      const data = getUniqueData();
      return data.map(item => `${item.name} ${item.symbol} ${item.value} (${item.date})`).join(' | ');
  }

  function updateText() {
      const runningTextElement = document.getElementById('runningText');
      const text = getUpdatedData(); 
      runningTextElement.innerHTML = text + ' | ' + text;
  } 
  updateText();
  setInterval(updateText, 60000); 


  const flyContent = document.querySelector('.fly-content');

  const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 100) {
          flyContent.classList.add('visible');
      } else {
          flyContent.classList.remove('visible');
      }
  };
 
  window.addEventListener('scroll', handleScroll);
  handleScroll();
} )

//modal-window

// const modal = document.getElementById('modal');
// const overlay = document.getElementById('overlay');
// const yesButton = document.getElementById('yesButton');
// const noButton = document.getElementById('noButton');
// const modalContent = modal.querySelector('.modal__content');
// const modalMessage = document.createElement('p'); 
// modal.style.display = 'block'; 
// overlay.style.display = 'block'; 

// yesButton.addEventListener('click', function() {
//   modal.style.display = 'none';
//   overlay.style.display = 'none';
//   localStorage.setItem('resident', 'true');
// });

// noButton.addEventListener('click', function() { 
//   modalContent.innerHTML = ''; 
//   modalMessage.innerHTML = `<p class="modal__content-text-last">Извините, вы не можете получить доступ к содержимому этого сайта из-за ограничений по гражданству.</p>`;
//   modalContent.appendChild(modalMessage);
// });
 
// const isResident = localStorage.getItem('resident');
// if (isResident === 'true') {
//   modal.style.display = 'none';
//   overlay.style.display = 'none';
// }

// if (window.screen.width < 787) {
//   yesButton.innerHTML = 'ДА';
//   noButton.innerHTML = 'НЕТ';
// }
