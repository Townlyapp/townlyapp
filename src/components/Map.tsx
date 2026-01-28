import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Trophy, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CityData {
  name: string;
  emoji: string;
  speciality: string;
  fun_fact: string;
  dialect: string;
}

const cities: CityData[] = [
  {
    name: "Bologna",
    emoji: "🍝",
    speciality: "Tortellini, Mortadella, Tagliatelle al ragù",
    fun_fact: "Le torri pendenti più famose dopo Pisa!",
    dialect: "Andèr in piàza" // Andare in piazza
  },
  {
    name: "Modena",
    emoji: "🏎️",
    speciality: "Ferrari, Lamborghini e Aceto Balsamico",
    fun_fact: "Capitale dei motori e del buon gusto!",
    dialect: "Al zampòun" // Lo zampone
  },
  {
    name: "Parma",
    emoji: "🧀",
    speciality: "Parmigiano Reggiano, Prosciutto di Parma",
    fun_fact: "Città UNESCO della Gastronomia!",
    dialect: "L'acsé bun" // L'accento buono
  },
  {
    name: "Reggio Emilia",
    emoji: "🇮🇹",
    speciality: "Bandiera Italiana nata qui!",
    fun_fact: "Patria del Tricolore italiano!",
    dialect: "Al caplèt" // I cappelletti
  },
  {
    name: "Piacenza",
    emoji: "🍷",
    speciality: "Vini della Val Trebbia",
    fun_fact: "La 'primogenita' dell'Emilia-Romagna!",
    dialect: "I pisarèi" // I pisarei
  },
  {
    name: "Ferrara",
    emoji: "🏰",
    speciality: "Castello Estense, Coppia Ferrarese",
    fun_fact: "Prima città moderna d'Europa!",
    dialect: "La còpia" // La coppia ferrarese
  },
  {
    name: "Ravenna",
    emoji: "✨",
    speciality: "Mosaici Bizantini UNESCO",
    fun_fact: "8 monumenti UNESCO in una città!",
    dialect: "I musè" // I mosaici
  },
  {
    name: "Forlì-Cesena",
    emoji: "🍇",
    speciality: "Sangiovese di Romagna",
    fun_fact: "Terra di grandi condottieri!",
    dialect: "E' Sangvès" // Il Sangiovese
  },
  {
    name: "Rimini",
    emoji: "🏖️",
    speciality: "Spiagge, Piadina, Fellini",
    fun_fact: "Capitale del divertimento estivo!",
    dialect: "La pida" // La piadina
  }
];

const Map = () => {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [shuffledEmojis, setShuffledEmojis] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle emojis at start
    const emojis = cities.map(c => c.emoji);
    setShuffledEmojis(emojis.sort(() => Math.random() - 0.5));
  }, []);

  const currentCity = cities[currentCityIndex];

  const handleEmojiClick = (emoji: string) => {
    if (showResult) return;
    
    setSelectedEmoji(emoji);
    const correct = emoji === currentCity.emoji;
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentCityIndex < cities.length - 1) {
        setCurrentCityIndex(currentCityIndex + 1);
        setSelectedEmoji(null);
        setShowResult(false);
      } else {
        setGameFinished(true);
      }
    }, 1500);
  };

  const resetGame = () => {
    setCurrentCityIndex(0);
    setScore(0);
    setSelectedEmoji(null);
    setShowResult(false);
    setGameFinished(false);
    const emojis = cities.map(c => c.emoji);
    setShuffledEmojis(emojis.sort(() => Math.random() - 0.5));
  };

  if (gameFinished) {
    return (
      <div className="w-full max-w-3xl mx-auto py-12">
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <Trophy className="w-20 h-20 mx-auto mb-6 text-primary animate-scale-in" />
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Complimenti!
            </h2>
            <p className="text-2xl font-semibold mb-6 text-foreground">
              Hai totalizzato {score} su {cities.length} punti
            </p>
            <div className="mb-8">
              {score === cities.length ? (
                <p className="text-lg text-foreground">
                  🎉 Perfetto! Sei un vero esperto dell'Emilia-Romagna!
                </p>
              ) : score >= cities.length * 0.7 ? (
                <p className="text-lg text-foreground">
                  👏 Ottimo lavoro! Conosci bene il territorio!
                </p>
              ) : (
                <p className="text-lg text-foreground">
                  💪 Buon tentativo! Continua a esplorare l'Emilia-Romagna!
                </p>
              )}
            </div>
            <Button 
              onClick={resetGame}
              size="lg"
              className="gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Gioca Ancora
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold text-primary mb-2">
          Vediamo quanto conosci il tuo territorio
        </h2>
        <p className="text-lg text-muted-foreground mb-4">
          Associa l'emoji alla città giusta!
        </p>
        <div className="flex justify-center items-center gap-4 text-sm">
          <span className="text-foreground font-semibold">
            Domanda {currentCityIndex + 1} di {cities.length}
          </span>
          <span className="text-primary font-semibold">
            Punteggio: {score}/{cities.length}
          </span>
        </div>
      </div>

      <Card className="bg-gradient-to-br from-background to-muted/30 border-primary/20 mb-8">
        <CardContent className="p-8">
          <h3 className="text-2xl font-display font-bold text-center mb-6 text-primary">
            Quale emoji rappresenta {currentCity.name}?
          </h3>
          
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {shuffledEmojis.map((emoji, index) => (
              <button
                key={index}
                onClick={() => handleEmojiClick(emoji)}
                disabled={showResult}
                className={cn(
                  "relative p-8 rounded-xl transition-all duration-300 text-6xl",
                  "bg-background hover:bg-accent/10 border-2",
                  "hover:scale-110 active:scale-95",
                  "disabled:cursor-not-allowed",
                  selectedEmoji === emoji && showResult
                    ? isCorrect
                      ? "border-green-500 bg-green-500/10 scale-110"
                      : "border-red-500 bg-red-500/10 scale-90"
                    : "border-border hover:border-primary/50"
                )}
              >
                {emoji}
                {selectedEmoji === emoji && showResult && (
                  <div className="absolute -top-2 -right-2">
                    {isCorrect ? (
                      <CheckCircle2 className="w-8 h-8 text-green-500 animate-scale-in" />
                    ) : (
                      <XCircle className="w-8 h-8 text-red-500 animate-scale-in" />
                    )}
                  </div>
                )}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {showResult && (
        <Card className={cn(
          "animate-scale-in border-2",
          isCorrect ? "border-green-500 bg-green-500/5" : "border-red-500 bg-red-500/5"
        )}>
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <h4 className={cn(
                "text-xl font-bold mb-2",
                isCorrect ? "text-green-600" : "text-red-600"
              )}>
                {isCorrect ? "🎉 Esatto!" : "😅 Ops!"}
              </h4>
              <p className="text-foreground font-semibold">
                {currentCity.emoji} {currentCity.name}
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-foreground">
                {currentCity.speciality}
              </p>
              <p className="text-muted-foreground italic">
                {currentCity.fun_fact}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Map;
