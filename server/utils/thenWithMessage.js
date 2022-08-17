export const thenWithMessage = async (res, message) => {
  return await res.status(200).send(message);
};
