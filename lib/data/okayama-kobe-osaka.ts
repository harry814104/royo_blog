import type { Journey } from "../journeys";

// 岡山·神戶·大阪 6天5夜深度自由行 — 規劃範例資料
export const okayamaKobeOsaka: Journey = {
  slug: "okayama-kobe-osaka-2026",
  name: "岡山 · 神戶 · 大阪 6天5夜",
  place: "日本 · 關西／山陽",
  scope: "overseas",
  startDate: "2026-10-18",
  endDate: "2026-10-23",
  tone: "deep",
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
        "傍晚降落桃太郎機場,搭巴士進岡山站,立刻轉新幹線殺到大阪。今晚先把心齋橋與道頓堀的夜色一次看夠。",
      lodging: "Cross Hotel Osaka(心齋橋)",
      route: {
        stops: ["岡山桃太郎機場", "岡山駅", "新大阪駅", "飯店(心齋橋)", "心齋橋筋商店街", "道頓堀 Glico"],
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
                mode: "機場巴士",
                text: "「岡山機場 → 岡山駅西口」｜約 30 分鐘｜¥1,000／人｜可刷 ICOCA / Suica。建議搭 17:30–17:45 班次。",
              },
            },
            {
              type: "transport",
              note: {
                mode: "新幹線",
                text: "「岡山駅 → 新大阪駅」｜JR 山陽新幹線 のぞみ／さくら｜約 45–50 分鐘｜自由席約 ¥6,000／人。建議 18:30 左右班次。",
              },
            },
            {
              type: "transport",
              note: {
                mode: "地鐵",
                text: "「新大阪駅 → 難波／心齋橋」｜大阪Metro御堂筋線約 12 分｜¥240。預計 20:00 前到飯店 Check-in。",
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
                time: "20:00–21:00",
                desc: "覆蓋式拱廊街從南到北延伸近 600 公尺,UNIQLO、藥妝、伴手禮一次掃光。晚上人潮稠密但燈火璀璨。",
                meta: ["⏱ 建議停留 60 分", "🏬 多數店家 22:00 打烊"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJc7M3_BPnAGARI8OZlTnEXGI",
              },
            },
            {
              type: "spot",
              spot: {
                no: "03",
                name: "道頓堀 · Glico 跑跑人地標",
                time: "21:00–22:30",
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
              desc: "必比登推薦的道頓堀大阪燒老店,創業近 80 年。山藥燒是招牌。建議 19:30 前去抽號碼牌。",
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
      lodging: "Cross Hotel Osaka(心齋橋)",
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
                meta: ["🎟 海遊館 ¥2,700", "🎡 天保山大觀覽車 ¥800", "⏱ 建議停留 2 小時", "🐋 鎮館之寶:鯨鯊"],
                mapUrl: "https://www.google.com/maps/place/?q=大阪海遊館",
              },
            },
            {
              type: "transport",
              note: {
                mode: "地鐵",
                text: "「大阪港駅 → 日本橋駅」｜大阪Metro中央線轉堺筋線(本町站轉乘)｜約 30 分鐘｜¥350。",
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
                text: "「日本橋駅 → 梅田站」｜堺筋線轉御堂筋線(本町站轉乘)｜約 20 分鐘｜¥290。",
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
              note: { mode: "地鐵", text: "「梅田站 → 難波站」｜御堂筋線直達｜約 10 分鐘｜¥280。" },
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
      lodging: "Cross Hotel Osaka(心齋橋)",
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
                text: "「大阪難波站 → 近鐵奈良站」｜近鐵奈良線急行｜約 40 分鐘｜¥680／人。建議買「奈良斑鳩 1 日券」¥1,800。",
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
                text: "「難波駅 → 梅田駅」｜御堂筋線直達｜約 10 分鐘｜¥280。出站後步行約 12 分鐘可達,或從 JR 大阪駅中央口搭免費接駁巴士約 10 分。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "04",
                name: "梅田スカイビル 空中庭園展望台",
                time: "18:30–20:30",
                desc: "兩棟 173 公尺高樓由圓形手扶梯連接於頂端,曾被選為世界最美展望台之一。日落後可 360 度俯瞰大阪盆地萬家燈火,天氣好時遠眺明石海峽大橋。",
                meta: ["🎟 展望台 ¥1,500", "⏰ 09:30–22:30(最終入場 22:00)", "📸 環形手扶梯 + 360 度夜景"],
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
              name: "[午餐] 志津香 釜飯 公園店",
              desc: "奈良必吃排隊名店,現點現煮 25 分鐘。推薦奈良七種釜飯 ¥2,100。週二公休。",
              prices: ["¥1,800–2,500／人", "⏰ 11:00–15:00 (週二休)"],
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
        "為晚上 19:00 演唱會空出充裕緩衝。上午退房寄行李,下午輕逛北野異人館與南京町,傍晚 17:00 前抵 GLION ARENA。",
      lodging: "Hotel La'gent Stay Kobe Hyogo(三宮)",
      route: {
        stops: ["三宮駅", "北野異人館街", "南京町中華街", "GLION ARENA KOBE"],
        mapUrl:
          "https://www.google.com/maps/dir/Sannomiya+Station+Kobe/Kobe+Kitano+Ijinkan-Gai/Nankin-machi/GLION+ARENA+KOBE/",
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
                mode: "JR 新快速",
                text: "「大阪駅 → 三ノ宮駅」｜JR 神戶線新快速｜約 22 分鐘｜¥420／人。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "01",
                name: "神戶飯店 Check-in & 寄行李",
                time: "10:30–11:30",
                desc: "先把行李扔到神戶飯店(建議訂三宮車站附近)輕裝出發。多數飯店即便未到 Check-in 時段也可先寄存。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "02",
                name: "北野異人館街",
                time: "11:30–14:00",
                desc: "19 世紀外國商人聚居的洋房群。必看風見雞之館、萌黃之館、英國館。最高點的星巴克是世界最美之一,一定要進去點一杯。",
                meta: ["🎟 異人館套票 ¥3,000", "⏱ 建議停留 2.5 小時", "📸 風見雞館 + 星巴克"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJT6cViuCOAGARegX_ORkvbs0",
              },
            },
            {
              type: "transport",
              note: {
                mode: "City Loop 觀光巴士",
                text: "「北野異人館 → 南京町」｜約 10 分鐘｜單程 ¥260 / 一日券 ¥700。或步行下山約 15 分。",
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
                name: "南京町中華街",
                time: "14:30–16:00",
                desc: "日本三大中華街之一,紅色牌坊與燈籠好拍。推薦老祥記豬肉包、皇蘭北京烤鴨包、放心 PUDDING。",
                meta: ["⏱ 建議停留 1.5 小時", "📸 紅色牌坊「西安門」"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJkaqwvf2OAGARARl_1gEYbx0",
              },
            },
            {
              type: "transport",
              note: {
                mode: "步行 / 巴士",
                text: "「南京町 → GLION ARENA KOBE」｜步行約 18 分,或 Port Loop 巴士 5 分 ¥260。場館周圍無停車場,公共交通最順。",
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
                no: "04",
                name: "GLION ARENA KOBE 周邊用餐 & 領周邊",
                time: "17:00–18:30",
                desc: "2025 年開幕的海濱場館,日本首座 270 度被海包圍的競技場。周邊販售在場館外圍,建議 17:00 抵達搶先排。",
                meta: ["🎤 演出 19:00–21:30", "📦 周邊建議提早 1.5–2 小時排"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJVRlHQgCPAGAR8tKXuc75hYs",
              },
            },
            {
              type: "spot",
              spot: {
                no: "05",
                name: "🎤 演唱會 GLION ARENA KOBE",
                time: "19:00–21:30",
                desc: "享受演唱會!270 度海景背景超震撼。散場後三宮車站方向有臨時接駁巴士運行至結束後 1–1.5 小時。",
              },
            },
            {
              type: "transport",
              note: {
                mode: "散場交通",
                text: "「GLION ARENA → 三宮駅」｜臨時接駁直行｜約 5–10 分｜¥260。",
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
              desc: "創業 130 年神戶牛排專門店,桌前現切現煎。午間套餐 ¥8,000 起。建議 12:00 前到。",
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
        "演唱會隔天輕鬆移動。上午搭新幹線到岡山,先到倉敷美觀漫步白壁老街 + 乘船遊運河,傍晚回岡山入住。",
      lodging: "岡山駅前大和 ROYNET 飯店",
      route: {
        stops: ["新神戶駅", "岡山駅", "倉敷美觀地區", "岡山駅 AEON Mall"],
        mapUrl:
          "https://www.google.com/maps/dir/Shin-Kobe+Station/Okayama+Station/Kurashiki+Bikan+Historical+Quarter/Aeon+Mall+Okayama/",
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
                mode: "新幹線",
                text: "「新神戶駅 → 岡山駅」｜山陽新幹線｜約 28 分鐘｜自由席 ¥3,500／人。再轉 JR「岡山 → 倉敷」約 17 分 ¥330。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "01",
                name: "倉敷美觀地區",
                time: "10:30–14:00",
                desc: "完整保留白壁宅邸、紅磚倉庫的舊倉敷。路線:倉敷川兩岸柳樹白壁街道 → 大原美術館 → 倉敷物語館 → 阿智神社。必體驗川舟流(人力小船遊運河)¥700,限量。",
                meta: ["⏱ 建議停留 3.5 小時", "🛶 川舟流 ¥700(限量)", "📸 白壁倉庫 + 柳樹小橋"],
                mapUrl:
                  "https://www.google.com/maps/place/?q=place_id:ChIJ1do4lkdWUTURvg3rFkFpzhE",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Denim Heritage",
          items: [
            {
              type: "spot",
              spot: {
                no: "02",
                name: "兒島牛仔褲街(選擇性加碼)",
                time: "14:30–16:30",
                desc: "日本牛仔褲發源地,從倉敷搭 JR 約 25 分。整條街都是手工牛仔褲品牌。不熱衷可改去倉敷三井 Outlet Park。",
                meta: ["⏱ 建議停留 2 小時", "🛍 牛仔褲均價 ¥15,000 起"],
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
                no: "03",
                name: "岡山駅 AEON Mall + 表町商店街",
                time: "18:00–21:00",
                desc: "西日本最大級 AEON Mall,岡山限定伴手禮一次搞定。晚餐後可步行 10 分到表町商店街探訪老店。",
                meta: ["⏰ AEON 09:00–22:00"],
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
              name: "[午餐] CAFÉ EL GRECO",
              desc: "倉敷美觀地標級咖啡館,外觀爬滿常春藤的老宅。當作中午輕食 + 拍照點。週一公休。",
              prices: ["¥700–1,500／人", "⏰ 10:00–17:00 (週一休)"],
            },
            {
              name: "[晚餐] えびめしや 万成店(炒蝦飯)",
              desc: "岡山鄉土美食蝦飯,特製醬料炒成漆黑色炒飯加蝦仁、蛋皮絲。岡山駅周邊多家分店。",
              prices: ["¥900–1,400／人"],
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
        "最後一天輕鬆收尾。早上參觀日本三大名園的後樂園與黑色烏城岡山城,中午採購伴手禮,下午 14:00 搭巴士回機場。",
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
                text: "「岡山駅前 → 城下站」｜岡山路面電車｜約 5 分鐘｜¥140。下車走 10 分到後樂園。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "01",
                name: "岡山後樂園",
                time: "08:30–10:30",
                desc: "日本三大名園之一,米其林三星。300 多年前池田家造的迴遊式庭園。10 月底紅葉漸層轉色,湖面倒影超美。",
                meta: ["🎟 ¥400 / 後樂園+岡山城套票 ¥640", "⏰ 07:30–18:00", "📸 唯心山俯瞰"],
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
                time: "10:45–12:00",
                desc: "因黑色外牆稱為烏城,與姬路城白鷺城對比。2022 年改裝後是體驗式歷史博物館,有和服體驗。",
                meta: ["🎟 ¥400", "⏰ 09:00–17:30", "👘 和服體驗 ¥3,300 起"],
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
              type: "spot",
              spot: {
                no: "03",
                name: "岡山駅 伴手禮採購 & 退稅",
                time: "12:30–14:00",
                desc: "必買:白桃 KitKat、吉備糰子、岡山地酒、麝香葡萄餅乾。退稅在站內 SUNSTATION TERRACE 等,記得帶護照與收據。",
              },
            },
            {
              type: "transport",
              note: {
                mode: "機場巴士",
                text: "「岡山駅西口 → 岡山桃太郎機場」｜約 30 分鐘｜¥1,000。建議搭 14:00 班次(飛機 15:55 起飛)。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "04",
                name: "岡山桃太郎機場 出境 → 賦歸",
                time: "14:30–15:55",
                desc: "機場 2F「打うどん 桃太郎」讚岐烏龍麵是登機前最後一餐。15:55 起飛回桃園。",
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
      name: "Cross Hotel Osaka 大阪十字飯店",
      meta: ["💰 ¥18,000／晚(雙人)", "📍 心齋橋站 步行 3 分", "⭐ 4.3／5.0"],
      desc: "就在心齋橋商店街正中央,下樓就是道頓堀。日式禪風設計,公共浴池可放鬆,早餐有大阪燒現做。離兩條地鐵都近。",
    },
    {
      area: "神戶 · Day 4 一晚",
      name: "Hotel La'gent Stay Kobe Hyogo",
      meta: ["💰 ¥22,000／晚(雙人)", "📍 三宮駅 步行 5 分", "⭐ 4.4／5.0"],
      desc: "三宮車站附近新穎飯店,走到 GLION ARENA 約 20 分(巴士 5 分)。樓層高可俯瞰神戶港夜景,附大浴場與三溫暖。",
    },
    {
      area: "岡山 · Day 5 一晚",
      name: "岡山駅前大和 ROYNET 飯店",
      meta: ["💰 ¥14,000／晚(雙人)", "📍 岡山駅 步行 3 分", "⭐ 4.3／5.0"],
      desc: "最後一晚住岡山駅前最方便,隔天搭機場巴士只要走 3 分。附近超商、AEON Mall 步行可達,早餐有岡山在地料理。",
    },
  ],
  budget: [
    { date: "10/18 Day 1", transport: "¥14,500", tickets: "¥0", food: "¥5,000", lodging: "¥18,000", total: "¥37,500" },
    { date: "10/19 Day 2", transport: "¥1,800", tickets: "¥4,100", food: "¥7,000", lodging: "¥18,000", total: "¥30,900" },
    { date: "10/20 Day 3", transport: "¥4,200", tickets: "¥4,500", food: "¥7,500", lodging: "¥18,000", total: "¥34,200" },
    { date: "10/21 Day 4", transport: "¥2,500", tickets: "¥6,000", food: "¥20,000", lodging: "¥22,000", total: "¥50,500" },
    { date: "10/22 Day 5", transport: "¥9,000", tickets: "¥1,400", food: "¥6,000", lodging: "¥14,000", total: "¥30,400" },
    { date: "10/23 Day 6", transport: "¥2,300", tickets: "¥1,300", food: "¥4,000", lodging: "—", total: "¥7,600" },
    { date: "合計", transport: "¥34,300", tickets: "¥17,300", food: "¥49,500", lodging: "¥90,000", total: "¥191,100", isTotal: true },
  ],
  budgetNote:
    "約合台幣 NT$ 42,600(2人合計)／每人 NT$ 21,300。匯率以 ¥1 ≈ NT$ 0.223 計算。未含機票、購物、周邊與伴手禮(建議再保留 NT$ 10,000–20,000／人)。",
  tips: [
    {
      title: "交通票券建議",
      body: "建議買「JR 關西&廣島地區鐵路周遊券」5 日券(¥17,000),涵蓋新幹線新大阪–岡山段、JR 神戶線、山陽本線(含倉敷)。再買一張 ICOCA 卡搭地鐵巴士都通用。",
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
      body: "10/21 是關鍵日:① 提前 1–2 小時抵達領周邊 ② 場內可寄物 ③ 飯店訂三宮附近,散場有臨時接駁巴士 ④ 票記得下載到手機 ⑤ 注意證件。",
    },
    {
      title: "奈良餵鹿注意",
      body: "① 鹿仙貝從正規攤位買 ② 不要拿著仙貝給鹿看卻不給 ③ 紙袋、手冊、緞帶都會被鹿吃 ④ 對鹿低頭牠會回禮 ⑤ 給完雙手攤開「沒了」鹿會懂。",
    },
    {
      title: "免稅與退稅",
      body: "退稅門檻單筆滿 ¥5,000(未稅),結帳時出示護照。2026 年起改成「離境時退稅」,購買先付含稅金額,離境在機場退稅櫃台辦(預留 1 小時)。",
    },
    {
      title: "必裝 APP 清單",
      body: "① Google Maps ② Yahoo! 乗換案内(電車換乘最強)③ tabelog 食べログ ④ Klook / KKday(門票折扣)⑤ Google 翻譯 ⑥ holoplus。",
    },
  ],
};
