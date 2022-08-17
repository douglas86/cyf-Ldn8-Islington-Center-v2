export const then = async (res, result) => {
  return await res.status(200).json(result.rows);
};
