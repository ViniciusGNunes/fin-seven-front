import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import styles from "./landing.module.scss";

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

// Patrimônio líquido, últimos 12 meses (dados de exemplo)
const NET_WORTH = [31, 33, 32, 36, 39, 38, 43, 47, 46, 51, 55, 58.8];

function Sparkline() {
  const w = 560;
  const h = 140;
  const min = 28;
  const max = 62;
  const pts = NET_WORTH.map((v, i) => {
    const x = (i / (NET_WORTH.length - 1)) * w;
    const y = h - ((v - min) / (max - min)) * h;
    return [x, y] as const;
  });
  const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const [lx, ly] = pts[pts.length - 1];
  return (
    <svg
      viewBox={`-4 -8 ${w + 16} ${h + 16}`}
      className={styles.spark}
      role="img"
      aria-label="Patrimônio líquido subindo ao longo de doze meses"
    >
      {[0.25, 0.5, 0.75].map((t) => (
        <line key={t} x1="0" x2={w} y1={h * t} y2={h * t} className={styles.sparkGrid} />
      ))}
      <path d={d} className={styles.sparkLine} />
      <circle cx={lx} cy={ly} r="4" className={styles.sparkDot} />
    </svg>
  );
}

function Calendar() {
  // Mês de exemplo: dias com movimentação
  const marks: Record<number, "in" | "out" | "both"> = {
    1: "out", 3: "out", 5: "in", 8: "out", 10: "out", 12: "out",
    15: "both", 18: "out", 20: "out", 22: "out", 25: "out", 28: "out", 30: "in",
  };
  return (
    <div className={styles.cal} aria-hidden>
      {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
        <span key={day} className={styles.calDay} data-mark={marks[day]}>
          {day}
        </span>
      ))}
    </div>
  );
}

