const FaqCards = () => {
  const questionAnswerList = [
    {
      question: "What is this platform used for?",
      answer:
        "This platform allows you to convert written text into realistic, natural-sounding speech using advanced AI voice technology.",
    },
    {
      question: "Is the generated voice natural and human-like?",
      answer:
        "Yes! We use cutting-edge AI models that produce lifelike speech, making it almost indistinguishable from a real human voice.",
    },
    {
      question: "Do I need to install any software?",
      answer:
        "No installation needed. Our application runs entirely in your browser — just type, click, and listen.",
    },
    {
      question: "What makes this platform different from others?",
      answer:
        "We focus on quality, speed, and ease of use. Our AI voices are crafted to be expressive and human-like, and our intuitive interface makes text-to-speech fast and fun.",
    },
    {
      question: "Can I choose between different voices or genders?",
      answer:
        "Yes! You can choose from a range of male and female voices, including different tones and speaking styles.",
    },
    {
      question: "Is there a limit on how much text I can convert?",
      answer:
        "Free users have a daily character limit. Upgrading to a premium plan increases your limits and unlocks more voices and features.",
    },
    {
      question: "What languages and accents are supported?",
      answer:
        "We support multiple languages and regional accents, including English (US, UK, Indian), Spanish, French, and more. We're constantly expanding our voice library.",
    },
    {
      question: "Can I download the generated audio?",
      answer:
        "Absolutely! Once the audio is generated, you'll have the option to preview and download it as an MP3 file.",
    },
    {
      question: "Can I use these voices for commercial projects?",
      answer:
        "Yes! You can use these voices for commercial projects. We have a free plan that allows you to generate 1000 characters per month. If you need more than that, you can upgrade to a paid plan.",
    },
    // {
    //   question: "How do I create an account?",
    //   answer:
    //     "Click the 'Sign Up button' in the top right corner and follow the registration process.",
    // },
    // {
    //   question: "I forgot my password. What should I do?",
    //   answer:
    //     "Click on 'Forgot Password' on the login page and follow the instructions sent to your email.",
    // },
    // {
    //   question: "How do I update my profile information?",
    //   answer:
    //     "Go to 'My Account' settings and select 'Edit Profile' to make changes.",
    // },
  ];

  return (
    <div className="pt-5 w-full justify-center pl-[10%] pr-[10%]">
      {questionAnswerList.map(({ question, answer }, index) => (
        <div
          className="collapse collapse-plus bg-base-100 border border-base-300 mb-1"
          key={index}
        >
          <input
            type="radio"
            name="my-accordion-3"
            defaultChecked={index === 0}
          />
          <div className="collapse-title font-semibold">{question}</div>
          <div className="collapse-content text-sm">{answer}</div>
        </div>
      ))}
    </div>
  );
};

export default FaqCards;
