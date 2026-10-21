import createHttpError from 'http-errors';
import { User } from '../models/user.js'; 
import { Story } from '../models/story.js'; 

export const getTravellerProfile = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 6;
    const skip = (page - 1) * limit;

    const traveller = await User.findById(id); 
    if (!traveller) {
      throw createHttpError(404, 'Traveller not found');
    }

    const totalStories = await Story.countDocuments({ ownerId: id });

    const stories = await Story.find({ ownerId: id })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 }); 

    res.status(200).json({
      status: 200,
      message: 'Successfully found traveller profile and stories',
      data: {
        traveller,
        stories,
        page,
        perPage: limit,
        totalItems: totalStories,
        hasNextPage: skip + stories.length < totalStories, 
      },
    });
  } catch (error) {
    next(error);
  }
};