export default function EditorialLanding() {
  return (
    <div className={`${styles.page} ${serif.variable}`}>
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>
          FinSeven
        </Link>
        <nav className={styles.nav}>
          <a href="#painel">Painel</a>
          <a href="#despesas">Despesas</a>
          <a href="#investimentos">Investimentos</a>
          <a href="#dividas">Dívidas</a>
          <a href="#receber">A receber</a>
          <a href="#calendario">Calendário</a>
          <a href="#metas">Metas</a>
        </nav>
        <Link href="/access" className={styles.enter}>
          Entrar
        </Link>
      </header>

      <main>
        <section className={styles.hero}>
          <h1 className={styles.headline}>
            Para onde foi o seu dinheiro <em>este mês?</em>
          </h1>
          <div className={styles.heroBody}>
            <p className={styles.lede}>
              O FinSeven junta o que você investe, o que você deve, o que te devem e o que vai
              vencer na semana. Em uma tela, sem planilha.
            </p>
            <Link href="/access" className={styles.cta}>
              Criar minha conta <span aria-hidden>→</span>
            </Link>
            <p className={styles.fine}>Entre com e-mail ou conta Google.</p>
          </div>

          <figure className={styles.figure}>
            <div className={styles.figureHead}>
              <span>Patrimônio líquido</span>
              <span className={styles.figureNote}>exemplo · 12 meses</span>
            </div>
            <div className={styles.bigNumber}>
              R$ 58.840<span>,50</span>
            </div>
            <Sparkline />
            <div className={styles.axis}>
              <span>nov</span>
              <span>mai</span>
              <span>out</span>
            </div>
          </figure>
        </section>

        <section className={styles.chapter} id="painel">
          <div className={styles.chapterText}>
            <span className={styles.num}>01 · Painel</span>
            <h2>O mês inteiro numa tela só.</h2>
            <p>
              Entradas, saídas e saldo logo ao abrir. Embaixo, as últimas transações, as metas, os
              investimentos em destaque e quem ainda te deve. Dá para entender a situação em dez
              segundos.
            </p>
          </div>
          <div className={styles.exhibit}>
            <div className={styles.row}>
              <span className={styles.muted}>Entradas</span>
              <span className={`${styles.mono} ${styles.green}`}>R$ 8.400,00</span>
            </div>
            <div className={styles.row}>
              <span className={styles.muted}>Saídas</span>
              <span className={styles.mono}>R$ 5.915,30</span>
            </div>
            <div className={`${styles.row} ${styles.total}`}>
              <span>Saldo do mês</span>
              <span className={`${styles.mono} ${styles.green}`}>R$ 2.484,70</span>
            </div>
          </div>
        </section>

        <section className={`${styles.chapter} ${styles.flip}`} id="despesas">
          <div className={styles.chapterText}>
            <span className={styles.num}>02 · Despesas</span>
            <h2>Cada conta no dia em que vence.</h2>
            <p>
              Contas avulsas, parceladas e assinaturas ficam na mesma lista, com categoria e status.
              Marque como paga quando pagar. Cancelou o streaming? Cancele a assinatura aqui também.
            </p>
          </div>
          <div className={styles.exhibit}>
            <ul className={styles.ledger}>
              <li>
                <span>Aluguel</span>
                <span className={styles.leader} />
                <span className={`${styles.mono} ${styles.green}`}>pago · R$ 2.100,00</span>
              </li>
              <li>
                <span>Internet</span>
                <span className={styles.leader} />
                <span className={`${styles.mono} ${styles.amber}`}>vence dia 10 · R$ 119,90</span>
              </li>
              <li>
                <span>Curso de inglês · 3/12</span>
                <span className={styles.leader} />
                <span className={`${styles.mono} ${styles.muted}`}>R$ 280,00</span>
              </li>
              <li>
                <span>Streaming · assinatura</span>
                <span className={styles.leader} />
                <span className={`${styles.mono} ${styles.muted}`}>R$ 44,90</span>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.chapter} id="investimentos">
          <div className={styles.chapterText}>
            <span className={styles.num}>03 · Investimentos</span>
            <h2>Quanto rendeu, de verdade.</h2>
            <p>
              Renda fixa, ações e FIIs, em real, dólar ou euro. Para cada ativo você vê o que
              aportou, o saldo atual, o lucro e o peso dele na carteira.
            </p>
          </div>
          <div className={styles.exhibit}>
            <div className={styles.split} aria-hidden>
              <b style={{ width: "58%" }} />
              <i />
            </div>
            <div className={styles.row}>
              <span>Tesouro IPCA+ 2035</span>
              <span className={styles.mono}>R$ 28.450,00 · 58%</span>
            </div>
            <div className={styles.row}>
              <span>Carteira de FIIs</span>
              <span className={styles.mono}>R$ 20.470,50 · 42%</span>
            </div>
            <div className={`${styles.row} ${styles.total}`}>
              <span>Resultado acumulado</span>
              <span className={`${styles.mono} ${styles.green}`}>+ 14,2%</span>
            </div>
          </div>
        </section>

        <section className={`${styles.chapter} ${styles.flip}`} id="dividas">
          <div className={styles.chapterText}>
            <span className={styles.num}>04 · Dívidas</span>
            <h2>Saiba quando a dívida acaba.</h2>
            <p>
              Cada financiamento mostra o saldo, a parcela atual e quanto você economiza em juros se
              antecipar um pagamento. Você decide com o número na frente.
            </p>
          </div>
          <div className={styles.exhibit}>
            <div className={styles.row}>
              <span>Financiamento imobiliário</span>
              <span className={styles.mono}>34 de 120</span>
            </div>
            <div className={styles.ticks} aria-hidden>
              {Array.from({ length: 40 }, (_, i) => (
                <i key={i} data-on={i < 11} />
              ))}
            </div>
            <div className={styles.row}>
              <span className={styles.muted}>Saldo devedor</span>
              <span className={`${styles.mono} ${styles.amber}`}>R$ 12.400,00</span>
            </div>
            <div className={styles.row}>
              <span className={styles.muted}>Antecipando R$ 500 por mês</span>
              <span className={styles.mono}>quita 14 meses antes</span>
            </div>
          </div>
        </section>

        <section className={styles.chapter} id="receber">
          <div className={styles.chapterText}>
            <span className={styles.num}>05 · A receber</span>
            <h2>Dividir a conta sem constrangimento.</h2>
            <p>
              Lance a despesa, escolha quem participou e o app calcula quem deve a quem. Quando
              alguém paga, você marca como acertado e segue a vida.
            </p>
          </div>
          <div className={styles.exhibit}>
            <ul className={styles.ledger}>
              <li>
                <span>Ana</span>
                <span className={styles.leader} />
                <span className={`${styles.mono} ${styles.green}`}>deve R$ 62,50</span>
              </li>
              <li>
                <span>Bruno</span>
                <span className={styles.leader} />
                <span className={`${styles.mono} ${styles.green}`}>deve R$ 125,00</span>
              </li>
              <li>
                <span>Carla</span>
                <span className={styles.leader} />
                <span className={`${styles.mono} ${styles.muted}`}>acertado</span>
              </li>
            </ul>
            <div className={`${styles.row} ${styles.total}`}>
              <span>Pendente</span>
              <span className={`${styles.mono} ${styles.green}`}>R$ 187,50</span>
            </div>
          </div>
        </section>

        <section className={`${styles.chapter} ${styles.flip}`} id="calendario">
          <div className={styles.chapterText}>
            <span className={styles.num}>06 · Calendário</span>
            <h2>Veja o mês antes de ele chegar.</h2>
            <p>
              Contas fixas, salário e parcelas aparecem no dia certo. Dá para notar o dia 15
              apertado com duas semanas de antecedência.
            </p>
          </div>
          <div className={styles.exhibit}>
            <Calendar />
            <div className={styles.legend}>
              <span><i data-k="out" /> saída</span>
              <span><i data-k="in" /> entrada</span>
            </div>
          </div>
        </section>

        <section className={styles.chapter} id="metas">
          <div className={styles.chapterText}>
            <span className={styles.num}>07 · Metas</span>
            <h2>Uma meta, um ritmo.</h2>
            <p>
              Reserva de emergência, viagem, entrada de um apartamento. O FinSeven compara quanto
              você guardou com quanto precisaria guardar por mês e avisa se saiu do trilho.
            </p>
          </div>
          <div className={styles.exhibit}>
            <div className={styles.row}>
              <span>Reserva de emergência</span>
              <span className={styles.mono}>R$ 20.000 de R$ 23.500</span>
            </div>
            <div className={styles.bar} aria-hidden>
              <b style={{ width: "85%" }} />
              <u style={{ left: "80%" }} />
            </div>
            <div className={styles.row}>
              <span className={styles.muted}>Pelo ritmo ideal você já estaria em 80%</span>
              <span className={`${styles.mono} ${styles.green}`}>à frente</span>
            </div>
          </div>
        </section>

        <section className={styles.close}>
          <h2>
            Comece com o que você tem hoje. <em>O resto você ajusta depois.</em>
          </h2>
          <Link href="/access" className={styles.cta}>
            Criar minha conta <span aria-hidden>→</span>
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} FinSeven</span>
        <span>Seus dados ficam na sua conta. Não vendemos nem compartilhamos.</span>
      </footer>
    </div>
  );
}
