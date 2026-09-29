"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ConfigProvider } from "antd";
import { FINTRACK_THEME } from "../lib/theme";
import styles from "./corporate.module.scss";

export default function CorporateLandingPage() {
  const router = useRouter();

  const ledgerItems = [
    {
      code: "RFIX-01",
      instrument: "Tesouro IPCA+ 2035",
      category: "Renda Fixa",
      position: "R$ 28.450,00",
      rate: "IPCA + 6,25% a.a.",
      liquidity: "D+1",
      status: "CONSOLIDADO",
      statusClass: styles.tagActive,
      type: "positive",
    },
    {
      code: "EQTY-04",
      instrument: "Carteira de Ações e FIIs",
      category: "Renda Variável",
      position: "R$ 20.470,50",
      rate: "Div. Yield 9,40% a.a.",
      liquidity: "D+2",
      status: "ATIVO",
      statusClass: styles.tagActive,
      type: "positive",
    },
    {
      code: "DEBT-01",
      instrument: "Financiamento Imobiliário",
      category: "Dívida / Empréstimo",
      position: "-R$ 12.400,00",
      rate: "TR + 8,50% a.a.",
      liquidity: "Parcela 34/120",
      status: "EM DIA",
      statusClass: styles.tagWarning,
      type: "negative",
    },
    {
      code: "SHRD-02",
      instrument: "Despesas Compartilhadas (Rateio)",
      category: "A Receber",
      position: "+R$ 1.850,00",
      rate: "Valor Nominal",
      liquidity: "Acerto Mensal",
      status: "PENDENTE",
      statusClass: styles.tagInfo,
      type: "info",
    },
    {
      code: "RESV-01",
      instrument: "Reserva de Emergência",
      category: "Liquidez Diária",
      position: "R$ 20.000,00",
      rate: "100% CDI",
      liquidity: "D+0",
      status: "META: 85%",
      statusClass: styles.tagActive,
      type: "positive",
    },
  ];

  const modules = [
    {
      code: "01",
      title: "Gestão de Investimentos",
      description:
        "Acompanhe renda fixa, ações e fundos com cálculo automático de rendimento acumulado, distribuição da carteira e histórico de aportes.",
      spec: "RENDA FIXA, AÇÕES & FIIs",
    },
    {
      code: "02",
      title: "Quitação e Amortização de Dívidas",
      description:
        "Visualize saldos devedores, cronogramas de parcelas e simule amortizações extras para reduzir o prazo e o pagamento de juros.",
      spec: "TABELA SAC, PRICE & ANTECIPAÇÃO",
    },
    {
      code: "03",
      title: "Despesas Compartilhadas",
      description:
        "Divida contas de casa, viagens ou projetos em grupo com compensação automática de débitos mútuos entre os participantes.",
      spec: "DIVISÃO DE CONTAS & RATEIOS",
    },
    {
      code: "04",
      title: "Fluxo de Caixa no Calendário",
      description:
        "Planeje receitas e despesas com visualização diária e mensal para manter o saldo positivo e prever vencimentos com antecedência.",
      spec: "PREVISÃO DIÁRIA E MENSAL",
    },
    {
      code: "05",
      title: "Metas Financeiras e Ritmo",
      description:
        "Defina objetivos patrimoniais, como reservas e aquisições, acompanhando a velocidade de poupança mês a mês.",
      spec: "METAS & RESERVA DE EMERGÊNCIA",
    },
    {
      code: "06",
      title: "Segurança e Controle Total",
      description:
        "Seus dados protegidos com criptografia moderna, sessões seguras e total privacidade sem venda de informações para terceiros.",
      spec: "ISOLAMENTO E PRIVACIDADE",
    },
  ];

  return (
    <ConfigProvider theme={FINTRACK_THEME}>
      <div className={styles.corporateWrapper}>
        {/* Cabeçalho */}
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <div
              className={styles.brand}
              onClick={() => router.push("/corporate")}
            >
              <div className={styles.brandSquare}>F</div>
              <div className={styles.brandTitle}>
                <span className={styles.brandName}>FinTrack</span>
                <span className={styles.brandSub}>Gestão Patrimonial</span>
              </div>
            </div>

            <nav className={styles.nav}>
              <a href="#overview">
                <span className={styles.navIndex}></span>Extrato
              </a>
              <a href="#modules">
                <span className={styles.navIndex}></span>Recursos
              </a>
              <a href="#security">
                <span className={styles.navIndex}></span>Segurança
              </a>
            </nav>

            <div className={styles.headerActions}>
              <button
                type="button"
                className={styles.btnDirectRegister}
                onClick={() => router.push("/access")}
              >
                Acessar FinTrack
              </button>
            </div>
          </div>
        </header>

        {/* Conteúdo Principal */}
        <main className={styles.container}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroMeta}>
              CONTROLE FINANCEIRO PESSOAL E GESTÃO DE PATRIMÔNIO
            </div>

            <h1 className={styles.heroHeading}>
              Controle seus investimentos, dívidas e despesas em um só lugar.
            </h1>

            <p className={styles.heroLead}>
              O FinTrack consolida sua carteira de investimentos, projeções de
              amortização de dívidas, contas compartilhadas e fluxo de caixa
              diário.
            </p>

            <div className={styles.heroActionRow}>
              <button
                type="button"
                className={styles.primaryBtn}
                onClick={() => router.push("/access")}
              >
                Acessar FinTrack &rarr;
              </button>
              <a href="#modules" className={styles.secondaryBtn}>
                Ver Recursos
              </a>
              <span className={styles.heroDocNote}>
                * Acesso rápido via OAuth.
              </span>
            </div>
          </section>

          {/* Demonstrativo em Tabela Real */}
          <section className={styles.ledgerSection} id="overview">
            <div className={styles.ledgerFrame}>
              <div className={styles.ledgerTopBar}>
                <span className={styles.ledgerTitle}>
                  DEMONSTRATIVO CONSOLIDADO // VISÃO GERAL (EXEMPLO)
                </span>
                <span className={styles.ledgerMeta}>
                  ATUALIZAÇÃO EM TEMPO REAL // EXTRATO CONSOLIDADO
                </span>
              </div>

              <div className={styles.tableScrollWrapper}>
                <table className={styles.ledgerTable}>
                  <thead>
                    <tr>
                      <th>CÓDIGO</th>
                      <th>ITEM / ATIVO</th>
                      <th>CATEGORIA</th>
                      <th className={styles.alignRight}>VALOR (BRL)</th>
                      <th>TAXA / RENDIMENTO</th>
                      <th>LIQUIDEZ</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ledgerItems.map((item, idx) => (
                      <tr key={idx}>
                        <td className={styles.codeCell}>{item.code}</td>
                        <td>
                          <strong>{item.instrument}</strong>
                        </td>
                        <td style={{ color: "var(--text-secondary)" }}>
                          {item.category}
                        </td>
                        <td
                          className={`${styles.alignRight} ${
                            item.type === "positive"
                              ? styles.positiveVal
                              : item.type === "negative"
                                ? styles.negativeVal
                                : styles.infoVal
                          }`}
                        >
                          {item.position}
                        </td>
                        <td className={styles.codeCell}>{item.rate}</td>
                        <td style={{ color: "var(--text-secondary)" }}>
                          {item.liquidity}
                        </td>
                        <td>
                          <span
                            className={`${styles.statusTag} ${item.statusClass}`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.ledgerFooterSummary}>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>
                    TOTAL EM INVESTIMENTOS:
                  </span>
                  <span className={styles.summaryValue}>R$ 69.390,50</span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>TOTAL EM DÍVIDAS:</span>
                  <span
                    className={styles.summaryValue}
                    style={{ color: "#f59e0b" }}
                  >
                    R$ 12.400,00
                  </span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>
                    VALORES A RECEBER:
                  </span>
                  <span
                    className={styles.summaryValue}
                    style={{ color: "#38bdf8" }}
                  >
                    R$ 1.850,00
                  </span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>
                    PATRIMÔNIO LÍQUIDO:
                  </span>
                  <span
                    className={styles.summaryValue}
                    style={{ color: "#10b981" }}
                  >
                    R$ 58.840,50
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Matriz de Recursos */}
          <section className={styles.modulesSection} id="modules">
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTag}>FUNCIONALIDADES</div>
              <h2 className={styles.sectionTitle}>
                Tudo o que você precisa para gerenciar suas finanças
              </h2>
              <p className={styles.sectionDesc}>
                Ferramentas integradas para você acompanhar cada centavo com
                precisão, planejar o futuro e tomar decisões seguras.
              </p>
            </div>

            <div className={styles.matrixGrid}>
              {modules.map((m, idx) => (
                <div key={idx} className={styles.matrixCell}>
                  <div className={styles.cellCode}>[MÓDULO {m.code}]</div>
                  <h3 className={styles.cellTitle}>{m.title}</h3>
                  <p className={styles.cellText}>{m.description}</p>
                  <div className={styles.cellMeta}>{m.spec}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Segurança e Privacidade */}
          <section className={styles.governanceSection} id="security">
            <div className={styles.governanceCard}>
              <div className={styles.governanceHeader}>
                <span>SEGURANÇA E PRIVACIDADE DOS SEUS DADOS</span>
                <span className={styles.governanceTag}>[PROTEÇÃO ATIVA]</span>
              </div>
              <div className={styles.governanceGrid}>
                <ul className={styles.governanceList}>
                  <li>
                    <span className={styles.specLabel}>CRIPTOGRAFIA</span>
                    <span className={styles.specVal}>
                      Conexão segura HTTPS / TLS de ponta a ponta
                    </span>
                  </li>
                  <li>
                    <span className={styles.specLabel}>PROTEÇÃO DE SESSÃO</span>
                    <span className={styles.specVal}>
                      Cookies protegidos com flags HttpOnly e Secure
                    </span>
                  </li>
                  <li>
                    <span className={styles.specLabel}>
                      ISOLAMENTO DE DADOS
                    </span>
                    <span className={styles.specVal}>
                      Acesso restrito exclusivamente à sua conta
                    </span>
                  </li>
                </ul>
                <ul className={styles.governanceList}>
                  <li>
                    <span className={styles.specLabel}>POLÍTICA DE DADOS</span>
                    <span className={styles.specVal}>
                      Zero venda, compartilhamento ou anúncios
                    </span>
                  </li>
                  <li>
                    <span className={styles.specLabel}>AUTONOMIA TOTAL</span>
                    <span className={styles.specVal}>
                      Acesso irrestrito a relatórios e exportações
                    </span>
                  </li>
                  <li>
                    <span className={styles.specLabel}>AUTENTICAÇÃO</span>
                    <span className={styles.specVal}>
                      Login seguro com e-mail/senha ou conta Google
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Chamada Final para Ação */}
          <section className={styles.terminalAccessSection}>
            <div className={styles.terminalCard}>
              <div className={styles.terminalInfo}>
                <div className={styles.terminalTag}>[COMECE AGORA]</div>
                <h3>Assuma o controle das suas finanças hoje mesmo</h3>
                <p>
                  Acesse o FinTrack e tenha uma visão unificada dos seus
                  investimentos, dívidas e despesas diárias em poucos minutos.
                </p>
              </div>

              <div className={styles.terminalActions}>
                <button
                  type="button"
                  className={styles.primaryBtn}
                  onClick={() => router.push("/access")}
                >
                  Acessar FinTrack &rarr;
                </button>
              </div>
            </div>
          </section>

          {/* Rodapé */}
          <footer className={styles.footer}>
            <div className={styles.footerRow}>
              <div>
                FINTRACK &copy; {new Date().getFullYear()}. GESTÃO FINANCEIRA E
                PATRIMONIAL. TODOS OS DIREITOS RESERVADOS.
              </div>
              <div className={styles.footerLinks}>
                <a href="#overview">Extrato</a>
                <a href="#modules">Recursos</a>
                <a href="#security">Segurança</a>
                <a
                  onClick={() => router.push("/")}
                  style={{ cursor: "pointer" }}
                >
                  Ver Versão Padrão (/)
                </a>
                <a
                  onClick={() => router.push("/access")}
                  style={{ cursor: "pointer" }}
                >
                  Acessar
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </ConfigProvider>
  );
}
