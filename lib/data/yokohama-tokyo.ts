import type { Journey } from "../journeys";

// 橫濱 × 東京 3天2夜快閃 LIVE 行程 — 兩晚 K アリーナ横浜演唱會，穿插池袋最新玩具旗艦、萬代扭蛋、東京車站一番街、秋葉原、新宿和牛吃到飽、nanamica 雙重備案與野毛慶功
export const yokohamaTokyo: Journey = {
  slug: "yokohama-tokyo-2026",
  name: "橫濱 × 東京 3天2夜",
  place: "日本 · 橫濱／東京",
  scope: "overseas",
  startDate: "2026-09-08",
  endDate: "2026-09-10",
  tone: "deep",
  excerpt: "雙晚 K アリーナ横浜 LIVE，穿插池袋最新 Yodobashi 玩具旗艦、萬代扭蛋雙大本營、東京車站一番街 Hololive、新宿和牛燒肉吃到飽與 nanamica 雙重備案。",
  tags: ["橫濱", "東京", "演唱會", "扭蛋", "模型", "和牛燒肉", "nanamica", "美食"],
  highlights: [
    { label: "日期", value: "09.08 – 09.10" },
    { label: "人數", value: "2 位成人" },
    { label: "風格", value: "玩具模型 · 扭蛋 · 潮流 · 和牛 · LIVE" },
    { label: "亮點", value: "K アリーナ横浜 ×2 場" },
  ],
  days: [
    {
      day: 1,
      date: "2026.09.08 · 二",
      title: "池袋玩具扭蛋雙旗艦 × 東京車站一番街 × 秋葉原 × LIVE ①",
      summary:
        "清晨 05:00 羽田出關直奔橫濱飯店寄放行李，搭車直達池袋開箱 2026 最新 Yodobashi 關東最大玩具層與 Sunshine City 萬代扭蛋總本店；午後搭地鐵 17 分鐘直達東京車站，在一番街吃拉麵、逛 Hololive Shop 與萬代官方扭蛋店，並穿過丸之內地下道查看新丸ビル 4F THE NORTH FACE 紫標；隨後搭 JR 4 分鐘快閃秋葉原模型電器街，傍晚直達回橫濱看首場 LIVE，散場來碗熱騰騰家系或 AFURI 柚子鹽拉麵。",
      lodging: "Hotel Route Inn 橫濱馬車道",
      route: {
        stops: [
          "羽田空港",
          "橫濱馬車道",
          "池袋 Yodobashi 5F",
          "Sunshine City 萬代總本店",
          "東京車站一番街",
          "新丸ビル(紫標備案)",
          "秋葉原 電器街",
          "K アリーナ横浜",
        ],
        mapUrl:
          "https://www.google.com/maps/dir/羽田空港/馬車道駅/ヨドバシカメラマルチメディア池袋/サンシャインシティ/東京駅一番街/新丸の内ビルディング/秋葉原駅/Kアリーナ横浜/",
      },
      points: [
        { name: "羽田空港", lat: 35.5494, lng: 139.7798, kind: "transit" },
        { name: "橫濱馬車道", lat: 35.4487, lng: 139.6375, kind: "stay" },
        { name: "池袋 Yodobashi 5F", lat: 35.7292, lng: 139.7118, kind: "spot" },
        { name: "Sunshine City 萬代總本店", lat: 35.7288, lng: 139.7193, kind: "spot" },
        { name: "東京車站一番街", lat: 35.6812, lng: 139.7671, kind: "spot" },
        { name: "新丸ビル (TNF紫標)", lat: 35.6825, lng: 139.7648, kind: "spot" },
        { name: "秋葉原", lat: 35.6984, lng: 139.7731, kind: "spot" },
        { name: "K アリーナ横浜", lat: 35.4645, lng: 139.6265, kind: "spot" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Arrival & Ikebukuro",
          items: [
            {
              type: "spot",
              spot: {
                no: "01",
                name: "羽田空港出關 → 橫濱馬車道飯店寄行李 · 早餐",
                time: "05:00–07:30",
                desc: "約 05:00 出關後搭京急線至橫濱轉港未來線至馬車道。Route Inn 櫃台 24 小時服務，入住當天隨時可免費寄物。一身輕後在馬車道/櫻木町吃早餐補眠休息，準備前往池袋。",
                meta: ["🧳 24小時免費寄行李", "🥪 馬車道悠閒早餐", "⚡ 全程直刷交通IC卡"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=Hotel+Route+Inn+横浜馬車道",
              },
            },
            {
              type: "transport",
              note: {
                mode: "京急線 + 港未來線",
                text: "「羽田空港 → 橫濱 → 馬車道」約 40 分鐘｜約 ¥570。寄完行李由橫濱站搭 JR 湘南新宿線直達池袋（約 40 分鐘｜¥690）。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "02",
                name: "池袋最新「ヨドバシカメラ マルチメディア池袋」5F 玩具模型層",
                time: "09:30–11:15",
                desc: "2026年6月全新盛大開幕！池袋站東口直結西武大樓，5 樓整層為關東最大級「玩具・模型・電玩・卡牌」專門旗艦層，鋼彈、模型塗裝工具極度齊全，且光是這層就進駐了約 3,000 台扭蛋機！09:30 準時開門進場最過癮。",
                meta: ["🤖 5F 關東最大級玩具模型層", "🎰 單層約 3,000 台扭蛋", "⏰ 09:30 開門直衝"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=ヨドバシカメラ+マルチメディア池袋",
              },
            },
            {
              type: "spot",
              spot: {
                no: "03",
                name: "萬代扭蛋百貨 池袋總本店（Sunshine City 3F）",
                time: "11:30–12:45",
                desc: "從 Yodobashi 步行約 8 分鐘抵達太陽城 3F。世界最大級扭蛋專賣店（獲金氏世界紀錄認證，超過 3,000 台機台），官方萬代最新款、限定扭蛋一應俱全。",
                meta: ["🏆 世界最大級扭蛋店", "🎰 3,000+ 機台轉好轉滿", "⏰ 10:00–21:00"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=ガシャポンのデパート+池袋総本店",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Tokyo Station & Akihabara",
          items: [
            {
              type: "transport",
              note: {
                mode: "東京地鐵丸之內線",
                text: "「池袋 → 東京車站」搭乘東京地鐵丸之內線直達｜只要 17 分鐘｜¥210。一車直達八重洲與丸之內地下街。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "04",
                name: "東京車站一番街 午餐（東京拉麵街 / 極味屋）",
                time: "13:00–14:00",
                desc: "東京車站 B1F 八重洲地下街，推薦東京拉麵街人氣沾麵「六厘舍」或濃郁豚骨「斑鳩」；亦可選擇超人氣鐵板炭火漢堡排「極味屋」，吃飽直接在同條街無縫逛動漫！",
                meta: ["🍜 六厘舍超濃沾麵", "🥩 極味屋漢堡排", "📍 東京車站一番街 B1F"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=東京駅一番街+東京ラーメンストリート",
              },
            },
            {
              type: "spot",
              spot: {
                no: "05",
                name: "東京キャラクターストリート：Hololive Shop ＋ 萬代扭蛋店",
                time: "14:00–15:00",
                desc: "兩間店都在一番街同一條街上，步行相距僅 1 分鐘：\n1. hololive production official shop in Tokyo Station（VTuber 官方周邊專門店，營業 10:00–20:30）\n2. 萬代官方扭蛋商店 ＠TOKYO STATION（官方最新款機台，營業 10:00–20:30）。",
                meta: ["🦊 Hololive 官方直營店", "🎰 萬代官方扭蛋店", "🚶 兩家走路 1 分鐘一次逛齊"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=東京キャラクターストリート",
              },
            },
            {
              type: "spot",
              spot: {
                no: "06",
                name: "👔【紫標雙重備案】THE NORTH FACE 丸の内店（新丸ビル 4F）",
                time: "15:00–15:30",
                desc: "從一番街穿過東京車站地下中央通道步行約 3 分鐘至新丸大廈 4F。此店常設展示大量由 nanamica 操刀監製的「THE NORTH FACE Purple Label（紫標）」全系列服飾配件，第一道防線先看看有無心儀單品！",
                meta: ["💜 nanamica 紫標專門店", "🏢 新丸ビル 4F 直結", "🚶 走地下道即達"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=THE+NORTH+FACE+丸の内店",
              },
            },
            {
              type: "transport",
              note: {
                mode: "JR 山手線 / 京濱東北線",
                text: "「東京車站 → 秋葉原」搭 JR 只要 2 站約 4 分鐘｜¥150。快速切換至動漫電器聖地。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "07",
                name: "秋葉原 電器街 · 模型動漫補貨",
                time: "15:45–16:45",
                desc: "重點快攻 amiami 秋葉原フィギュアタワー（8 層公仔模型塔）與ラジオ会館（K-BOOKS、海洋堂、動漫周邊），快速掃光鎖定的手辦模型與扭蛋遺珠。控制在 1 小時內，準備搭車回橫濱！",
                meta: ["🕹 amiami 8層公仔塔", "🏬 ラジオ会館模型聖地", "⏱ 控制在 1 小時左右"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=amiami+秋葉原フィギュアタワー",
              },
            },
            {
              type: "transport",
              note: {
                mode: "JR 上野東京線 / 東海道線",
                text: "「秋葉原 / 東京 → 橫濱」搭 JR 上野東京線/東海道線直達｜約 32 分鐘｜約 ¥580。17:25 抵達橫濱新高島。",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · LIVE ① & Yokohama Nights",
          items: [
            {
              type: "spot",
              spot: {
                no: "08",
                name: "🎤 LIVE ① @ K アリーナ横浜",
                time: "17:15 入場 / 19:00 開演",
                desc: "抵達橫濱後轉港未來線至新高島（或由橫濱站東口步行約 12 分鐘）。建議 18:00 前進場，場內有美食 lounge 與大量置物櫃，全館採電子支付。",
                meta: ["🎤 開演 19:00", "🏟 世界最大級音樂專用場館", "💳 全館電子支付"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=Kアリーナ横浜",
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
              name: "[午餐] 東京車站一番街（六厘舍沾麵 / 斑鳩拉麵 / 極味屋）",
              desc: "東京拉麵天花板六厘舍，粗麵搭配極濃魚介豚骨沾醬；或極味屋現煎炭火漢堡排。",
              prices: ["¥1,000–1,800／人", "★ 4.3"],
            },
            {
              name: "[宵夜推薦 1] 橫濱家系拉麵（橫濱站前）",
              desc: "橫濱是家系拉麵發源地！看完 LIVE 散場來碗熱騰騰濃郁豚骨醬油雞油拉麵配大片海苔，無比過癮。",
              prices: ["¥900–1,300／人"],
            },
            {
              name: "[宵夜推薦 2] AFURI 阿夫利（橫濱 Landmark Tower 店）",
              desc: "若想吃清爽宵夜，推薦 AFURI 天然水柚子鹽拉麵，營業至 23:00。",
              prices: ["¥1,200／人", "⏰ 開到 23:00", "★ 4.5"],
            },
          ],
        },
      ],
    },
    {
      day: 2,
      date: "2026.09.09 · 三",
      title: "Wonderia YOKOHAMA × 新宿和牛吃到飽 × nanamica × 歌舞伎町 × LIVE ②",
      summary:
        "上午 10:00 準時入場橫濱関内的 Wonderia YOKOHAMA 沉浸式生物展；中午搭 JR 湘南新宿線 32 分鐘一車直達新宿，在「肉屋の台所 新宿歌舞伎町店」大快朵頤 A4/A5 黑毛和牛燒肉吃到飽（前晚睡飽後戰力最強！）；午後步行至伊勢丹新宿メンズ館 6F nanamica 旗艦專櫃選購，再到東急歌舞伎町塔 namco TOKYO 官方扭蛋消食；傍晚直達回橫濱看第二場 LIVE，散場後在馬車道旁的野毛居酒屋街大肆慶功。",
      lodging: "Hotel Route Inn 橫濱馬車道",
      route: {
        stops: [
          "Wonderia 橫濱(関内)",
          "肉屋の台所 新宿歌舞伎町店",
          "nanamica 伊勢丹新宿",
          "東急歌舞伎町塔 namco TOKYO",
          "K アリーナ横浜",
          "野毛居酒屋街",
        ],
        mapUrl:
          "https://www.google.com/maps/dir/BASEGATE横浜関内/肉屋の台所+新宿歌舞伎町店/伊勢丹新宿店/東急歌舞伎町タワー/Kアリーナ横浜/野毛町/",
      },
      points: [
        { name: "Wonderia 橫濱(関内)", lat: 35.4438, lng: 139.6355, kind: "spot" },
        { name: "肉屋の台所 新宿歌舞伎町店", lat: 35.6945, lng: 139.7025, kind: "food" },
        { name: "nanamica 伊勢丹新宿", lat: 35.6917, lng: 139.7046, kind: "spot" },
        { name: "東急歌舞伎町塔 namco TOKYO", lat: 35.6953, lng: 139.7015, kind: "spot" },
        { name: "K アリーナ横浜", lat: 35.4645, lng: 139.6265, kind: "spot" },
        { name: "野毛居酒屋街", lat: 35.4485, lng: 139.6288, kind: "food" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Wonderia YOKOHAMA",
          items: [
            {
              type: "spot",
              spot: {
                no: "01",
                name: "Wonderia YOKOHAMA 橫濱沉浸式體驗館（已預約 10:00）",
                time: "10:00–12:00",
                desc: "位於飯店旁的関内 BASEGATE，DeNA 打造的沉浸式數位生物探索館：高原、深海、原生林、洞窟 6 大光影主題區，配合專屬手機 App 掃描收集未知生物。全館電子支付，備有免費置物櫃。",
                meta: ["🎫 已預約 10:00 首場票", "📱 專屬 App 掃描生物", "⏰ 預計 12:00 結束"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=BASEGATE横浜関内",
              },
            },
            {
              type: "transport",
              note: {
                mode: "JR 湘南新宿線",
                text: "「橫濱 ➔ 新宿」搭 JR 湘南新宿線快速｜只要 32 分鐘一車直達｜約 ¥580。約 12:48 抵達新宿，步行 5 分鐘抵達歌舞伎町。",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Shinjuku Gourmet & Fashion",
          items: [
            {
              type: "spot",
              spot: {
                no: "02",
                name: "🥩 [午餐大餐] 和牛燒肉吃到飽「肉屋の台所 新宿歌舞伎町店」",
                time: "13:00–14:30",
                desc: "A4/A5 ランク黑毛和牛燒肉吃到飽！前一晚睡飽充電後戰力全開，厚切牛舌、特選和牛牛小排無限續點，平日午餐時段更有特惠（建議事先至官網預約 13:00）。大口吃肉補足滿滿體力！",
                meta: ["🥩 A4/A5 黑毛和牛吃到飽", "🔥 前晚睡飽戰力最強", "📝 建議提前官網訂位"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=肉屋の台所+新宿歌舞伎町店",
              },
            },
            {
              type: "spot",
              spot: {
                no: "03",
                name: "👔 nanamica 伊勢丹新宿店（メンズ館 6F）",
                time: "14:45–15:45",
                desc: "從歌舞伎町步行 6–8 分鐘即抵伊勢丹新宿店メンズ館 6F。第一優先鎖定 nanamica 本線與 THE NORTH FACE Purple Label（紫標）防風風衣、經典襯衫與潮流配件，若 Day 1 在新丸ビル沒買齊，這裡有最齊全的直營專櫃支援！",
                meta: ["👔 nanamica 專櫃直營", "💜 Purple Label 紫標齊全", "📍 伊勢丹新宿メンズ館 6F"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=伊勢丹新宿店+メンズ館",
              },
            },
            {
              type: "spot",
              spot: {
                no: "04",
                name: "🎰 namco TOKYO 東急歌舞伎町塔 3F",
                time: "15:45–16:30",
                desc: "歌舞伎町嶄新地標 3F，結合娛樂酒吧音樂與大量萬代官方扭蛋機台，逛完伊勢丹後走回歌舞伎町順路開轉消化，放鬆身心。",
                meta: ["🗼 歌舞伎町全新地標", "🎰 大量官方扭蛋機台", "⏰ 營業至深夜 01:00"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=namco+TOKYO+東急歌舞伎町タワー",
              },
            },
            {
              type: "transport",
              note: {
                mode: "JR 湘南新宿線",
                text: "「新宿 ➔ 橫濱」搭 JR 湘南新宿線快速/特別快速｜約 32 分鐘一車直達｜約 ¥580。上車補眠，一路睡回橫濱新高島！",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · LIVE ② & Noge After-Party",
          items: [
            {
              type: "spot",
              spot: {
                no: "05",
                name: "🎤 LIVE ② @ K アリーナ横浜",
                time: "17:30 入場 / 19:00 開演",
                desc: "第二場演唱會開演！經過兩天的踩點與購物，今晚毫無牽掛地在世界最大級音樂廳徹底燃燒。散場約 21:30。",
                meta: ["🎤 開演 19:00", "🔥 第二晚最終巡禮"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=Kアリーナ横浜",
              },
            },
            {
              type: "spot",
              spot: {
                no: "06",
                name: "🍻 [慶功宵夜] 橫濱在地深夜食堂：野毛居酒屋街",
                time: "22:00–24:00",
                desc: "散場後回飯店放戰利品，從飯店馬車道步行僅 6–8 分鐘即可抵達橫濱最著名的昭和風居酒屋一條街「野毛」！上百家串燒、關東煮、海鮮與精釀啤酒小酒館營業至深夜，氣氛極嗨，為這趟快閃 LIVE 劃下完美句點！",
                meta: ["🍢 昭和老派居酒屋聖地", "🍺 散場慶功首選", "🚶 離飯店步行僅 8 分鐘"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=野毛町+居酒屋",
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
              name: "[午餐大餐] 肉屋の台所 新宿歌舞伎町店",
              desc: "A4/A5 黑毛和牛燒肉吃到飽名店，平日午餐優惠，牛舌與橫膈膜必點。",
              prices: ["¥4,500–6,500／人", "★ 4.2", "📝 建議官網先預約"],
            },
            {
              name: "[慶功宵夜] 野毛居酒屋街（串炸、串燒、小酒館）",
              desc: "橫濱最具代表性的深夜食堂街，小店林立、熱鬧溫馨，吃串燒喝啤酒慶功最對味。",
              prices: ["¥2,500–4,000／人", "⏰ 營業至深夜"],
            },
          ],
        },
      ],
    },
    {
      day: 3,
      date: "2026.09.10 · 四 · 回程",
      title: "深夜賦歸（凌晨紅眼班機 IT217）",
      summary:
        "第二場散場與野毛慶功後回飯店打包稍作休息，兩晚住宿涵蓋 9/8 與 9/9，在飯店踏實補眠至 02:30；02:45 退房，03:00 預約計程車直奔羽田機場 T3（半夜高速公路無車僅 25–30 分鐘），從容辦理托運與出關，搭乘 05:25 班機返台。",
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
                name: "散場慶功 → 回飯店整理行李 · 床上睡覺補眠",
                time: "9/9 ~23:30–02:30",
                desc: "野毛吃完宵夜後回飯店打包戰利品、洗熱水澡，在房間床上舒服睡 3 小時補眠充電。Route Inn 櫃台 24 小時服務，02:45 辦理退房。",
                meta: ["🧳 打包退房", "🛌 睡飽補眠不浪費房費", "🛎 櫃台 24 小時"],
              },
            },
            {
              type: "spot",
              spot: {
                no: "02",
                name: "搭乘預約計程車直奔羽田機場 T3（IT217 05:25 起飛）",
                time: "03:00",
                desc: "凌晨 03:00 預約計程車在飯店門口上車，走首都高速灣岸線直奔羽田機場國際線 T3，約 25–30 分鐘即可抵達航廈門口（車資約 ¥8,500–10,000／車，2 人分攤每人約 ¥4,500–5,000）。03:30 輕鬆掛行李、安檢出關，搭乘 05:25 班機返台！",
                meta: ["🚕 門口專車直達（25–30分）", "💰 每人約分攤 ¥4,500–5,000", "✈️ 05:25 起飛返台"],
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
      meta: ["📍 神奈川県横浜市中区弁天通4-53-1", "🚇 港未來線馬車道站步行 1 分", "🛎 櫃台 24 小時"],
      desc: "位於関内／馬車道一帶，離 Wonderia YOKOHAMA（関内）步行即達，往 K アリーナ横浜地鐵僅 2 站；步行 6–8 分鐘直達野毛居酒屋街。大廳位於 2 樓，櫃台 24 小時服務，入住當天清晨即可免費寄放行李，凌晨退房便利。",
    },
  ],
  budget: [
    { date: "09/08 Day 1", transport: "¥3,800", tickets: "—", food: "¥7,000", lodging: "—", total: "¥10,800" },
    { date: "09/09 Day 2", transport: "¥3,200", tickets: "—", food: "¥16,000", lodging: "—", total: "¥19,200" },
    { date: "09/10 Day 3", transport: "¥9,000", tickets: "—", food: "¥1,000", lodging: "—", total: "¥10,000" },
    { date: "合計(2人)", transport: "¥16,000", tickets: "—", food: "¥24,000", lodging: "—", total: "¥40,000", isTotal: true },
  ],
  budgetNote:
    "以上為「現場變動花費」估算（2 人合計），不含已訂之機票、住宿、演唱會門票與 Wonderia 入門票，亦不含扭蛋、模型與 nanamica 服飾購物（另計）。交通建議全程直接刷 IC 卡（Suica / PASMO / Apple Pay 交通卡），總車資每人僅約 ¥3,500–4,000 日圓，比買任何通票都划算且快得多。Day 3 交通以計程車估算（約 ¥9,000 / 2 人）。金額依當日匯率與消費而定（¥1 ≈ NT$0.21）。",
  tips: [
    {
      title: "nanamica 雙重備案機制",
      body: "Day 1 下午在東京車站逛一番街時，順路穿過丸之內地下道至新丸ビル 4F THE NORTH FACE（專賣 nanamica 操刀的 Purple Label 紫標）；若想要更多款式與本線，Day 2 下午在新宿伊勢丹メンズ館 6F 直營專櫃再度選購，雙重防線絕不漏勾！",
    },
    {
      title: "肉屋の台所 建議提前預約",
      body: "新宿歌舞伎町店的和牛燒肉吃到飽在午餐時段人氣極旺，排在 Day 2 睡飽後吃戰力最強。建議出發前一週先上官方網站或日本預約平台（Hot Pepper）預約 9/9 中午 13:00，到場免排隊直接開烤。",
    },
    {
      title: "全程免買套票，直刷 IC 卡最省",
      body: "橫濱往返池袋（JR 湘南新宿線約 40 分）、橫濱往返新宿（約 32 分）、橫濱往返東京車站（JR 東海道線約 28 分）、池袋往東京車站（地鐵丸之內線約 17 分）全部一車直達，無需複雜轉乘。3 天車資每人合計約 ¥3,800 有找，直接逼 iPhone Apple Pay 交通卡最省時省力。",
    },
    {
      title: "池袋最新 Yodobashi 亮點",
      body: "2026年6月甫開幕的池袋東口西武大樓，5 樓為關東最大級模型玩具專門層，09:30 就開門。鋼彈模型、塗裝工具超齊全，單層更設有約 3,000 台扭蛋機！",
    },
    {
      title: "東京車站一番街雙店同路",
      body: "Hololive production official shop 與萬代官方扭蛋商店都在東京車站一番街 B1F「東京キャラクターストリート」，兩家店相鄰僅 1 分鐘步程，一網打盡超省時。",
    },
    {
      title: "Day 3 凌晨計程車預約提醒",
      body: "IT217 05:25 起飛，因深夜無電車，強烈建議在 Day 1 寄行李或 Day 2 時，請 Hotel Route Inn 橫濱馬車道 24 小時櫃台代為預約 9/10 凌晨 03:00 的計程車直達羽田 T3，25–30 分鐘即達航廈門口。",
    },
  ],
};
