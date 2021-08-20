import app from "./app";

const _PORT: number = parseInt(process.env.PORT as string) || 3000;

app.listen(_PORT, () => {
  console.log("\n🚀 IPL Dashboard backend api running at 👉 " + _PORT);
});
