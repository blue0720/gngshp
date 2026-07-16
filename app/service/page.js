// URL: /service （事業内容ページ）
// app/page.js と同じ考え方で、このフォルダ名がそのままパスになる。
import PageHeader from "@/components/PageHeader";
import ServiceDetail from "./ServiceDetail";
import styles from "./page.module.css";

// ------------------------------------------------------------------
// SERVICES: 3つの事業の内容をまとめたデータ。
// 現行サイト（gngs.co.jp/service）に掲載されている文章・技術一覧・実績を
// そのまま新サイトに移設したもの。表示側（下のServiceDetailコンポーネント）
// とデータをここで分けておくことで、「文章だけ直したい」ときはこの配列
// だけ見ればよくなる。
//
// 各項目の意味:
//   title       : 事業名
//   description : 事業の説明文
//   strengths   : 「G&Gクオリティ」として紹介している強み（箇条書き）
//   techStack   : 保有技術。カテゴリ（label）ごとに技術名（items）をまとめたもの
//   achievements: 開発実績。分野（label）ごとの実績内容（detail）
//   apps        : 代表的なリリース済みアプリ名（モバイルアプリ事業のみ）
//   clients     : 取引先実績。業種・案件名（label）ごとの内容（detail）
//
// 事業によって持っている項目が異なる（業務支援クラウドサービス事業には
// 保有技術や開発実績が無い、など）。無い項目はそもそも書かず、下の
// ServiceDetail側で「値があるときだけ表示する」ようにしている。
// ------------------------------------------------------------------
const SERVICES = [
  {
    title: "SI事業",
    description:
      "AWS、Azure、DX等の各種資格保持者・多言語対応可能なエンジニアが在籍。WEBシステム、モバイル、DBインフラ構築・チューニングなど多岐に渡るスキルを活かし、お客様の要望に沿ったサービスを提供します。",
    strengths: [
      "お客様の求めるシステムを具現化",
      "システムの要件定義・設計・開発・運用",
      "システム規模の大小に関わらず対応",
      "上流工程からテスト、その後の運用についても対応可能",
    ],
    techStack: [
      { label: "OS＆クラウド", items: ["Windows", "Mac", "Linux", "Unix", "Azure", "AWS"] },
      { label: "DB", items: ["ORACLE", "MySQL", "MS-SQL SERVER", "PostgreSQL"] },
      {
        label: "フレームワーク",
        items: [
          "Spring Framework",
          "Play Framework",
          "Laravel",
          "Symfony",
          "Django",
          "Flask",
          "Ruby on Rails",
          "jQuery",
          "Angular",
        ],
      },
      {
        label: "言語",
        items: [
          "JAVA",
          "PHP",
          "C",
          "C#",
          "C++",
          "VB",
          "VB.NET",
          "ASP",
          "Perl",
          "COBOL",
          "HTML5",
          "CSS",
          "JavaScript",
        ],
      },
    ],
    achievements: [
      { label: "基幹系", detail: "年金システム、DWH分析システム、勤怠管理システム" },
      { label: "医療系", detail: "電子カルテ、オーダーリング、インシデント管理システム" },
      { label: "金融系", detail: "銀行、証券、生保、信販システム開発、汎用系COBOL開発" },
      {
        label: "その他",
        detail: "Web・スマートフォン向けアプリケーション開発、制御系システム開発、カスタマーエンジニア業務",
      },
    ],
    clients: [
      { label: "保険会社", detail: "社内ファイル管理システム開発・保守（使用言語：C#, VB.NET, Java, Android）" },
      { label: "通信会社", detail: "DB構築・メンテナンス・運用、DBA作業支援" },
      { label: "政府機構", detail: "Webシステム開発・保守、サーバAP保守（使用言語：C, VB, COBOL）" },
      { label: "予約サイト", detail: "予約＆顧客管理Webシステム開発・保守（使用言語：PHP, C, Java）" },
      { label: "通信会社", detail: "ビックデータ分析・管理・運用、データ加工処理（使用言語：ETL, csh, bash, Java）" },
      { label: "政府機関", detail: "データ分析・加工・運用（使用言語：ETL, Java, bash）" },
      { label: "ゲーム会社", detail: "ゲーム企画・開発・保守（使用言語：Unity, Objective-C, Swift, Android）" },
      { label: "鉄道会社", detail: "料金系システム開発・保守（使用言語：Java, TypeScript, Angular）" },
    ],
  },
  {
    title: "モバイルアプリケーション事業",
    description:
      "消費者向けモバイルアプリケーションから社内での利用を目的とした業務向けモバイルアプリケーション開発まで、お客様の事業目的や課題に適したモバイルアプリケーションの開発をiOSとAndroid OS向けに提供します。",
    strengths: [
      "長年蓄積した高い技術力とスピード力",
      "多様な開発経験による優れたモバイルソリューション提供（実績多数100件以上）",
      "企画、開発から保守まで全ての分野に対応可能なリソース保有（モバイルエンジニア豊富）",
    ],
    techStack: [
      { label: "OS", items: ["Android", "iOS", "Mac", "Windows"] },
      { label: "DB", items: ["MySQL", "PostgreSQL", "SQLite", "MariaDB"] },
      { label: "フレームワーク", items: ["Unity"] },
      { label: "言語", items: ["Objective-C", "Swift", "Kotlin", "Python", "Flutter", "C#"] },
    ],
    achievements: [
      {
        label: "基幹系",
        detail:
          "年金システム、DWH分析システム、勤怠管理システム、営業支援ツール管理システム、商品案内カタログ管理システム、EV運用メンテシステム、EV情報管理システム",
      },
      { label: "情報配信系", detail: "論文管理システム、情報配信ポータルシステム" },
      { label: "教育系", detail: "英語教育サービスシステム" },
      { label: "その他", detail: "ゲームアプリ、絵本アプリ、旅行ガイドアプリ、チャットアプリ、動画分析アプリ" },
    ],
    apps: ["Install English", "MINI RACING", "PUMPING HERO", "iMO Navi", "ピノキオ", "ももたろう"],
  },
  {
    title: "業務支援クラウドサービス事業",
    description: "スタートアップ共通の課題を解決するクラウドサービス。",
    clients: [
      {
        label: "勤怠管理アプリ",
        detail:
          "社員の勤怠報告、交通費や休暇の申請などを行うアプリを自社開発しテスト運用中。今後クラウドサービスとして拡大予定。",
      },
      {
        label: "受発注管理アプリ",
        detail:
          "見積書や注文書、請求書の作成、発行など受発注に関する管理を行うアプリを自社開発しテスト運用中。今後クラウドサービスとして拡大予定（電子帳簿保存法＆インボイス制度対応）。",
      },
    ],
  },
];

export default function ServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="SERVICE"
        title="事業内容"
        lead="SI事業・モバイルアプリケーション事業・業務支援クラウドサービス事業の3つを軸に、お客様のビジネスを支えています。"
      />

      <section className={styles.section}>
        {SERVICES.map((service, index) => (
          <ServiceDetail key={service.title} service={service} index={index} />
        ))}
      </section>
    </>
  );
}
