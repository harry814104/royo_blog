import type { Journey } from "../journeys";

// 2026/11/6–11/14：三場演唱會、城市選物與光影展；交通與退稅資訊核對於 2026/11/1。
export const nagoyaFukuoka: Journey = {
  slug: "nagoya-fukuoka-2026",
  name: "名古屋 · 福岡 9天8夜",
  place: "日本 · 中部／九州",
  scope: "overseas",
  startDate: "2026-11-06",
  endDate: "2026-11-14",
  tone: "forest",
  excerpt: "三場 LIVE × 古著選物 × 夜間光影展,名古屋四晚後搭捷星飛福岡,住博多站筑紫口再慢慢逛。",
  tags: ["中部", "九州", "演唱會", "古著選物", "光影展", "美食"],
  highlights: [
    { label: "日期", value: "11.06 – 11.14" },
    { label: "人數", value: "3 位成人" },
    { label: "住宿", value: "名古屋 4 晚 · 福岡 4 晚" },
    { label: "亮點", value: "星街彗星 × YOASOBI × 雙光影展" },
    { label: "國內線", value: "11/10 捷星 19:30 → 21:05" },
    { label: "退稅新制", value: "先付含稅價,出境確認後退稅" },
  ],
  days: [
    {
      day: 1,
      date: "2026.11.06 · 五",
      title: "抵達名古屋 · 味噌豬排與手羽先",
      summary: "抵達名古屋後前往丸之內的 TIC HOTEL Marunouchisakae 入住,附近吃味噌豬排或手羽先,晚上養精蓄銳。確認三場演唱會的電子票券、入場資訊與手機電量;首日機票時間沿用原規劃,以實際訂位為準。",
      lodging: "TIC HOTEL Marunouchisakae（丸之內）",
      route: {
        stops: ["中部國際機場", "名鐵名古屋站", "地下鐵櫻通線", "丸之內站", "TIC HOTEL Marunouchisakae", "晚餐"],
        mapUrl: "https://www.google.com/maps/dir/%E4%B8%AD%E9%83%A8%E5%9B%BD%E9%9A%9B%E7%A9%BA%E6%B8%AF/%E5%90%8D%E9%89%84%E5%90%8D%E5%8F%A4%E5%B1%8B%E9%A7%85/%E4%B8%B8%E3%81%AE%E5%86%85%E9%A7%85%20%E5%90%8D%E5%8F%A4%E5%B1%8B/TIC%20HOTEL%20Marunouchisakae%20%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B8%82%E4%B8%AD%E5%8C%BA%E4%B8%B8%E3%81%AE%E5%86%852-15-19/",
      },
      points: [
        { name: "中部國際機場 T1", lat: 34.8584, lng: 136.8051, kind: "transit" },
        { name: "名古屋站", lat: 35.1709, lng: 136.8815, kind: "transit" },
        { name: "TIC HOTEL Marunouchisakae", lat: 35.174221, lng: 136.89888, kind: "stay" },
      ],
      blocks: [
        {
          period: "evening",
          label: "晚上 · Arrival & Rest",
          items: [
            {
              type: "spot",
              spot: {
                name: "中部國際機場 · 入境與領行李",
                time: "17:15（原規劃到達時間）",
                desc: "依實際機票抵達後通關、領行李。出關後跟著「Access Plaza／名鉄電車」指標走到中部國際空港站。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E4%B8%AD%E9%83%A8%E5%9B%BD%E9%9A%9B%E7%A9%BA%E6%B8%AF",
                no: "01",
              },
            },
            {
              type: "transport",
              note: {
                mode: "名鐵 → 櫻通線 → 丸之內",
                text: "中部國際空港站搭名鐵到名鐵名古屋站,μSKY 最快約28分鐘,需基本車票加 μticket。抵達後依「地下鉄 桜通線」指標轉乘往德重（徳重）方向,經國際中心、丸之內兩站下車。依電梯指標上地面後,導航丸の内2-15-19,步行與找路預留約5–10分鐘。出關後到民宿,連同候車、站內轉乘與拖行李抓60–90分鐘。",
              },
            },
            {
              type: "spot",
              spot: {
                name: "TIC HOTEL Marunouchisakae · Check-in",
                time: "約 19:00–20:00 入住",
                desc: "住宿地址:愛知縣名古屋市中區丸の内2-15-19。依訂房通知確認樓層、門禁與入住方式;住宿頁列16:00–23:00入住、10:00前退房,實際以訂房單為準。先放行李再就近吃晚餐,睡前整理電子票、護照與行動電源。",
                no: "02",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=TIC%20HOTEL%20Marunouchisakae%20%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B8%82%E4%B8%AD%E5%8C%BA%E4%B8%B8%E3%81%AE%E5%86%852-15-19",
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
      date: "2026.11.07 · 六 · 星街彗星演唱會",
      title: "名古屋城 · 金鯱橫丁 · 星街彗星 LIVE",
      summary: "上午名古屋城與金鯱橫丁午餐,下午直接移動到名城公園旁 IG Arena,留時間買周邊與入場。18:00 星街彗星名古屋演唱會,散場後回市區吃宵夜。",
      lodging: "TIC HOTEL Marunouchisakae（丸之內）",
      route: {
        stops: ["TIC HOTEL Marunouchisakae", "名古屋城", "金鯱橫丁", "IG Arena（名城公園）", "市區宵夜"],
        mapUrl: "https://www.google.com/maps/dir/TIC%20HOTEL%20Marunouchisakae%20%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B8%82%E4%B8%AD%E5%8C%BA%E4%B8%B8%E3%81%AE%E5%86%852-15-19/%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%9F%8E/%E9%87%91%E3%82%B7%E3%83%A3%E3%83%81%E6%A8%AA%E4%B8%81/IG%E3%82%A2%E3%83%AA%E3%83%BC%E3%83%8A/",
      },
      points: [
        { name: "TIC HOTEL Marunouchisakae", lat: 35.174221, lng: 136.89888, kind: "stay" },
        { name: "名古屋城", lat: 35.1856, lng: 136.8997, kind: "spot" },
        { name: "金鯱橫丁", lat: 35.1837, lng: 136.8991, kind: "food" },
        { name: "IG Arena", lat: 35.1904454, lng: 136.9026725, kind: "spot" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Nagoya Castle",
          items: [
            {
              type: "spot",
              spot: {
                name: "名古屋城 · 本丸御殿",
                time: "09:00–11:30（建議）",
                desc: "上午逛城與本丸御殿,依現場開放範圍參觀。中午就在城旁吃飯,下午一路往名城公園方向移動。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%9F%8E",
                no: "01",
              },
            },
            {
              type: "spot",
              spot: {
                name: "金鯱橫丁 · 午餐",
                time: "11:30–13:00（建議）",
                desc: "在金シャチ横丁吃名古屋名物,用餐後稍作休息,保留演唱會體力。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%87%91%E3%82%B7%E3%83%A3%E3%83%81%E6%A8%AA%E4%B8%81",
                no: "02",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Merch & Entry",
          items: [
            {
              type: "transport",
              note: { mode: "步行 / 地鐵", text: "從名古屋城往名城公園與 IG Arena 移動;步行或搭名城線至「名城公園」站,避免先繞去大須再折返。" },
            },
            {
              type: "spot",
              spot: {
                name: "IG Arena · 周邊、休息與入場",
                time: "下午–17:30（預留）",
                desc: "周邊販售、排隊與開放入場時間依電子票及主辦公告。提早到附近整備,補水、吃輕食,18:00 準時看演出。",
                meta: ["🎫 電子票 / 身分證件", "🔋 行動電源"],
                mapUrl: "https://www.google.com/maps/search/?api=1&query=IG%E3%82%A2%E3%83%AA%E3%83%BC%E3%83%8A",
                no: "03",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · Hoshimachi Suisei LIVE",
          items: [
            {
              type: "spot",
              spot: {
                name: "星街彗星 · 名古屋演唱會",
                time: "18:00 開演",
                desc: "會場為 IG Arena。散場後隨人流離場,回市區再吃宵夜,不趕最後一刻轉乘。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=IG%E3%82%A2%E3%83%AA%E3%83%BC%E3%83%8A",
                no: "04",
              },
            },
          ],
        },
      ],
      meals: [
        {
          title: "Meals · 餐飲安排",
          restaurants: [
            { name: "[午餐] 金鯱橫丁", desc: "名古屋城旁就近吃味噌料理或名古屋名物。" },
            { name: "[晚餐 / 宵夜] 會場前輕食、散場後回市區", desc: "演出前先墊胃,散場後再吃手羽先或拉麵。" },
          ],
        },
      ],
    },
    {
      day: 3,
      date: "2026.11.08 · 日 · YOASOBI 演唱會",
      title: "巨蛋前 AEON · YOASOBI 名古屋 LIVE",
      summary: "上午到午後在 AEON MALL NAGOYA DOME MAE 吃午餐、喝咖啡與休息。14:30 走連接空橋前往名古屋巨蛋,18:00 看 YOASOBI。散場後可步行到大曽根站搭 JR,避開巨蛋前車站的人潮。",
      lodging: "TIC HOTEL Marunouchisakae（丸之內）",
      route: {
        stops: ["AEON MALL NAGOYA DOME MAE", "連接空橋", "名古屋巨蛋", "大曽根站", "名古屋站 → 丸之內站", "TIC HOTEL Marunouchisakae"],
        mapUrl: "https://www.google.com/maps/dir/%E3%82%A4%E3%82%AA%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%AB%E3%83%8A%E3%82%B4%E3%83%A4%E3%83%89%E3%83%BC%E3%83%A0%E5%89%8D/%E3%83%90%E3%83%B3%E3%83%86%E3%83%AA%E3%83%B3%E3%83%89%E3%83%BC%E3%83%A0%20%E3%83%8A%E3%82%B4%E3%83%A4/%E5%A4%A7%E6%9B%BD%E6%A0%B9%E9%A7%85/%E5%90%8D%E5%8F%A4%E5%B1%8B%E9%A7%85/TIC%20HOTEL%20Marunouchisakae%20%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B8%82%E4%B8%AD%E5%8C%BA%E4%B8%B8%E3%81%AE%E5%86%852-15-19/",
      },
      points: [
        { name: "AEON MALL NAGOYA DOME MAE", lat: 35.1875934, lng: 136.9458568, kind: "spot" },
        { name: "名古屋巨蛋", lat: 35.1859965, lng: 136.9473974, kind: "spot" },
        { name: "大曽根站", lat: 35.1907, lng: 136.9367, kind: "transit" },
        { name: "TIC HOTEL Marunouchisakae", lat: 35.174221, lng: 136.89888, kind: "stay" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Dome-mae Mall",
          items: [
            {
              type: "transport",
              note: { mode: "地鐵 / JR + 步行", text: "前往「ナゴヤドーム前矢田」站後步行到 AEON,或從大曽根站步行過去。今天的午餐、咖啡與補給都集中在巨蛋周邊。" },
            },
            {
              type: "spot",
              spot: {
                name: "AEON MALL NAGOYA DOME MAE",
                time: "上午–14:15",
                desc: "商場內逛街、吃午餐、喝咖啡與上洗手間,連續看演唱會的第二天以休息與補給為主。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%82%A4%E3%82%AA%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%AB%E3%83%8A%E3%82%B4%E3%83%A4%E3%83%89%E3%83%BC%E3%83%A0%E5%89%8D",
                no: "01",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Skybridge to the Dome",
          items: [
            {
              type: "transport",
              note: { mode: "連接空橋 · 步行", text: "14:30 左右從 AEON 走連接空橋往名古屋巨蛋,抵場後依主辦動線買周邊與等候入場。" },
            },
            {
              type: "spot",
              spot: {
                name: "名古屋巨蛋 · 周邊與入場",
                time: "14:30–開演前",
                desc: "會場為バンテリンドーム ナゴヤ。預先確認電子票、入口與座位,實際入場時間以門票為準。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%90%E3%83%B3%E3%83%86%E3%83%AA%E3%83%B3%E3%83%89%E3%83%BC%E3%83%A0%20%E3%83%8A%E3%82%B4%E3%83%A4",
                no: "02",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · YOASOBI LIVE",
          items: [
            {
              type: "spot",
              spot: {
                name: "YOASOBI · 名古屋演唱會",
                time: "18:00 開演",
                desc: "演出結束後不要急著擠進最近車站。可依體力步行往大曽根站搭 JR 中央本線回名古屋站,再依飯店位置轉乘。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%90%E3%83%B3%E3%83%86%E3%83%AA%E3%83%B3%E3%83%89%E3%83%BC%E3%83%A0%20%E3%83%8A%E3%82%B4%E3%83%A4",
                no: "03",
              },
            },
            {
              type: "transport",
              note: {
                mode: "散場步行 → JR",
                text: "巨蛋 → 大曽根站 → JR中央本線往名古屋方向,到名古屋後轉櫻通線往德重方向,兩站到丸之內再步行回 TIC HOTEL。步行、散場管制與轉乘另留緩衝,搭車前看當晚末班車。",
              },
            },
          ],
        },
      ],
      meals: [
        {
          title: "Meals · 餐飲安排",
          restaurants: [
            { name: "[午餐 / 咖啡] 巨蛋前 AEON", desc: "在商場吃飽休息後直接進場。" },
            { name: "[晚餐] 會場前輕食 / 散場後補充", desc: "商場先補給,散場後視營業情況就近吃或回飯店。" },
          ],
        },
      ],
    },
    {
      day: 4,
      date: "2026.11.09 · 一 · 大須深逛日",
      title: "則武之森周邊 · 書牆 · 大須深逛",
      summary: "上午則武之森周邊散步,接 AEON MALL Nagoya Noritake Garden 書牆打卡與午餐。13:30 起專心逛大須的古著、藥妝與動漫電器,一路逛到晚餐,最後經伏見、丸之內回 TIC HOTEL。週一則武之森館舍休館,上午以外觀散步及商場為主。",
      lodging: "TIC HOTEL Marunouchisakae（丸之內）",
      route: {
        stops: ["則武之森周邊", "AEON MALL Nagoya Noritake Garden", "大須商店街", "大須觀音", "伏見", "丸之內站", "TIC HOTEL Marunouchisakae"],
        mapUrl: "https://www.google.com/maps/dir/%E3%83%8E%E3%83%AA%E3%82%BF%E3%82%B1%E3%81%AE%E6%A3%AE/%E3%82%A4%E3%82%AA%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%AB%20Nagoya%20Noritake%20Garden/%E5%A4%A7%E9%A0%88%E5%95%86%E5%BA%97%E8%A1%97/%E5%A4%A7%E9%A0%88%E8%A6%B3%E9%9F%B3/%E4%BC%8F%E8%A6%8B%E9%A7%85/%E4%B8%B8%E3%81%AE%E5%86%85%E9%A7%85%20%E5%90%8D%E5%8F%A4%E5%B1%8B/TIC%20HOTEL%20Marunouchisakae%20%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B8%82%E4%B8%AD%E5%8C%BA%E4%B8%B8%E3%81%AE%E5%86%852-15-19/",
      },
      points: [
        { name: "則武之森", lat: 35.1794891, lng: 136.881293, kind: "spot" },
        { name: "AEON MALL Nagoya Noritake Garden", lat: 35.1799, lng: 136.8799, kind: "spot" },
        { name: "大須商店街 / 大須觀音", lat: 35.1595, lng: 136.8995, kind: "spot" },
        { name: "伏見站", lat: 35.1693, lng: 136.8975, kind: "transit" },
        { name: "TIC HOTEL Marunouchisakae", lat: 35.174221, lng: 136.89888, kind: "stay" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Noritake Garden & Books",
          items: [
            {
              type: "spot",
              spot: {
                name: "則武之森周邊 · 散步",
                time: "10:00–10:45（建議）",
                desc: "依你的路線保留周邊散步與紅磚外觀。11/9 為週一,館舍、商店、咖啡與餐廳休館;園區通行依現場公告,如無法進入就直接前往隔壁 AEON,不排館內參觀。",
                meta: ["📅 週一館舍休館"],
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%8E%E3%83%AA%E3%82%BF%E3%82%B1%E3%81%AE%E6%A3%AE",
                no: "01",
              },
            },
            {
              type: "spot",
              spot: {
                name: "AEON MALL Nagoya Noritake Garden",
                time: "11:00–12:30（建議）",
                desc: "書牆打卡、逛書店與吃午餐,12:30 左右開始往大須移動。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%82%A4%E3%82%AA%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%AB%20Nagoya%20Noritake%20Garden",
                no: "02",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Osu Deep Shopping",
          items: [
            {
              type: "transport",
              note: { mode: "步行 + 地鐵", text: "從名古屋站周邊往大須觀音 / 上前津一帶,含步行、候車與轉乘預留約一小時,13:30 開始深逛。" },
            },
            {
              type: "spot",
              spot: {
                name: "大須商店街 · 古著、藥妝與動漫電器",
                time: "13:30–18:00",
                desc: "今天完全錯開演唱會,把整個下午留給大須。按想買的店依序逛,累了就坐下休息,不另外加遠程景點。",
                meta: ["🛍 古著 / 藥妝 / 動漫電器", "🧾 購物時辦理免稅登錄"],
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%A0%88%E5%95%86%E5%BA%97%E8%A1%97",
                no: "03",
              },
            },
            {
              type: "spot",
              spot: {
                name: "大須觀音",
                time: "深逛途中",
                desc: "散步時順道參拜,與商店街放在同一區域,不用特別折返。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%A0%88%E8%A6%B3%E9%9F%B3",
                no: "04",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · Osu Dinner & Fushimi",
          items: [
            {
              type: "spot",
              spot: {
                name: "大須在地晚餐",
                time: "18:00–19:30（建議）",
                desc: "在商店街附近吃晚餐,再走逛收尾。晚餐以現場想吃的店為主。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%A0%88%E5%95%86%E5%BA%97%E8%A1%97",
                no: "05",
              },
            },
            {
              type: "transport",
              note: {
                mode: "大須觀音 → 伏見 → 丸之內 → TIC HOTEL",
                text: "吃完晚餐經伏見收尾,搭鶴舞線往上小田井方向,從伏見一站到丸之內,再步行回 TIC HOTEL。也可由伏見依導航步行回民宿,視當晚體力選擇。",
              },
            },
          ],
        },
      ],
      meals: [
        {
          title: "Meals · 餐飲安排",
          restaurants: [
            { name: "[午餐] AEON MALL Nagoya Noritake Garden", desc: "書牆打卡後在商場吃午餐。" },
            { name: "[晚餐] 大須商店街周邊在地餐廳", desc: "逛到晚上就近吃飯,再經伏見回飯店。" },
          ],
        },
      ],
    },
    {
      day: 5,
      date: "2026.11.10 · 二 · 捷星移動日",
      title: "名站鰻魚飯 · 採買 · 捷星飛福岡",
      summary: "TIC HOTEL 住宿頁列10:00前退房（訂房單另約則依訂房單）,退房後搭櫻通線到名古屋站寄行李,再吃鰻魚飯（まるや／備長）與名站採買。16:00起取行李,17:00左右搭名鐵到中部機場T1,19:30捷星起飛、21:05左右抵福岡,再搭地鐵到博多入住TABIGOYA。",
      lodging: "TABIGOYA LIFE＆TRIP HAKATA EAST（博多站筑紫口）",
      route: {
        stops: ["TIC HOTEL 退房", "丸之內 → 名古屋站寄行李", "名古屋站鰻魚飯", "名站採買 / 取行李", "中部國際機場 T1", "福岡機場國內線", "博多站筑紫口", "TABIGOYA"],
        mapUrl: "https://www.google.com/maps/dir/TIC%20HOTEL%20Marunouchisakae%20%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B8%82%E4%B8%AD%E5%8C%BA%E4%B8%B8%E3%81%AE%E5%86%852-15-19/%E4%B8%B8%E3%81%AE%E5%86%85%E9%A7%85%20%E5%90%8D%E5%8F%A4%E5%B1%8B/%E5%90%8D%E5%8F%A4%E5%B1%8B%E9%A7%85/%E4%B8%AD%E9%83%A8%E5%9B%BD%E9%9A%9B%E7%A9%BA%E6%B8%AF/",
      },
      points: [
        { name: "TIC HOTEL Marunouchisakae", lat: 35.174221, lng: 136.89888, kind: "stay" },
        { name: "名古屋站", lat: 35.1709, lng: 136.8815, kind: "transit" },
        { name: "中部國際機場 T1", lat: 34.8584, lng: 136.8051, kind: "transit" },
        { name: "福岡機場國內線", lat: 33.5986, lng: 130.4485, kind: "transit" },
        { name: "博多站", lat: 33.5897, lng: 130.4207, kind: "transit" },
        { name: "TABIGOYA HAKATA EAST", lat: 33.59114, lng: 130.4237, kind: "stay" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Check-out & Eel Rice",
          items: [
            {
              type: "spot",
              spot: {
                name: "TIC HOTEL 退房 · 名古屋站寄行李",
                time: "10:00 前（依訂房單）",
                desc: "住宿頁列10:00前退房,若你的訂房單另有約定則以訂房單為準。民宿寄放服務未確認,建議退房後帶行李步行至丸之內站,搭櫻通線往太閤通方向,經國際中心到名古屋站下車,使用站內置物櫃或寄放服務。記下櫃位與取件方式,下午採買完直接取行李往機場。",
                no: "01",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=TIC%20HOTEL%20Marunouchisakae%20%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B8%82%E4%B8%AD%E5%8C%BA%E4%B8%B8%E3%81%AE%E5%86%852-15-19",
              },
            },
            {
              type: "spot",
              spot: {
                name: "名古屋站 · 鰻魚飯",
                time: "11:30–13:00（建議）",
                desc: "まるや（Maruya）為優先、備長為備選。用餐地點放在名站商圈,排隊過久則換備選,保留採買與取行李的時間。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%81%BE%E3%82%8B%E3%82%84%E6%9C%AC%E5%BA%97%20%E5%90%8D%E9%A7%85%E5%BA%97",
                no: "02",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Meieki Shopping & Airport",
          items: [
            {
              type: "spot",
              spot: {
                name: "名站商圈採買",
                time: "13:00–16:00（建議）",
                desc: "車站百貨與地下街補貨。需要退稅的商品當場出示護照辦理登錄並保存單據,本次在 11/14 福岡離境時一起接受海關確認。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%90%8D%E5%8F%A4%E5%B1%8B%E9%A7%85",
                no: "03",
              },
            },
            {
              type: "spot",
              spot: {
                name: "名古屋站取行李 · 前往名鐵站",
                time: "16:00–16:40（預留）",
                desc: "在名古屋站取回早上寄放的行李,再走到名鐵名古屋站。16:00起保留取件、步行與購票時間,目標16:40前到名鐵站找月台,17:00左右搭車赴機場。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%90%8D%E9%89%84%E5%90%8D%E5%8F%A4%E5%B1%8B%E9%A7%85",
                no: "04",
              },
            },
            {
              type: "transport",
              note: {
                mode: "名鐵 → 中部國際機場 T1",
                text: "17:00 左右搭往「中部国際空港」的名鐵電車;μSKY 最快約 28 分鐘,另留候車與步行。下車後經 Access Plaza 往第1航廈 3F,找捷星「O」櫃檯。目標約 17:30–17:50 抵櫃檯;若當班車接不上就提早搭上一班。",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · Jetstar to Fukuoka",
          items: [
            {
              type: "spot",
              spot: {
                name: "中部機場 T1 · 捷星報到、託運與安檢",
                time: "17:30–19:00（行程預留）",
                desc: "捷星已搬到第1航廈 3F O 櫃檯。19:30 航班按官網一般規則最晚 19:00 完成報到與託運,但不要壓線;目標 18:30 前通過安檢、19:00 前到登機門。當日航班通知優先。",
                meta: ["✈️ 捷星 T1 · 3F O 櫃檯", "🧳 先確認票種行李額度"],
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E4%B8%AD%E9%83%A8%E5%9B%BD%E9%9A%9B%E7%A9%BA%E6%B8%AF%20%E7%AC%AC1%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB",
                no: "05",
              },
            },
            {
              type: "spot",
              spot: {
                name: "捷星 · 名古屋 → 福岡",
                time: "19:30 起飛 / 21:05 左右抵達",
                desc: "依你提供的已購航班安排,均為日本當地時間。這是日本國內線,不在這一天辦理離境退稅確認。",
                no: "06",
              },
            },
            {
              type: "transport",
              note: {
                mode: "福岡機場國內線 → 博多站",
                text: "領行李後依「地下鉄」指標往國內線南側,搭電梯 / 電扶梯下 B2F。從福岡空港站搭空港線往姪浜方向,到博多站下車（約 5 分鐘）。跟著「筑紫口／新幹線」指標走到車站東側。",
              },
            },
            {
              type: "spot",
              spot: {
                name: "TABIGOYA · 晚間入住",
                time: "約 22:00–22:30（預估）",
                desc: "從博多站筑紫口步行到 TABIGOYA LIFE＆TRIP HAKATA EAST,地址為博多區博多駅東1-14-30;末段步行與找路約留 5–10 分鐘。依訂房通知確認晚間入住方式,今晚只安排簡單補給與休息。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=TABIGOYA%20LIFE%20TRIP%20HAKATA%20EAST",
                no: "07",
              },
            },
          ],
        },
      ],
      meals: [
        {
          title: "Meals · 餐飲安排",
          restaurants: [
            { name: "[午餐] まるや / 備長 · 名古屋站鰻魚飯", desc: "集中在名站附近,不為排隊影響搭機。" },
            { name: "[晚餐] 中部機場餐廳 / 輕食", desc: "完成報到後用餐,保留安檢與走到登機門的時間。" },
            { name: "[宵夜] TABIGOYA 附近簡單補給", desc: "晚間入住後就近買水、早餐與輕食。" },
          ],
        },
      ],
    },
    {
      day: 6,
      date: "2026.11.11 · 三 · 潮流街區與夜展",
      title: "Daimyo 選物 · 天神 · 世解 -SEKAI-",
      summary: "10:30 出門,白天逛大名（Daimyo）選品店、古著與咖啡,再到天神商圈。18:30 進大濠公園日本庭園看「世解 -SEKAI-」夜間光影展,結束後回天神吃牛腸鍋或居酒屋。",
      lodging: "TABIGOYA LIFE＆TRIP HAKATA EAST（博多站筑紫口）",
      route: {
        stops: ["TABIGOYA", "Daimyo 大名", "天神", "大濠公園日本庭園 · 世解", "天神晚餐", "TABIGOYA"],
        mapUrl: "https://www.google.com/maps/dir/TABIGOYA%20LIFE%20TRIP%20HAKATA%20EAST/%E5%A4%A7%E5%90%8D%20%E7%A6%8F%E5%B2%A1/%E5%A4%A9%E7%A5%9E/%E5%A4%A7%E6%BF%A0%E5%85%AC%E5%9C%92%E6%97%A5%E6%9C%AC%E5%BA%AD%E5%9C%92/%E5%A4%A9%E7%A5%9E/",
      },
      points: [
        { name: "TABIGOYA HAKATA EAST", lat: 33.59114, lng: 130.4237, kind: "stay" },
        { name: "Daimyo 大名", lat: 33.5885, lng: 130.3944, kind: "spot" },
        { name: "天神商圈", lat: 33.5906, lng: 130.3993, kind: "spot" },
        { name: "大濠公園日本庭園", lat: 33.5827861, lng: 130.3787469, kind: "spot" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Daimyo Select Shops",
          items: [
            {
              type: "transport",
              note: { mode: "博多 → 天神 / 大名", text: "10:30 左右出門,從博多站搭地鐵往天神或赤坂一帶,再步行進大名街區。各選物店開店時間不同,還沒開的店可留到下午。" },
            },
            {
              type: "spot",
              spot: {
                name: "Daimyo 大名 · 選品店、古著與咖啡",
                time: "10:30 出門 / 上午至午後",
                desc: "逛大名與天神周邊選物、古著店,中間坐下喝咖啡吃午餐,不排遠程景點。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E5%90%8D%20%E7%A6%8F%E5%B2%A1",
                no: "01",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Tenjin & Evening Transfer",
          items: [
            {
              type: "spot",
              spot: {
                name: "天神商圈 · 自由逛街",
                time: "13:00–16:30（建議）",
                desc: "把大名與天神放在同一天。買完可依體力先休息或回飯店放物品,傍晚再出發看夜展。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A9%E7%A5%9E%20%E7%A6%8F%E5%B2%A1",
                no: "02",
              },
            },
            {
              type: "transport",
              note: { mode: "天神 → 大濠公園日本庭園", text: "傍晚搭空港線至大濠公園站,步行往公園南側日本庭園入口;連同找路與候車留約 45–60 分鐘,目標 18:15 左右到場等候。" },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · SEKAI Art Night Walk",
          items: [
            {
              type: "spot",
              spot: {
                name: "大濠公園日本庭園「世解 -SEKAI-」",
                time: "18:30–20:00（建議停留）",
                desc: "夜間光影展依你的安排在 18:30 入場。11 月官方時段為 18:30–22:00、最晚入場 21:30;預先確認門票與當晚天候公告。",
                meta: ["✨ 夜間光影展", "🎟 預售成人 ¥1,800 / 當日 ¥2,300"],
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%BF%A0%E5%85%AC%E5%9C%92%E6%97%A5%E6%9C%AC%E5%BA%AD%E5%9C%92",
                no: "03",
              },
            },
            {
              type: "spot",
              spot: {
                name: "天神晚餐 · 牛腸鍋 / 居酒屋",
                time: "20:15 之後（建議）",
                desc: "夜展結束後回天神吃晚餐,選可配合抵達時間的餐廳,再回博多 TABIGOYA。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A9%E7%A5%9E%20%E7%A6%8F%E5%B2%A1",
                no: "04",
              },
            },
          ],
        },
      ],
      meals: [
        {
          title: "Meals · 餐飲安排",
          restaurants: [
            { name: "[午餐 / 咖啡] Daimyo 大名街區", desc: "選物與古著之間安排休息。" },
            { name: "[晚餐] 天神牛腸鍋 / 居酒屋", desc: "夜展後用餐,訂位時確認最晚入店與點餐時間。" },
          ],
        },
      ],
    },
    {
      day: 7,
      date: "2026.11.12 · 四 · 福岡演唱會",
      title: "博多運河城 · 飯店充電 · 福岡 LIVE",
      summary: "上午到午後都留在博多運河城,逛街、看水舞與吃午餐。15:00 回 TABIGOYA 休息、充電與整理電子票,傍晚再往會場,19:00 福岡演唱會。",
      lodging: "TABIGOYA LIFE＆TRIP HAKATA EAST（博多站筑紫口）",
      route: {
        stops: ["TABIGOYA", "博多運河城", "15:00 回 TABIGOYA 休息", "Marine Messe 福岡 A 館", "TABIGOYA"],
        mapUrl: "https://www.google.com/maps/dir/TABIGOYA%20LIFE%20TRIP%20HAKATA%20EAST/%E3%82%AD%E3%83%A3%E3%83%8A%E3%83%AB%E3%82%B7%E3%83%86%E3%82%A3%E5%8D%9A%E5%A4%9A/TABIGOYA%20LIFE%20TRIP%20HAKATA%20EAST/%E3%83%9E%E3%83%AA%E3%83%B3%E3%83%A1%E3%83%83%E3%82%BB%E7%A6%8F%E5%B2%A1A%E9%A4%A8/",
      },
      points: [
        { name: "TABIGOYA HAKATA EAST", lat: 33.59114, lng: 130.4237, kind: "stay" },
        { name: "博多運河城", lat: 33.5897, lng: 130.4115, kind: "spot" },
        { name: "TABIGOYA HAKATA EAST", lat: 33.59114, lng: 130.4237, kind: "stay" },
        { name: "Marine Messe 福岡 A 館", lat: 33.6104, lng: 130.4024, kind: "spot" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Canal City",
          items: [
            {
              type: "spot",
              spot: {
                name: "博多運河城 · 逛街與水舞",
                time: "上午–午餐",
                desc: "白天在運河城室內逛街、看水舞,午餐也在這裡解決;表演時刻依當日公告。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%82%AD%E3%83%A3%E3%83%8A%E3%83%AB%E3%82%B7%E3%83%86%E3%82%A3%E5%8D%9A%E5%A4%9A",
                no: "01",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Rest & Recharge",
          items: [
            {
              type: "spot",
              spot: {
                name: "運河城收尾 · 回飯店",
                time: "午餐後–15:00",
                desc: "午後短逛就收尾,把回飯店的步行與交通也算進去,15:00 左右回到 TABIGOYA。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%82%AD%E3%83%A3%E3%83%8A%E3%83%AB%E3%82%B7%E3%83%86%E3%82%A3%E5%8D%9A%E5%A4%9A",
                no: "02",
              },
            },
            {
              type: "spot",
              spot: {
                name: "TABIGOYA · 充分補眠與充電",
                time: "15:00–16:30（建議）",
                desc: "讓手機、行動電源與自己一起充電。準備電子票、身分文件、飲水與應援用品,傍晚再出發。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=TABIGOYA%20LIFE%20TRIP%20HAKATA%20EAST",
                no: "03",
              },
            },
            {
              type: "transport",
              note: {
                mode: "博多站 → Marine Messe 福岡",
                text: "依當日活動公告,從博多站搭往會場方向的巴士或計程車。把候車與演唱會人潮算進去,建議 17:30 左右抵場,實際入場依電子票。",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · Fukuoka LIVE",
          items: [
            {
              type: "spot",
              spot: {
                name: "星街彗星 · 福岡演唱會",
                time: "19:00 開演",
                desc: "會場為 Marine Messe 福岡 A 館。散場後依現場交通安排回博多,宵夜就近吃,今晚不另排景點。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%9E%E3%83%AA%E3%83%B3%E3%83%A1%E3%83%83%E3%82%BB%E7%A6%8F%E5%B2%A1A%E9%A4%A8",
                no: "04",
              },
            },
          ],
        },
      ],
      meals: [
        {
          title: "Meals · 餐飲安排",
          restaurants: [
            { name: "[午餐] 博多運河城", desc: "館內找想吃的餐廳,不用跨區移動。" },
            { name: "[晚餐 / 宵夜] 進場前輕食、散場後拉麵", desc: "先補充再進場,回博多後視營業時間吃宵夜。" },
          ],
        },
      ],
    },
    {
      day: 8,
      date: "2026.11.13 · 五 · teamLab 與夜景",
      title: "西新散步 · teamLab 森林 · 福岡塔夜景",
      summary: "上午西新商圈散步與午餐,下午約 14:30 看 teamLab 森林福岡 - SBI SECURITIES Co., Ltd.,晚上到福岡塔展望台看夜景。之後回市區吃燒肉或居酒屋,今天專心看展與登塔。",
      lodging: "TABIGOYA LIFE＆TRIP HAKATA EAST（博多站筑紫口）",
      route: {
        stops: ["TABIGOYA", "西新商圈", "teamLab 森林（BOSS E・ZO 5F）", "福岡塔展望台", "市區晚餐", "TABIGOYA"],
        mapUrl: "https://www.google.com/maps/dir/TABIGOYA%20LIFE%20TRIP%20HAKATA%20EAST/%E8%A5%BF%E6%96%B0%E9%A7%85/BOSS%20E%E3%83%BBZO%20FUKUOKA/%E7%A6%8F%E5%B2%A1%E3%82%BF%E3%83%AF%E3%83%BC/",
      },
      points: [
        { name: "TABIGOYA HAKATA EAST", lat: 33.59114, lng: 130.4237, kind: "stay" },
        { name: "西新商圈", lat: 33.5836, lng: 130.3599, kind: "spot" },
        { name: "teamLab 森林 · BOSS E・ZO", lat: 33.5950373, lng: 130.3637733, kind: "spot" },
        { name: "福岡塔", lat: 33.5933, lng: 130.3515, kind: "spot" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Nishijin Walk",
          items: [
            {
              type: "transport",
              note: { mode: "博多 → 西新", text: "搭地下鐵空港線往西新站,上午在西新商圈散步,午餐也留在附近。" },
            },
            {
              type: "spot",
              spot: {
                name: "西新商圈散步 · 午餐",
                time: "10:30–12:30（建議）",
                desc: "商店街輕鬆走逛,不用早起趕遠程。午餐後留時間移動到 BOSS E・ZO FUKUOKA。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E8%A5%BF%E6%96%B0%E5%95%86%E5%BA%97%E8%A1%97",
                no: "01",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · teamLab Forest",
          items: [
            {
              type: "transport",
              note: {
                mode: "西新 → BOSS E・ZO FUKUOKA",
                text: "約 13:00–14:00 開始往巨蛋旁 BOSS E・ZO 移動,依體力步行、巴士或短程計程車;預留找入口與上樓時間,不要壓 14:30 才到館外。",
              },
            },
            {
              type: "spot",
              spot: {
                name: "teamLab 森林福岡 - SBI SECURITIES Co., Ltd.",
                time: "約 14:30–16:30（預計）",
                desc: "展場在 BOSS E・ZO FUKUOKA 5F。依預約時段入場,先確認手機電量與互動 App;結束後留時間休息,再往福岡塔看夜景。",
                meta: ["🎨 互動光影展", "🎟 成人 ¥2,400 起,依日期票種"],
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%81%E3%83%BC%E3%83%A0%E3%83%A9%E3%83%9C%E3%83%95%E3%82%A9%E3%83%AC%E3%82%B9%E3%83%88%20%E7%A6%8F%E5%B2%A1",
                no: "02",
              },
            },
            {
              type: "transport",
              note: { mode: "BOSS E・ZO → 福岡塔", text: "看展後依體力步行或短程交通到福岡塔,中間留休息與候位時間。目標傍晚抵達,晚上在展望台看市區夜景。" },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · Fukuoka Tower Night View",
          items: [
            {
              type: "spot",
              spot: {
                name: "福岡塔展望台 · 夜景",
                time: "17:30–19:00（建議）",
                desc: "把重點放在登塔與夜景。官方一般營業至 22:00、最晚入館 21:30,當日營運與人流仍以現場為準。",
                meta: ["🗼 成人一般票 ¥1,000"],
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%A6%8F%E5%B2%A1%E3%82%BF%E3%83%AF%E3%83%BC",
                no: "03",
              },
            },
            {
              type: "spot",
              spot: {
                name: "市區晚餐 · 燒肉 / 居酒屋",
                time: "19:30 之後（建議）",
                desc: "回天神或博多吃晚餐,之後回 TABIGOYA 整理隔天退房行李與退稅商品。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%8D%9A%E5%A4%9A%E9%A7%85",
                no: "04",
              },
            },
          ],
        },
      ],
      meals: [
        {
          title: "Meals · 餐飲安排",
          restaurants: [
            { name: "[午餐] 西新商圈", desc: "商店街附近吃午餐後再移動。" },
            { name: "[晚餐] 天神 / 博多燒肉或居酒屋", desc: "登塔看完夜景後回市區用餐。" },
          ],
        },
      ],
    },
    {
      day: 9,
      date: "2026.11.14 · 六 · 回程與退稅確認",
      title: "博多最後採買 · 機場退稅確認 · 返台",
      summary: "TABIGOYA 原則 10:00 退房（依訂房方案）,行李改寄博多站置物櫃。AMU PLAZA、阪急最後採買與拉麵,16:00 前從博多出發,目標 17:00 抵福岡國際線3F。先辦理新制海關確認、再託運與出境,20:35 起飛返台。",
      route: {
        stops: ["TABIGOYA 退房", "博多站寄行李", "AMU PLAZA / 阪急", "福岡機場站（國內線）", "免費接駁巴士", "國際線3F海關確認", "託運 · 出境 · 20:35返台"],
        mapUrl: "https://www.google.com/maps/dir/TABIGOYA%20LIFE%20TRIP%20HAKATA%20EAST/%E5%8D%9A%E5%A4%9A%E9%A7%85/%E7%A6%8F%E5%B2%A1%E7%A9%BA%E6%B8%AF%E5%9B%BD%E9%9A%9B%E7%B7%9A%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB/",
      },
      points: [
        { name: "TABIGOYA HAKATA EAST", lat: 33.59114, lng: 130.4237, kind: "stay" },
        { name: "博多站", lat: 33.5897, lng: 130.4207, kind: "transit" },
        { name: "福岡機場國內線", lat: 33.5986, lng: 130.4485, kind: "transit" },
        { name: "福岡機場國際線", lat: 33.5859, lng: 130.451, kind: "transit" },
      ],
      blocks: [
        {
          period: "morning",
          label: "上午 · Check-out & Last Shopping",
          items: [
            {
              type: "spot",
              spot: {
                name: "TABIGOYA 退房 · 博多站寄行李",
                time: "10:00（依訂房方案）",
                desc: "依訂房規定退房,行李使用博多站置物櫃或站內可用的寄放服務。保留電子票與護照在身上,記下置物櫃位置。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%8D%9A%E5%A4%9A%E9%A7%85%20%E3%82%B3%E3%82%A4%E3%83%B3%E3%83%AD%E3%83%83%E3%82%AB%E3%83%BC",
                no: "01",
              },
            },
            {
              type: "spot",
              spot: {
                name: "AMU PLAZA · 博多阪急",
                time: "10:30–13:00（建議）",
                desc: "在車站百貨最後買伴手禮。若要退稅,購物當下就出示護照並完成店家免稅登錄,保存單據與退稅通知;一般收據不能到機場才補辦免稅。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%8D%9A%E5%A4%9A%E9%98%AA%E6%80%A5",
                no: "02",
              },
            },
          ],
        },
        {
          period: "afternoon",
          label: "下午 · Ramen & Airport Transfer",
          items: [
            {
              type: "spot",
              spot: {
                name: "博多站拉麵 · 最後採買收尾",
                time: "13:00–15:00（建議）",
                desc: "就近吃拉麵與最後補貨。15:00 起取行李、整理所有退稅商品,目標 16:00 前離開博多站,把機場接駁與退稅緩衝留足。",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%8D%9A%E5%A4%9A%E9%A7%85%20%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3",
                no: "03",
              },
            },
            {
              type: "transport",
              note: {
                mode: "TABIGOYA / 博多站 → 福岡國際線",
                text: "飯店步行回博多站,搭地下鐵空港線「福岡空港」方向到終點。地鐵只直達國內線:依「国際線連絡バス」指標出站,從 1A／2A 上1F,在1號乘車處搭免費接駁到國際線,再上3F出發大廳。含取行李、候車、步行與接駁,從博多站到國際線抓 60–90 分鐘;行李多也可搭計程車直達國際線。",
              },
            },
            {
              type: "spot",
              spot: {
                name: "國際線3F · 先完成海關確認",
                time: "17:00 到航廈 / 約留 45–60 分鐘",
                desc: "先攜護照與全部退稅商品接受海關判定,需要查驗時依指示開箱。確認完成後才交給航空公司託運,不要先把退稅商品交出去。這段時間是自行預留,不代表官方保證所需時間。",
                meta: ["🧳 順序:海關確認 → 託運 → 安檢 / 出境", "🕔 17:00 抵國際線目標"],
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%A6%8F%E5%B2%A1%E7%A9%BA%E6%B8%AF%20%E5%9B%BD%E9%9A%9B%E7%B7%9A%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB",
                no: "04",
              },
            },
          ],
        },
        {
          period: "evening",
          label: "晚上 · Check-in, Refund & Flight Home",
          items: [
            {
              type: "spot",
              spot: {
                name: "託運 · 安檢 · 出境 · 依店家方式收取退稅",
                time: "海關確認完成後",
                desc: "完成查驗後再報到與託運,依航空公司截止時間前往登機門。退款方式與到帳時間依店家或退稅業者通知,海關確認完成不等於已入帳。",
                no: "05",
              },
            },
            {
              type: "spot",
              spot: { name: "福岡 → 台北", time: "20:35 起飛", desc: "航班與登機門以實際機票及當日通知為準。護照、登機證、退款通知與收據留在隨身包。", no: "06" },
            },
          ],
        },
      ],
      meals: [
        {
          title: "Meals · 餐飲安排",
          restaurants: [
            { name: "[午餐] 博多站拉麵", desc: "車站周邊就近吃,不用再跨區移動。" },
            { name: "[晚餐] 機場 / 機上", desc: "以海關確認、報到及登機時間為優先。" },
          ],
        },
      ],
    },
  ],
  hotels: [
    {
      area: "名古屋 · Day 1–4 四晚（11/06 入住、11/10 退房）",
      name: "TIC HOTEL Marunouchisakae",
      meta: ["📍 愛知縣名古屋市中區丸の内2-15-19", "🚇 丸之內站（櫻通線 / 鶴舞線）", "🛏 住宿頁列16:00–23:00入住 / 10:00前退房,依訂房單"],
      desc: "11/6入住、11/10退房,共四晚。從名古屋站搭櫻通線往德重方向,經國際中心、丸之內兩站下車,上地面後步行與找路抓5–10分鐘。依訂房通知確認門禁、樓層與入住方式。11/10建議退房後直接帶行李到名古屋站寄放,名站採買完取件搭名鐵赴機場。",
    },
    {
      area: "福岡 · Day 5–8 四晚（11/10 晚入住、11/14 退房）",
      name: "TABIGOYA LIFE＆TRIP HAKATA EAST",
      meta: ["📍 博多區博多駅東1-14-30", "🚶 博多站筑紫口步行,抓 5–10 分鐘含找路", "🛏 原則15:00–24:00入住 / 10:00退房,依訂房方案"],
      desc: "依最新行程入住博多站東側 TABIGOYA。11/10 估計22:00–22:30抵達,事前依訂房通知確認晚間入住方式;11/14 退房後先規劃博多站置物櫃,不要假設飯店一定能寄放。",
    },
  ],
  budget: [
    { date: "11/06 Day 1", transport: "¥1,250", tickets: "—", food: "¥2,000", lodging: "¥5,000", total: "¥8,250" },
    {
      date: "11/07 Day 2",
      transport: "¥800",
      tickets: "¥500",
      food: "¥3,000",
      lodging: "¥5,000",
      total: "¥9,300",
    },
    { date: "11/08 Day 3", transport: "¥800", tickets: "—", food: "¥3,500", lodging: "¥5,000", total: "¥9,300" },
    { date: "11/09 Day 4", transport: "¥800", tickets: "—", food: "¥3,000", lodging: "¥5,000", total: "¥8,800" },
    {
      date: "11/10 Day 5",
      transport: "¥2,000",
      tickets: "—",
      food: "¥4,500",
      lodging: "¥5,500",
      total: "¥12,000",
    },
    {
      date: "11/11 Day 6",
      transport: "¥800",
      tickets: "¥1,800",
      food: "¥3,500",
      lodging: "¥5,500",
      total: "¥11,600",
    },
    { date: "11/12 Day 7", transport: "¥800", tickets: "—", food: "¥3,000", lodging: "¥5,500", total: "¥9,300" },
    {
      date: "11/13 Day 8",
      transport: "¥1,000",
      tickets: "¥3,400",
      food: "¥4,000",
      lodging: "¥5,500",
      total: "¥13,900",
    },
    { date: "11/14 Day 9", transport: "¥500", tickets: "—", food: "¥2,500", lodging: "—", total: "¥3,000" },
    {
      date: "合計",
      transport: "¥8,750",
      tickets: "¥5,700",
      food: "¥29,000",
      lodging: "¥42,000",
      total: "¥85,450",
      isTotal: true,
    },
  ],
  budgetNote: "每人當地支出暫估 ¥85,450,住宿仍以三人分攤的預算抓法計算,不是已訂房價。交通僅含地面交通,不含來回台日機票與 11/10 捷星機票;三場演唱會門票、購物、伴手禮與退稅手續費另計。11/11 世解以預售成人 ¥1,800 估算,當日票 ¥2,300;11/13 teamLab 以 ¥2,400 起加福岡塔 ¥1,000 估算,依實際票種調整。2026/11 新制購物先付含稅價,未扣除尚未入帳的退稅。",
  tips: [
    {
      title: "11/6 中部機場 → TIC HOTEL 丸之內",
      body: "TIC HOTEL Marunouchisakae,地址:愛知縣名古屋市中區丸の内2-15-19。到名古屋站後改轉櫻通線至丸之內,全段依民宿位置安排。",
      steps: [
        "入境領行李後,依 Access Plaza／名鉄電車指標到中部國際空港站;若抵達T2,先依機場指標往車站。",
        "搭名鐵到名鐵名古屋站。μSKY最快約28分鐘,需基本車票加 μticket;另留購票、候車與車廂確認時間。",
        "在名古屋站跟著「地下鉄 桜通線」轉乘往德重（徳重）方向,經國際中心、丸之內兩站下車。",
        "依電梯指標上地面後,導航丸の内2-15-19,步行與找路抓5–10分鐘。拖行李時優先走電梯動線,出關後到民宿合計抓60–90分鐘。",
        "依訂房通知確認入住方式;住宿頁列16:00–23:00入住、10:00前退房,實際以訂房單為準。",
      ],
      links: [
        { label: "中部機場・名鐵交通", href: "https://www.centrair.jp/access/train.html" },
        { label: "名古屋市交通局・櫻通線站序", href: "https://map.kotsu.city.nagoya.jp/rp/subway/TRP0000191.htm" },
        {
          label: "TIC HOTEL・地址導航",
          href: "https://www.google.com/maps/search/?api=1&query=TIC%20HOTEL%20Marunouchisakae%20%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B8%82%E4%B8%AD%E5%8C%BA%E4%B8%B8%E3%81%AE%E5%86%852-15-19",
        },
        { label: "TIC HOTEL・住宿資訊與退房時間", href: "https://www.booking.com/hotel/jp/tic-marunouchisakae.ja.html" },
      ],
    },
    {
      title: "11/10 TIC HOTEL → 名站寄行李 → 中部機場",
      body: "TIC HOTEL退房後先把行李帶到名古屋站寄放,午餐、採買與搭機集中在名站。保留17:00左右名鐵、19:30捷星的原安排。",
      steps: [
        "按住宿頁先以10:00前退房規劃（訂房單另約則依訂房單）。步行到丸之內站,搭櫻通線往太閤通方向,經國際中心、名古屋兩站下車,在站內寄行李並保存取件資訊。",
        "名站午餐與採買後,16:00起取回行李、步行往名鐵名古屋站,目標16:40前到站購票找月台。",
        "17:00左右搭往中部國際空港的名鐵電車,下車經 Access Plaza 往T1 3F O櫃檯,目標17:30–17:50到達。",
        "按捷星GK國內線一般規則,報到與託運最晚出發前30分鐘完成;本班即19:00。建議18:30前過安檢、19:00前到登機門,當日通知優先。",
        "名古屋→福岡是國內線。名古屋買的退稅商品一起帶往福岡,11/14離境再作海關確認。",
      ],
      links: [
        { label: "中部機場・名鐵交通", href: "https://www.centrair.jp/access/train.html" },
        { label: "捷星・中部機場 T1 O 櫃檯", href: "https://www.centrair.jp/flight/airline/jetstar.html" },
        { label: "捷星・報到與登機時間", href: "https://www.jetstar.com/jp/ja/help/when-do-i-need-to-get-to-the-airport" },
        { label: "名古屋市交通局・櫻通線站序", href: "https://map.kotsu.city.nagoya.jp/rp/subway/TRP0000191.htm" },
        {
          label: "TIC HOTEL・地址導航",
          href: "https://www.google.com/maps/search/?api=1&query=TIC%20HOTEL%20Marunouchisakae%20%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B8%82%E4%B8%AD%E5%8C%BA%E4%B8%B8%E3%81%AE%E5%86%852-15-19",
        },
      ],
    },
    {
      title: "11/10 福岡機場 → TABIGOYA",
      body: "21:05左右抵福岡國內線,領行李與找路後,預估22:00–22:30入住;不要把落地時間當作已到飯店。",
      steps: [
        "國內線領行李後,往航廈南側搭電梯或電扶梯下B2F,依地下鉄指標到福岡空港站。",
        "搭空港線往姪浜方向,博多站下車（車程約5分鐘）,跟著筑紫口／新幹線指標到車站東側。",
        "步行到 TABIGOYA LIFE＆TRIP HAKATA EAST（博多駅東1-14-30）,留5–10分鐘找路。地址與入住方式先存手機。",
        "依訂房通知確認晚間入住流程。若航班延誤或大件行李較多,可從機場搭計程車直接到住宿。",
      ],
      links: [
        { label: "福岡機場・地鐵與航廈動線", href: "https://www.fukuoka-airport.jp/access/subway.html" },
        { label: "TABIGOYA・官方住宿資訊", href: "https://www.nextstay.co.jp/n-33-hakata-sta-east-2/" },
        {
          label: "TABIGOYA・地圖",
          href: "https://www.google.com/maps/search/?api=1&query=TABIGOYA%20LIFE%20TRIP%20HAKATA%20EAST",
        },
      ],
    },
    {
      title: "11/14 TABIGOYA → 福岡國際線",
      body: "20:35班機,這版把國際線航廈抵達目標提前到17:00,額外留退稅判定與可能查驗的緩衝。",
      steps: [
        "依訂房方案退房,先在博多站寄行李,採買完取回。16:00前由博多站出發,行李與全部退稅商品都要隨身帶到海關確認處。",
        "搭空港線往福岡空港站。出站依国際線連絡バス指標,從1A／2A上1F,到1號乘車處搭免費接駁至國際線,再上3F。",
        "地鐵不直達國際線。取行李、候車、步行與接駁合計抓60–90分鐘;行李多可改搭計程車直達國際線。",
        "到國際線後,先完成海關確認,再依航空公司開櫃與截止時間報到、託運、安檢及出境。",
      ],
      links: [
        { label: "福岡機場・地鐵與航廈動線", href: "https://www.fukuoka-airport.jp/access/subway.html" },
        { label: "福岡機場・免費航廈接駁", href: "https://www.fukuoka-airport.jp/access/bus2.html" },
      ],
    },
    {
      title: "2026/11/1 起 · 先付稅、出境確認後退款",
      body: "本趟11/6–11/14購物適用新的リファンド方式。店內仍須完成免稅登錄,不是拿一般收據到機場就能補辦。",
      steps: [
        "同一店家、同一天的符合資格商品合計達未稅¥5,000以上,購買時出示護照並付含稅價,依店家指示辦免稅與退款登錄。",
        "保存收據、商品、店家退款通知及指定退款資料;購入後90日內離境時,攜全部商品接受海關確認。",
        "新制取消消耗品特殊包裝,但退稅商品仍須全部帶出境;食品、飲料、化妝品等不要在日本消耗,若已消耗須向海關申報,不可逕行以端末申請。",
        "退款由店家或其業者依約辦理,方法與到帳時間不同;先確認費用與通知,不要預設一定退到原卡或保證全額立即到帳。",
      ],
      links: [
        { label: "日本觀光廳・新制旅客說明", href: "https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00021.html" },
        { label: "日本觀光廳・旅客FAQ", href: "https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00023.html" },
        { label: "日本國稅廳・免稅制度", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6559.htm" },
      ],
    },
    {
      title: "福岡離境 · 海關確認一定在託運前",
      body: "海關確認完成與退款入帳是兩個步驟。國內線移動不算離境,本趟集中在11/14福岡辦理。",
      steps: [
        "國際線3F南側J～M櫃檯前找退稅KIOSK,以護照判定;或在出發大廳連接 Customs_WiFi_For_TaxRefund（密碼jcustoms）,以Visit Japan Web辦理。",
        "GREEN表示海關程序完成;RED需依指示攜護照與商品到旁邊確認區查驗。全部處理完才把商品放回行李託運。",
        "如選現金退款,出境後在HAKATA FOOD HALL入口旁指定設備 / 櫃檯領取日圓;其他方式依店家通知辦理。",
      ],
      links: [
        { label: "福岡機場・退稅位置與流程", href: "https://www.fukuoka-airport.jp/taxrefund_info.html" },
        { label: "日本海關・出境確認", href: "https://www.customs.go.jp/kaigairyoko/taxrefund.htm" },
      ],
    },
    {
      title: "三場演唱會 · 電子票與散場",
      body: "11/7 18:00星街彗星名古屋（IG Arena）、11/8 18:00 YOASOBI名古屋（巨蛋）、11/12 19:00福岡。入場、周邊與本人確認依各票券公告。",
      steps: [
        "11/7 名古屋城與金鯱橫丁後直接到名城公園,不繞去大須。",
        "11/8 在巨蛋前AEON補給,14:30走空橋進場;散場可往大曽根站搭JR。",
        "11/12 上午午後只逛運河城,15:00回飯店補眠充電,再出發去會場。",
      ],
      links: [
        { label: "IG Arena・官方交通", href: "https://www.ig-arena.jp/access/" },
        { label: "巨蛋前AEON・交通", href: "https://www.aeon.jp/sc/nagoyadomemae/access/" },
      ],
    },
    {
      title: "11/9 則武之森 · 週一休館提醒",
      body: "官方11月行事曆標示11/9館舍全休。保留你的周邊散步路線,不排館內參觀或園內餐飲;可通行範圍依現場,午餐與書牆移到隔壁AEON。13:30大須深逛照原安排。",
      links: [
        { label: "則武之森・官方營業日曆", href: "https://www.noritake.co.jp/mori/info/" },
        { label: "Noritake Garden AEON・交通", href: "https://nagoya-noritake-garden.aeonmall.jp/access" },
      ],
    },
    {
      title: "世解與 teamLab · 預約與手機電量",
      body: "11/11 18:30世解夜展、11/13約14:30 teamLab,都先確認票券與當日營運。teamLab後只接福岡塔夜景,保留你這版輕鬆看展的節奏。",
      links: [
        { label: "世解 -SEKAI-・官網", href: "https://sekai.run-hun.com/" },
        { label: "teamLab 森林・官網", href: "https://www.teamlab.art/jp/e/forest/" },
        { label: "福岡塔・票價與營業", href: "https://www.fukuokatower.co.jp/charge/" },
      ],
    },
  ],
};
