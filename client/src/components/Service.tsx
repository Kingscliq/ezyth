import React, { JSXElementConstructor } from 'react';
import { FaBalanceScale } from 'react-icons/fa';
import { BsShieldFillCheck } from 'react-icons/bs';
import { SiStarlingbank } from 'react-icons/si';

const Service: React.FC<{}> = () => {
  const ServiceCard: React.FC<{
    icon: JSX.Element;
    title: string;
    description: string;
  }> = ({ icon, title, description }) => {
    return (
      <section className="w-full p-6 border border-gray-200  mb-4 rounded-lg bg-transparent text-white flex items-center">
        <figure className="rounded-full p-6 border-white border w-12 h-12 flex items-center text-xl text-[#f8ba3c] justify-center self-start">
          <div>{icon}</div>
        </figure>

        <aside className="ml-3">
          <h3 className="text-xl font-bold  text-[#2546bd]">
            {title || 'Security Guaranteed'}
          </h3>
          <p className="text-slate-200">
            {description ||
              'Security is Guaranteed. we always maintain our privacy and Policy '}
          </p>
        </aside>
      </section>
    );
  };
  return (
    <section className="w-full py-16 md:px-60 px-4">
      <div>
        <h2 className="text-3xl text-white font-bold">Our Services</h2>
      </div>
      <div className="py-8">
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          aliquid temporibus eveniet aperiam officia culpa voluptatibus odio,
          officiis hic quae. Omnis nobis delectus, dignissimos modi blanditiis
          perferendis eaque. Quo, id.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="uppercase text-blue-800 font-medium hover:underline hover:text-blue-700 transition-all cursor-pointer duration-500 ease-linear">
          Lets Get Started
        </h4>
      </div>

      <div className="">
        <ServiceCard
          title="Security Guaranteed"
          icon={<BsShieldFillCheck />}
          description="Security is Guaranteed. we always maintain our privacy and Policy"
        />
        <ServiceCard
          title="On-Chain Governance"
          description="Providing unparalleled blockchain security with industry-leading user protections that eliminate more than 95% of on-network crime."
          icon={<SiStarlingbank />}
        />
        <ServiceCard
          title="A Self-Funding Treasury"
          icon={<FaBalanceScale />}
          description="Energi was bootstrapped with no ICO or pre-mine, and it has no dependence on any external funding or outside influence."
        />
      </div>
    </section>
  );
};

export default Service;
