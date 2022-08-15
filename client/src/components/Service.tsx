import React, { JSXElementConstructor } from 'react';
import { FaBalanceScale } from 'react-icons/fa';
import { BsShieldFillCheck } from 'react-icons/bs';
import { SiStarlingbank } from 'react-icons/si';

const Service: React.FC<{}> = () => {
  const services = [
    {
      id: 1,
      icon: <BsShieldFillCheck />,
      title: 'Security Guaranteed',
      description:
        'Security is Guaranteed. we always maintain our privacy and Policy',
    },
    {
      id: 2,
      icon: <SiStarlingbank />,
      title: 'On-Chain Governance',
      description:
        'Providing unparalleled blockchain security with industry-leading user protections that eliminate more than 95% of on-network crime.',
    },
    {
      id: 3,
      icon: <FaBalanceScale />,
      title: 'A Self-Funding Treasury',
      description:
        'EthKings is bootstrapped with no ICO or pre-mine, and it has no dependence on any external funding or outside influence.',
    },
  ];
  const ServiceCard: React.FC<{
    icon: JSX.Element;
    title: string;
    description: string;
  }> = ({ icon, title, description }) => {
    return (
      <section
        className="w-auto p-2 lg:p-6 first-letter:mb-4 rounded-lg bg-transparent text-white flex flex-col items-center justify-center"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <figure className="rounded-full p-6 mb-6 border-gray-400 border w-12 h-12 flex items-center text-xl text-primary justify-center ">
          <div>{icon}</div>
        </figure>

        <aside className="ml-3">
          <h3 className="text-xl font-bold text-white text-center">
            {title || 'Security Guaranteed'}
          </h3>
          <p className="text-gray-400 text-[0.875rem] my-6 leading-[2.0] text-center">
            {description ||
              'Security is Guaranteed. we always maintain our privacy and Policy'}
          </p>
        </aside>
      </section>
    );
  };

  return (
    <section className="w-full py-16 md:px-20 px-4">
      <div className="mb-16">
        <h2
          className="text-3xl lg:text-[2.25rem] text-white font-medium text-center leading-[1.5]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          We take Care of our Quality
        </h2>
        <p
          className="mt-2 text-gray-400 text-[0.875rem] leading-[2.0] text-center"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {services.map(service => (
          <ServiceCard
            key={service.id}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
