import { appConfig } from "@scalegate-ledger/data";

const queue = [
  {
    id: "SG-0713-042",
    plate: "KLM-5821",
    state: "等待第一次秤重",
    tone: "info",
  },
  { id: "SG-0713-041", plate: "BQA-1936", state: "場內作業", tone: "success" },
  {
    id: "SG-0713-039",
    plate: "RCE-7305",
    state: "需人工確認",
    tone: "warning",
  },
] as const;

const metrics = [
  {
    detail: "其中 17 車次已完成",
    label: "今日進場",
    unit: "車次",
    value: "28",
  },
  { detail: "靜態展示資料", label: "累計淨重", unit: "公噸", value: "186.4" },
  { detail: "最久等待 12 分鐘", label: "待處理例外", unit: "筆", value: "3" },
] as const;

const records = [
  { label: "作業單元", value: "A 區・第 2 期・第 4 層" },
  { label: "今日填埋量", value: "1,240 m³" },
  { label: "覆土紀錄", value: "待日結確認" },
  { label: "人員／機具", value: "8 人・5 台" },
] as const;

const toneClass = {
  info: "bg-info-50 text-info-700",
  success: "bg-success-50 text-success-700",
  warning: "bg-warning-50 text-warning-800",
} as const;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <header className="border-line border-b bg-panel">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
          <div>
            <p className="font-semibold text-brand-700 text-xs tracking-[0.18em]">
              營運工作台
            </p>
            <h1 className="mt-1 font-bold text-2xl tracking-tight">
              {appConfig.name}
            </h1>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="hidden text-muted sm:inline">
              單一場區・展示模式
            </span>
            <span className="rounded-md border border-line bg-surface px-3 py-2 font-semibold text-ink">
              2026/07/13・早班
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-8">
        <section aria-labelledby="overview-heading">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="font-semibold text-brand-700 text-sm">場區概況</p>
              <h2 className="mt-1 font-bold text-2xl" id="overview-heading">
                今日作業摘要
              </h2>
            </div>
            <p className="max-w-xl text-muted text-sm">
              {appConfig.description} 目前畫面僅使用靜態展示資料。
            </p>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {metrics.map((metric) => (
              <article
                className="rounded-lg border border-line bg-panel p-5"
                key={metric.label}
              >
                <p className="font-medium text-muted text-sm">{metric.label}</p>
                <p className="mt-2 font-bold text-3xl tabular-nums">
                  {metric.value}{" "}
                  <span className="font-medium text-base text-muted">
                    {metric.unit}
                  </span>
                </p>
                <p className="mt-3 text-muted text-sm">{metric.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          <section
            aria-labelledby="queue-heading"
            className="rounded-lg border border-line bg-panel"
          >
            <div className="flex items-center justify-between border-line border-b px-5 py-4">
              <div>
                <p className="font-semibold text-brand-700 text-sm">進出場</p>
                <h2 className="mt-1 font-bold text-xl" id="queue-heading">
                  車次佇列
                </h2>
              </div>
              <span className="rounded-md bg-neutral-100 px-3 py-2 font-semibold text-neutral-700 text-sm">
                3 車次待追蹤
              </span>
            </div>
            <div className="divide-y divide-line">
              {queue.map((visit) => (
                <article
                  className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_1fr_auto] sm:items-center"
                  key={visit.id}
                >
                  <div>
                    <p className="font-semibold tabular-nums">{visit.id}</p>
                    <p className="mt-1 text-muted text-sm">作業識別碼</p>
                  </div>
                  <div>
                    <p className="font-bold text-lg tracking-wide">
                      {visit.plate}
                    </p>
                    <p className="mt-1 text-muted text-sm">車牌（展示）</p>
                  </div>
                  <span
                    className={`w-fit rounded-md px-3 py-2 font-semibold text-sm ${toneClass[visit.tone]}`}
                  >
                    {visit.state}
                  </span>
                </article>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="charge-heading"
            className="rounded-lg border border-line bg-ink p-5 text-white"
          >
            <p className="font-semibold text-brand-200 text-sm">秤重與計價</p>
            <h2 className="mt-1 font-bold text-xl" id="charge-heading">
              最近完成紀錄
            </h2>
            <dl className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <dt className="text-neutral-300 text-sm">毛重</dt>
                <dd className="mt-1 font-bold text-2xl tabular-nums">
                  18.62 <span className="text-base">t</span>
                </dd>
              </div>
              <div>
                <dt className="text-neutral-300 text-sm">皮重</dt>
                <dd className="mt-1 font-bold text-2xl tabular-nums">
                  7.84 <span className="text-base">t</span>
                </dd>
              </div>
              <div>
                <dt className="text-neutral-300 text-sm">淨重</dt>
                <dd className="mt-1 font-bold text-2xl tabular-nums">
                  10.78 <span className="text-base">t</span>
                </dd>
              </div>
              <div>
                <dt className="text-neutral-300 text-sm">試算金額</dt>
                <dd className="mt-1 font-bold text-2xl tabular-nums">
                  NT$ 8,624
                </dd>
              </div>
            </dl>
            <p className="mt-6 border-neutral-700 border-t pt-4 text-neutral-300 text-sm">
              僅示意人員覆核後的重量與費率結果，不代表已連接地磅、開立發票或完成付款。
            </p>
          </section>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <section
            aria-labelledby="log-heading"
            className="rounded-lg border border-line bg-panel p-5"
          >
            <p className="font-semibold text-brand-700 text-sm">掩埋作業</p>
            <h2 className="mt-1 font-bold text-xl" id="log-heading">
              每日紀錄摘要
            </h2>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              {records.map((record) => (
                <div className="rounded-md bg-surface p-4" key={record.label}>
                  <dt className="font-medium text-muted text-sm">
                    {record.label}
                  </dt>
                  <dd className="mt-2 font-semibold">{record.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section
            aria-labelledby="exception-heading"
            className="rounded-lg border border-warning-200 bg-warning-50 p-5"
          >
            <p className="font-semibold text-sm text-warning-800">需要處理</p>
            <h2
              className="mt-1 font-bold text-warning-950 text-xl"
              id="exception-heading"
            >
              例外與人工覆核
            </h2>
            <ul className="mt-5 space-y-3">
              <li className="rounded-md border border-warning-200 bg-panel p-4">
                <p className="font-semibold">SG-0713-039・車次資料不完整</p>
                <p className="mt-1 text-muted text-sm">
                  保留原始紀錄，等待具權限人員補充原因與處置。
                </p>
              </li>
              <li className="rounded-md border border-warning-200 bg-panel p-4">
                <p className="font-semibold">每日覆土紀錄待確認</p>
                <p className="mt-1 text-muted text-sm">
                  日結前須完成測量來源與覆核狀態。
                </p>
              </li>
            </ul>
          </section>
        </div>

        <footer className="mt-6 border-line border-t pt-5 text-muted text-sm">
          本頁為第一階段操作介面方向展示；不控制柵欄、號誌、地磅或任何現場安全設備。
        </footer>
      </div>
    </main>
  );
}
