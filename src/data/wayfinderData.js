const wayfinder = {
  start: {
    question: 'Are you a grandparent?',
    answer: [
      { label: 'yes', goto: 'live-with' },
      { label: 'no', goto: 'close-fam' }
    ]
  },
  'live-with': {
    question: 'Does a grandchild live with you?',
    answer: [
      { label: 'yes', goto: 'kc-rights' },
      { label: 'no', goto: 'lost-contact' }
    ]
  },
  'kc-rights': {
    question: 'Do you need help understanding your rights as a kinship carer?',
    answer: [
      { label: 'yes', goto: 'need-advice' },
      { label: 'no', goto: 'info-kc' }
    ]
  },
  'need-advice': {
    question:
      'Answer a few questions to help us understand your situation. Continue?',
    answer: [
      { label: 'yes', goto: 'legal-order' },
      { label: 'no', goto: 'info-kc' }
    ]
  },
  'close-fam': {
    question:
      'Are you a close family member looking after someone elses child?',
    answer: [
      { label: 'yes', goto: 'kc-rights' },
      { label: 'no', goto: 'info-gen' }
    ]
  },
  'lost-contact': {
    question: 'Have you lost contact with your grandchild?',
    answer: [
      { label: 'yes', goto: 'info-lost-contact' },
      { label: 'no', goto: 'info-gen' }
    ]
  },
  'info-gen': {
    result: 'general info',
    leaf: true
  },
  'info-lost-contact': {
    result: 'lost contact info',
    leaf: true
  },
  'info-kc': {
    result: 'kinship carer info',
    leaf: true
  },
  'legal-order': {
    question: 'What kind of legal order do you have?',
    answer: [
      { label: 'a', goto: 'type-a' },
      { label: 'b', goto: 'type-b' },
      { label: 'c', goto: 'type-c' }
    ]
  },
  'type-a': {
    result: 'type a legal order info',
    leaf: true
  },
  'type-b': {
    result: 'type a legal order info',
    leaf: true
  },
  'type-c': {
    result: 'type c legal order info',
    leaf: true
  }
};

export default wayfinder;
