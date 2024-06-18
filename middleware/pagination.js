exports.paginateResults = (model) => {
  return async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await model.countDocuments().exec();
    const results = await model.find().skip(skip).limit(limit).exec();

    res.paginatedResults = {
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      data: results,
    };
    next();
  };
};
