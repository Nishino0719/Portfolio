This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Next.js + Typescript + Tailwind css + Material UI

- Next.js の設定

```bash
# Next.jsのプロジェクトを作成
npx create-next-app your-project-name

# srcディレクトリを作成 + pagesなどのディレクトリへ
mkdir src; mv components lib pages styles src

```

- Prettier の設定
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

- Typescript 対応

```bash
# ts用の設定ファイルを作成
touch tsconfig.json
# npm run devをしてエラーが出たときのメッセージを走らせる
npm install --save-dev typescript @types/react @types/node
# jsファイルをtsxに変更
find src -name "*.js" | sed 'p;s/.js$/.tsx/' | xargs -n2 mv
```
