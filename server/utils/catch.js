export const caught = (res, err) => {
  return res.status(400).json(err);
};
