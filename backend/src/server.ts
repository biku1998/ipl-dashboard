import app from "./app";

const _PORT: number = parseInt(process.env.PORT as string) || 3000;

app.listen(_PORT, () => {
  console.log("backend API running on " + _PORT);
});
