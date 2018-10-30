// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTask = `query GetTask($id: ID!) {
  getTask(id: $id) {
    id
    title
    description
    status
  }
}
`;
export const listTasks = `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      status
    }
    nextToken
  }
}
`;
export const getPrivateNote = `query GetPrivateNote($id: ID!) {
  getPrivateNote(id: $id) {
    id
    content
    unixtime
  }
}
`;
export const listPrivateNotes = `query ListPrivateNotes(
  $filter: ModelPrivateNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      unixtime
    }
    nextToken
  }
}
`;
export const getCandidate = `query GetCandidate($id: ID!) {
  getCandidate(id: $id) {
    id
    name
    email
  }
}
`;
export const listCandidates = `query ListCandidates(
  $filter: ModelCandidateFilterInput
  $limit: Int
  $nextToken: String
) {
  listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
    }
    nextToken
  }
}
`;
export const getQuestion = `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
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
export const listQuestions = `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTestCase = `query GetTestCase($id: ID!) {
  getTestCase(id: $id) {
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
export const listTestCases = `query ListTestCases(
  $filter: ModelTestCaseFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestCases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      body
      question {
        id
        title
        codeBlock
      }
    }
    nextToken
  }
}
`;
