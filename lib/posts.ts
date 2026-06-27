// ── Journal 資料模型 ───────────────────────────────
// 日誌(部落格)文章的本地資料來源。每篇文章一筆,之後可改為從 MDX/JSON 讀取。
// 設計原則(沿用 Template):所有主題共用同一套「閱讀骨架」,
// 只有特定主題才在內文流裡「加掛」專屬模組(技術→程式碼、日記→照片、電影→海報星等)。

export type CategoryKey = "diary" | "web" | "ai" | "unbox" | "movie";

/** 分類設定:名稱與代表色(色票沿用 Template) */
export const CATEGORIES: Record<CategoryKey, { label: string; color: string }> = {
  diary: { label: "日記", color: "#9c764a" },
  web: { label: "技術分享", color: "#3e574b" },
  ai: { label: "AI", color: "#45667a" },
  unbox: { label: "開箱", color: "#b06a4a" },
  movie: { label: "電影", color: "#6e6276" },
};

/** 分類在篩選列的顯示順序 */
export const CATEGORY_ORDER: CategoryKey[] = ["diary", "web", "ai", "unbox", "movie"];

// ── 內文區塊 ───────────────────────────────────────
// 內文是一個由區塊組成的陣列,依序渲染。heading 會被收進目錄(TOC)。

export type Block =
  | { type: "heading"; id: string; text: string }
  | { type: "para"; text: string }
  | { type: "code"; lang: string; code: string }
  | { type: "figure"; label: string; caption: string }
  | { type: "quote"; text: string; cite?: string };

/** 電影主題專屬:海報＋星等卡的資料 */
export interface MovieMeta {
  /** 0–5,可有半顆 */
  rating: number;
  rows: { key: string; val: string }[];
  posterLabel?: string;
}

export interface Post {
  slug: string;
  cat: CategoryKey;
  title: string;
  date: string; // ISO yyyy-mm-dd
  read: number; // 閱讀分鐘數
  excerpt: string; // 列表用一句話簡介
  lead: string; // 詳情頁標題下方的導言
  /** 電影主題才有:標題下方加掛的海報星等卡 */
  movie?: MovieMeta;
  body: Block[];
}

// ── 工具 ───────────────────────────────────────────

export function categoryOf(p: Post) {
  return CATEGORIES[p.cat];
}

/** 2026-01-18 → 2026.01.18 */
export function formatDate(iso: string): string {
  return iso.replace(/-/g, ".");
}

/** 2026-01-18 → 01.18 */
export function shortDate(iso: string): string {
  return iso.slice(5).replace("-", ".");
}

/** 2026-01 → 2026 年 1 月 */
export function monthLabel(iso: string): string {
  const [y, m] = iso.split("-");
  return `${y} 年 ${parseInt(m, 10)} 月`;
}

export function readLabel(p: Post): string {
  return `${p.read} 分鐘`;
}

/** 目錄:文章內文裡的所有標題 */
export function tocOf(p: Post): { id: string; text: string }[] {
  return p.body
    .filter((b): b is Extract<Block, { type: "heading" }> => b.type === "heading")
    .map((h) => ({ id: h.id, text: h.text }));
}

