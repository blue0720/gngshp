// ------------------------------------------------------------------
// PlaceholderImage とは:
// まだ本物の写真が用意できていない箇所に一時的に置く「仮の画像枠」です。
// ネットから適当な画像を持ってくるのではなく、CSSだけで四角い枠と
// ラベル文字を表示しています（外部サイトへのアクセスが発生しないので安全）。
//
// 使い方: <PlaceholderImage label="オフィス写真" ratio="16 / 9" />
// 本物の写真が用意できたら、この部品の代わりに next/image の <Image> タグに
// 差し替える（1箇所ずつ置き換えていけばよい）。
// ------------------------------------------------------------------
import styles from "./PlaceholderImage.module.css";

export default function PlaceholderImage({ label = "IMAGE", ratio = "4 / 3", className = "" }) {
  return (
    <div className={`${styles.placeholder} ${className}`} style={{ aspectRatio: ratio }}>
      <span>{label}</span>
    </div>
  );
}
