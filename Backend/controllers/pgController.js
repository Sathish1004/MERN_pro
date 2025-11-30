import PG from "../models/PG.js";
import Review from "../models/Review.js";

// @desc    Get all PGs with filters
// @route   GET /api/pgs
// @access  Public
export const getAllPGs = async (req, res, next) => {
  try {
    const { gender, area, minPrice, maxPrice, search, sort } = req.query;

    // Build query
    let query = { isActive: true };

    if (gender && gender !== "all") {
      query.gender = gender === "both" ? "both" : gender;
    }

    if (area) {
      query["location.area"] = { $regex: area, $options: "i" };
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { "location.area": { $regex: search, $options: "i" } },
      ];
    }

    // Execute query
    let pgsQuery = PG.find(query).populate("owner", "name email phone");

    // Sort
    if (sort === "price-low") {
      pgsQuery = pgsQuery.sort({ price: 1 });
    } else if (sort === "price-high") {
      pgsQuery = pgsQuery.sort({ price: -1 });
    } else if (sort === "rating") {
      pgsQuery = pgsQuery.sort({ "rating.average": -1 });
    } else {
      pgsQuery = pgsQuery.sort({ createdAt: -1 });
    }

    const pgs = await pgsQuery;

    res.status(200).json({
      success: true,
      count: pgs.length,
      data: pgs,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single PG by ID
// @route   GET /api/pgs/:id
// @access  Public
export const getPGById = async (req, res, next) => {
  try {
    const pg = await PG.findById(req.params.id).populate(
      "owner",
      "name email phone"
    );

    if (!pg) {
      return res.status(404).json({
        success: false,
        message: "PG not found",
      });
    }

    res.status(200).json({
      success: true,
      data: pg,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new PG
// @route   POST /api/pgs
// @access  Private (Owner/Admin)
export const createPG = async (req, res, next) => {
  try {
    // Add owner from logged in user
    req.body.owner = req.user.id;

    // Set available capacity same as total initially
    if (req.body.capacity && req.body.capacity.total) {
      req.body.capacity.available = req.body.capacity.total;
    }

    const pg = await PG.create(req.body);

    res.status(201).json({
      success: true,
      message: "PG created successfully",
      data: pg,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update PG
// @route   PUT /api/pgs/:id
// @access  Private (Owner/Admin)
export const updatePG = async (req, res, next) => {
  try {
    let pg = await PG.findById(req.params.id);

    if (!pg) {
      return res.status(404).json({
        success: false,
        message: "PG not found",
      });
    }

    // Check ownership
    if (pg.owner.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this PG",
      });
    }

    pg = await PG.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: "PG updated successfully",
      data: pg,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete PG
// @route   DELETE /api/pgs/:id
// @access  Private (Owner/Admin)
export const deletePG = async (req, res, next) => {
  try {
    const pg = await PG.findById(req.params.id);

    if (!pg) {
      return res.status(404).json({
        success: false,
        message: "PG not found",
      });
    }

    // Check ownership
    if (pg.owner.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this PG",
      });
    }

    await pg.deleteOne();

    res.status(200).json({
      success: true,
      message: "PG deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get PGs by owner
// @route   GET /api/pgs/owner/me
// @access  Private
export const getMyPGs = async (req, res, next) => {
  try {
    const pgs = await PG.find({ owner: req.user.id });

    res.status(200).json({
      success: true,
      count: pgs.length,
      data: pgs,
    });
  } catch (error) {
    next(error);
  }
};
