import userModels from "../modules/userModels.js";


export const Controllerfilm = async (req, res) => {
  try {
    console.log(req.body);
    const { favhero, networth, field, city, Currentwork } = req.body;

    const fullview = await userModels.create({
      favhero,
      networth,
      field,
      city,
      Currentwork,
    });

    res.status(200).json({
      msg: "Hello Succesfully Done",
      fullview,
    });
  } catch (error) {
    console.log("error :", error.message);
  }
};


export const getAllFilms = async (req, res) => {
  try {
    const films = await userModels.find();
    res.status(200).json(films);
  } catch (error) {
    console.error("Error in GET:", error.message);
    res.status(500).json({ error: "Server Error: Unable to fetch films" });

    // http://localhost:3000/api/auth/film

//     {
//   "favhero": "Ajith",
//   "networth": "200Cr",
//   "field": "Actor",
//   "city": "Chennai",
//   "Currentwork": "Kadavul"
// }
  }
};


export const getFilmById = async (req, res) => {
  try {
    const { id } = req.params; 

    console.log("Requested ID:", id);

    const film = await userModels.findById(id);

    if (!film) {
      return res.status(404).json({
        message: "Film not ",found
      });
    }

    res.status(200).json({
      message: "Film fetched successfully",
      data: film,
    });
  } catch (error) {
    console.error("Error fetching film by ID:", error.message);
    res.status(500).json({
      error: "Server Error: Unable to fetch film by ID",
    });
  }

  // :  http://localhost:3000/api/auth/film/:id
};



