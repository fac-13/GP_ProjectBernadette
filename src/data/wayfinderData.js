const wayfinder = {
  start: {
    question: 'Are you a grandparent?',
    options: [
      { answer: 'yes', goto: 'live-with' },
      { answer: 'no', goto: 'close-fam' }
    ]
  },
  'live-with': {
    question: 'Does a grandchild live with you?',
    options: [
      { answer: 'yes', goto: 'kc-rights' },
      { answer: 'no', goto: 'lost-contact' }
    ]
  },
  'kc-rights': {
    question: 'Do you need help understanding your rights as a kinship carer?',
    options: [
      { answer: 'yes', goto: 'need-advice' },
      { answer: 'no', goto: 'info-kc' }
    ]
  },
  'need-advice': {
    question:
      'If you need advice, our team can help. Please answer a few questions to help us understand your situation. Continue?',
    options: [
      { answer: 'continue', goto: 'legal-order' }
    ]
  },
  'close-fam': {
    question: 'Are you a close family member looking after someone else\'s child?',
    options: [
      { answer: 'yes', goto: 'kc-rights' },
      { answer: 'no', goto: 'info-gen' }
    ]
  },
  'lost-contact': {
    question: 'Have you lost contact with your grandchild?',
    options: [
      { answer: 'yes', goto: 'info-lost-contact' },
      { answer: 'no', goto: 'info-gen' }
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
    question: 'Do you already have a legal order?',
    options: [
      { answer: 'yes', goto: 'order-type' },
      { answer: 'no/no idea', goto: 'social-services' }
    ]
  },

  'order-type': {
    question: 'Do you know which type of legal order you have?',
    options: [
      { answer: 'yes', goto: 'select-type' },
      { answer: 'no', goto: 'complete-form' },
    ]
  },

  'select-type': {
    question: 'Please select the type of legal order below',
    options: [
      { answer: 'Special Guardianship Order (SGO)', goto: 'complete-form' },
      { answer: 'Child Arrangement Order (CAO)', goto: 'complete-form' },
    ]
  },

  'complete-form': {
    result: 'Please complete the form below to be contacted in 3 days',
    leaf: true
  },

  'social-services': {
    question: 'did social services ask you to provide care for the child?',
    options: [
      { answer: 'yes', goto: 'foster-carer' },
      { answer: 'no', goto: 'informal-arrangement' }
    ]
  },
  'foster-carer': {
    question: 'Are you a kinship foster carer?',
    options: [
      { answer: 'yes', goto: 'complete-form' },
      { answer: 'no/no idea', goto: 'complete-form' }
    ]
  },
  'informal-arrangement': {
    question: 'Did you make an informal arrangement to look after the child?',
    options: [
      { answer: 'yes', goto: 'complete-form' },
      { answer: 'no/no idea', goto: 'complete-form' }
    ]
  }

};

export default wayfinder;
