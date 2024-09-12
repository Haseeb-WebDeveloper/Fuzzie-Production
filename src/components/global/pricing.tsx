import React from 'react'

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic Plan",
    price: "$9.99",
    description: "Perfect for individuals getting started with AI automation.",
    features: [
      "1 free automation",
      "50 tasks per month",
      "Single step actions"
    ]
  },
  {
    name: "Pro Plan",
    price: "$24.99",
    description: "Ideal for small teams and growing businesses.",
    features: [
      "3 free automations",
      "100 tasks per month",
      "Two-step actions"
    ]
  },
  {
    name: "Enterprise Plan",
    price: "$99.99",
    description: "Advanced features for large-scale operations.",
    features: [
      "Unlimited automations",
      "Unlimited tasks",
      "Multi-step actions"
    ]
  }
];

const PricingContent: React.FC = () => {
  return (
    <>
    <div className='w-full h-full '>
      <h1 className="capitalize max-w-xl mx-auto text-white text-3xl font-twk font-medium text-center">Plans that will fit you Best</h1>
      <div className="flex flex-col md:flex-row gap-y-4 gap-x-3 mt-8 ">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="bg-neutral-900 p-5 rounded-lg shadow-lg max-w-sm font-twk flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-normal text-white mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-white mb-2">{plan.price}<span className="text-sm font-normal">/month</span></p>
                <p className="text-neutral-400 mb-6 leading-tight ">{plan.description}</p>
                <ul className="text-neutral-300 mb-6">
                {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center mb-2">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                    </li>
                ))}
                </ul>
            </div>
            <div className='flex items-center justify-between'>
                <button className="w-full bg-[#141414] border rounded-md py-2 px-4 hover:bg-[#212121] transition duration-300">
                Get Started Now
                </button>
                </div>
          </div>
        ))}
      </div>
    </div>
      
    </>
  )
}

export default PricingContent