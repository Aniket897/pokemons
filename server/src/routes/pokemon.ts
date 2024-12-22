import { Request, Response, Router } from "express";
import pokemon from "../models/pokemon";

const router = Router();

router.get("/", async (req: Request, resp: Response) => {
  try {
    const { page = 1, skip = 0, limit = 20, query, sortBy, type } = req.query;

    const searchQuery = {
      ...(query
        ? {
            name: { $regex: query, $options: "i" },
          }
        : {}),
      ...(type
        ? {
            types: { $in: type },
          }
        : {}),
    };

    console.log("SEARCH QUERY :", query);
    console.log("SEARCH QUERY :", type);

    console.log(sortBy);

    let sortOption = {};
    if (sortBy == "1") sortOption = { name: 1 };
    else if (sortBy == "-1") sortOption = { name: -1 };

    console.log("SOR OPTION: ", sortOption);

    const totalCount = await pokemon.countDocuments(searchQuery);

    const result = await pokemon
      .find(searchQuery)
      .sort(sortOption)
      .skip((Number(page) - 1) * Number(limit) + Number(skip))
      .limit(Number(limit));

    resp.status(200).json({
      message: "Pokemon fetched successfully",
      totalCount,
      pokemons: result,
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      message: "Internal server error",
    });
  }
});

export default router;
