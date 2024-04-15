




const questions = [
    {
      question: "'Red Skies' and 'Saved by Zero' were huge hits for which 80,s band ?",
      options: ["Flock of Seagulls", "The Fixx", "Duran Duran", "Depeche Mode"],
      answer: "The Fixx",
      audioSrc: "https://youtu.be/pIe-Cj071l0?t=2",
      
    },

    {
      question: "Who's alter-ego was Ziggy Stardust'?",
      options: ["Iggy Pop", "Alice Cooper", "Lou Reed", "David Bowie"],
      answer: "David Bowie",
      audioSrc: "https://youtu.be/D8R_u3Yfwcs?t=15",
    },

    {
      question: "Who was the original guitarist for Led Zeppellin?" ,
      options: ["Peter Frampton", "Jeff Beck", "Larry Carlton" , "Jimmy Page"],
      answer: "Jimmy Page",
      audioSrc:"https://youtu.be/6d_wxEz1Cbg?t=19",
    },

    {
      question: 'Who wrote the song "I shot the Sherriff"?',
      options: ["Eric Clapton", "Leon Russell", "Bob Marley", "Steel Pulse"],
      answer: "Bob Marley",
      audioSrc: "https://youtu.be/zGO8HN1QQdI?t=8"
    },

    {
      question: "Should I Stay or Should I go was a huge hit for which band?",
      options: ["The Ramones", "Velvet Underground", "The Sex Pistols", "The Clash"],
      answer: "The Clash",
      audioSrc: "https://youtu.be/e7tWqyM3r-g?t=29"
    },

    {
      question: '"Sweetest Tabboo" and "Smooth Operator" were huge hits for which singer',
      options: ["Tina Marie", "Whitney Houston", "Sade", "Anita Baker"],
      answer: "Sade",
      audioSrc:"https://youtu.be/kcPc18SG6uA?t=9"
    },

    {
      question: 'Who wrote the jazz standard" So What?',
      options: ["John Coltrane", "Wes Montgomery", "Thelonius Monk", "Miles Davis"],
      answer: "Miles Davis",
      audioSrc:"https://youtu.be/mwHwlgBFVmM?t=10"
    },

    {
      question: 'Who was dubbed "The Queen of Salsa"?',
      options: ["Celia Cruz", "Olga Guillot", "Lola Flores", "La Lupe"],
      answer: "Celia Cruz",
      audioSrc:"https://youtu.be/TxRWQHCSmUg?t=25"
    },

    {
      question: 'The show "Bad Boys" had people singing the theme song . What was the name of this band ?',
      options: ["UB40", "Inner Circle", "Third World", "Aswad"],
      answer: "Inner Circle",
      audioSrc:"https://youtu.be/2Q3dGZPguSM?t=11"
    },

    {
      question: '"Birdland" was a huge hit for this jazz Giant in 1971',
      options: ["Charlie Parker", "Glen Miller", "Tower of Power", "Weather Report"],
      answer: "Weather Report",
      audioSrc: "https://youtu.be/vz7nMBLUnDc?t=12"
    },

    {
      question: "Who was the singer for the band Thin Lizzy",
      options: ["Sting", "Phil Lynott", "Steve Perry", "Rick Emmett"],
      answer: "Phil Lynott",
      audioSrc: "https://youtu.be/dMko8DlY9IA?list=RDdMko8DlY9IA&t=9"
    },

    {
      question: "Who was known as the 'Old Blue Eyes'?",
      options: ["Frank Sinatra", "David Coverdale", "Andy Williams", "Perry Como"],
      answer: "Frank Sinatra",
      audioSrc:"https://youtu.be/ZEcqHA7dbwM?t=6"
    },

    {
      question: "Moonglow was a big hit in 1936 for this band leader ?",
      options: ["Artie Shaw", "Tommy Dorsey", "Dave Brubeck", "Benny Goodman"],
      answer: "Benny Goodman",
      audioSrc:"https://youtu.be/4dm3Ml9g_cs?t=3"
    },

    {
      question: '"Breezin was a huge hit for this great guitrist"',
      options: ["Eddie Van Halen", "Mateo Mancusso", "Carlos Santana", "George Benson"],
      answer: "George Benson",
      audioSrc:"https://youtu.be/zgxL-khJ--Q?t=7"
    },

    {
    
      question: "What year did the Beatles play on'Ed Sullivan' ?",
      options: ["1960", "1970", "1964", "1972"],
      answer: "1964",
      audioSrc:"https://youtu.be/45cYwDMibGo?t=5"
    },

    {
      question: "Who was the original singer for Genesis?",
      options: ["David Vedder", "Phil Collins", "Billy Squire", "Peter Gabriel"],
      answer: "Peter Gabriel",
      audioSrc:"https://youtu.be/OJWJE0x7T4Q?t=3"
    },

    {
      question: "Maybe the greatest rock guitar solos ever. Who was the guitarist on 'Eruption'?",
      options: ["Jimi Hendrix", "Steve Vai", "Joe Satriani", "Eddie Van Halen"],
      answer: "Eddie Van Halen",
      audioSrc: "https://youtu.be/M4Czx8EWXb0?t=22"
      
    },

    {
      question: "The song,'Bamboleo' went mainstream for this Rumba Flamenca band'?",
      options: ["Los Del Rio", "Gypsy Kings", "Gente De Zona", "Habana de Primera"],
      answer: "Gypsy Kings",
      audioSrc:"https://youtu.be/cqZg_w4_Y9Y?t=21"
    },

    {
      question: "Arguably the greatest Flamenco guitarist ever.Who wrote and plaed the orinal song 'Entre Dos Aguas'?",
      options: ["Diego del Morao", "Tomatito", "Paco De Lucia", "Sabicas"],
      answer: "Paco De Lucia",
      audioSrc: "https://youtu.be/2oyhlad64-s?t=4"
    },

    {
      question: "Which of these songs is not by Lynard Skynard'?",
      options: ["Sweet Home Alabama", "Mississippi Queen", "Tuesday's Gone", "Mr.Saturday Night"],
      answer: "Mississippi Queen",
      audioSrc:"https://youtu.be/VbP4qf8PjfI?t=4"
    },

    {
      question: "The orangutang in the Jungle Book sings 'I wanna be like you'Who is the vice behind the primate'?",
      options: ["Dean Martin", "Bing Crosby", "Louie Prima", "Bobby Darin"],
      answer: "Louie Prima",
      audioSrc: "https://youtu.be/u3oTAlHkpjU?t=105"
    },

    {
      question: "What year was the Pink Floyd album'Dark Side of the Moon' released'?",
      options: ["1973", "1969", "1978", "1982"],
      answer: "1973",
      audioSrc: "https://youtu.be/n3_5SPQIfQw"
    },

    {
      question: "who was Garfunkel's singing partner?",
      options: ["Garfinkle ", "Patsy Cline", "Simon", "Garfield"],
      answer: "Simon",
      audioSrc: "https://youtu.be/JVdlpZ4M-Hw?t=2"
    },

    {
      question: "Geddy Lee was the lead singer which famous rock band?",
      options: ["King Crimson", "Rush", "Triumph", "Boston"],
      answer: "Rush",
      audioSrc:"https://youtu.be/g_QtO0Rhp0w?t=7"

    },

    {

      question: "in this song by Eddie Money. how many tickets does he have to Paradise?",
      options: ["1", "8", "2", "3"],
      answer: "2",
      audioSrc:"https://youtu.be/JxcUmAVG3RQ?t=3"
    },

    {
      question: "Who is Jane through with in this 1988 hit by Jane's Addiction'?",
      options: ["Romeo", "Everybody","Sergio", "Cameo's"],
      answer: "Sergio",
      audioSrc: "https://youtu.be/i7Q_8q3XXrQ?t=41"
    },

    {
      question: "In 1974 Led Zeppelin decided to launch thei own record label. What was its name?",
      options: ["Led Balloon", "Cosmic", "Satellite", "Swan Song"],
      answer: "Swan Song",
      audioSrc:"https://youtu.be/DBzuYNK95sM?t=3"
    },

    {
      question: "This all female rock band had a big hit with the song 'What's Up'.What is the name of this band?",
      options: ["The Go-Go's", "The Vandals", "the Bangles", "4 Non Blondes"],
      answer: "4 Non Blondes",
      audioSrc: "https://youtu.be/6NXnxTNIWkc?t=3"
    },

    {
      question: "Which band released 'Hard to Handle' in 1990?",
      options: ["Nirvana", "Rage Against the Machine", "Black Crowes", "Molly Hatchet"],
      answer: "Black Crowes",
      audioSrc:"https://youtu.be/W1tEu_ByGos?t=4"
    },

    {
      question: "Who is the lead singer for Pearl Jam'?",
      options: ["Perry Comoy", "Eddie Vedder", "Dave Grohl", "Michael Stipe"],
      answer: "Eddie Vedder",
      audioSrc:"https://youtu.be/CxKWTzr-k6s?t=21"
    
    },

    {
      question: "Who was the drummer for the band , The Police?",
      options: ["Dave Grohl", "Stewart Copeland", "John Bonham", "Neil Pert"],
      answer: "Stewart Copeland",
      audioSrc: "https://youtu.be/zPwMdZOlPo8?list=RDzPwMdZOlPo8&t=6"
    },

    {
      question: "'Reasons' was a huge hit for this band in the early 70's'?",
      options: ["Parliament", "Kool and the Gang", "Earth Wind and Fire", "The O'jays"],
      answer: "Earth Wind and Fire",
      audioSrc:"https://youtu.be/0Qz_b1di3i8?t=3"
    },










    

    
    // Add more questions here
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const scoreElement = document.getElementById('score');
  const playButton = document.getElementById('play-song');
  const audio = document.getElementById('audio');
  const audioSource = document.getElementById('audio-source');

  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
      const li = document.createElement('li');
      li.textContent = option;
      li.addEventListener('click', () => checkAnswer(option));
      optionsElement.appendChild(li);
    });
  }
  
  // function checkAnswer(selectedOption) {
  //   const currentQuestion = questions[currentQuestionIndex];
  //   if (selectedOption === currentQuestion.answer) {
  //     score++;
  //     scoreElement.textContent = score;
  //     playAudio(audioSource);
  //   }
  //   currentQuestionIndex++;
  //   if (currentQuestionIndex < questions.length) {
  //     displayQuestion();
  //   } else {
  //     alert('Game Over! Your final score is ' + score);
  //   }
  // }
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      score++;
      scoreElement.textContent = score;
      Swal.fire({
        title: "Nice job!",
        html: '<a href="' + currentQuestion.audioSrc + '" target="_blank">Click here to play the song</a>',
        icon: "success",
        confirmButtonText: "Next Question",
      }).then((result) => {
        if (result.isConfirmed) {
          playAudio(currentQuestion.audioSrc);
          currentQuestionIndex++;
          if (currentQuestionIndex < questions.length) {
            displayQuestion();
          } else {
            Swal.fire("Game Over!", "Your final score is " + score, "info");
          }
        }
      });
    } else {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        Swal.fire("Game Over!", "Your final score is " + score, "info");
      }
    }
  }


























  function playAudio(audioSrc) {
audioSource.src = audioSrc;
audio.load();
audio.play();
  }

  document.getElementById('next-button').addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    }
  });
  
  
  
  document.getElementById('start-over').addEventListener('click',() => {
    startOver();
  });
  
  function startOver() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
  }
  displayQuestion();
  