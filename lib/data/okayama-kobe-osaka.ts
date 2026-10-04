import type { Journey } from "../journeys";

// 岡山·神戶·大阪 6天5夜深度自由行 — 2026/10/04 調整版
// 交通依岡電 2026/10/01–10/24 時刻表、岡山両備定額服務與 JR 西日本票價估算。
// https://www.okayama-airport.org/access/bus
// https://okayama-kido.co.jp/bus/kuukou.html
// https://okayama-ryobi-taxi.jp/services/
// https://www.jr-odekake.net/ticket/guide/ebook/
// https://okayama-korakuen.jp/goriyo/441.html
// https://okayama-kido.co.jp/tram/route-map/
export const okayamaKobeOsaka: Journey = {
  slug: "okayama-kobe-osaka-2026",
  name: "岡山 · 神戶 · 大阪 6天5夜",
  place: "日本 · 關西／山陽",
  scope: "overseas",
  startDate: "2026-10-18",
  endDate: "2026-10-23",
  tone: "deep",
  cover: "/journey-okayama-kobe-osaka.png",
  excerpt: "文化探索 × 網美打卡 × 美食吃透透,從關西的繁華到山陽的靜謐。",
  tags: ["關西", "演唱會", "美食", "自由行"],
  highlights: [
    { label: "日期", value: "10.18 – 10.23" },
    { label: "人數", value: "2 位成人" },
    { label: "風格", value: "中資產小資族" },
    { label: "亮點", value: "10/21 神戶演唱會" },
  ],
  days: [
    {
      day: 1,
      date: "2026.10.18 · 日",
      title: "抵達岡山,夜奔大阪心齋橋",
      summary:
        "16:30 抵達岡山。出發前先確認配合國際線抵達的臨時機場巴士；若希望控制接送時間,可提前預約定額計程車。到岡山站後單買新幹線前往大阪,今晚以入住、晚餐與道頓堀散步為主。",
      lodging: "APA Hotel & Resort 大阪難波駅前タワー",
      route: {
        stops: ["岡山桃太郎機場", "岡山駅", "新大阪駅", "飯店(難波)", "心齋橋筋商店街", "道頓堀 Glico"],
        mapUrl:
          "https://www.google.com/maps/dir/Okayama+Momotaro+Airport/Okayama+Station/Shin-Osaka+Station/Shinsaibashi-Suji+Shopping+Street/Dotonbori+Glico+Sign/",
      },
      points: [
        { name: "岡山桃太郎機場", lat: 34.7569, lng: 133.8553, kind: "transit" },
        { name: "岡山駅", lat: 34.6657, lng: 133.9183, kind: "transit" },
        { name: "新大阪駅", lat: 34.7338, lng: 135.5003, kind: "transit" },
        { name: "心齋橋筋商店街", lat: 34.6723, lng: 135.5012, kind: "spot" },
        { name: "道頓堀 Glico", lat: 34.6687, lng: 135.5013, kind: "spot" },
      ],
      blocks: [
        {
          period: "afternoon",
          label: "下午 · Afternoon Arrival",
          items: [
            {
              type: "spot",
              spot: {
                no: "01",
                name: "岡山桃太郎機場 入境",
                time: "16:30",
                desc: "虎航班機降落後依序通關、領行李,估計 17:15 前後走出大廳。國際線出口正對面即是機場接駁巴士售票處,動線清楚。",
                meta: ["🛬 預估通關 30–45 分", "🚏 巴士就在出口正前方"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJa2konp4DVDURCbtFf9tz9bM",
              },
            },
            {
              type: "transport",
              note: {
                mode: "機場巴士 / 預約定額計程車",
                text: "「岡山機場 → 岡山駅」｜巴士約 30 分鐘 ¥1,000／人,可刷 Suica。16:30 落地後、19:00 前的固定班次為 16:55、18:55,但機場另有配合台北等國際線抵達的臨時巴士,不列在時刻表內,出發前向營運商確認。若想確保接送,岡山両備定額計程車 ¥6,500／車、2 人分攤 ¥3,250／人,須前一天預約；車程先抓 30–40 分鐘,確認延誤、候車與行李條件。臨時現場叫車按車資計算,不套用預約定額。",
              },
            },
            {
              type: "transport",
              note: {
                mode: "新幹線",
                text: "「岡山駅 → 新大阪駅」｜山陽新幹線 のぞみ／さくら｜約 45–50 分鐘｜普通車自由席 ¥5,610／人。抵達岡山站後預留 20–30 分鐘購票與找月台,再選班次。符合短期停留資格者亦可比較海外販售的山陽新幹線優惠單程票 ¥5,100／人。",
              },
            },
            {
              type: "transport",
              note: {
                mode: "地鐵",
                text: "「新大阪駅 → 難波」｜大阪Metro御堂筋線約 15 分鐘｜¥290／人,可刷手機 Suica。若臨時巴士或預約計程車銜接順利,暫抓 20:00–20:30 入住；若搭 18:55 固定巴士,入住與晚餐順延。實際時間依入境、接送與新幹線班次調整。",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · Night Lights of Dotonbori",
          items: [
            {
              type: "spot",
              spot: {
                no: "02",
                name: "心齋橋筋商店街",
                time: "入住後彈性安排",
                desc: "入住、吃完晚餐後如有餘力再散步,店家打烊時間各異。完整購物留到 10/19 的道頓堀與心齋橋時段。",
                meta: ["⏱ 彈性停留 30–60 分", "🛍 主要購物留到完整大阪日"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJc7M3_BPnAGARI8OZlTnEXGI",
              },
            },
            {
              type: "spot",
              spot: {
                no: "03",
                name: "道頓堀 · Glico 跑跑人地標",
                time: "晚餐後 · 依抵達時間調整",
                desc: "戎橋上拍 Glico 跑跑人是必選網美照,運河兩岸霓虹燈牌一字排開。建議買一蘭拉麵或章魚燒邊走邊吃。",
                meta: ["📸 必拍:戎橋上 Glico 看板", "🌃 24 小時不打烊"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJ_fmKgRPnAGARkKWLtCYTu7g",
              },
            },
          ],
        },
      ],
      meals: [
        {
          title: "Dinner · 晚餐推薦",
          restaurants: [
            {
              name: "金龍拉麵 道頓堀本店",
              desc: "道頓堀地標級拉麵店,豬骨湯頭清爽不膩,免費韭菜、泡菜、蒜泥吃到飽。24 小時營業,下機後直接衝也來得及。",
              prices: ["¥900–1,200／人", "⏰ 24 小時"],
            },
            {
              name: "大阪燒 美津の (Mizuno)",
              desc: "道頓堀大阪燒老店,山藥燒是招牌。入住後依營業時間與排隊狀況決定,也可留到 10/19 晚餐。",
              prices: ["¥1,800–2,500／人", "⏰ 11:00–22:00"],
            },
          ],
        },
      ],
    },
    {
      day: 2,
      date: "2026.10.19 · 一",
      title: "大阪海港 × 御宅天堂日",
      summary:
        "早上到天保山港灣村探訪大阪海遊館,中午殺到日本橋電電街當一日宅宅,下午轉戰梅田阪急三番街朝聖 hololive,晚上回道頓堀。",
      lodging: "APA Hotel & Resort 大阪難波駅前タワー",
      route: {
        stops: [
          "大阪海遊館 / 天保山",
          "日本橋電電街",
          "Fandom Namba公式",
          "阪急三番街 hololive 梅田店",
          "道頓堀",
        ],
        mapUrl:
          "https://www.google.com/maps/dir/Osaka+Aquarium+Kaiyukan/Nipponbashi+Denden+Town/Hankyu+Sanbangai+Hololive+Shop/Dotonbori/",
      },
      points: [
        { name: "大阪海遊館", lat: 34.6547, lng: 135.4292, kind: "spot" },
        { name: "日本橋電電街", lat: 34.6614, lng: 135.506, kind: "spot" },
        { name: "Fandom Namba公式", lat: 34.6605, lng: 135.5063, kind: "spot" },
        { name: "hololive 大阪梅田店", lat: 34.7048, lng: 135.4983, kind: "spot" },
        { name: "道頓堀", lat: 34.6687, lng: 135.5013, kind: "food" },
      ],
      blocks: [
        {
          period: "morning",
          label: "早上 · Morning at Tempozan",
          items: [
            {
              type: "spot",
              spot: {
                no: "01",
                name: "大阪海遊館 & 天保山港灣村",
                time: "10:00–12:00",
                desc: "世界級水族館,8 層樓高的環形水槽從太平洋表層一路深潛到深海,鎮館之寶是巨大鯨鯊。隔壁天保山港灣村有大觀覽車,可遠眺大阪灣與明石海峽大橋。",
                meta: ["🎟 海遊館採日期變動票價,購票時確認", "🎡 大觀覽車可選,費用另計", "⏱ 建議停留 2 小時", "🐋 鎮館之寶:鯨鯊"],
                mapUrl: "https://www.google.com/maps/place/?q=大阪海遊館",
              },
            },
            {
              type: "transport",
              note: {
                mode: "地鐵",
                text: "「大阪港駅 → 難波駅」｜中央線至本町轉御堂筋線｜約 25–30 分鐘｜¥290／人。出站步行前往日本橋電電街,可刷手機 Suica。",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · DenDen Town to Hololive Pilgrimage",
          items: [
            {
              type: "spot",
              spot: {
                no: "02",
                name: "日本橋電電街(DenDen Town)",
                time: "12:30–15:30",
                desc: "大阪版秋葉原。必逛:Joshin 總本店、Animate 西日本最大級、駿河屋、Mandarake。可順道體驗女僕咖啡廳。",
                meta: ["⏰ 多數 11:00–20:00", "⏱ 建議停留 3 小時"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJv6w_-2fnAGARH2p9wbwos3c",
              },
            },
            {
              type: "spot",
              spot: {
                no: "03",
                name: "Fandom Namba公式",
                desc: "電電街內的動畫/動漫周邊商品店,位於日本橋4丁目,跟電電街主逛區走路就能到,順路晃進去挖寶就好,不必特別排時間。",
                meta: ["📍 日本橋4丁目", "🎴 動漫周邊商品"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=Fandom+Namba+大阪市浪速区日本橋4",
              },
            },
            {
              type: "transport",
              note: {
                mode: "地鐵",
                text: "「電電街 → 難波駅 → 梅田駅」｜先步行到難波,再搭御堂筋線直達梅田｜含步行預留 25–35 分鐘｜地鐵 ¥240／人。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "04",
                name: "hololive 大阪梅田店(阪急三番街北館 B1F)",
                time: "16:00–17:30",
                desc: "關西第一家 hololive 官方實體店。單筆 ¥3,300 以上送特典明信片。店面不好找,建議用 Google Map 設「Kiddy Land 大阪梅田店」導航。",
                meta: ["⏰ 10:00–21:00", "⏱ 建議停留 30–60 分", "💴 預算 ¥5,000–15,000"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJFegzXQDnAGARVHywk-VqQe0",
              },
            },
            {
              type: "transport",
              note: { mode: "地鐵", text: "「梅田站 → 難波站」｜御堂筋線直達｜約 10 分鐘｜¥240／人。" },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · Back to Dotonbori",
          items: [
            {
              type: "spot",
              spot: {
                no: "05",
                name: "道頓堀美食巡禮 + 心齋橋夜逛",
                time: "18:00–22:00",
                desc: "把昨天沒吃到的章魚燒、串炸、神戶牛壽司一次嘗試,逛完再到心齋橋藥妝補貨。",
                meta: ["📸 戎橋夜景人少時更好拍"],
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
              name: "[午餐] 今井本店(難波)",
              desc: "創業 60 多年的讚岐風烏龍麵老店,招牌きつねうどん甜鹹昆布湯頭迷人。從電電街步行約 10 分鐘即達,順路解決午餐。",
              prices: ["¥1,200–1,800／人"],
            },
            {
              name: "[晚餐] 串カツ田中 道頓堀店",
              desc: "大阪傳統 B 級美食串炸人氣連鎖,一串 ¥120 起。特色是醬汁禁止二度沾的關西規矩。",
              prices: ["¥2,000–3,000／人"],
            },
            {
              name: "[晚餐替代] 蟹道樂 道頓堀本店",
              desc: "會動的巨大螃蟹招牌。螃蟹懷石套餐從 ¥6,000 起跳,建議提前訂位。",
              prices: ["¥6,000–10,000／人"],
            },
          ],
        },
      ],
    },
    {
      day: 3,
      date: "2026.10.20 · 二",
      title: "奈良一日遊 · 神之鹿與千年古寺",
      summary:
        "從難波搭近鐵直達奈良,東大寺、奈良公園、春日大社三大景點一日制霸,傍晚回大阪改去梅田空中庭園展望台看夜景收尾。",
      lodging: "APA Hotel & Resort 大阪難波駅前タワー",
      route: {
        stops: ["大阪難波", "近鐵奈良駅", "奈良公園", "東大寺", "春日大社", "梅田スカイビル"],
        mapUrl:
          "https://www.google.com/maps/dir/Kintetsu+Nara+Station/Nara+Park/Todai-ji+Temple/Kasuga+Taisha+Shrine/Umeda+Sky+Building/",
      },
      points: [
        { name: "近鐵奈良駅", lat: 34.6829, lng: 135.83, kind: "transit" },
        { name: "奈良公園", lat: 34.6851, lng: 135.843, kind: "spot" },
        { name: "東大寺", lat: 34.689, lng: 135.8398, kind: "spot" },
        { name: "春日大社", lat: 34.6818, lng: 135.8483, kind: "spot" },
        { name: "梅田スカイビル", lat: 34.7053, lng: 135.4905, kind: "spot" },
      ],
      blocks: [
        {
          period: "morning",
          label: "早上 · Morning in Ancient Capital",
          items: [
            {
              type: "transport",
              note: {
                mode: "近鐵電車",
                text: "「大阪難波站 → 近鐵奈良站」｜近鐵奈良線快速急行／急行｜約 40 分鐘｜¥680／人,往返 ¥1,360。直接刷手機 Suica；搭特急須另買特急券。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "01",
                name: "奈良公園 & 餵鹿初體驗",
                time: "09:30–10:30",
                desc: "約 1,200 隻野生梅花鹿自由漫步,鹿仙貝 ¥200／束。技巧:整束一次給一隻鹿,對著鹿低頭牠會回禮鞠躬。",
                meta: ["🦌 鹿仙貝 ¥200／束", "⚠️ 背包別放紙本", "📸 早上光線最美"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJYWCMvZY5AWARVnREV_OsbPk",
              },
            },
            {
              type: "transport",
              note: { mode: "步行", text: "「奈良公園 → 東大寺」｜約 8 分鐘｜途經興福寺五重塔。" },
            },
          ],
        },
        {
          period: "afternoon",
          label: "中下午 · Heritage Walk",
          items: [
            {
              type: "spot",
              spot: {
                no: "02",
                name: "東大寺 · 世界最大木造建築",
                time: "11:00–12:30",
                desc: "創建於西元 752 年,15 公尺高的奈良大佛是國寶。大殿後方有跟大佛鼻孔一樣大的柱洞,傳說鑽過保佑健康。",
                meta: ["🎟 ¥800", "⏰ 07:30–17:30", "📸 大佛殿全景"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJ3XYIepA5AWARjzzVnT-skPg",
              },
            },
            {
              type: "transport",
              note: { mode: "步行", text: "「東大寺 → 春日大社」｜約 15 分鐘｜穿越鹿群與石燈籠。" },
            },
            {
              type: "spot",
              spot: {
                no: "03",
                name: "春日大社 · 千年朱紅燈籠",
                time: "14:00–15:30",
                desc: "創建於西元 768 年的世界遺產,3,000 多座石燈籠是最大看點。朱紅迴廊配青銅燈籠(特別參拜區 ¥700)。",
                meta: ["🎟 外圍免費 / 特別參拜 ¥700", "⏰ 07:00–17:00", "📸 朱紅迴廊燈籠"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJ1Wqwa8A5AWARlpXjgoPnl0w",
              },
            },
            {
              type: "transport",
              note: {
                mode: "巴士 + 近鐵",
                text: "「春日大社 → 大阪難波」｜循環巴士回近鐵奈良站(¥250)再搭急行回難波約 40 分。預計 17:30 抵飯店。",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · Umeda Sky Night View",
          items: [
            {
              type: "transport",
              note: {
                mode: "地鐵",
                text: "「難波駅 → 梅田駅」｜御堂筋線直達｜約 10 分鐘｜¥240／人。出站後另預留 15–20 分鐘步行到梅田空中庭園,回程地鐵同價。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "04",
                name: "梅田スカイビル 空中庭園展望台",
                time: "18:30–20:30",
                desc: "兩棟 173 公尺高樓由圓形手扶梯連接於頂端,曾被選為世界最美展望台之一。日落後可 360 度俯瞰大阪盆地萬家燈火,天氣好時遠眺明石海峽大橋。",
                meta: ["🎟 展望台成人原價 ¥2,000", "⏰ 09:30–22:30(最終入場 22:00)", "📸 環形手扶梯 + 360 度夜景"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=梅田スカイビル+空中庭園展望台",
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
              name: "[午餐] 奈良公園或近鐵奈良站周邊",
              desc: "依當天動線選擇定食、烏龍麵或咖啡店,不綁定排隊名店。志津香公園店固定週二公休,只有將奈良行程換到非公休日、且想吃釜飯時才列為選項。",
              prices: ["午餐預算 ¥1,500–2,500／人", "⏱ 午餐預留 45–60 分鐘"],
            },
            {
              name: "[晚餐] 滝見小路(梅田スカイビル B1)",
              desc: "重現昭和 30 年代懷舊街景的美食街,集合大阪燒、串炸、立食蕎麥麵等多家老店。看完夜景下樓就能解決晚餐,不必再移動。",
              prices: ["¥1,500–3,000／人"],
            },
          ],
        },
      ],
    },
    {
      day: 4,
      date: "2026.10.21 · 三 · 演唱會日",
      title: "神戶港 × 北野異人館 × GLION ARENA 演唱會",
      summary:
        "上午移動神戶、寄放行李,北野異人館外觀散步後回三宮吃神戶牛午餐,下午輕逛南京町。17:00 抵 GLION ARENA,18:00 開場、19:00 開演,周邊依主辦方公告安排。",
      lodging: "神戶三宮酒店(三宮 · Chuo-ku Edomachi 92)",
      route: {
        stops: ["三宮駅", "北野異人館街", "三宮神戶牛午餐", "南京町中華街", "GLION ARENA KOBE"],
        mapUrl:
          "https://www.google.com/maps/dir/Sannomiya+Station+Kobe/Kobe+Kitano+Ijinkan-Gai/Sannomiya+Station+Kobe/Nankin-machi/GLION+ARENA+KOBE/",
      },
      points: [
        { name: "三宮駅", lat: 34.6946, lng: 135.1956, kind: "transit" },
        { name: "北野異人館街", lat: 34.7016, lng: 135.19, kind: "spot" },
        { name: "南京町中華街", lat: 34.6886, lng: 135.188, kind: "food" },
        { name: "GLION ARENA KOBE", lat: 34.68, lng: 135.19, kind: "spot" },
      ],
      blocks: [
        {
          period: "morning",
          label: "早上 · Move to Kobe",
          items: [
            {
              type: "transport",
              note: {
                mode: "地鐵 + JR 新快速",
                text: "「難波 → 梅田」｜御堂筋線 ¥240／人,步行轉大阪站。再搭 JR 神戶線新快速「大阪 → 三ノ宮」約 22 分鐘 ¥420／人,兩段均可刷 Suica。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "01",
                name: "神戶飯店 Check-in & 寄行李",
                time: "10:00–10:30",
                desc: "先把行李扔到神戶飯店(建議訂三宮車站附近)輕裝出發。多數飯店即便未到 Check-in 時段也可先寄存。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "02",
                name: "北野異人館街",
                time: "11:00–12:00",
                desc: "以洋房外觀、北野坂街景與風見雞館周邊散步為主,預留步行回三宮的時間。如想入館,選單一館舍並縮短其他停留。",
                meta: ["⏱ 外觀散步約 60 分鐘", "🎟 入館費用依館舍另計", "📸 洋房街景"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJT6cViuCOAGARegX_ORkvbs0",
              },
            },
            {
              type: "transport",
              note: {
                mode: "步行",
                text: "「北野異人館 → 三宮午餐」｜步行下山預留 20–30 分鐘。先吃預約的神戶牛午餐,餐後再前往南京町。",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Chinatown Bites",
          items: [
            {
              type: "spot",
              spot: {
                no: "03",
                name: "三宮 · 神戶牛午餐",
                time: "12:30–14:00",
                desc: "MOURIYA 或 Steak Land 擇一,依預算與訂位情況決定。把完整午餐時段留出來,餐後步行前往南京町,不與北野觀光重疊。",
                meta: ["🍽 提前確認訂位", "⏱ 預留 90 分鐘"],
              },
            },
            {
              type: "spot",
              spot: {
                no: "04",
                name: "南京町中華街",
                time: "14:30–15:30",
                desc: "日本三大中華街之一,紅色牌坊與燈籠好拍。推薦老祥記豬肉包、皇蘭北京烤鴨包、放心 PUDDING。",
                meta: ["⏱ 建議停留 60 分鐘", "📸 紅色牌坊「西安門」"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJkaqwvf2OAGARARl_1gEYbx0",
              },
            },
            {
              type: "transport",
              note: {
                mode: "步行",
                text: "「南京町 → GLION ARENA KOBE」｜步行先抓 25–35 分鐘,途中可休息或補充輕食。以 17:00 到場為目標,周邊領取時段依主辦方公告另行調整。",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "傍晚至深夜 · The Concert Night",
          items: [
            {
              type: "spot",
              spot: {
                no: "05",
                name: "GLION ARENA KOBE 周邊用餐 & 領周邊",
                time: "17:00–18:00",
                desc: "抵達後確認入口、票券、周邊領取與寄物方式,用餐以輕食為主。若周邊預約時段更早,提前縮短南京町停留。",
                meta: ["🚪 18:00 開場", "🎤 19:00 開演", "📦 周邊依主辦方公告"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJVRlHQgCPAGAR8tKXuc75hYs",
              },
            },
            {
              type: "spot",
              spot: {
                no: "06",
                name: "🎤 演唱會 GLION ARENA KOBE",
                time: "19:00–終演",
                desc: "享受演唱會,結束時間依當日演出。散場以步行返回三宮住宿為主,預留人潮緩衝；若主辦方公告接駁,可彈性改搭。",
              },
            },
            {
              type: "transport",
              note: {
                mode: "散場交通",
                text: "「GLION ARENA → 三宮住宿」｜以步行約 20–30 分鐘為估計,依飯店位置與散場人潮調整。接駁資訊以當日公告為準。",
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
              name: "[午餐] MOURIYA 本店(神戶牛排)",
              desc: "神戶牛排專門店,桌前現切現煎。午餐預留 12:30–14:00,依所選套餐確認金額並提前訂位。",
              prices: ["¥8,000–15,000／人", "⏰ 11:00–21:00"],
            },
            {
              name: "[午餐替代] 神戶牛排 Steak Land",
              desc: "想吃神戶牛但預算有限的好選擇,午間套餐 ¥3,500 起,CP 值高。位置在三宮中心街。",
              prices: ["¥3,500–6,000／人"],
            },
            {
              name: "[晚餐] 演唱會前快餐",
              desc: "建議 GLION ARENA 周邊或三宮車站站內用餐,演唱會前不要吃太飽。",
              prices: ["¥1,500–2,500／人"],
            },
          ],
        },
      ],
    },
    {
      day: 5,
      date: "2026.10.22 · 四",
      title: "神戶 → 倉敷美觀 → 岡山",
      summary:
        "演唱會隔天輕鬆移動。上午搭新幹線到岡山寄放行李,再到倉敷美觀地區散步。以倉敷川、Ivy Square、本町老街與丹寧街為主,阿智神社或大原美術館依興趣擇一,傍晚回岡山入住。",
      lodging: "ura アオトハル(岡山)",
      route: {
        stops: ["新神戶駅", "岡山駅", "倉敷美觀地區", "Ivy Square / 本町老街", "倉敷丹寧街", "岡山駅 AEON Mall"],
        mapUrl:
          "https://www.google.com/maps/dir/Shin-Kobe+Station/Okayama+Station/Kurashiki+Bikan+Historical+Quarter/Kurashiki+Ivy+Square/Kurashiki+Denim+Street/Aeon+Mall+Okayama/",
      },
      points: [
        { name: "新神戶駅", lat: 34.706, lng: 135.211, kind: "transit" },
        { name: "岡山駅", lat: 34.6657, lng: 133.9183, kind: "transit" },
        { name: "倉敷美觀地區", lat: 34.597, lng: 133.772, kind: "spot" },
        { name: "AEON Mall 岡山", lat: 34.664, lng: 133.92, kind: "food" },
      ],
      blocks: [
        {
          period: "morning",
          label: "早上 · Bullet Train to Sanyo",
          items: [
            {
              type: "transport",
              note: {
                mode: "地鐵 + 新幹線 + JR",
                text: "「三宮 → 新神戶」｜神戶市營地鐵約 ¥210／人。再搭山陽新幹線「新神戶 → 岡山」約 35 分鐘,普通車自由席 ¥5,170／人；先在岡山站寄放行李,轉 JR「岡山 → 倉敷」約 17 分鐘 ¥330／人,此段可刷 Suica。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "01",
                name: "倉敷美觀地區",
                time: "10:30–14:00",
                desc: "從倉敷站步行進入老街,沿倉敷川、今橋與白壁宅邸拍照,穿插商店與午餐。以步行看街景為主,不安排川舟。大原美術館若有興趣,可取代部分下午散步時間。",
                meta: ["⏱ 3.5 小時含午餐與散步", "📸 白壁倉庫 + 柳樹小橋", "🎨 美術館入場可選,費用另計"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJ1do4lkdWUTURvg3rFkFpzhE",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Old Town & Denim Walk",
          items: [
            {
              type: "spot",
              spot: {
                no: "02",
                name: "Ivy Square · 本町老街",
                time: "14:00–14:45",
                desc: "走訪舊紡織廠改建的紅磚建築與常春藤中庭,再逛本町老街的小店。以外觀與公共空間散步為主,館內付費設施依興趣選擇。",
                meta: ["📸 紅磚建築 + 常春藤", "🚶 老街內步行銜接"],
                mapUrl: "https://www.google.com/maps/search/?api=1&query=倉敷アイビースクエア",
              },
            },
            {
              type: "spot",
              spot: {
                no: "03",
                name: "倉敷丹寧街 · 阿智神社或大原美術館擇一",
                time: "14:45–16:00",
                desc: "丹寧街就在美觀地區內,可看兒島品牌商品,不必另跑兒島。體力足夠可上阿智神社看老街景色；想看藝術則改逛大原美術館,想購物則提前回倉敷站北側 Outlet。以上擇一,不全部塞進同一下午。",
                meta: ["🛍 丹寧街在美觀地區內", "⛩ 阿智神社有上坡與階梯", "🎨 美術館費用另計"],
                mapUrl: "https://www.google.com/maps/search/?api=1&query=倉敷デニムストリート",
              },
            },
            {
              type: "transport",
              note: { mode: "JR 山陽本線", text: "「倉敷 → 岡山」｜約 17 分鐘｜¥330。回岡山 Check-in 飯店。" },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · Okayama Welcome",
          items: [
            {
              type: "spot",
              spot: {
                no: "04",
                name: "岡山駅 AEON Mall · 晚餐與伴手禮",
                time: "18:00–21:00",
                desc: "在岡山站與 AEON Mall 周邊用晚餐,把主要伴手禮今天買好。若想逛表町商店街,改在較早時段前往並確認店家營業時間。",
                meta: ["🛍 主要採購今天完成", "⏰ 各店營業時間不同"],
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
              name: "[午餐] 美觀地區餐館 / CAFÉ EL GRECO 飯後咖啡",
              desc: "午餐在美觀地區挑餐館,CAFÉ EL GRECO 作為飯後咖啡與拍照的可選停留,不把咖啡館當作必吃正餐。",
              prices: ["午餐預算 ¥1,500–2,500／人", "咖啡另計,依當日營業情況"],
            },
            {
              name: "[晚餐] 岡山駅 / AEON Mall 周邊",
              desc: "依入住與購物動線挑餐館,可找岡山蝦飯、定食或壽司。えびめしや 万成店不在車站步行圈,只有願意另安排交通時才列為選項。",
              prices: ["晚餐預算 ¥1,000–2,000／人"],
            },
          ],
        },
      ],
    },
    {
      day: 6,
      date: "2026.10.23 · 五 · 回程",
      title: "岡山後樂園 × 岡山城 → 桃太郎機場",
      summary:
        "早上參觀後樂園與岡山城,11:30 回岡山站午餐、取行李,12:30 到西口候車。搭 12:55 巴士、13:25 抵機場,銜接 15:55 回程航班；主要採購移到前一晚。",
      route: {
        stops: ["飯店", "岡山後樂園", "岡山城", "岡山駅", "岡山桃太郎機場"],
        mapUrl:
          "https://www.google.com/maps/dir/Okayama+Korakuen/Okayama+Castle/Okayama+Station/Okayama+Momotaro+Airport/",
      },
      points: [
        { name: "岡山後樂園", lat: 34.6667, lng: 133.936, kind: "spot" },
        { name: "岡山城", lat: 34.6655, lng: 133.936, kind: "spot" },
        { name: "岡山駅", lat: 34.6657, lng: 133.9183, kind: "transit" },
        { name: "岡山桃太郎機場", lat: 34.7569, lng: 133.8553, kind: "transit" },
      ],
      blocks: [
        {
          period: "morning",
          label: "早上 · Three Famous Gardens",
          items: [
            {
              type: "transport",
              note: {
                mode: "路面電車",
                text: "「岡山駅前 → 城下站」｜岡山路面電車｜約 5 分鐘｜¥160／人,可刷 Suica。下車另預留 10–15 分鐘步行到後樂園。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "01",
                name: "岡山後樂園",
                time: "08:30–09:45",
                desc: "日本三大名園之一,池田家打造的迴遊式庭園。欣賞池塘、草坪與借景岡山城,不以 10 月下旬已全面轉紅為前提。",
                meta: ["🎟 ¥500 / 後樂園+岡山城套票 ¥800", "⏱ 停留 75 分鐘", "📸 唯心山俯瞰"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJhwt8jCQGVDURabQ6FPH0nXQ",
              },
            },
            {
              type: "transport",
              note: { mode: "步行", text: "「後樂園 → 岡山城」｜約 5 分鐘｜跨過月見橋｜免費。" },
            },
            {
              type: "spot",
              spot: {
                no: "02",
                name: "岡山城(烏城)",
                time: "10:00–11:00",
                desc: "因黑色外牆稱為烏城,與姬路城白鷺城對比。2022 年改裝後是體驗式歷史博物館,有和服體驗。",
                meta: ["🎟 ¥500,已買套票不重複付費", "⏰ 09:00–17:30", "⏱ 停留 60 分鐘"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJER_WDSUGVDURujV4pMtef44",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "中午 · Last Meal & Departure",
          items: [
            {
              type: "transport",
              note: {
                mode: "步行 + 路面電車",
                text: "「岡山城 → 城下 → 岡山駅前」｜步行到電停後搭車約 5 分鐘 ¥160／人,可刷 Suica。含候車與步行先抓 30 分鐘,11:30 回到車站。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "03",
                name: "岡山駅 午餐、取行李 & 小量補買",
                time: "11:30–12:30",
                desc: "主要伴手禮前一晚買好,今天以簡單午餐、取行李與少量補買為主。12:30 到西口 21 號乘車處排隊,預留東西口移動時間。",
              },
            },
            {
              type: "transport",
              note: {
                mode: "機場巴士",
                text: "「岡山駅西口 21 號乘車處 → 岡山桃太郎機場」｜12:55 發車、13:25 抵達｜¥1,000／人,可刷 Suica。距 15:55 起飛約 2.5 小時；公布時刻表沒有原訂的 14:00 班次。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "04",
                name: "岡山桃太郎機場 出境 → 賦歸",
                time: "13:25–15:55",
                desc: "抵達後先辦理報到、托運與出境安檢,依航空公司規定完成登機。用餐與機場購物僅在時間充足時安排,15:55 起飛回桃園。",
                meta: ["✈️ 15:55 起飛", "🛒 2F 候機室小"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJa2konp4DVDURCbtFf9tz9bM",
              },
            },
          ],
        },
      ],
      meals: [
        {
          title: "Meals · 午餐推薦",
          restaurants: [
            {
              name: "[午餐] 吾妻寿司 岡山駅本店",
              desc: "岡山在地壽司老店,創業 100+ 年。祭壽司便當適合帶到機場吃,¥1,500 起。岡山駅 1F 有店面。",
              prices: ["¥1,500–3,000／人"],
            },
            {
              name: "[機場午餐] 打うどん 桃太郎",
              desc: "機場 2F,讚岐烏龍麵職人開設。釜揚烏龍麵 ¥780 起,搭機前簡單填飽肚子。",
              prices: ["¥800–1,200／人"],
            },
          ],
        },
      ],
    },
  ],
  hotels: [
    {
      area: "大阪 · Day 1–3 三晚",
      name: "APA Hotel & Resort 大阪難波駅前タワー",
      meta: ["💰 ¥18,000／晚(雙人)", "📍 難波駅 步行 3 分", "🛁 頂樓大浴場 + 露天風呂"],
      desc: "APA 旗下大型 Resort 塔樓,就在難波駅前,御堂筋線、近鐵、南海電車匯集,往返心齋橋與道頓堀步行可達。頂樓有大浴場與露天風呂,逛累泡湯最舒服。三晚都住這,行李不用搬來搬去。",
    },
    {
      area: "神戶 · Day 4 一晚",
      name: "神戶三宮酒店(Kobe Sannomiya Hotel)",
      meta: ["💰 ¥22,000／晚(雙人)", "📍 神戶市中央區江戶町 92", "🚶 三宮駅徒步圈"],
      desc: "位在三宮市中心江戶町(Chuo-ku Edomachi 92),靠近三宮車站與舊居留地,逛北野異人館、南京町與前往 GLION ARENA 都方便。演唱會散場後走回飯店最省心。",
    },
    {
      area: "岡山 · Day 5 一晚",
      name: "ura アオトハル",
      meta: ["💰 ¥14,000／晚(雙人)", "📍 岡山市區", "🏠 在地風格住宿"],
      desc: "岡山在地風格的小型住宿,適合演唱會隔天放鬆過夜。回程當天就近整理行李、採買伴手禮,再從岡山駅搭機場巴士賦歸。",
    },
  ],
  budget: [
    { date: "10/18 Day 1", transport: "¥13,800", tickets: "¥0", food: "¥5,000", lodging: "¥18,000", total: "¥36,800" },
    { date: "10/19 Day 2", transport: "¥2,120", tickets: "¥7,000", food: "¥7,000", lodging: "¥18,000", total: "¥34,120" },
    { date: "10/20 Day 3", transport: "¥4,180", tickets: "¥7,000", food: "¥7,500", lodging: "¥18,000", total: "¥36,680" },
    { date: "10/21 Day 4", transport: "¥1,320", tickets: "¥0", food: "¥20,000", lodging: "¥22,000", total: "¥43,320" },
    { date: "10/22 Day 5", transport: "¥12,080", tickets: "¥0", food: "¥6,000", lodging: "¥14,000", total: "¥32,080" },
    { date: "10/23 Day 6", transport: "¥2,640", tickets: "¥1,600", food: "¥4,000", lodging: "—", total: "¥8,240" },
    { date: "合計", transport: "¥36,140", tickets: "¥15,600", food: "¥49,500", lodging: "¥90,000", total: "¥191,240", isTotal: true },
  ],
  budgetNote:
    "以上為 2 位成人規劃預算,以往返機場搭巴士、新幹線單買自由席、當地交通刷 Suica 計算,不是已付款金額。海遊館暫抓 ¥3,500／人,實價依日期；奈良門票含東大寺、春日大社特別參拜與梅田展望台,後樂園＋岡山城套票 ¥800／人。合計 ¥191,240,依原規劃匯率 ¥1 ≈ NT$ 0.223 約 NT$ 42,600／2 人。抵達日改用 ¥6,500 定額計程車,比 2 人巴士多 ¥4,500,合計 ¥195,740(約 NT$ 43,700)。未含機票、演唱會票、購物、周邊、伴手禮、寄物及可選的摩天輪、美術館、異人館入場；餐飲與住宿沿用原預估,依實際訂房與套餐調整。",
  tips: [
    {
      title: "交通票券建議",
      body: "維持新幹線單買＋手機 Suica。每人 JR 部分:岡山→新大阪自由席 ¥5,610、新神戶→岡山自由席 ¥5,170、大阪→三ノ宮 ¥420、岡山↔倉敷 ¥660,合計 ¥11,860。關西廣域 5 日券 ¥12,000(10/18–10/22),只多 ¥140／人；關西&廣島券 ¥17,000,本行程沒有去廣島的需求。近鐵、Metro 與機場交通另付,所有方案都要加上。兩人全程交通預估:單買 ¥36,140、關西廣域 ¥36,420、關西&廣島 ¥46,420；抵達日改搭定額計程車各再加 ¥4,500。若兩段都要指定席或增加 JR 遠程,再比較關西廣域券。",
    },
    {
      title: "優惠單程票與手機 Suica",
      body: "符合非日本護照、短期停留資格者,可比較透過海外旅行社販售的山陽新幹線優惠單程票,岡山→大阪市內 ¥5,100／人；只替換第一段後,每人 JR 合計 ¥11,350、兩人全程交通約 ¥35,120。實際販售與使用條件以購票頁為準。Suica 可搭行程中的一般 JR、地鐵、近鐵與支援的巴士；新幹線須另購票,若使用 SmartEX 可把已購車票綁定各自的 Suica,不直接扣儲值餘額搭山陽新幹線。",
    },
    {
      title: "抵達日機場交通",
      body: "不要只看 16:55、18:55 固定班次。機場另有配合台北等國際線抵達的臨時巴士,不列在時刻表內；出發前確認 10/18 航班接續,入境後立即到巴士站。可向中鐵 086-222-6601 或岡電 086-223-7222 洽詢。若希望預先安排接送,岡山両備定額 ¥6,500／車須前一天預約；現場計程車採實際車資,平台機場接送另詢報價。",
    },
    {
      title: "10/19、10/20 彈性互換",
      body: "維持 10/19 大阪海遊館＋電電街＋梅田商店、10/20 奈良＋梅田夜景,不為志津香特別更動日期。兩晚同住難波,可依天氣與體力交換；若已買海遊館等指定日期／時段門票或訂餐廳,先確認能否改期,再交換整天行程。",
    },
    {
      title: "倉敷與岡山的景點選擇",
      body: "10/22 以美觀地區散步、Ivy Square、本町老街與區內丹寧街為主,不安排川舟與額外兒島往返。阿智神社、大原美術館、倉敷站北側 Outlet 按興趣擇一。若更喜歡神社與建築,可把倉敷半日整段換成岡山吉備津神社(360 公尺迴廊,JR 吉備津站步行約 10 分鐘),不要兩邊硬塞；後樂園與岡山城仍留在 10/23 早上。",
    },
    {
      title: "10 月天氣與穿搭",
      body: "白天 15–22°C、晚上 10–15°C,溫差大。建議洋蔥式穿法:薄長袖+毛背心+輕外套,長褲。神戶港、奈良公園傍晚起風偏涼,多帶圍巾。",
    },
    {
      title: "網路 + 行動支付",
      body: "建議辦 eSIM 上網卡(6 天無限約 NT$ 600)。PayPay、Apple Pay 越來越普及,但小店仍以現金為主,建議帶 NT$ 30,000–40,000 換日圓備用。",
    },
    {
      title: "演唱會當日重點",
      body: "10/21 以 17:00 抵 GLION ARENA、18:00 開場、19:00 開演安排。午餐與北野觀光已分開；周邊領取、寄物、接駁與終演時間依主辦方公告,不預設一定提供。先下載票券、確認證件與入口,散場以步行回三宮住宿為主。",
    },
    {
      title: "奈良餵鹿注意",
      body: "① 鹿仙貝從正規攤位買 ② 不要拿著仙貝給鹿看卻不給 ③ 紙袋、手冊、緞帶都會被鹿吃 ④ 對鹿低頭牠會回禮 ⑤ 給完雙手攤開「沒了」鹿會懂。",
    },
    {
      title: "免稅與退稅",
      body: "日本新版退稅制於 2026/11/01 上路,本次 10/18–10/23 尚未適用。仍依當時店家免稅流程辦理,攜帶護照,同店同日原則合計滿 ¥5,000(未稅),並注意消耗品封裝與攜出條件。主要採購放在 10/22 晚間,回程不為尚未上路的退稅制度額外預留一小時,但照常留足報到與安檢時間。",
    },
    {
      title: "必裝 APP 清單",
      body: "① Google Maps ② Yahoo! 乗換案内(電車換乘最強)③ tabelog 食べログ ④ Klook / KKday(門票折扣)⑤ Google 翻譯 ⑥ holoplus。",
    },
  ],
};
