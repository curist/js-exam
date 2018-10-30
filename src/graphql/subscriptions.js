// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateTask = `subscription OnCreateTask {
  onCreateTask {
    id
    title
    description
    status
  }
}
`;
export const onUpdateTask = `subscription OnUpdateTask {
  onUpdateTask {
    id
    title
    description
    status
  }
}
`;
export const onDeleteTask = `subscription OnDeleteTask {
  onDeleteTask {
    id
    title
    description
    status
  }
}
`;
export const onCreatePrivateNote = `subscription OnCreatePrivateNote {
  onCreatePrivateNote {
    id
    content
  }
}
`;
export const onUpdatePrivateNote = `subscription OnUpdatePrivateNote {
  onUpdatePrivateNote {
    id
    content
  }
}
`;
export const onDeletePrivateNote = `subscription OnDeletePrivateNote {
  onDeletePrivateNote {
    id
    content
  }
}
`;
export const onCreateCandidate = `subscription OnCreateCandidate {
  onCreateCandidate {
    id
    name
    email
  }
}
`;
export const onUpdateCandidate = `subscription OnUpdateCandidate {
  onUpdateCandidate {
    id
    name
    email
  }
}
`;
export const onDeleteCandidate = `subscription OnDeleteCandidate {
  onDeleteCandidate {
    id
    name
    email
  }
}
`;
export const onCreateQuestion = `subscription OnCreateQuestion {
  onCreateQuestion {
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
export const onUpdateQuestion = `subscription OnUpdateQuestion {
  onUpdateQuestion {
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
export const onDeleteQuestion = `subscription OnDeleteQuestion {
  onDeleteQuestion {
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
export const onCreateTestCase = `subscription OnCreateTestCase {
  onCreateTestCase {
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
export const onUpdateTestCase = `subscription OnUpdateTestCase {
  onUpdateTestCase {
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
export const onDeleteTestCase = `subscription OnDeleteTestCase {
  onDeleteTestCase {
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
