import { expect, test } from 'vitest'
import { Answer } from '../../enterprise/entities/answer'
import { AnswerRepository } from '../repositories/answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => {},
}

test('create an answer', async () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestionUseCase.execute({
    instructorId: 'instructor-id',
    questionId: 'question-id',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta')
})
