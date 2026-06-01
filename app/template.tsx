// 每次路由切換時 template 會重新掛載,觸發 .page-enter 進場動畫。
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
