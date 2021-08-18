const Languages = {
    WORDS_OF_AFFIRMATION: 'Words of Affirmation',
    QUALITY_TIME: 'Quality Time',
    RECEIVING_GIFTS: 'Receiving Gifts',
    ACTS_OF_SERVICE: 'Acts of Service',
    PHYSICAL_TOUCH: 'Physical Touch'
};

// Placeholder Questions from Respository / Love Languages Quiz
const Questions = [
    [
        {
          text: `I'm around someone I love, even if we're not really doing anything.`,
          language: Languages.QUALITY_TIME
        },
        {
          text: `I can be comfortable holding hands, high-fiving, or putting my arm around someone I love.`,
          language: Languages.PHYSICAL_TOUCH
        },
      ],
      [
        {
          text: `I receive a gift from someone I love.`,
          language: Languages.RECEIVING_GIFTS
        },
        {
          text: `I hear from someone I love that they love me.`,
          language: Languages.WORDS_OF_AFFIRMATION
        },
      ],
      [
        {
          text: `someone I love gives me a little gift as a token of our love of concern for each other.`,
          language: Languages.RECEIVING_GIFTS,
        },
        {
          text: `I get to spend uninterrupted leisure time with those I love.`,
          language: Languages.QUALITY_TIME,
        },
      ]
];

export { Languages, Questions };