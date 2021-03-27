This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Works 写真素材
https://browserframe.com/

## Next.js + Typescript + Tailwind css

### Next.js プロジェクト作成

```bash
# Next.jsのプロジェクトを作成
npx create-next-app your-project-name

# srcディレクトリを作成 + pagesなどのディレクトリへ
mkdir src; mv components lib pages styles src

```

### Prettier 対応

.prettierrc にて以下の記述を追加

```bash
# .prettierrc
{
  "trailingComma": "none",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}

```

### Typescript 対応

```bash
# ts用の設定ファイルを作成
touch tsconfig.json
# npm run devをしてエラーが出たときのメッセージを走らせる
npm install --save-dev typescript @types/react @types/node
# jsファイルをtsxに変更
find src -name "*.js" | sed 'p;s/.js$/.tsx/' | xargs -n2 mv
```

### Tailwind css 対応

```bash
# 必要パッケージのインストール
npm install tailwindcss@latest postcss@latest autoprefixer@latest
# tailwind cssの設定ファイルたちをinit
npx tailwindcss init -p
```

設定ファイルの記述(purge is 大事)

```bash
# tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: { extend: { colors: { "accent-1": "#333" } } },
  variants: { extend: {} },
  plugins: [],
};
```

```bash
# postcss.config.js
module.exports = {
  plugins: ["tailwindcss", "autoprefixer"],
};
```
