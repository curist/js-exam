// eslint-disable
// this is an auto generated file. This will be overwritten

export const createTask = `mutation CreateTask($input: CreateTaskInput!) {
  createTask(input: $input) {
    id
    title
    description
    status
  }
}
`;
export const updateTask = `mutation UpdateTask($input: UpdateTaskInput!) {
  updateTask(input: $input) {
    id
    title
    description
    status
  }
}
`;
export const deleteTask = `mutation DeleteTask($input: DeleteTaskInput!) {
  deleteTask(input: $input) {
    id
    title
    description
    status
  }
}
`;
export const createPrivateNote = `mutation CreatePrivateNote($input: CreatePrivateNoteInput!) {
  createPrivateNote(input: $input) {
    id
    content
  }
}
`;
export const updatePrivateNote = `mutation UpdatePrivateNote($input: UpdatePrivateNoteInput!) {
  updatePrivateNote(input: $input) {
    id
    content
  }
}
`;
export const deletePrivateNote = `mutation DeletePrivateNote($input: DeletePrivateNoteInput!) {
  deletePrivateNote(input: $input) {
    id
    content
  }
}
`;
export const createCandidate = `mutation CreateCandidate($input: CreateCandidateInput!) {
  createCandidate(input: $input) {
    id
    name
    email
  }
}
`;
export const updateCandidate = `mutation UpdateCandidate($input: UpdateCandidateInput!) {
  updateCandidate(input: $input) {
    id
    name
    email
  }
}
`;
export const deleteCandidate = `mutation DeleteCandidate($input: DeleteCandidateInput!) {
  deleteCandidate(input: $input) {
    id
    name
    email
  }
}
`;
export const createQuestion = `mutation CreateQuestion($input: CreateQuestionInput!) {
  createQuestion(input: $input) {
    id
    title
    codeBlock
    testCases {
      items {
        id
        title
        body
      }
      nextToken
    }
  }
}
`;
export const updateQuestion = `mutation UpdateQuestion($input: UpdateQuestionInput!) {
  updateQuestion(input: $input) {
    id
    title
    codeBlock
    testCases {
      items {
        id
        title
        body
      }
      nextToken
    }
  }
}
`;
export const deleteQuestion = `mutation DeleteQuestion($input: DeleteQuestionInput!) {
  deleteQuestion(input: $input) {
    id
    title
    codeBlock
    testCases {
      items {
        id
        title
        body
      }
      nextToken
    }
  }
}
`;
export const createTestCase = `mutation CreateTestCase($input: CreateTestCaseInput!) {
  createTestCase(input: $input) {
    id
    title
    body
    question {
      id
      title
      codeBlock
    }
  }
}
`;
export const updateTestCase = `mutation UpdateTestCase($input: UpdateTestCaseInput!) {
  updateTestCase(input: $input) {
    id
    title
    body
    question {
      id
      title
      codeBlock
    }
  }
}
`;
export const deleteTestCase = `mutation DeleteTestCase($input: DeleteTestCaseInput!) {
  deleteTestCase(input: $input) {
    id
    title
    body
    question {
      id
      title
      codeBlock
    }
  }
}
`;
