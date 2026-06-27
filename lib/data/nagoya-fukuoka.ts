import type { Journey } from "../journeys";

// 名古屋 · 福岡 9天8夜深度自由行 — 以名古屋為重心,兩場演唱會 + 紅葉 + 在地美食
export const nagoyaFukuoka: Journey = {
  slug: "nagoya-fukuoka-2026",
  name: "名古屋 · 福岡 9天8夜",
  place: "日本 · 中部／九州",
  scope: "overseas",
  startDate: "2026-11-06",
  endDate: "2026-11-14",
  tone: "forest",
  excerpt: "紅葉 × 兩場 LIVE × 吃透在地,以名古屋為重心,一路南下到博多屋台。",
  tags: ["中部", "九州", "演唱會", "紅葉", "美食"],
  highlights: [
    { label: "日期", value: "11.06 – 11.14" },
    { label: "人數", value: "3 位成人" },
    { label: "風格", value: "小資自由行" },
    { label: "亮點", value: "名古屋 + 福岡兩場 LIVE" },
  ],
  days: [
    {
      day: 1,
      date: "2026.11.06 · 五",
      title: "抵達中部國際空港 · 名古屋初夜",
      summary:
        "傍晚 17:15 降落中部國際空港,搭名鐵 μSKY 特急進市區入住榮一帶,放下行李就近吃名古屋名物,輕鬆開場別排太硬。",
      lodging: "Hotel MyStays 名古屋榮(榮)",
      route: {
        stops: ["中部國際空港", "名古屋駅", "榮 · 飯店", "矢場とん 名古屋站店"],
        mapUrl:
          "https://www.google.com/maps/dir/中部国際空港/名古屋駅/栄駅/",
      },
      points: [
        { name: "中部國際空港", lat: 34.8584, lng: 136.8051, kind: "transit" },
        { name: "名古屋駅", lat: 35.1709, lng: 136.8815, kind: "transit" },
        { name: "榮", lat: 35.17, lng: 136.908, kind: "stay" },
      ],
      blocks: [
        {
          period: "evening",
          label: "晚上 · Arrival Night",
          items: [
            {
              type: "spot",
              spot: {
                no: "01",
                name: "中部國際空港(セントレア)入境",
                time: "17:15",
                desc: "CI150 班機降落後依序通關、領行李,估計 18:00 前後出大廳。名鐵改札就在航廈 2F 連通,動線清楚不用找。",
                meta: ["🛬 預估出關 18:00", "🚆 名鐵改札在 2F 連通"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=中部国際空港",
              },
            },
            {
              type: "transport",
              note: {
                mode: "名鐵 μSKY",
                text: "「中部空港 → 名古屋駅」｜名鐵 μSKY 特急(全車指定席)｜約 28–40 分鐘｜¥1,250／人。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "02",
                name: "榮 / 名古屋站 飯店 Check-in",
                time: "19:00",
                desc: "入住榮或名古屋站一帶飯店,放行李、稍作休息,再就近吃名古屋名物開場。",
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
              name: "矢場とん(名古屋站店)",
              desc: "名古屋味噌豬排始祖,濃郁八丁味噌淋醬,站內好找,適合落地第一餐。",
              prices: ["¥1,500–2,200／人"],
            },
            {
              name: "世界の山ちゃん 本店",
              desc: "手羽先(雞翅)名店,胡椒香脆、配啤酒一流,營業到深夜。",
              prices: ["¥2,000–3,000／人", "⏰ 營業到深夜"],
            },
          ],
        },
      ],
    },
    {
      day: 2,
      date: "2026.11.07 · 六 · 演唱會日",
      title: "名古屋城 · 大須 · 夜場 LIVE",
      summary:
        "上午攻名古屋城本丸御殿賞金鯱與華麗障壁畫,下午逛大須商店街二次元挖寶,傍晚提早回名城公園 IG アリーナ,18:00 開唱。",
      lodging: "Hotel MyStays 名古屋榮(榮)",
      route: {
        stops: ["名古屋城", "大須商店街", "IG アリーナ"],
        mapUrl:
          "https://www.google.com/maps/dir/名古屋城/大須観音/IGアリーナ/",
      },
      points: [
        { name: "名古屋城", lat: 35.1856, lng: 136.8997, kind: "spot" },
        { name: "大須觀音", lat: 35.1595, lng: 136.8995, kind: "spot" },
        { name: "IG アリーナ", lat: 35.1865, lng: 136.906, kind: "spot" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Nagoya Castle",
          items: [
            {
              type: "spot",
              spot: {
                no: "01",
                name: "名古屋城 · 本丸御殿",
                time: "09:00–11:30",
                desc: "金鯱與復原的華麗障壁畫必拍,本丸御殿免費入內(含天守券)。秋日天守石垣搭楓葉氣氛佳。",
                meta: ["🎟 ¥500", "⏰ 09:00–16:30", "📸 金鯱 + 障壁畫"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=名古屋城",
              },
            },
            {
              type: "transport",
              note: {
                mode: "地鐵",
                text: "「名古屋駅 → 市役所／名城公園」｜地鐵名城線｜約 15 分鐘｜¥240。",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Osu Town",
          items: [
            {
              type: "spot",
              spot: {
                no: "02",
                name: "大須商店街 · 大須觀音",
                time: "13:00–16:00",
                desc: "動漫二次元、古著、扭蛋、小吃一條街,很好拍也很好逛,動漫迷友善。",
                meta: ["⏱ 建議停留 3 小時", "🛍 動漫/古著/扭蛋/小吃"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=大須観音",
              },
            },
            {
              type: "transport",
              note: {
                mode: "地鐵",
                text: "「大須觀音 → 名城公園」｜鶴舞線轉名城線｜約 15 分鐘｜¥240。",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · LIVE Night",
          items: [
            {
              type: "spot",
              spot: {
                no: "03",
                name: "🎤 IG アリーナ(名城公園)",
                time: "16:30 入場 / 18:00 開演",
                desc: "緊鄰名古屋城的新場館,名城線「名城公園」站徒步 0–3 分。建議 16:30–17:00 先排周邊再入場。",
                meta: ["🎤 開演 18:00", "📦 周邊提早 1–1.5 小時排"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=IGアリーナ",
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
              name: "[午餐] 金シャチ横丁(名古屋城旁)",
              desc: "城邊美食街,味噌煮込烏龍、味噌串、ひつまぶし一次集合,逛城順吃最方便。",
              prices: ["¥1,500–2,500／人"],
            },
            {
              name: "[晚餐] 演唱會前:會場周邊輕食/便利商店",
              desc: "場內也有餐飲攤位,演唱會前先墊胃為主,別吃太飽。",
              prices: ["¥800–1,500／人"],
            },
            {
              name: "[宵夜] 散場後 世界の山ちゃん 等居酒屋",
              desc: "手羽先 + 台灣拉麵收尾,名古屋夜食魂。",
              prices: ["¥2,000–3,000／人"],
            },
          ],
        },
      ],
    },
    {
      day: 3,
      date: "2026.11.08 · 日",
      title: "犬山城下町一日遊 · 國寶天守",
      summary:
        "搭名鐵到犬山,登日本現存最古天守之一的犬山城眺望木曾川,城下町邊走邊吃,三光稻荷神社拍粉紅愛心繪馬,傍晚回榮晚餐逛街。",
      lodging: "Hotel MyStays 名古屋榮(榮)",
      route: {
        stops: ["名古屋駅", "犬山城", "犬山城下町", "三光稻荷神社", "榮"],
        mapUrl:
          "https://www.google.com/maps/dir/名古屋駅/犬山城/三光稲荷神社/栄駅/",
      },
      points: [
        { name: "犬山城", lat: 35.388, lng: 136.9395, kind: "spot" },
        { name: "犬山城下町", lat: 35.385, lng: 136.941, kind: "food" },
        { name: "三光稻荷神社", lat: 35.387, lng: 136.9405, kind: "spot" },
        { name: "榮", lat: 35.17, lng: 136.908, kind: "food" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Inuyama Castle",
          items: [
            {
              type: "transport",
              note: {
                mode: "名鐵犬山線",
                text: "「名古屋 → 犬山遊園／犬山」｜名鐵犬山線急行｜約 25–30 分鐘｜¥650／人。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "01",
                name: "犬山城(國寶天守)",
                time: "10:00–11:30",
                desc: "日本現存最古天守之一、國寶。登天守眺望木曾川超開闊,城外是保存良好的江戶城下町。",
                meta: ["🎟 ¥550", "⏰ 09:00–16:30", "🏯 木曾川展望"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=犬山城",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Castle Town & Shrine",
          items: [
            {
              type: "spot",
              spot: {
                no: "02",
                name: "犬山城下町",
                time: "11:30–14:00",
                desc: "邊走邊吃田樂、串物、五平餅、げんこつ飴,氣氛最對味。",
                meta: ["⏱ 建議停留 2.5 小時", "🍢 田樂/五平餅"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=犬山城下町",
              },
            },
            {
              type: "spot",
              spot: {
                no: "03",
                name: "三光稻荷神社",
                time: "14:00–15:00",
                desc: "粉紅愛心繪馬與錢洗弁財天,網美必拍。若紅葉已轉紅,可加碼尾張紅葉寺寂光院(もみじまつり 11/8–12/7)。",
                meta: ["📸 粉紅愛心繪馬", "🪙 錢洗弁財天"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=三光稲荷神社+犬山",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · Back to Sakae",
          items: [
            {
              type: "transport",
              note: {
                mode: "名鐵犬山線",
                text: "「犬山 → 名古屋」｜約 30 分鐘｜¥650。回榮一帶晚餐逛街。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "04",
                name: "榮 晚餐 + 夜逛",
                time: "17:30–21:00",
                desc: "唐吉訶德、LOFT 補貨,順吃名古屋名物。",
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
              name: "[午餐] 犬山城下町 街頭小吃",
              desc: "田樂、串物、五平餅、げんこつ飴邊走邊吃,氣氛最對味。",
              prices: ["¥1,200–1,800／人"],
            },
            {
              name: "[晚餐] 山本屋本店(味噌煮込烏龍)",
              desc: "名古屋名物,土鍋濃味噌湯頭 + 硬芯烏龍,配生雞蛋與飯。",
              prices: ["¥1,500–2,500／人"],
            },
            {
              name: "[晚餐替代] 味仙(台灣拉麵發源)",
              desc: "名古屋發明的「台灣拉麵」辛辣過癮,台灣人來必朝聖。",
              prices: ["¥1,200–1,800／人"],
            },
          ],
        },
      ],
    },
    {
      day: 4,
      date: "2026.11.09 · 一 · 紅葉",
      title: "香嵐溪賞楓 · 足助老街",
      summary:
        "平日避開人潮前往東海第一紅葉名所香嵐溪,待月橋與紅葉隧道賞楓,步行到足助老街看白壁町家,傍晚提早回名古屋市區晚餐。",
      lodging: "Hotel MyStays 名古屋榮(榮)",
      route: {
        stops: ["浄水站", "香嵐溪", "足助老街", "名古屋市區"],
        mapUrl:
          "https://www.google.com/maps/dir/浄水駅/香嵐渓/足助/名古屋駅/",
      },
      points: [
        { name: "香嵐溪", lat: 35.1545, lng: 137.321, kind: "spot" },
        { name: "足助老街", lat: 35.153, lng: 137.3175, kind: "spot" },
        { name: "名古屋市區", lat: 35.17, lng: 136.908, kind: "food" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Korankei Maple",
          items: [
            {
              type: "transport",
              note: {
                mode: "地鐵 + 巴士",
                text: "「鶴舞線 → 浄水站」轉おいでんバス到香嵐溪｜約 60 分鐘｜單程合計約 ¥1,300。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "01",
                name: "香嵐溪",
                time: "10:00–13:00",
                desc: "東海第一紅葉名所,約 3,000 株楓樹、待月橋、紅葉隧道與香積寺。賞楓季限定夜間點燈也很美。",
                meta: ["🍁 約 3,000 株楓樹", "📸 待月橋 · 紅葉隧道", "⛩ 香積寺"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=香嵐渓",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Asuke Old Town",
          items: [
            {
              type: "spot",
              spot: {
                no: "02",
                name: "足助老街",
                time: "13:00–15:00",
                desc: "重要傳統建造物群保存地區,白壁格子町家很好拍,從香嵐溪步行約 10 分。",
                meta: ["⏱ 建議停留 2 小時", "🏘 白壁格子町家"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=足助",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · Back to City",
          items: [
            {
              type: "transport",
              note: {
                mode: "巴士 + 地鐵",
                text: "提早回程(賞楓季末班巴士較擠)。おいでんバス回浄水站轉地鐵約 60 分。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "03",
                name: "名古屋市區晚餐",
                time: "18:30–",
                desc: "回市區吃重口味的名古屋名物收尾。",
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
              name: "[午餐] 足助老街 川魚 · 蕎麥 · 五平餅",
              desc: "鮎魚鹽烤、味噌五平餅、山菜蕎麥,秋日山城風味。",
              prices: ["¥1,200–1,800／人"],
            },
            {
              name: "[晚餐] あんかけスパ(ヨコイ／そ〜れ)",
              desc: "名古屋獨有的濃稠胡椒勾芡義大利麵,重口味療癒。",
              prices: ["¥1,000–1,500／人"],
            },
            {
              name: "[晚餐替代] 老派喫茶店",
              desc: "想清淡可改喫茶店,鐵板義麵、小倉吐司,名古屋早晚食文化。",
              prices: ["¥600–1,200／人"],
            },
          ],
        },
      ],
    },
    {
      day: 5,
      date: "2026.11.10 · 二 · 網美夜",
      title: "熱田神宮 · 鰻魚飯三吃 · なばなの里點燈",
      summary:
        "上午參拜供奉草薙劍的熱田神宮,午餐到旁邊百年蓬萊軒吃鰻魚飯三吃,下午逛榮的オアシス21,傍晚搭直通巴士到桑名なばなの里賞日本最大級燈海。",
      lodging: "Hotel MyStays 名古屋榮(榮)",
      route: {
        stops: ["熱田神宮", "榮 · オアシス21", "なばなの里"],
        mapUrl:
          "https://www.google.com/maps/dir/熱田神宮/オアシス21/なばなの里/",
      },
      points: [
        { name: "熱田神宮", lat: 35.1278, lng: 136.908, kind: "spot" },
        { name: "オアシス21", lat: 35.1715, lng: 136.9085, kind: "spot" },
        { name: "なばなの里", lat: 35.029, lng: 136.734, kind: "spot" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Atsuta Shrine",
          items: [
            {
              type: "spot",
              spot: {
                no: "01",
                name: "熱田神宮",
                time: "09:30–11:00",
                desc: "供奉草薙劍的千年大社,境內清幽好走,求御守、感受森林神域氛圍。",
                meta: ["⛩ 草薙劍千年大社", "🎫 求御守"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=熱田神宮",
              },
            },
            {
              type: "transport",
              note: {
                mode: "地鐵",
                text: "「名古屋駅 → 熱田神宮西／神宮西」｜名城線｜約 15 分鐘｜¥240。",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Sakae Sky Boat",
          items: [
            {
              type: "spot",
              spot: {
                no: "02",
                name: "榮 · オアシス21 + MIRAI TOWER",
                time: "13:30–16:00",
                desc: "水之宇宙船(オアシス21)超好拍,搭配中部電力 MIRAI TOWER 與久屋大通公園散步。",
                meta: ["📸 水の宇宙船", "🗼 MIRAI TOWER"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=オアシス21",
              },
            },
            {
              type: "transport",
              note: {
                mode: "直通巴士",
                text: "「名古屋站 → なばなの里」｜直通巴士｜約 40 分鐘。建議搭傍晚班次趕點燈。",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · Nabana Illumination",
          items: [
            {
              type: "spot",
              spot: {
                no: "03",
                name: "なばなの里(桑名)點燈",
                time: "17:00 點燈–",
                desc: "日本最大級燈海點燈,不靠天氣與紅葉、保證網美。約 17:00 開始點燈,光之隧道是招牌。",
                meta: ["✨ 約 17:00 點燈", "🎟 入園約 ¥2,500(含 ¥1,000 抵用券)"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=なばなの里",
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
              name: "[午餐] あつた蓬萊軒 本店(鰻魚飯三吃)",
              desc: "熱田神宮旁百年名店,ひつまぶし 三吃流程經典。需排隊,週三、四公休(今日週二有開)。",
              prices: ["¥3,000–4,500／人", "⏰ 週三、四公休"],
            },
            {
              name: "[晚餐] なばなの里 園內餐廳",
              desc: "邊賞燈邊用餐最省時,園內有多間餐廳與點心。",
              prices: ["¥1,500–2,500／人"],
            },
            {
              name: "[宵夜替代] 回名古屋宵夜",
              desc: "回程後吃碗台灣拉麵或喫茶收尾。",
              prices: ["¥1,000–2,000／人"],
            },
          ],
        },
      ],
    },
    {
      day: 6,
      date: "2026.11.11 · 三 · 移動日",
      title: "移動日 · 午後新幹線南下博多",
      summary:
        "上午名古屋站周邊收尾(Sky Promenade 展望台或四間道老街),退房寄行李,午後搭新幹線のぞみ約 3 小時 20 分抵博多,入住後直攻博多名物。",
      lodging: "the b 博多(博多站)",
      route: {
        stops: ["名古屋駅", "新幹線のぞみ", "博多駅", "中洲屋台"],
        mapUrl:
          "https://www.google.com/maps/dir/名古屋駅/博多駅/中洲/",
      },
      points: [
        { name: "名古屋駅", lat: 35.1709, lng: 136.8815, kind: "transit" },
        { name: "博多駅", lat: 33.5897, lng: 130.4207, kind: "transit" },
        { name: "中洲屋台街", lat: 33.592, lng: 130.404, kind: "food" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Last Look at Nagoya",
          items: [
            {
              type: "spot",
              spot: {
                no: "01",
                name: "Midland Square Sky Promenade / 四間道 · 円頓寺",
                time: "09:30–11:30",
                desc: "高空俯瞰名古屋,或四間道、円頓寺老街散步當收尾。退房寄行李於名古屋站。",
                meta: ["🏙 Sky Promenade 高空展望", "🏘 四間道老街"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=Midland+Square+Sky+Promenade",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Bullet Train South",
          items: [
            {
              type: "transport",
              note: {
                mode: "新幹線",
                text: "「名古屋 → 博多」｜新幹線のぞみ｜約 3 小時 20 分｜指定席 ¥19,310(EX 早特21 提前 21 天約 ¥14,640)。約 14:00 出發、17:20 抵達。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "02",
                name: "博多站周邊 Check-in",
                time: "17:30",
                desc: "入住博多站周邊飯店,放行李後直接攻博多名物。",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · Hakata Night Bites",
          items: [
            {
              type: "spot",
              spot: {
                no: "03",
                name: "博多名物晚餐",
                time: "19:00–",
                desc: "牛腸鍋或直奔中洲河畔屋台,正式進入福岡美食模式。",
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
              name: "[午餐] 名站立食きしめん / 矢場とん",
              desc: "月台立食棊子麵快又道地,或味噌豬排做名古屋句點。",
              prices: ["¥800–2,000／人"],
            },
            {
              name: "[晚餐] もつ鍋 おおやま 博多本店",
              desc: "福岡名物牛腸鍋,味噌湯頭濃郁、配高麗菜韭菜,建議先訂位。",
              prices: ["¥3,000–4,000／人"],
            },
            {
              name: "[晚餐替代] 中洲屋台街",
              desc: "想要氣氛可直奔中洲河畔屋台,拉麵、煎餃、關東煮。",
              prices: ["¥2,000–3,500／人"],
            },
          ],
        },
      ],
    },
    {
      day: 7,
      date: "2026.11.12 · 四 · 演唱會日",
      title: "大濠公園 · 運河城 · 夜場 LIVE",
      summary:
        "上午到大濠公園與福岡城跡環湖散步,下午逛キャナルシティ博多看噴泉秀並回飯店養精神,傍晚搭西鐵巴士到マリンメッセ福岡A館,19:00 開唱。",
      lodging: "the b 博多(博多站)",
      route: {
        stops: ["大濠公園", "キャナルシティ博多", "マリンメッセ福岡A館"],
        mapUrl:
          "https://www.google.com/maps/dir/大濠公園/キャナルシティ博多/マリンメッセ福岡/",
      },
      points: [
        { name: "大濠公園", lat: 33.5855, lng: 130.379, kind: "spot" },
        { name: "キャナルシティ博多", lat: 33.5897, lng: 130.4115, kind: "spot" },
        { name: "マリンメッセ福岡A館", lat: 33.6258, lng: 130.408, kind: "spot" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Ohori Park",
          items: [
            {
              type: "spot",
              spot: {
                no: "01",
                name: "大濠公園 · 福岡城跡(舞鶴公園)",
                time: "09:30–11:30",
                desc: "環湖散步、湖心橋拍照,悠閒開場保留體力。福岡城跡石垣與秋色相映。",
                meta: ["🦢 環湖散步", "📸 湖心橋"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=大濠公園",
              },
            },
            {
              type: "transport",
              note: {
                mode: "地鐵",
                text: "「博多 → 大濠公園」｜地鐵空港線/機場線｜約 12 分鐘｜¥260。",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Canal City",
          items: [
            {
              type: "spot",
              spot: {
                no: "02",
                name: "キャナルシティ博多",
                time: "13:00–15:30",
                desc: "運河造景 + 噴泉秀,好拍好逛。逛完回飯店休息養精神,進場前別太累。",
                meta: ["⛲ 噴泉水舞秀", "🛍 好逛好拍"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=キャナルシティ博多",
              },
            },
            {
              type: "transport",
              note: {
                mode: "西鐵巴士",
                text: "「博多站 → マリンメッセ前」｜西鐵巴士 88／BRT｜約 15 分鐘｜¥260(最方便)。",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · LIVE Night",
          items: [
            {
              type: "spot",
              spot: {
                no: "03",
                name: "🎤 マリンメッセ福岡A館",
                time: "17:30 入場 / 19:00 開演",
                desc: "港邊場館,開演 19:00,建議 17:30–18:00 到場排周邊。散場後巴士站人潮大,耐心排隊。",
                meta: ["🎤 開演 19:00", "📦 提早 1–1.5 小時到場"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=マリンメッセ福岡A館",
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
              name: "[午餐] 資さんうどん / 牧のうどん",
              desc: "福岡軟 Q 烏龍在地魂,便宜大碗、暖胃不誤事。",
              prices: ["¥700–1,200／人"],
            },
            {
              name: "[晚餐] 博多らーめん Shin-Shin(天神本店)",
              desc: "細直麵 + 清爽豚骨,營業到凌晨,散場宵夜剛好。",
              prices: ["¥900–1,500／人", "⏰ 營業到凌晨"],
            },
            {
              name: "[晚餐替代] 中洲屋台",
              desc: "河畔屋台吃拉麵、串燒、明太子玉子燒,福岡限定氛圍。",
              prices: ["¥2,000–3,000／人"],
            },
          ],
        },
      ],
    },
    {
      day: 8,
      date: "2026.11.13 · 五",
      title: "太宰府天滿宮 · 百道海濱 · 屋台之夜",
      summary:
        "上午搭西鐵到太宰府天滿宮參拜學問之神,參道吃梅枝餅、看隈研吾星巴克,下午回市區登福岡塔看百道海濱夕陽,晚上把美食火力集中在屋台與牛腸鍋。",
      lodging: "the b 博多(博多站)",
      route: {
        stops: ["太宰府天滿宮", "福岡塔 · 百道海濱", "中洲屋台"],
        mapUrl:
          "https://www.google.com/maps/dir/太宰府天満宮/福岡タワー/中洲/",
      },
      points: [
        { name: "太宰府天滿宮", lat: 33.5215, lng: 130.535, kind: "spot" },
        { name: "福岡塔", lat: 33.5933, lng: 130.3515, kind: "spot" },
        { name: "中洲屋台街", lat: 33.592, lng: 130.404, kind: "food" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Dazaifu Shrine",
          items: [
            {
              type: "transport",
              note: {
                mode: "西鐵電車",
                text: "「福岡(天神) → 太宰府」｜西鐵電車｜約 25 分鐘｜¥430(或博多直通巴士「旅人」約 45 分)。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "01",
                name: "太宰府天滿宮",
                time: "09:30–12:00",
                desc: "千年學問之神,參道梅枝餅、隈研吾設計星巴克都好拍。本殿整修中,臨時殿綠屋頂本身就是亮點。",
                meta: ["⛩ 學問之神", "📸 隈研吾星巴克", "🍡 梅枝餅"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=太宰府天満宮",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Seaside Sunset",
          items: [
            {
              type: "spot",
              spot: {
                no: "02",
                name: "福岡塔 + 百道海濱公園",
                time: "14:00–17:00",
                desc: "看海景夕陽的網美點。也可改逛櫛田神社、川端商店街博多老街。",
                meta: ["🌊 百道海濱", "🗼 福岡塔展望"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=福岡タワー",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · Yatai Feast",
          items: [
            {
              type: "spot",
              spot: {
                no: "03",
                name: "屋台 / 牛腸鍋深度吃",
                time: "18:30–",
                desc: "把美食火力集中今晚,中洲屋台或水炊雞鍋深度吃一輪。",
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
              name: "[午餐] 太宰府參道 梅枝餅 + 茶屋",
              desc: "現烤梅枝餅一顆 ¥150 起,邊走邊吃;參道餐廳也有定食。",
              prices: ["¥500–1,200／人"],
            },
            {
              name: "[晚餐] 中洲屋台「つなつな」等",
              desc: "中洲人氣屋台,餃子湯、和牛內臟煮、明太子,對觀光客友善。",
              prices: ["¥2,000–3,000／人"],
            },
            {
              name: "[晚餐替代] 博多はなみどり(水炊き)",
              desc: "博多名物水炊雞鍋,清甜雞白湯,收尾雜炊一流。",
              prices: ["¥3,000–5,000／人"],
            },
          ],
        },
      ],
    },
    {
      day: 9,
      date: "2026.11.14 · 六 · 回程",
      title: "最後採買 · 傍晚返程",
      summary:
        "上午到櫛田神社、川端商店街或天神最後採買明太子伴手禮,午餐吃最後一碗豚骨拉麵,退房後搭地鐵到福岡空港(注意國際線需轉接駁巴士),20:35 班機返台北。",
      route: {
        stops: ["川端商店街", "博多駅", "福岡空港"],
        mapUrl:
          "https://www.google.com/maps/dir/川端商店街/博多駅/福岡空港/",
      },
      points: [
        { name: "川端商店街", lat: 33.593, lng: 130.411, kind: "spot" },
        { name: "博多駅", lat: 33.5897, lng: 130.4207, kind: "transit" },
        { name: "福岡空港", lat: 33.5859, lng: 130.451, kind: "transit" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Last Shopping",
          items: [
            {
              type: "spot",
              spot: {
                no: "01",
                name: "櫛田神社 · 川端商店街 採買",
                time: "10:00–12:00",
                desc: "博多老街最後採買明太子與伴手禮。退房寄行李於博多站。",
                meta: ["🛍 明太子/伴手禮", "⛩ 櫛田神社"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=櫛田神社+福岡",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Last Ramen & Departure",
          items: [
            {
              type: "spot",
              spot: {
                no: "02",
                name: "最後一碗豚骨拉麵",
                time: "12:30–14:00",
                desc: "一蘭本社總本店或 Shin-Shin 作福岡句點,集中採買明太子伴手。",
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=一蘭+本社総本店",
              },
            },
            {
              type: "transport",
              note: {
                mode: "地鐵 + 接駁巴士",
                text: "「博多 → 福岡空港」地鐵僅 5 分 ¥260。國際線航廈與地鐵(國內線)不同棟,需轉接駁巴士約 10–15 分,建議 17:30 前抵國際航廈。",
              },
            },
            {
              type: "spot",
              spot: {
                no: "03",
                name: "福岡空港 出境 → 賦歸",
                time: "17:30 抵航廈 / 20:35 起飛",
                desc: "國際線航廈辦理出境,20:35 班機返台北。",
                meta: ["✈️ 20:35 起飛", "⚠️ 國際線與地鐵不同棟,需接駁"],
                mapUrl:
                  "https://www.google.com/maps/search/?api=1&query=福岡空港",
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
              name: "[午餐] 一蘭 本社總本店 / Shin-Shin",
              desc: "豚骨拉麵作福岡句點;機場國內線美食街也有拉麵可滑壘。",
              prices: ["¥900–1,500／人"],
            },
            {
              name: "[晚餐] 機上用餐",
              desc: "當日不另排晚餐,機上解決。",
            },
          ],
        },
      ],
    },
  ],
  hotels: [
    {
      area: "名古屋 · Day 1–5 五晚",
      name: "Hotel MyStays 名古屋榮",
      meta: ["💰 約 ¥6,000–9,000／間·晚", "📍 中区東桜2-23-22", "🚇 緊鄰榮地鐵"],
      desc: "緊鄰榮地鐵與唐吉訶德、LOFT、超商,逛街吃飯都方便,CP 值高的商務旅館。三人建議訂三人房或兩間雙人。",
    },
    {
      area: "名古屋 · 名站備選",
      name: "nine hours 名古屋站",
      meta: ["💰 約 ¥3,500–5,500／人·晚", "📍 中村区名駅2-42-2", "🚶 名古屋站徒步 7 分"],
      desc: "名古屋站徒步 7 分的設計膠囊旅館,男女分層、乾淨現代,三人各睡一艙最省。",
    },
    {
      area: "名古屋 · 名站備選",
      name: "名鐵 Inn／Sotetsu Fresa Inn(名駅前)",
      meta: ["💰 約 ¥7,000–11,000／間·晚", "📍 名古屋站周邊(多分館)", "🚄 新幹線/機場接駁順"],
      desc: "名古屋站旁可靠連鎖商旅,搭新幹線、機場接駁最順;多家可選,建議比價訂房。",
    },
    {
      area: "福岡 · Day 6–8 三晚",
      name: "the b 博多",
      meta: ["💰 約 ¥7,000–11,000／間·晚", "📍 博多区博多駅南1-3-9", "🚶 博多站南口 5 分"],
      desc: "博多站南口徒步 5 分,樓下即超商,往太宰府、機場、演唱會巴士都便利。",
    },
    {
      area: "福岡 · 博多備選",
      name: "Nishitetsu Inn／Sotetsu Fresa Inn 博多",
      meta: ["💰 約 ¥7,000–10,000／間·晚", "📍 博多站周邊(多分館)", "🏮 近運河城與屋台"],
      desc: "博多站週邊高 CP 連鎖商旅,鄰近運河城與屋台,夜生活與交通兩相宜。",
    },
    {
      area: "福岡 · 港邊備選",
      name: "Hotel Hakata Place(築港)",
      meta: ["💰 約 ¥6,000–9,000／間·晚", "📍 博多区築港本町3-16", "🎤 離マリンメッセ近"],
      desc: "公寓式房型、附洗衣機,離マリンメッセ會場較近,適合想散場走回飯店的人。",
    },
  ],
  budget: [
    { date: "11/06 Day 1", transport: "¥1,250", tickets: "—", food: "¥2,000", lodging: "¥5,000", total: "¥8,250" },
    { date: "11/07 Day 2", transport: "¥800", tickets: "¥500", food: "¥3,000", lodging: "¥5,000", total: "¥9,300" },
    { date: "11/08 Day 3", transport: "¥1,500", tickets: "¥550", food: "¥3,000", lodging: "¥5,000", total: "¥10,050" },
    { date: "11/09 Day 4", transport: "¥2,600", tickets: "—", food: "¥2,500", lodging: "¥5,000", total: "¥10,100" },
    { date: "11/10 Day 5", transport: "¥1,500", tickets: "¥2,500", food: "¥4,000", lodging: "¥5,000", total: "¥13,000" },
    { date: "11/11 Day 6", transport: "¥16,000", tickets: "—", food: "¥3,000", lodging: "¥5,500", total: "¥24,500" },
    { date: "11/12 Day 7", transport: "¥800", tickets: "—", food: "¥3,000", lodging: "¥5,500", total: "¥9,300" },
    { date: "11/13 Day 8", transport: "¥1,200", tickets: "—", food: "¥3,500", lodging: "¥5,500", total: "¥10,200" },
    { date: "11/14 Day 9", transport: "¥500", tickets: "—", food: "¥2,500", lodging: "—", total: "¥3,000" },
    { date: "合計", transport: "¥26,150", tickets: "¥3,550", food: "¥26,500", lodging: "¥41,500", total: "¥97,700", isTotal: true },
  ],
  budgetNote:
    "以小資族抓法估算,每人合計約 ¥97,700,換算約 NT$ 20,500–21,500／人(以 ¥1 ≈ NT$ 0.21 計)。不含台北往返機票與兩場演唱會門票;住宿以 3 人分攤後每人每晚約 ¥4,000–5,500 計。若 D6 移動改搭 LCC 平日早鳥,交通可再省約 ¥4,000–6,000;購物、伴手禮另計。",
  tips: [
    {
      title: "哪天移動最省",
      body: "新幹線票價幾乎不分日期固定,會變動的是機票。建議 11/11(三)平日移動:平日機票最便宜,又能讓名古屋待到最後一刻,前一晚抵福岡最安心。別在 11/12 演唱會當天才長途移動。",
    },
    {
      title: "交通票券",
      body: "名古屋多用地鐵,可考慮「ドニチエコきっぷ」(週末/假日一日券 ¥620)或市內一日券;福岡善用「西鐵巴士」與地鐵一日券,往會場、太宰府都好用。",
    },
    {
      title: "演唱會日提早卡位",
      body: "兩場散場人潮大。名古屋當天行程已收在名城公園周邊;福岡 11/12 把重點放在輕鬆的大濠公園與運河城,留體力進場。周邊建議提早 1–1.5 小時排。",
    },
    {
      title: "紅葉時機 Plan B",
      body: "香嵐溪、徳川園盛期多在 11 月中下旬,你的日期可能只到五分紅。出發前查「紅葉情報」,若未轉紅可改走徳川園／白鳥庭園市區賞楓,或直接加碼なばなの里點燈(不靠天氣保證好拍)。",
    },
    {
      title: "名店要排隊",
      body: "蓬萊軒(週三、四公休)、矢場とん、Shin-Shin 等熱門店午晚餐都會排隊;可先抽號碼牌再去附近晃。",
    },
    {
      title: "回程機場提醒",
      body: "福岡國際線航廈與地鐵(國內線)不同棟,需轉接駁巴士約 10–15 分。20:35 班機建議 17:30 前抵國際航廈,預留報到與退稅時間。",
    },
    {
      title: "現金與支付",
      body: "屋台、香嵐溪攤販、太宰府參道多收現金;演唱會周邊與地方小店建議帶足現金,刷卡／QR 不一定通。",
    },
  ],
};
