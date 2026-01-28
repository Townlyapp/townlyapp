import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw, CheckCircle2, XCircle, Clock, AlertTriangle } from "lucide-react";

const PoliticaRimborso = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <RefreshCw className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Politica di Rimborso e Cancellazione
            </h1>
            <p className="text-lg text-muted-foreground">
              Come funzionano cancellazioni e rimborsi
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
                  Comprendiamo che i piani possono cambiare. Questa politica spiega come gestire cancellazioni 
                  e richieste di rimborso per le esperienze prenotate su Townly. Il nostro obiettivo è essere 
                  giusti sia con i clienti che con i nostri partner locali.
                </p>
              </CardContent>
            </Card>

            {/* Cancellazione Cliente */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Cancellazione da Parte del Cliente
                </h2>
              </div>
              
              {/* Rimborso Completo */}
              <Card className="border-border mb-4 border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">
                        ✅ Rimborso Completo (100%)
                      </h3>
                      <p className="text-foreground/80 mb-3">
                        Riceverai il rimborso completo se cancelli:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span className="text-foreground/80">
                            <strong>Almeno 48 ore prima</strong> dell'esperienza
                          </span>
                        </li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-3">
                        Il rimborso sarà elaborato entro 5-10 giorni lavorativi sul metodo di pagamento originale
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rimborso Parziale */}
              <Card className="border-border mb-4 border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">
                        ⚠️ Rimborso Parziale (50%)
                      </h3>
                      <p className="text-foreground/80 mb-3">
                        Riceverai il 50% dell'importo pagato se cancelli:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span className="text-foreground/80">
                            <strong>Tra 48 e 24 ore prima</strong> dell'esperienza
                          </span>
                        </li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-3">
                        Il rimborso sarà elaborato entro 5-10 giorni lavorativi sul metodo di pagamento originale
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nessun Rimborso */}
              <Card className="border-border border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">
                        ❌ Nessun Rimborso
                      </h3>
                      <p className="text-foreground/80 mb-3">
                        Non è previsto rimborso se:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span className="text-foreground/80">
                            Cancelli <strong>meno di 24 ore prima</strong> dell'esperienza
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span className="text-foreground/80">
                            Non ti presenti all'esperienza senza preavviso (no-show)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span className="text-foreground/80">
                            L'esperienza è già iniziata
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Come Cancellare */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Come Richiedere la Cancellazione
                </h2>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <p className="text-foreground/80 mb-4">
                    Per cancellare la tua prenotazione:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">1.</span>
                      <span className="text-foreground/80">
                        Invia un'email a <strong>townlyapp@gmail.com</strong> con:
                        <ul className="mt-2 ml-4 space-y-1">
                          <li>• Numero di prenotazione</li>
                          <li>• Nome e cognome</li>
                          <li>• Data ed esperienza prenotata</li>
                        </ul>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">2.</span>
                      <span className="text-foreground/80">
                        Riceverai conferma della cancellazione entro 24 ore
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">3.</span>
                      <span className="text-foreground/80">
                        Il rimborso (se applicabile) sarà elaborato entro 5-10 giorni lavorativi
                      </span>
                    </li>
                  </ul>
                  <div className="bg-accent/10 rounded-lg p-4 border border-border">
                    <p className="text-sm text-foreground/80">
                      <strong>Importante:</strong> La cancellazione è considerata effettiva dal momento in cui 
                      riceviamo la tua richiesta via email, non dal momento dell'invio.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cancellazione Nostra */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Cancellazione da Parte di Townly
                </h2>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <p className="text-foreground/80 mb-4">
                    Potremmo cancellare un'esperienza per motivi quali:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Condizioni meteorologiche avverse che rendono l'esperienza non sicura
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Numero insufficiente di partecipanti (minimo non raggiunto)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Problemi tecnici o emergenze impreviste
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Indisponibilità della guida per motivi di forza maggiore
                      </span>
                    </li>
                  </ul>
                  
                  <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-6 border border-green-200 dark:border-green-900">
                    <h4 className="font-bold text-foreground mb-3">
                      In caso di cancellazione da parte nostra:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">
                          Riceverai <strong>rimborso completo (100%)</strong> senza penali
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">
                          Oppure potrai riprogrammare l'esperienza per un'altra data disponibile
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">
                          Ti informeremo il prima possibile (almeno 24 ore prima quando possibile)
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Modifiche */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Modifiche alla Prenotazione
                </h2>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <p className="text-foreground/80 mb-4">
                    Vuoi modificare data, orario o numero di partecipanti?
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Le modifiche sono possibili <strong>almeno 48 ore prima</strong> dell'esperienza
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Contattaci via email a <strong>townlyapp@gmail.com</strong> indicando le modifiche desiderate
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Le modifiche sono soggette a disponibilità
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Eventuali differenze di prezzo verranno addebitate o rimborsate
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Casi Speciali */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Casi Speciali ed Eccezioni
                </h2>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <h4 className="font-bold text-foreground mb-3">Emergenze e Casi di Forza Maggiore</h4>
                  <p className="text-foreground/80 mb-4">
                    In caso di emergenze documentate (malattia grave, incidente, lutto familiare), 
                    valuteremo richieste di rimborso eccezionali anche fuori dai termini standard. 
                    Contattaci il prima possibile con documentazione giustificativa.
                  </p>

                  <h4 className="font-bold text-foreground mb-3 mt-6">Condizioni Meteorologiche</h4>
                  <p className="text-foreground/80 mb-4">
                    Per esperienze all'aperto, la decisione finale sulla sicurezza spetta alla guida. 
                    In caso di maltempo estremo che rende l'esperienza non sicura, l'esperienza verrà 
                    cancellata con rimborso completo o possibilità di riprogrammare.
                  </p>

                  <h4 className="font-bold text-foreground mb-3 mt-6">Gruppi e Prenotazioni Multiple</h4>
                  <p className="text-foreground/80">
                    Per prenotazioni di gruppo (più di 6 persone), potrebbero applicarsi termini diversi. 
                    Contattaci per discutere le condizioni specifiche.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Metodi di Rimborso */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Metodi e Tempi di Rimborso
                </h2>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        I rimborsi vengono elaborati <strong>entro 5-10 giorni lavorativi</strong> dalla conferma di cancellazione
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Il rimborso sarà accreditato sul <strong>metodo di pagamento originale</strong> utilizzato per la prenotazione
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        I tempi di accredito effettivo sul tuo conto/carta dipendono dalla tua banca (solitamente 2-7 giorni)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">
                        Riceverai un'email di conferma quando il rimborso è stato elaborato
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
                  <h3 className="font-bold text-foreground mb-4">Domande su Cancellazioni o Rimborsi?</h3>
                  <p className="text-foreground/80 mb-4">
                    Siamo qui per aiutarti. Contattaci per qualsiasi domanda o richiesta:
                  </p>
                  <div className="space-y-2 text-foreground/80">
                    <p><strong>Email:</strong> townlyapp@gmail.com</p>
                    <p><strong>Tempo di risposta:</strong> Entro 24 ore nei giorni lavorativi</p>
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

export default PoliticaRimborso;
