// MXA Proposal — page components. Each renders one A4 page (794×1123).
const { SectionLabel, DataTable, ClauseList, SignatureBlock, DocFooter, Card, Badge, Divider } = window.MXADesignSystem_5dc0a4;

const ASSETS = '../../assets';

function PageShell({ children, page, ink, label }) {
  return (
    <div className={'pp-page' + (ink ? ' pp-page--ink' : '')} data-screen-label={label}>
      <div className="pp-page__body">{children}</div>
      <DocFooter page={page} onInk={ink} />
    </div>
  );
}

function PageHeaderMark({ ink }) {
  return (
    <div className="pp-head">
      <img className="pp-head__logo" src={ASSETS + '/logos/' + (ink ? 'mxa-logo-white.svg' : 'mxa-logo.svg')} alt="mxa" />
      <span className="pp-head__tag">Tax · Accounting · Legal · Notary</span>
    </div>
  );
}

/* 1 — COVER */
function CoverPage() {
  return (
    <div className="pp-page pp-page--ink pp-cover" data-screen-label="Cover">
      <div className="pp-cover__top">
        <img className="pp-cover__logo" src={ASSETS + '/logos/mxa-logo-white.svg'} alt="mxa" />
        <span className="pp-cover__tag">Tax · Accounting · Legal · Notary</span>
      </div>
      <div className="pp-cover__mid">
        <p className="pp-cover__eyebrow">Mayo 2026</p>
        <h1 className="pp-cover__title">Propuesta<br/>de servicios</h1>
        <p className="pp-cover__client">Para: Autodata S.R.L.</p>
      </div>
      <img className="pp-cover__globe" src={ASSETS + '/brand/globe-motif.png'} alt="" />
      <DocFooter onInk />
    </div>
  );
}

/* 2 — LETTER */
function LetterPage() {
  return (
    <PageShell page="02 / 10" label="Carta de presentación">
      <PageHeaderMark />
      <div className="pp-letter-meta">
        <div><span>Para</span><b>Autodata S.R.L.</b></div>
        <div><span>Ref.</span><b>Servicios de consultoría</b></div>
        <div><span>Fecha</span><b>Montevideo, mayo de 2026</b></div>
      </div>
      <Divider />
      <p className="pp-lead">Estimados,</p>
      <p className="pp-body">De acuerdo con lo convenido, tenemos el agrado de dirigirnos a usted a efectos de hacerle llegar la presente propuesta de servicios profesionales.</p>
      <p className="pp-body">MXA agradece la confianza depositada en nuestro equipo, y espera que la presente propuesta de servicios merezca su aprobación. Quedamos a vuestra disposición para cualquier aclaración o información que consideren necesaria.</p>
      <p className="pp-body">Saluda a usted muy atentamente,</p>
      <div style={{ marginTop: '36px' }}>
        <SignatureBlock signatory={{ name: 'Nicolás May', role: 'MXA — Socio', email: 'nmay@mxa.com.uy' }} />
      </div>
    </PageShell>
  );
}

/* 3 — ANTECEDENTES */
function AntecedentesPage() {
  return (
    <PageShell page="03 / 10" label="Antecedentes">
      <PageHeaderMark />
      <SectionLabel eyebrow="Antecedentes" />
      <p className="pp-body" style={{ marginTop: '24px' }}>Autodata S.R.L. es una empresa de servicios dedicada al asesoramiento integral del sector automotriz. Puntualmente, obtiene rentas por los siguientes conceptos:</p>
      <ClauseList marker="bullet" items={[
        'Acceso a su plataforma de suministro y análisis de información de vehículos.',
        'Pericias de valores venales de vehículos.',
        'Servicios de consultoría.',
      ]} />
      <p className="pp-body">La sociedad liquidó sus rentas por el régimen ficto hasta el ejercicio finalizado el 31 de diciembre de 2025 inclusive. En dicho ejercicio, superó el límite de <b>4.000.000 UI</b>, quedando obligada a tributar sus rentas por el régimen real a partir del ejercicio 2026.</p>
      <div style={{ marginTop: '8px' }}>
        <Card variant="sunken" accentTop title="El encargo">
          MXA ha sido solicitado para brindar apoyo en la revisión de las liquidaciones de impuestos de la empresa, abarcando los aspectos detallados en el capítulo de alcance.
        </Card>
      </div>
    </PageShell>
  );
}

