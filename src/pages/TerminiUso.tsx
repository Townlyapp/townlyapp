import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle2, AlertCircle, Users, Calendar } from "lucide-react";

const TerminiUso = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Termini e Condizioni d'Uso
            </h1>
            <p className="text-lg text-muted-foreground">
              Le regole per utilizzare il nostro servizio
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Intro */}
            <Card className="border-border">
              <CardContent className="p-8">
                <p className="text-foreground/80 leading-relaxed">
                  Benvenuto su Townly! Questi Termini e Condizioni d'Uso ("Termini") regolano l'accesso e l'utilizzo 
                  del nostro sito web e dei servizi di prenotazione di esperienze turistiche in Emilia-Romagna. 
                  Utilizzando il nostro sito, accetti di rispettare questi Termini.
                </p>
              </CardContent>
            </Card>

            {/* Accettazione */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Accettazione dei Termini
                </h2>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Accettando questi Termini, confermi di avere almeno 18 anni o di agire con il consenso di un genitore/tutore
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Se prenoti per conto di minori, sei responsabile della loro partecipazione e sicurezza
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Ci riserviamo il diritto di modificare questi Termini in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Prenotazioni */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Prenotazione delle Esperienze
                </h2>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <h3 className="font-bold text-foreground mb-3">Come funziona</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Seleziona l'esperienza desiderata, scegli data, orario e numero di partecipanti
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Completa il pagamento online (metodi accettati: carta di credito, PayPal, Apple Pay)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Riceverai una conferma via email con tutti i dettagli della prenotazione
                      </span>
                    </li>
                  </ul>

                  <h3 className="font-bold text-foreground mb-3">Disponibilità e Posti Limitati</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Le esperienze hanno posti limitati e sono disponibili fino ad esaurimento
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        La prenotazione è confermata solo dopo il pagamento e la ricezione dell'email di conferma
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Ci riserviamo il diritto di cancellare un'esperienza se non viene raggiunto il numero minimo di partecipanti (ti verrà offerto rimborso completo)
                      </span>
                    </li>
                  </ul>

                  <h3 className="font-bold text-foreground mb-3">Prezzi e Pagamento</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        I prezzi sono espressi in Euro (€) e includono IVA dove applicabile
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Il pagamento è richiesto al momento della prenotazione
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Tutti i pagamenti sono gestiti in modo sicuro tramite gateway certificati
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Tariffe speciali: bambini (sotto i 12 anni) pagano il 50% del prezzo adulti
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Responsabilità */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Responsabilità dei Partecipanti
                </h2>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <p className="text-foreground/80 mb-4">
                    Partecipando alle nostre esperienze, accetti di:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Presentarti puntuale al punto d'incontro indicato
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Seguire le istruzioni delle guide ed esperti locali
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Portare l'equipaggiamento necessario indicato nella descrizione dell'esperienza
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Rispettare gli altri partecipanti, le guide e l'ambiente naturale/culturale
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Informarci preventivamente di eventuali condizioni mediche o necessità speciali
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Limitazioni */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Limitazioni di Responsabilità
                </h2>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Tutte le esperienze sono coperte da assicurazione, ma partecipi a tuo rischio
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Non siamo responsabili per infortuni, danni o perdite derivanti dalla tua partecipazione, salvo in caso di nostra negligenza grave
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Non siamo responsabili per ritardi, cancellazioni o modifiche causate da eventi fuori dal nostro controllo (maltempo, calamità naturali, scioperi, ecc.)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Non garantiamo l'accuratezza completa delle informazioni sul sito, che possono essere soggette a modifiche
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Modifiche e Cancellazioni */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Modifiche e Cancellazioni da Parte Nostra
                </h2>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <p className="text-foreground/80 mb-4">
                    Ci riserviamo il diritto di:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Modificare date, orari o dettagli dell'esperienza (ti informeremo il prima possibile)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Cancellare un'esperienza per motivi di sicurezza, maltempo o numero insufficiente di partecipanti
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        In caso di cancellazione da parte nostra, riceverai rimborso completo o possibilità di riprogrammare
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Proprietà Intellettuale */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Proprietà Intellettuale
                </h2>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Tutti i contenuti del sito (testi, immagini, logo, grafica) sono protetti da copyright e di proprietà di Townly
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        È vietato copiare, riprodurre o distribuire i contenuti senza autorizzazione scritta
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Puoi utilizzare il sito solo per uso personale e non commerciale
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Legge Applicabile */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Legge Applicabile e Foro Competente
                </h2>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Questi Termini sono regolati dalla legge italiana
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Per qualsiasi controversia, sarà competente il Foro del luogo di residenza del consumatore (se applicabile) o il Foro di Bologna
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Prima di ricorrere all'autorità giudiziaria, ti invitiamo a contattarci per tentare una risoluzione amichevole
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contatti */}
            <div>
              <Card className="border-border bg-accent/10">
                <CardContent className="p-8">
                  <h3 className="font-bold text-foreground mb-4">Hai domande?</h3>
                  <p className="text-foreground/80 mb-4">
                    Per qualsiasi domanda sui Termini e Condizioni, contattaci:
                  </p>
                  <div className="space-y-2 text-foreground/80">
                    <p><strong>Email:</strong> townlyapp@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TerminiUso;