/** 依日期新到舊排序 */
export function sortedPosts(list: Post[] = POSTS): Post[] {
  return [...list].sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** 上一篇(較新)/ 下一篇(較舊),以新到舊的順序為基準 */
export function neighbors(slug: string): { prev?: Post; next?: Post } {
  const list = sortedPosts();
  const i = list.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return { prev: list[i - 1], next: list[i + 1] };
}

// ── 資料 ───────────────────────────────────────────

export const POSTS: Post[] = [
  {
    slug: "rewrite-blog-with-nextjs-16",
    cat: "web",
    title: "用 Next.js 16 重寫部落格",
    date: "2026-01-18",
    read: 8,
    excerpt: "從 App Router 到 Tailwind 4,記錄這次重寫的取捨與踩過的坑。",
    lead: "從 App Router 到 Tailwind 4,這次重寫的目標只有一個:讓寫作回到中心,程式碼退到背景。",
    body: [
      { type: "heading", id: "why", text: "為什麼又要重寫" },
      {
        type: "para",
        text: "舊版是一路拼湊起來的:這裡一個套件、那裡一段 hack,久了連自己都不想打開資料夾。與其修補,不如趁它還小的時候,重新立一次地基。",
      },
      {
        type: "para",
        text: "我把規則定得很簡單 —— 每加一樣東西,都要先問它有沒有讓寫作這件事更輕。答案是否定的,就刪掉。",
      },
      { type: "heading", id: "approuter", text: "App Router 的取捨" },
      {
        type: "para",
        text: "全站改成 App Router 之後,最大的轉變是「資料在伺服器拿、頁面在伺服器組」。在 Next 16,連 params 都成了 Promise,得先 await 才拿得到:",
      },
      {
        type: "code",
        lang: "app/journal/[slug]/page.tsx",
        code: `export default async function Post({ params }) {
  const { slug } = await params;   // Next 16:params 是 Promise
  const post = await getPost(slug);
  return <Article post={post} />;
}`,
      },
      {
        type: "para",
        text: "代價是心智模型要重練,但好處是首屏不再閃一下空白 —— 內容在送到瀏覽器前就已經長好了。",
      },
      { type: "heading", id: "actions", text: "用 Server Actions 收斂表單" },
      {
        type: "para",
        text: "留言、訂閱、聯絡表單,以前各自寫一條 API route。現在一個函式就收掉,前端連 fetch 都不用寫:",
      },
      {
        type: "code",
        lang: "app/actions.ts",
        code: `"use server";

export async function addComment(form: FormData) {
  const body = String(form.get("body") ?? "").trim();
  if (!body) return { ok: false };
  await db.comment.create({ data: { body } });
  revalidatePath("/journal");
  return { ok: true };
}`,
      },
      {
        type: "para",
        text: "表單直接把這個函式當 action 丟進去就好。少寫的那一層,正是以前最容易出錯的那一層。",
      },
      { type: "heading", id: "pitfalls", text: "踩到的三個坑" },
      {
        type: "para",
        text: "一、快取比想像中積極,revalidate 要記得補。二、字體在 Server Component 與字級之間要對齊,不然中文行高會跳。三、深色模式首載會閃一下白 —— 解法是把主題判斷塞進一段最早執行的腳本。",
      },
      {
        type: "quote",
        text: "工具越新,文件越像在讀別人的夢。",
        cite: "— 重寫到第三天的我",
      },
    ],
  },
  {
    slug: "claude-wrote-journey-data-model",
    cat: "ai",
    title: "我讓 Claude 寫了一整層旅程資料模型",
    date: "2026-01-05",
    read: 6,
    excerpt: "把型別與假資料交給 AI,我只負責挑剔與收尾。",
    lead: "把型別與假資料交給 AI,我只負責挑剔與收尾 —— 這篇記錄這套分工真正省下的,與沒省下的。",
    body: [
      { type: "heading", id: "setup", text: "我給它的脈絡" },
      {
        type: "para",
        text: "我沒有讓它「憑空發揮」。我先把現有頁面的視覺、我想要的欄位,還有幾筆真實行程貼給它,讓它從具體往抽象長,而不是反過來。",
      },
      {
        type: "code",
        lang: "lib/journeys.ts",
        code: `export interface JourneyDay {
  day: number;
  title: string;
  blocks?: TimeBlock[];   // 早上 / 下午 / 晚上
  points: GeoPoint[];     // 地圖路線
}`,
      },
      { type: "heading", id: "good", text: "它做得好的部分" },
      {
        type: "para",
        text: "型別的分層、命名的一致性,還有那種「先想清楚資料形狀再寫畫面」的順序,它比趕時間的我有耐心得多。假資料也填得像模像樣,連停留時間都湊得合理。",
      },
      { type: "heading", id: "mine", text: "留給我的部分" },
      {
        type: "para",
        text: "取捨還是我的事:哪些欄位其實用不到、哪個抽象過度了、哪裡該為了未來多留一個位置。AI 給了一個很好的初稿,但「夠不夠剛好」這件事,它沒有我的偏執。",
      },
      {
        type: "quote",
        text: "它負責把一百種寫法收斂成一種;我負責判斷那一種是不是對的。",
      },
    ],
  },
  {
    slug: "hhkb-studio-two-months",
    cat: "unbox",
    title: "開箱 · HHKB Studio 兩個月手感筆記",
    date: "2025-12-20",
    read: 5,
    excerpt: "靜電容、指向桿,還有那顆讓人安心的重量。",
    lead: "用了兩個月,過了開箱的興奮期,剛好可以誠實地說說它好在哪、不好在哪。",
    body: [
      { type: "heading", id: "first", text: "第一週:陌生" },
      {
        type: "para",
        text: "從一般機械軸換過來,前幾天打字像在學另一種樂器。鍵程、段落感、回彈都不一樣,錯字率明顯上升,但手指意外地不累。",
      },
      {
        type: "figure",
        label: "桌面 · DESK",
        caption: "之後補一張它待在桌上的照片",
      },
      { type: "heading", id: "pointer", text: "那根指向桿" },
      {
        type: "para",
        text: "中間的指向桿是我最猶豫、後來最回不去的設計。手不用離開鍵盤就能移游標,寫程式時的中斷感少了一截。需要練,但值得。",
      },
      { type: "heading", id: "verdict", text: "兩個月後" },
      {
        type: "para",
        text: "重量讓它穩穩賴在桌上,聲音收斂而紮實。它不適合每個人,但如果你大部分時間都在打字與寫程式,它會慢慢長進你的習慣裡。",
      },
    ],
  },
  {
    slug: "perfect-days",
    cat: "movie",
    title: "《Perfect Days》:把每天過成一首俳句",
    date: "2025-12-08",
    read: 4,
    excerpt: "平山先生的廁所、底片相機,與重複裡的微小變化。",
    lead: "一部幾乎沒有劇情的電影,卻讓我看完之後,願意把隔天的早晨過得慢一點。",
    movie: {
      rating: 4.5,
      posterLabel: "海報 · POSTER",
      rows: [
        { key: "導演", val: "Wim Wenders 文・溫德斯" },
        { key: "主演", val: "役所廣司" },
        { key: "資訊", val: "2023 · 日本 · 124 分鐘" },
      ],
    },
    body: [
      { type: "heading", id: "routine", text: "重複是骨架" },
      {
        type: "para",
        text: "平山先生每天做一樣的事:清掃廁所、買咖啡、拍一張樹影、讀一本舊書。電影把這套重複拍得不無聊,因為它讓你注意到重複裡那些不重複的縫隙。",
      },
      {
        type: "quote",
        text: "今度は今度,今は今。(下次是下次,現在是現在。)",
        cite: "— 平山",
      },
      { type: "heading", id: "light", text: "木漏れ日" },
      {
        type: "para",
        text: "片尾那段長鏡頭,把役所廣司的臉留給觀眾很久。哭與笑同時在臉上,像陽光穿過樹葉時的搖晃 —— 日文有個專門的詞,木漏れ日。",
      },
      { type: "heading", id: "after", text: "走出戲院之後" },
      {
        type: "para",
        text: "我沒有變成一個更早起的人,但有幾天我真的把咖啡煮慢了一點。一部電影能做到這樣,已經很多了。",
      },
    ],
  },
  {
    slug: "slow-mornings",
    cat: "diary",
    title: "關於慢下來的早晨",
    date: "2025-11-30",
    read: 3,
    excerpt: "把咖啡煮慢一點,把句子寫短一點。",
    lead: "最近在練習一件很不像工程師的事:讓早晨沒有效率。",
    body: [
      { type: "heading", id: "coffee", text: "先不開電腦" },
      {
        type: "para",
        text: "以前一睜眼就是訊息、信箱、待辦。現在我把第一個小時留給手沖:燒水、秤豆、聞那股慢慢散開的香氣。事情並沒有變少,但我變得比較能挑。",
      },
      {
        type: "figure",
        label: "晨光 · 窗邊",
        caption: "清晨窗邊,水正在燒",
      },
      { type: "heading", id: "short", text: "把句子寫短" },
      {
        type: "para",
        text: "慢下來之後,連寫字都跟著變了。我開始刪掉那些為了顯得認真而長的句子。短一點,反而誠實一點。",
      },
    ],
  },
  {
    slug: "server-actions-over-api-routes",
    cat: "web",
    title: "用 Server Actions 取代一半的 API route",
    date: "2025-11-12",
    read: 7,
    excerpt: "表單送出不再手寫 fetch,談談心智負擔的減法。",
    lead: "這篇不談 Server Actions 多新,只談它幫我刪掉了哪些一直在出錯的程式碼。",
    body: [
      { type: "heading", id: "before", text: "以前的樣子" },
      {
        type: "para",
        text: "一個表單,前端寫 fetch、處理 loading、處理錯誤、處理回應格式;後端再寫一條 route 做幾乎一樣的驗證。同一件事,寫了兩遍,還容易對不齊。",
      },
      { type: "heading", id: "after", text: "現在的樣子" },
      {
        type: "para",
        text: "把邏輯收進一個標了 \"use server\" 的函式,表單直接當 action 用。前端的 fetch、序列化、錯誤分支大多消失了。",
      },
      {
        type: "code",
        lang: "app/contact/page.tsx",
        code: `import { sendMessage } from "./actions";

export default function Contact() {
  return (
    <form action={sendMessage}>
      <input name="email" type="email" required />
      <textarea name="body" required />
      <button>送出</button>
    </form>
  );
}`,
      },
      { type: "heading", id: "tradeoff", text: "代價在哪" },
      {
        type: "para",
        text: "不是萬靈丹。需要被外部呼叫的端點,還是得是 route;漸進增強與錯誤回饋也要自己想清楚。但對「站內自己用的表單」,這層減法很值得。",
      },
    ],
  },
  {
    slug: "rag-blog-search-notes",
    cat: "ai",
    title: "把 RAG 接進部落格搜尋的踩雷筆記",
    date: "2025-10-28",
    read: 9,
    excerpt: "向量資料庫、chunk 切法,與一個月後我才懂的事。",
    lead: "幫部落格做語意搜尋聽起來很潮,實際做下去才發現,難的從來不是模型。",
    body: [
      { type: "heading", id: "chunk", text: "chunk 怎麼切才對" },
      {
        type: "para",
        text: "一開始我按固定字數切,結果一段話常被攔腰斬斷,檢索回來的片段語意不完整。後來改成按標題與段落切,並讓相鄰 chunk 有一點重疊,品質立刻好很多。",
      },
      {
        type: "code",
        lang: "lib/search/index.ts",
        code: `const chunks = splitByHeading(post.body, {
  maxTokens: 320,
  overlap: 48,   // 相鄰片段重疊,保住上下文
});
await vector.upsert(chunks.map(embed));`,
      },
      { type: "heading", id: "ranking", text: "排序的陷阱" },
      {
        type: "para",
        text: "純向量相似度會把「字面像但其實無關」的內容排前面。加上關鍵字過濾與一點時間權重後,搜尋結果才開始像「我會想點開的那幾篇」。",
      },
      { type: "heading", id: "later", text: "一個月後才懂的事" },
      {
        type: "para",
        text: "對一個只有幾十篇文章的部落格,RAG 其實是殺雞用牛刀。但這趟踩雷讓我真的理解了每個環節,光這點就回本了。",
      },
      {
        type: "quote",
        text: "做出來才知道哪裡不需要,這句話對工程一直成立。",
      },
    ],
  },
  {
    slug: "oppenheimer-second-watch",
    cat: "movie",
    title: "《奧本海默》二刷:底片裡的沉默",
    date: "2025-10-15",
    read: 5,
    excerpt: "在 IMAX 底片版本裡,聲音消失的那幾秒。",
    lead: "第一次看被資訊量壓著走,第二次才聽見那些被刻意抽掉聲音的時刻。",
    movie: {
      rating: 4.5,
      posterLabel: "海報 · POSTER",
      rows: [
        { key: "導演", val: "Christopher Nolan 諾蘭" },
        { key: "主演", val: "Cillian Murphy" },
        { key: "資訊", val: "2023 · 美國 · 180 分鐘" },
      ],
    },
    body: [
      { type: "heading", id: "silence", text: "那幾秒的無聲" },
      {
        type: "para",
        text: "Trinity 試爆那場,諾蘭讓畫面先到、聲音後到。中間那段真空般的寂靜,比任何爆炸都更接近恐懼本身。二刷時我整個人是屏著氣的。",
      },
      { type: "heading", id: "film", text: "為什麼非底片不可" },
      {
        type: "para",
        text: "IMAX 底片的顆粒感,讓黑白與彩色之間的切換有了重量。它不是復古的姿態,而是把「主觀」與「客觀」用材質本身區分開來。",
      },
      {
        type: "quote",
        text: "Now I am become Death, the destroyer of worlds.",
        cite: "— 引自《薄伽梵歌》",
      },
      { type: "heading", id: "second", text: "二刷的意義" },
      {
        type: "para",
        text: "第一次看故事,第二次看結構。當你知道結局,那些對話裡的伏筆會一句句亮起來 —— 這部片是為二刷而生的。",
      },
    ],
  },
  {
    slug: "fountain-pen-and-journaling",
    cat: "unbox",
    title: "開箱 · 一支鋼筆與我寫日記的理由",
    date: "2025-09-22",
    read: 4,
    excerpt: "Lamy 2000、深褐墨水,與紙的摩擦感。",
    lead: "在什麼都能打字的年代,我反而又開始用鋼筆寫日記。這篇說說為什麼。",
    body: [
      { type: "heading", id: "pen", text: "Lamy 2000" },
      {
        type: "para",
        text: "霧面的 Makrolon 筆身,握久了有種被磨亮的溫度。筆尖是包覆式的,藏起金亮,只留下書寫時那道剛剛好的回饋。",
      },
      {
        type: "figure",
        label: "筆與本 · PEN",
        caption: "深褐墨水,在米色紙上",
      },
      { type: "heading", id: "friction", text: "摩擦感這件事" },
      {
        type: "para",
        text: "鍵盤太快了,快到思緒還沒成形,字就已經出去。鋼筆有阻力,而那點阻力剛好給了我一秒鐘,去想下一個字到底是不是這個字。",
      },
      { type: "heading", id: "why", text: "寫給沒有人看的人" },
      {
        type: "para",
        text: "日記不會發出去,所以可以誠實。用鋼筆寫,還多了一層儀式 —— 它讓我願意坐下來,好好對自己說話。",
      },
    ],
  },
  {
    slug: "typhoon-day-code-and-coffee",
    cat: "diary",
    title: "颱風天的程式碼與咖啡",
    date: "2025-09-05",
    read: 2,
    excerpt: "停班不停機,雨聲是最好的白噪音。",
    lead: "外面風雨很大,屋裡只有鍵盤聲與滴漏聲。難得安靜的一天。",
    body: [
      { type: "heading", id: "rain", text: "雨聲當白噪音" },
      {
        type: "para",
        text: "颱風假沒有會議、沒有通知,整座城市像被按了靜音。我泡了一壺咖啡,把一個拖了很久的重構,終於從頭到尾做完。",
      },
      { type: "heading", id: "quiet", text: "被迫的留白" },
      {
        type: "para",
        text: "風雨把行程全部取消,反而換來一段完整的時間。原來我需要的不是更多自律,而是偶爾被世界強迫停下來。",
      },
      {
        type: "quote",
        text: "最好的專注,有時是天氣給的。",
      },
    ],
  },
];
