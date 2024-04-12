const questions = [
    {
      question: "What year was Michael Jackson's album 'Thriller' released?",
      options: ["1982", "1984", "1986", "1988"],
      answer: "1982"
    },
    {
      question: "Who is known as the 'King of Pop'?",
      options: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"],
      answer: "Michael Jackson"
    },

    
    // Add more questions here
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const scoreElement = document.getElementById('score');
  
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
  
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      score++;
      scoreElement.textContent = score;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      alert('Game Over! Your final score is ' + score);
    }
  }
  
  document.getElementById('next-button').addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    }
  });
  
  displayQuestion();
  