export const then = (res, result) => {
  return res.status(200).json(result.rows);
};
