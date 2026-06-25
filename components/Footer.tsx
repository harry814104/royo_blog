export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--sc-line)] bg-[color:var(--sc-cream-2)]">
      <div className="mx-auto grid max-w-[1160px] gap-10 px-6 py-14 sm:grid-cols-2 sm:px-10 lg:grid-cols-3">
        <div className="max-w-sm">
          <p className="text-lg font-medium">
            FLÂNEUR<span className="text-forest"> : </span>ROYO
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            漫遊在城市與程式之間。紀錄路上的光影,螢幕前的思考,用理性的代碼與感性的日記,在流逝的時間裡刻下專屬的痕跡。
          </p>
        </div>

        <div className="text-sm">
          <p className="overline mb-3">聯絡我</p>
          <ul className="space-y-2 text-ink-soft">
            <li>Email：egoistroyo@gmail.com</li>
            <li>LINE：harry7739137</li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="overline mb-3">追蹤我</p>
          <ul className="space-y-2 text-ink-soft">
            <li>Instagram：@egoistroyo</li>
            <li>Facebook：HarryLiao</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[color:var(--sc-line)]">
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-2 px-6 pb-28 pt-5 text-xs text-ink-mute sm:px-10 sm:pb-24">
          <p>© {new Date().getFullYear()} HarryLiao · FLÂNEUR : ROYO. &nbsp; All rights reserved.</p>
          <p>#ROYOBLOG2026</p>
        </div>
      </div>
    </footer>
  );
}
