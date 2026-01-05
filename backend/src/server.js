import app from "./app.js";

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
// Restart trigger for Prisma updates v2
