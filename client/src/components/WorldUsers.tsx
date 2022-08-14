import React from 'react';

const WorldUsers: React.FC<{}> = () => {
  return (
    <section className="bg-[url('src/assets/images/map-world.svg')] bg-right bg-no-repeat text-white w-full bg-opacity-10 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-20 py-16">
        <div className="items-start">
          <h2 className="text-3xl lg:text-[2.25rem] font-medium text-center lg:text-left lg:w-[60%] leading-[1.5]">
            Our Best Users are all over the world with Wide Coverage
          </h2>
          <p className="mt-4 text-gray-400 text-[0.875rem] leading-[2.0]">
            Our Platform Reaches people all over the world, hereby we are
            trusted as the best platform for crypto exchange and transfers
          </p>
          <aside className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div>
              <h3 className="text-4xl">20M+</h3>
              <p className="text-gray-400 text-[0.875rem] my-6 leading-[2.0]">
                People who have joined EthK
              </p>
            </div>
            <div>
              <h3 className="text-4xl">100+</h3>
              <p className="text-gray-400 text-[0.875rem] my-6 leading-[2.0]">
                Famous People playing EthK
              </p>
            </div>
            <div>
              <h3 className="text-4xl">50</h3>
              <p className="text-gray-400 text-[0.875rem] my-6 leading-[2.0]">
                Corporation with big companies
              </p>
            </div>
          </aside>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default WorldUsers;
