import {
  deleteServices,
  getServices,
  postServices,
  putServices,
} from "../services/questionsServices.js";

export const postControllers = async (req, res) => {
  const { lesson_id, image, question } = req.body;
  const params = [lesson_id, image, question];
  req.body.answers.map((a) => {
    const { answer, is_correct } = a;
    params.push(answer);
    params.push(is_correct);
  });

  await postServices(res, params);
};

export const getControllers = async (req, res) => {
  const lessonId = req.params.id;
  const query = `SELECT questions.id, image, question FROM questions WHERE exam_id = $1`;
  await getServices(res, query, lessonId);
};

export const putControllers = async (req, res) => {
  let { lesson_id, image, question, id } = req.body;
  let param = [lesson_id, question, image, id];
  const params = [];
  req.body.answers.map((a, index) => {
    const { answer, is_correct, id } = a;
    params[index] = [answer, is_correct, id];
  });
  await putServices(req, res);
};

export const deleteControllers = async (req, res) => {
  await deleteServices(req, res);
};
