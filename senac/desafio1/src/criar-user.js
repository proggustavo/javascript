import express from "express";

const router = express.Router();

router.post("/create-user", () => {
  console.log("====================================");
  console.log("cheguei");
  console.log("====================================");
});

export { router as CriarUserRouter };
