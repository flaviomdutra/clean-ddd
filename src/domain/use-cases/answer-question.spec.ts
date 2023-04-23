import { Answer } from "../entities/answer";
import { AnswerRepository } from "../repositories/answers-repository";
import { AnswerQuestionUseCase } from "./answer-question";
import { expect, test } from "vitest";

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    return;
  },
};

test("create an answer", async () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase(fakeAnswerRepository);

  const answer = await answerQuestionUseCase.execute({
    instructorId: "instructor-id",
    questionId: "question-id",
    content: "Nova resposta",
  });

  expect(answer.content).toEqual("Nova resposta");
});
