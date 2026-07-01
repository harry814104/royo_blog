import type { Journey } from "../journeys";

// 橫濱 × 東京 3天2夜快閃 LIVE 行程 — 兩晚 K アリーナ横浜演唱會,穿插御朱印、沉浸體驗與古著
export const yokohamaTokyo: Journey = {
  slug: "yokohama-tokyo-2026",
  name: "橫濱 × 東京 3天2夜",
  place: "日本 · 橫濱／東京",
  scope: "overseas",
  startDate: "2026-09-08",
  endDate: "2026-09-10",
  tone: "deep",
  excerpt: "兩晚 K アリーナ横浜的 LIVE 鎖住傍晚,白天串起御朱印、沉浸體驗與古著。",
  tags: ["橫濱", "東京", "演唱會", "御朱印", "古著", "美食"],
  highlights: [
    { label: "日期", value: "09.08 – 09.10" },
    { label: "人數", value: "2 位成人" },
    { label: "風格", value: "文化 · 沉浸 · 古著 · 美食" },
    { label: "亮點", value: "K アリーナ横浜 ×2 場" },
  ],
  days: [
    {
      day: 1,
      date: "2026.09.08 · 二",
      title: "上野御朱印 × 秋葉原 × 清澄白河 × LIVE ①",
      summary:
        "凌晨降落羽田,先到橫濱馬車道飯店寄行李、吃早餐;白天動線集中東京東邊,串上野御朱印巡禮、秋葉原電器街與清澄白河咖啡,傍晚回橫濱進 K アリーナ看第一場演唱會。",
      lodging: "Hotel Route Inn 橫濱馬車道",
      route: {
        stops: ["羽田空港", "橫濱馬車道", "上野公園", "秋葉原", "清澄白河", "K アリーナ横浜"],
        mapUrl:
          "https://www.google.com/maps/dir/羽田空港/馬車道駅/上野公園/秋葉原駅/清澄白河駅/Kアリーナ横浜/",
      },
      points: [
        { name: "羽田空港", lat: 35.5494, lng: 139.7798, kind: "transit" },
        { name: "橫濱馬車道", lat: 35.4487, lng: 139.6375, kind: "stay" },
        { name: "上野公園", lat: 35.7148, lng: 139.7745, kind: "spot" },
        { name: "秋葉原", lat: 35.6984, lng: 139.7731, kind: "spot" },
        { name: "清澄白河", lat: 35.6817, lng: 139.7998, kind: "spot" },
        { name: "K アリーナ横浜", lat: 35.4645, lng: 139.6265, kind: "spot" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Arrival & Ueno",
          items: [
            {
              type: "spot",
              spot: {
                no: "01",
                name: "抵達羽田 → 馬車道飯店寄行李 · 早餐",
                time: "04:30",
                desc: "出關後到橫濱寄放行李(Check-in 15:00,可先寄物),吃個早餐補精神,可順道問飯店能否付費早 check-in 小睡。今天動線集中東京東邊,盡量輕裝。",
                meta: ["🧳 先寄物,15:00 才 check-in", "🎒 盡量輕裝"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=Hotel+Route+Inn+横浜馬車道",
              },
            },
            {
              type: "transport",
              note: {
                mode: "京急線 + 港未來線",
                text: "「羽田 → 橫濱」京急線約 30 分 ¥400,再轉港未來線至馬車道約 8 分 ¥200。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "02",
                name: "上野「みほとけ巡り」御朱印巡禮",
                time: "10:00",
                desc: "沿上野公園串寬永寺諸堂集 5 種插圖御朱印:清水觀音堂(月之松攝影點)→ 不忍池辯天堂 → 上野東照宮(金色社殿)→ 開山堂(兩大師)→ 寬永寺根本中堂(德川切繪御朱印)。集滿 5 種、先着 300 名贈特製御朱印帳。",
                meta: ["⛩ 5 種插圖御朱印", "🎁 集滿贈御朱印帳", "💴 每種約 ¥500"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=上野+清水観音堂",
              },
            },
            {
              type: "transport",
              note: {
                mode: "港未來線 + JR",
                text: "「馬車道 → 上野」港未來線轉 JR,約 50 分 / 約 ¥600。",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Akihabara & Kiyosumi",
          items: [
            {
              type: "spot",
              spot: {
                no: "03",
                name: "秋葉原 電器街 · 動漫朝聖",
                time: "13:30",
                desc: "從上野搭 JR 一站就到。重點逛 amiami 秋葉原フィギュアタワー(8 層公仔)、ラジオ会館、Yodobashi Akiba(護照免稅),與扭蛋殿堂、GiGO 夾娃娃。今天行程滿,控制在 1.5 小時。",
                meta: ["🕹 動漫/公仔/扭蛋", "⏱ 建議控制 1.5 小時", "🛂 免稅記得帶護照"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=amiami+秋葉原フィギュアタワー",
              },
            },
            {
              type: "transport",
              note: {
                mode: "JR",
                text: "「上野 → 秋葉原」JR 1 站,約 4 分 / ¥150。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "04",
                name: "清澄白河 · 咖啡與庭園",
                time: "15:30",
                desc: "東京文青咖啡聚落,當忙碌一天的喘息。先逛清澄庭園(迴游式日本庭園、飛石與大池超好拍,¥150,17:00 閉園、末入 16:30),再到 Blue Bottle 清澄白河旗艦店喝杯手沖。",
                meta: ["🍵 清澄庭園 ¥150", "⏰ 17:00 閉園(末入 16:30)", "☕ Blue Bottle 日本 1 號店"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=清澄庭園",
              },
            },
            {
              type: "transport",
              note: {
                mode: "地鐵",
                text: "「秋葉原 → 清澄白河」地鐵約 20 分(建議查乗換案内)。",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · LIVE ①",
          items: [
            {
              type: "spot",
              spot: {
                no: "05",
                name: "🎤 LIVE ① @ K アリーナ横浜",
                time: "17:00 回程 / 19:00 開演",
                desc: "約 17:00 從清澄白河回橫濱(約 55 分),建議 18:00 前入場。場內有美食 lounge 與大量置物櫃,全館電子支付。地址:神奈川県横浜市西区みなとみらい 6-2-14。",
                meta: ["🎤 開演 19:00", "🏟 美食 lounge + 置物櫃", "💳 全館電子支付"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=Kアリーナ横浜",
              },
            },
            {
              type: "transport",
              note: {
                mode: "電車",
                text: "「清澄白河 → 橫濱 → 新高島」約 55 分 / 約 ¥700。",
              },
            },
          ],
        },
      ],
      meals: [
        {
          title: "Meals · 餐飲推薦",
          restaurants: [
            {
              name: "[午餐] とんかつ山家(上野)",
              desc: "上野排隊炸豬排老店,外酥內嫩、份量大,附滿滿蜆仔味噌湯。樸實在地、價格佛心,最適合小資族。",
              prices: ["¥1,000–1,500／人", "★ 4.3"],
            },
            {
              name: "[咖啡] Blue Bottle Coffee 清澄白河旗艦店",
              desc: "藍瓶日本首店,倉庫改建、挑高採光,手沖與肉桂鬆餅都很可。觀光客多但空間大,坐下喘口氣剛剛好。",
              prices: ["¥600–1,200／人", "★ 4.1"],
            },
            {
              name: "[晚餐] AFURI 阿夫利(Landmark Tower)",
              desc: "清爽柚子鹽／醬油拉麵,回程順路、營業到 23:00,散場後不怕沒得吃。趕的話會場內餐飲或便利商店也行。",
              prices: ["¥1,200／人", "⏰ 開到 23:00", "★ 4.5"],
            },
          ],
        },
      ],
    },
    {
      day: 2,
      date: "2026.09.09 · 三",
      title: "Wonderia × 川崎大師 × 高円寺 × LIVE ②",
      summary:
        "從飯店旁関内的 Wonderia 沉浸式體驗開場,南下川崎大師參拜、仲見世午餐,再往西北高円寺挖古著、拜気象神社,傍晚回橫濱進場看第二場演唱會。兩天都偏滿,想喘口氣可再砍一點。",
      lodging: "Hotel Route Inn 橫濱馬車道",
      route: {
        stops: ["Wonderia 橫濱(関内)", "川崎大師", "高円寺", "K アリーナ横浜"],
        mapUrl:
          "https://www.google.com/maps/dir/BASEGATE横浜関内/川崎大師/高円寺駅/Kアリーナ横浜/",
      },
      points: [
        { name: "Wonderia 橫濱(関内)", lat: 35.4438, lng: 139.6355, kind: "spot" },
        { name: "川崎大師", lat: 35.5347, lng: 139.7307, kind: "spot" },
        { name: "高円寺", lat: 35.7015, lng: 139.6497, kind: "spot" },
        { name: "K アリーナ横浜", lat: 35.4645, lng: 139.6265, kind: "spot" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Wonderia & Kawasaki",
          items: [
            {
              type: "spot",
              spot: {
                no: "01",
                name: "Wonderia 橫濱(沉浸式體驗館)",
                time: "10:00",
                desc: "就在飯店旁的関内,DeNA 打造的沉浸式數位體驗館:高原・深海・原生林・洞窟・湖與天空・都市 6 大影像主題區,配專屬 App 掃描生物、邊玩邊收集,約 60–90 分。採日時指定制、線上預購,建議訂 10:00 第一場;館內僅電子支付、有免費置物櫃。週一～四只開到 19:00,只能排上午。",
                meta: ["🎫 大人 ¥2,900 起(日時指定)", "📱 專屬 App 掃描收集", "⏰ 週一～四開到 19:00"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=BASEGATE横浜関内",
              },
            },
            {
              type: "transport",
              note: {
                mode: "京急線 + 大師線",
                text: "「関内 → 京急川崎 → 大師線 → 川崎大師」約 35 分 / 約 ¥400。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "02",
                name: "川崎大師(平間寺)· 仲見世午餐",
                time: "11:50",
                desc: "1128 年厄除大寺,八角五重塔與大本堂氣勢十足、有御朱印。仲見世通邊走邊吃:招牌久壽餅、現切「とんとこ飴」(職人節奏超療癒)、達摩,約 1.5 小時。",
                meta: ["🏯 八角五重塔", "⛩ 有御朱印", "🍬 とんとこ飴 · 久壽餅"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=川崎大師+平間寺",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Koenji Vintage",
          items: [
            {
              type: "transport",
              note: {
                mode: "電車",
                text: "「川崎 → 高円寺」經品川／新宿轉乘,約 60 分 / 約 ¥560。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "03",
                name: "高円寺 · 古著與次文化",
                time: "14:00",
                desc: "東京古著聖地,沿パル商店街・純情商店街・ルック通り一路挖寶:Trip Vintage(★4.9)、SLAT 等多家二手衣店(多 13:00 後開),復古咖啡、唱片行、高架下居酒屋。順拜気象神社(日本唯一氣象神社,彩色照照坊主超好拍,每月限定橡皮章御朱印,授與所到 16:00)。",
                meta: ["👕 古著聖地 Trip Vintage", "⛩ 気象神社限定橡皮章御朱印", "🕓 授與所到 16:00"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=高円寺+古着",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · LIVE ②",
          items: [
            {
              type: "spot",
              spot: {
                no: "04",
                name: "🎤 LIVE ② @ K アリーナ横浜",
                time: "16:45 回程 / 19:00 開演",
                desc: "約 16:45 從高円寺出發回橫濱(約 60–70 分),建議 18:00 前入場。趕場可在高円寺先吃、或會場／散場後再用餐。",
                meta: ["🎤 開演 19:00", "🚆 高円寺回場約 60–70 分"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=Kアリーナ横浜",
              },
            },
            {
              type: "transport",
              note: {
                mode: "電車",
                text: "「高円寺 → 新宿 → 橫濱 → 新高島」約 60–70 分 / 約 ¥750。",
              },
            },
          ],
        },
      ],
      meals: [
        {
          title: "Meals · 午晚餐推薦",
          restaurants: [
            {
              name: "[午餐] Lazona／La Cittadella(川崎站前)",
              desc: "轉乘前順道午餐。Lazona 川崎與義式風情的 La Cittadella 餐廳、美食街選擇多、價位親民,快速解決再往高円寺。",
              prices: ["¥1,000–1,500／人", "★ 3.9–4.2"],
            },
            {
              name: "[晚餐] 高円寺 商店街小吃",
              desc: "高円寺巷弄藏滿便宜好料——拉麵、串燒、古早味喫茶。逛累了找一家高架下居酒屋或喫茶店歇腳,當早一點的晚餐也行。",
              prices: ["¥800–1,500／人"],
            },
          ],
        },
      ],
    },
    {
      day: 3,
      date: "2026.09.10 · 四 · 回程",
      title: "深夜賦歸(凌晨班機)",
      summary:
        "第二場散場後回飯店打包,兩晚住宿涵蓋 9/8、9/9,9/10 凌晨退房即可。05:25 的班機遇上深夜無電車:凌晨叫計程車直奔羽田(舒適),或 9/9 散場後搭京急末班車到羽田過夜(省錢)。",
      route: {
        stops: ["橫濱馬車道", "羽田空港"],
        mapUrl:
          "https://www.google.com/maps/dir/馬車道駅/羽田空港/",
      },
      points: [
        { name: "橫濱馬車道", lat: 35.4487, lng: 139.6375, kind: "stay" },
        { name: "羽田空港", lat: 35.5494, lng: 139.7798, kind: "transit" },
      ],
      blocks: [
        {
          period: "morning",
          label: "凌晨 · Departure",
          items: [
            {
              type: "spot",
              spot: {
                no: "01",
                name: "散場 → 回飯店整理行李",
                time: "9/9 ~21:30",
                desc: "第二場散場後回飯店打包、稍作休息。兩晚住宿涵蓋 9/8、9/9,9/10 凌晨退房即可(Route Inn 櫃台 24 小時)。",
                meta: ["🧳 打包退房", "🛎 櫃台 24 小時"],
              },
            },
            {
              type: "spot",
              spot: {
                no: "02",
                name: "前往羽田機場(IT217 05:25 起飛)",
                time: "03:00",
                desc: "05:25 的班機 = 深夜無電車。A 舒適案:凌晨 03:00 計程車直奔羽田,約 30–40 分、¥7,000–8,000／車(2 人分攤),建議前一晚先請飯店或用 App 預約。B 省錢案:9/9 散場後搭京急末班車到羽田過夜,約 ¥600／人,於候機室過夜。",
                meta: ["🚕 A 案 計程車 ¥7,000–8,000／車", "🚆 B 案 末班車 ¥600／人過夜", "✈️ 05:25 起飛"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=羽田空港",
              },
            },
          ],
        },
      ],
    },
  ],
  hotels: [
    {
      area: "橫濱 · Day 1–2 兩晚",
      name: "Hotel Route Inn 橫濱馬車道",
      meta: ["📍 神奈川県横浜市中区弁天通4-53-1", "🚇 港未來線馬車道站", "🛎 櫃台 24 小時"],
      desc: "位於関内／馬車道一帶,離 Wonderia 與 K アリーナ横浜都近,櫃台 24 小時方便凌晨退房。動線集中橫濱南邊,寄物、進場都順。",
    },
  ],
  budget: [
    { date: "09/08 Day 1", transport: "¥4,800", tickets: "¥3,300", food: "¥7,900", lodging: "—", total: "¥16,000" },
    { date: "09/09 Day 2", transport: "¥4,800", tickets: "¥7,800", food: "¥6,200", lodging: "—", total: "¥18,800" },
    { date: "09/10 Day 3", transport: "¥7,500", tickets: "—", food: "¥1,500", lodging: "—", total: "¥9,000" },
    { date: "合計(2人)", transport: "¥17,100", tickets: "¥11,100", food: "¥15,600", lodging: "—", total: "¥43,800", isTotal: true },
  ],
  budgetNote:
    "以上為「現場變動花費」估算(2 人合計),不含已訂的機票、住宿、演唱會門票,也不含秋葉原電器與高円寺古著購物(另計)。tickets 欄含御朱印、清澄庭園、Wonderia 入館。上表為舒適版(Day 3 搭計程車)≈ ¥43,800 / 2 人 ≈ NT$9,200 / 人;若 Day 3 改搭京急末班車過夜,可省約 ¥6,300,經濟版約 ¥37,500 / 2 人 ≈ NT$7,880 / 人。金額為概估,依當日狀況／匯率而定(¥1 ≈ NT$0.21)。",
  tips: [
    {
      title: "Wonderia:先線上訂時段",
      body: "採日時指定制,建議線上(官網／KKday)先訂 9/9 上午 10:00 第一場,到場掃 QR 免排隊。館內僅電子支付、有免費置物櫃;週一～四只開到 19:00,所以排上午、無法擺在演唱會前。另有不定休,出發前查官方 SNS。",
    },
    {
      title: "御朱印一次集三家",
      body: "上野「みほとけ巡り」5 種(先着 300 名贈御朱印帳)＋川崎大師＋高円寺気象神社(每月限定橡皮章款),傳統與次文化御朱印一趟收齊。各授與所多到 16:00–17:00,建議上午就起跑。",
    },
    {
      title: "兩天都很滿 · 時間眉角",
      body: "加了 Wonderia 後 Day 2 相當緊湊,想喘口氣可考慮砍高円寺或縮短川崎。清澄庭園 17:00 閉園(末入 16:30)、高円寺古著多 13:00 後才開。Day 3 的 05:25 沒電車,凌晨叫車或散場後搭末班車到羽田過夜。",
    },
    {
      title: "若「川崎」是指哆啦A夢博物館",
      body: "若你想去的是藤子・F・不二雄博物館(哆啦A夢),需先在 Lawson 指定日期時段購票,位置在西北登戸,與川崎大師動線相反,需要重排 Day 2 動線。",
    },
    {
      title: "9 月天氣 · 小資省錢",
      body: "9 月東京仍偏熱潮濕、有颱風與午後陣雨,輕便衣物＋折傘＋多補水。備一張 Suica／PASMO 刷遍電車與會場;秋葉原電器免稅記得帶護照,現金備少量、多用電子支付。",
    },
  ],
};