/* 4 — ALCANCE */
function AlcancePage() {
  return (
    <PageShell page="04 / 10" label="Alcance de los servicios">
      <PageHeaderMark />
      <SectionLabel eyebrow="Alcance de los servicios" title="Servicios de consultoría" />
      <div className="pp-stages">
        <Card variant="flat" accentTop eyebrow="Etapa 1" title="Diagnóstico de la situación actual en materia de IRAE">
          Análisis de las últimas tres Declaraciones Juradas y de las distintas fuentes de ingresos, para opinar sobre la correcta clasificación de las rentas y las eventuales contingencias fiscales asociadas.
        </Card>
        <Card variant="flat" accentTop eyebrow="Etapa 2" title="Revisión de alternativas fiscales a futuro">
          Análisis de alternativas de optimización de la carga tributaria: proyecto de inversión (Ley N° 16.906), régimen de software, canalización de rentas e impacto en el IRPF por distribución de utilidades.
        </Card>
      </div>
      <div style={{ marginTop: '6px' }}>
        <Card variant="ink" title="Entregable">
          Una presentación en formato PowerPoint con el análisis de los puntos de las etapas 1 y 2. No incluye la implementación de las alternativas que el Cliente decida adoptar.
        </Card>
      </div>
    </PageShell>
  );
}

/* 5 — HONORARIOS */
function HonorariosPage() {
  return (
    <PageShell page="05 / 10" label="Honorarios profesionales">
      <PageHeaderMark />
      <SectionLabel eyebrow="Honorarios profesionales" />
      <p className="pp-body" style={{ marginTop: '22px' }}>En base al alcance de los servicios descritos, estimamos nuestros honorarios en dólares americanos (USD):</p>
      <DataTable
        columns={[
          { key: 'c', label: 'Concepto', strong: true },
          { key: 'd', label: 'Detalle' },
          { key: 'h', label: 'Honorarios', align: 'right' },
        ]}
        rows={[
          { c: 'Servicios de consultoría', d: 'Diagnóstico y alternativas (etapas 1 y 2)', h: 'USD 2.000' },
          { c: 'Optimización fiscal', d: '10% de la eficiencia fiscal (*)', h: '10%' },
        ]}
      />
      <div className="pp-note">
        <Badge variant="accent">*</Badge>
        <p className="pp-body" style={{ margin: 0 }}>El ahorro económico comprende ideas de optimización capaces de generar beneficios o ahorros fiscales, susceptibles de implementación y sin riesgo de cuestionamiento cierto. Se devenga por un plazo máximo de 5 años desde el inicio del ahorro efectivo, y solo si el Cliente decide implementarlas.</p>
      </div>
    </PageShell>
  );
}

/* 6 — ANEXO */
function AnexoPage() {
  return (
    <PageShell page="07 / 10" label="Anexo — Términos y condiciones">
      <PageHeaderMark />
      <SectionLabel eyebrow="Anexo" title="Términos y condiciones" />
      <p className="pp-body" style={{ marginTop: '22px' }}>El presente anexo precisa los términos, condiciones y responsabilidades aplicables a la prestación de nuestros servicios profesionales, y junto con la propuesta constituye el contrato de servicios entre las partes.</p>
      <ClauseList items={[
        'La responsabilidad de MXA se encontrará acotada al objeto de los servicios descritos en el capítulo de alcance de la presente propuesta.',
        'Los servicios se realizarán siguiendo los criterios técnicos generalmente aplicados. Nuestra labor importa una obligación de medios y no de resultados.',
        'Los servicios se basan en las normas, pronunciamientos y antecedentes vigentes al momento de su conclusión. No nos responsabilizamos por cambios posteriores.',
      ]} />
    </PageShell>
  );
}

Object.assign(window, {
  CoverPage, LetterPage, AntecedentesPage, AlcancePage, HonorariosPage, AnexoPage,
});
