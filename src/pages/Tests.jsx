import React, { useState } from 'react';

export default function Tests() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "Aşağıdakilerden hangisi bir dur işaretidir?",
      options: [
        "Kırmızı sekizgen",
        "Mavi üçgen",
        "Sarı daire",
        "Yeşil kare"
      ],
      correctAnswer: 0
    },
    {
      question: "Yerleşim yeri içinde azami hız sınırı kaçtır?",
      options: [
        "30 km/s",
        "50 km/s",
        "70 km/s",
        "90 km/s"
      ],
      correctAnswer: 1
    },
    {
      question: "Hangi durumda araç kullanmak yasaktır?",
      options: [
        "Güneş gözlüğü ile",
        "Alkollü iken",
        "Radyo dinlerken",
        "Eldivenle"
      ],
      correctAnswer: 1
    }
  ];

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {showScore ? (
        <div className="text-center bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Test Tamamlandı!</h2>
          <p className="text-xl">
            {questions.length} sorudan {score} doğru cevap
          </p>
          <button
            onClick={() => {
              setShowScore(false);
              setCurrentQuestion(0);
              setScore(0);
            }}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Testi Tekrarla
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <div className="text-sm text-gray-600 mb-2">
              Soru {currentQuestion + 1}/{questions.length}
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              {questions[currentQuestion].question}
            </h2>
          </div>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className="w-full text-left p-4 rounded-md border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}