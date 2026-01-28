export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  relatedExperiences?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "curiosita-modena-guida-completa",
    title: "10 Curiosità su Modena che Non Conoscevi",
    excerpt: "Dalla Ferrari all'aceto balsamico, dal Teatro Pavarotti ai tortellini: scopri i segreti e le curiosità che rendono Modena unica al mondo.",
    content: `Modena è molto più di una città d'arte: è un concentrato di eccellenze, storia e tradizioni che hanno conquistato il mondo. Ecco 10 curiosità che forse non conosci su questa perla dell'Emilia-Romagna.

## 1. La Patria della Ferrari e della Maserati
Modena e il territorio circostante ospitano la Motor Valley, la terra dei motori più prestigiosi al mondo. A Maranello, a pochi chilometri dalla città, ha sede la Ferrari, mentre a Modena stessa è nata la Maserati. Non è un caso che qui si respiri benzina e passione!

## 2. L'Aceto Balsamico: Oro Nero di Modena
L'Aceto Balsamico Tradizionale di Modena è un prodotto DOP che richiede almeno 12 anni di invecchiamento. Il più pregiato può arrivare a 25 anni o più! Viene conservato in batterie di botti di legni diversi e il suo valore può superare i 100 euro per una bottiglietta di 100ml.

## 3. La Ghirlandina: Il Simbolo della Città
La Torre Ghirlandina, alta 86 metri, è il campanile del Duomo di Modena ed è Patrimonio UNESCO dal 1997. Il suo nome deriva dalle due ghirlande di fiori che decorano la guglia. Nei secoli è stata anche prigione e torre di avvistamento.

## 4. I Tortellini: Una Ricetta Segretissima
I tortellini modenesi hanno una ricetta ufficiale depositata presso la Camera di Commercio! La tradizione vuole che siano ispirati all'ombelico di Venere, e devono essere rigorosamente serviti in brodo di cappone.

## 5. Luciano Pavarotti: La Voce di Modena
Il grande tenore Luciano Pavarotti è nato a Modena nel 1935. Il Teatro Comunale della città è oggi intitolato a lui, e ogni anno si svolge il "Pavarotti & Friends", evento benefico che ha ospitato artisti internazionali.

## 6. Il Lambrusco: Molto Più di un Vino Frizzante
Il Lambrusco di Modena non è solo un vino frizzante: esistono diverse varietà DOP, dal secco al dolce, perfette per accompagnare i piatti della cucina emiliana. È uno dei vini italiani più esportati al mondo.

## 7. Enzo Ferrari: L'Uomo che Sfidò i Limiti
Enzo Ferrari, fondatore della casa automobilistica, era un modenese doc. La sua casa natale è oggi un museo che racconta la storia dell'uomo e del marchio che ha fatto sognare generazioni di appassionati.

## 8. Il Duomo Romanico: Un Capolavoro UNESCO
Il Duomo di Modena, dedicato a San Geminiano, patrono della città, è un capolavoro dell'architettura romanica. Le sue sculture, opera del Maestro Wiligelmo, sono tra le più importanti testimonianze dell'arte medievale italiana.

## 9. La Tradizione dello Gnocco Fritto
Lo gnocco fritto (o crescentina) è il re degli antipasti modenesi. Viene servito con salumi e formaggi ed è irresistibile! La tradizione vuole che sia nato come "pane dei poveri" ma oggi è il protagonista di tutte le tavole emiliane.

## 10. Modena: Città delle Stelle Michelin
Modena vanta una concentrazione incredibile di ristoranti stellati, tra cui l'Osteria Francescana di Massimo Bottura, più volte eletta migliore ristorante del mondo. La città è un vero paradiso per i gourmet.

---

Queste sono solo alcune delle infinite curiosità che rendono Modena una città unica. Vieni a scoprirle dal vivo con le nostre esperienze dedicate!`,
    coverImage: "/src/assets/blog-food.jpg",
    author: "Laura Gatti",
    publishedAt: "2025-01-20",
    category: "Cultura",
    tags: ["modena", "curiosità", "cultura", "enogastronomia", "ferrari"],
    relatedExperiences: ["esperienza-1", "esperienza-4"]
  }
];

export const blogCategories = [
  "Tutte",
  "Guide",
  "Ispirazione",
  "Food & Wine",
  "Avventura",
  "Cultura"
];

export const popularTags = [
  "emilia-romagna",
  "esperienze",
  "turismo",
  "enogastronomia",
  "outdoor",
  "cultura",
  "weekend",
  "romantico"
];
