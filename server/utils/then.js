export const then = async (res, result) => {
  return await res.status(200).json(result.rows);
};

export const thenWithMessage = async (res, message) => {
  return await res.status(200).send(message);
};
